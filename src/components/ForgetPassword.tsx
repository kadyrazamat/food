import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const ForgetPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Құпия сөзді қалпына келтіру</Text>
      <Text style={styles.subtitle}>Email мекенжайыңызды енгізіңіз. Біз сізге растау кодын жібереміз.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation?.navigate('OTPScreen')}
      >
        <Text style={styles.buttonText}>Кодты жіберу</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 32, lineHeight: 20 },
  input: { backgroundColor: '#F5F8FA', padding: 16, borderRadius: 12, marginBottom: 24, fontSize: 16 },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});