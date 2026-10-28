import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const OTPScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Растау коды</Text>
      <Text style={styles.subtitle}>Поштаңызға немесе нөміріңізге жіберілген 4 таңбалы кодты енгізіңіз</Text>

      <TextInput
        style={styles.otpInput}
        placeholder="0000"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={4}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation?.navigate('ResetPasswordScreen')}
      >
        <Text style={styles.buttonText}>Растау</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 32 },
  otpInput: { backgroundColor: '#F5F8FA', padding: 16, borderRadius: 12, marginBottom: 24, fontSize: 24, textAlign: 'center', letterSpacing: 12 },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});