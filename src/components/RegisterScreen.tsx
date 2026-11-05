import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тіркелу</Text>
      <Text style={styles.sub}>Жаңа аккаунт ашу</Text>
      <TextInput style={styles.input} placeholder="Аты-жөніңіз" placeholderTextColor="#A0A5BA" />
      <TextInput style={styles.input} placeholder="Электронды пошта" placeholderTextColor="#A0A5BA" />
      <TextInput style={styles.input} placeholder="Құпия сөз" secureTextEntry placeholderTextColor="#A0A5BA" />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OTPScreen')}>
        <Text style={styles.btnText}>ТІРКЕЛУ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E24', padding: 24, justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' },
  sub: { fontSize: 16, color: '#AEAEB2', marginTop: 8, marginBottom: 30 },
  input: { backgroundColor: '#2C2C2E', color: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 15 },
  btn: { backgroundColor: '#FF7A00', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 15 },
  btnText: { color: '#FFFFFF', fontWeight: 'bold' }
});
