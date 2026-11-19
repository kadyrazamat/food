import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let LocationModule: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  LocationModule = require('expo-location');
} catch {
  LocationModule = null;
}

let WebViewComponent: React.ComponentType<any> | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  WebViewComponent = require('react-native-webview').WebView || null;
} catch {
  WebViewComponent = null;
}

const DG_API_KEY = process.env.EXPO_PUBLIC_2GIS_API_KEY || 'YOUR_2GIS_API_KEY';

const DEFAULT_COORDS = {
  lat: 43.238949,
  lon: 76.889709,
};

export default function MapScreen({ navigation }: { navigation?: any }) {
  const webViewRef = useRef<any>(null);

  const [coords, setCoords] = useState(DEFAULT_COORDS);
  const [loading, setLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  const requestUserLocation = async () => {
    try {
      setMapError(null);
      if (!LocationModule?.requestForegroundPermissionsAsync) {
        setMapError('Модуль expo-location орнатылмаған. Бастапқы нүкте (Алматы) көрсетілді.');
        return;
      }

      const { status } = await LocationModule.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setMapError('Геолокация рұқсаты берілмеді. Бастапқы нүкте (Алматы) көрсетілді.');
        return;
      }

      const current = await LocationModule.getCurrentPositionAsync({
        accuracy: LocationModule.Accuracy?.Balanced ?? 3,
      });

      const nextCoords = {
        lat: current.coords.latitude,
        lon: current.coords.longitude,
      };
      setCoords(nextCoords);

      webViewRef.current?.injectJavaScript(
        `window.setMapCenter && window.setMapCenter(${nextCoords.lat}, ${nextCoords.lon}); true;`
      );
    } catch (e: any) {
      setMapError(e?.message || 'Координатты алу мүмкін болмады.');
    }
  };

  useEffect(() => {
    requestUserLocation();
  }, []);

  const handleZoomIn = () => {
    webViewRef.current?.injectJavaScript(
      `window.zoomMap && window.zoomMap(1); true;`
    );
  };

  const handleZoomOut = () => {
    webViewRef.current?.injectJavaScript(
      `window.zoomMap && window.zoomMap(-1); true;`
    );
  };

  const hasValid2GisKey =
    Boolean(DG_API_KEY) && DG_API_KEY !== 'YOUR_2GIS_API_KEY';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <style>
          html, body, #map {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: #F4EFE6;
            overflow: hidden;
          }
          .fallback-banner {
            position: fixed;
            bottom: 16px;
            left: 16px;
            right: 16px;
            background: rgba(24, 28, 46, 0.85);
            color: #fff;
            font-family: sans-serif;
            font-size: 12px;
            padding: 8px 12px;
            border-radius: 10px;
            z-index: 9999;
          }
        </style>
        ${
          hasValid2GisKey
            ? '<script src="https://mapgl.2gis.com/api/js/v1"></script>'
            : '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>'
        }
      </head>
      <body>
        <div id="map"></div>
        ${
          !hasValid2GisKey
            ? '<div class="fallback-banner">2GIS API кілті көрсетілмеген — уақытша ашық карта көрсетілуде.</div>'
            : ''
        }
        <script>
          const initialLat = ${coords.lat};
          const initialLon = ${coords.lon};

          ${
            hasValid2GisKey
              ? `
                let map;
                let marker;
                try {
                  map = new mapgl.Map('map', {
                    center: [initialLon, initialLat],
                    zoom: 15,
                    key: '${DG_API_KEY}',
                  });

                  marker = new mapgl.Marker(map, {
                    coordinates: [initialLon, initialLat],
                  });

                  map.on('click', (e) => {
                    const [lng, lat] = e.lngLat;
                    if (marker) {
                      marker.setCoordinates([lng, lat]);
                    }
                    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(
                      JSON.stringify({ type: 'SELECT_LOCATION', lat, lon: lng })
                    );
                  });

                  window.setMapCenter = (lat, lon) => {
                    map.setCenter([lon, lat]);
                    if (marker) marker.setCoordinates([lon, lat]);
                  };

                  window.zoomMap = (delta) => {
                    map.setZoom(map.getZoom() + delta);
                  };
                } catch (err) {
                  window.ReactNativeWebView && window.ReactNativeWebView.postMessage(
                    JSON.stringify({ type: 'MAP_ERROR', message: err.message || '2GIS MapGL error' })
                  );
                }
              `
              : `
                let leafletMap;
                let leafletMarker;
                try {
                  leafletMap = L.map('map', { zoomControl: false }).setView([initialLat, initialLon], 15);
                  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; OpenStreetMap'
                  }).addTo(leafletMap);

                  leafletMarker = L.marker([initialLat, initialLon]).addTo(leafletMap);

                  leafletMap.on('click', (e) => {
                    const { lat, lng } = e.latlng;
                    leafletMarker.setLatLng([lat, lng]);
                    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(
                      JSON.stringify({ type: 'SELECT_LOCATION', lat, lon: lng })
                    );
                  });

                  window.setMapCenter = (lat, lon) => {
                    leafletMap.setView([lat, lon], 15);
                    leafletMarker.setLatLng([lat, lon]);
                  };

                  window.zoomMap = (delta) => {
                    leafletMap.setZoom(leafletMap.getZoom() + delta);
                  };
                } catch (err) {
                  window.ReactNativeWebView && window.ReactNativeWebView.postMessage(
                    JSON.stringify({ type: 'MAP_ERROR', message: err.message || 'Leaflet error' })
                  );
                }
              `
          }
        </script>
      </body>
    </html>
  `;

  const handleWebViewMessage = (event: any) => {
    try {
      const payload = JSON.parse(event?.nativeEvent?.data || '{}');
      if (payload?.type === 'SELECT_LOCATION') {
        setCoords({ lat: payload.lat, lon: payload.lon });
      } else if (payload?.type === 'MAP_ERROR') {
        setMapError(payload.message);
      }
    } catch {
      // Игнорируем некорректные сообщения
    }
  };

  const ActiveWebView = WebViewComponent;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Жеткізу орнын таңдаңыз (2GIS)</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.mapWrapper}>
        {ActiveWebView ? (
          <ActiveWebView
            ref={webViewRef}
            source={{ html: htmlContent }}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            originWhitelist={['*']}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onMessage={handleWebViewMessage}
            onError={(syntheticEvent: any) => {
              setLoading(false);
              setMapError(syntheticEvent?.nativeEvent?.description || 'Картаны жүктеу қатесі.');
            }}
            onHttpError={(syntheticEvent: any) => {
              setMapError(`HTTP қате: ${syntheticEvent?.nativeEvent?.statusCode}`);
            }}
          />
        ) : (
          <View style={styles.loaderOverlay}>
            <Text style={styles.errorText}>
              react-native-webview орнатылмаған. Команданы орындаңыз: npx expo install react-native-webview
            </Text>
          </View>
        )}

        {loading && ActiveWebView && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="large" color="#FF7622" />
          </View>
        )}

        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.controlBtn} onPress={handleZoomIn}>
            <Ionicons name="add" size={22} color="#181C2E" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn} onPress={handleZoomOut}>
            <Ionicons name="remove" size={22} color="#181C2E" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.locateBtn} onPress={requestUserLocation}>
          <Ionicons name="locate" size={22} color="#181C2E" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => navigation?.navigate('SettingsScreen')}
        >
          <Ionicons name="settings-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        {mapError && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{mapError}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181C2E',
  },
  mapWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F4EFE6',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 239, 230, 0.45)',
    padding: 16,
  },
  zoomControls: {
    position: 'absolute',
    top: 16,
    left: 16,
    gap: 8,
  },
  controlBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  locateBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  settingsBtn: {
    position: 'absolute',
    top: 180,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
  errorBanner: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#FFEAEA',
    borderColor: '#E53935',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  errorText: {
    color: '#B71C1C',
    fontSize: 12,
    fontWeight: '500',
  },
});