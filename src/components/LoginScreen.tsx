import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Жүйеге кіру</Text>
      <Text style={styles.subtitle}>Жалғастыру үшін деректеріңізді енгізіңіз</Text>

      <TextInput
        style={styles.input}
        placeholder="Email немесе телефон"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөз"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation?.navigate('ForgetPassword')}>
        <Text style={styles.forgotText}>Құпия сөзді ұмыттыңыз ба?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Кіру</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation?.navigate('RegisterScreen')}>
        <Text style={styles.linkText}>Тіркелген жоқсыз ба? <Text style={styles.boldText}>Тіркелу</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 32 },
  input: { backgroundColor: '#F5F8FA', padding: 16, borderRadius: 12, marginBottom: 16, fontSize: 16 },
  forgotText: { color: '#FF6B00', textAlign: 'right', marginBottom: 24, fontWeight: '600' },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 24 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  linkText: { textAlign: 'center', color: '#7E8299', fontSize: 14 },
  boldText: { color: '#FF6B00', fontWeight: 'bold' },
});