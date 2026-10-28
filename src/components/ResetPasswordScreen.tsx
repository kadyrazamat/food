import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const ResetPasswordScreen = ({ navigation }: any) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Жаңа құпия сөз</Text>
      <Text style={styles.subtitle}>Жаңа құпия сөзді ойлап табыңыз және оны растаңыз</Text>

      <TextInput
        style={styles.input}
        placeholder="Жаңа құпия сөз"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөзді қайталаңыз"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation?.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>Сақтау</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 32 },
  input: { backgroundColor: '#F5F8FA', padding: 16, borderRadius: 12, marginBottom: 16, fontSize: 16 },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});