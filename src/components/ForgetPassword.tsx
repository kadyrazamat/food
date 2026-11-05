import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function ForgetPassword({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Құпия сөзді ұмыттыңыз ба?</Text>
      <Text style={styles.sub}>Поштаңызды жазыңыз, біз сізге код жібереміз</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A0A5BA" />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OTPScreen')}>
        <Text style={styles.btnText}>КОД ЖІБЕРУ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E24', padding: 24, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  sub: { fontSize: 15, color: '#AEAEB2', marginTop: 10, marginBottom: 30 },
  input: { backgroundColor: '#2C2C2E', color: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 20 },
  btn: { backgroundColor: '#FF7A00', padding: 16, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: 'bold' }
});
