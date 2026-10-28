import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Тіркелу</Text>
      <Text style={styles.subtitle}>Жаңа аккаунт ашу үшін мәліметтерді толтырыңыз</Text>

      <TextInput
        style={styles.input}
        placeholder="Толық аты-жөні"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
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

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation?.navigate('SelectCityScreen')}
      >
        <Text style={styles.buttonText}>Жалғастыру</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation?.navigate('LoginScreen')}>
        <Text style={styles.linkText}>Аккаунтыңыз бар ма? <Text style={styles.boldText}>Кіру</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 32 },
  input: { backgroundColor: '#F5F8FA', padding: 16, borderRadius: 12, marginBottom: 16, fontSize: 16 },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 24, marginTop: 8 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  linkText: { textAlign: 'center', color: '#7E8299', fontSize: 14 },
  boldText: { color: '#FF6B00', fontWeight: 'bold' },
});