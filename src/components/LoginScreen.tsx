import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Қош келдіңіз!</Text>
      <Text style={styles.sub}>Жүйеге кіру үшін деректерді енгізіңіз</Text>
      <TextInput style={styles.input} placeholder="Электронды пошта" placeholderTextColor="#A0A5BA" />
      <TextInput style={styles.input} placeholder="Құпия сөз" secureTextEntry placeholderTextColor="#A0A5BA" />
      <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgotText}>Құпия сөзді ұмыттыңыз ба?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SelectCityScreen')}>
        <Text style={styles.btnText}>КІРУ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.footerText}>Аккаунтыңыз жоқ па? <Text style={{color: '#FF7A00'}}>Тіркелу</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1E24', padding: 24, justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' },
  sub: { fontSize: 16, color: '#AEAEB2', marginTop: 8, marginBottom: 30 },
  input: { backgroundColor: '#2C2C2E', color: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 15 },
  forgot: { alignSelf: 'flex-end', marginBottom: 25 },
  forgotText: { color: '#FF7A00' },
  btn: { backgroundColor: '#FF7A00', padding: 16, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: 'bold' },
  footer: { alignItems: 'center', marginTop: 25 },
  footerText: { color: '#AEAEB2' }
});
