import { Platform } from 'react-native';

const SERVER_IP = '172.20.10.2';
const SERVER_PORT = '3000';

export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ||
  (Platform.OS === 'android'
    ? `http://${SERVER_IP}:${SERVER_PORT}`
    : `http://${SERVER_IP}:${SERVER_PORT}`);

interface ApiOptions extends RequestInit {
  token?: string;
  timeoutMs?: number;
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { token, timeoutMs = 8000, headers, ...rest } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const fullUrl = `${API_BASE_URL}${normalizedEndpoint}`;

  try {
    const response = await fetch(fullUrl, {
      ...rest,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || `Сервер қатесі: ${response.status}`);
    }

    return data as T;
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      throw new Error('Сервер жауап бермеді (уақыт бітті). IP мен портты тексеріңіз.');
    }
    throw new Error(error?.message || 'Желіге қосылу мүмкін болмады.');
  } finally {
    clearTimeout(timer);
  }
}