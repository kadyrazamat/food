import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Жүйеге кіру</Text>
        <Text style={styles.subtitle}>Қолданыстағы аккаунтқа кіріңіз</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ЭЛЕКТРОНДЫҚ ПОШТА</Text>
          <TextInput style={styles.input} placeholder="@gmail.com" placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ҚҰПИЯ СӨЗ</Text>
          <TextInput style={styles.input} placeholder="••••••••••" placeholderTextColor="#aaa" secureTextEntry />
        </View>

        <TouchableOpacity onPress={() => navigation?.navigate('ForgetPassword')}>
          <Text style={styles.forgotText}>Құпия сөзді ұмытыңыз ба?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('SelectCityScreen')}>
          <Text style={styles.btnPrimaryText}>КІРУ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Аккаунтыңыз жоқ па? </Text>
        <TouchableOpacity onPress={() => navigation?.navigate('RegisterScreen')}>
          <Text style={styles.linkText}>ТІРКЕЛУ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24', justifyContent: 'space-between', padding: 24, paddingTop: 80, paddingBottom: 40 },
  header: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center' },
  form: { gap: 16 },
  inputContainer: { gap: 6 },
  label: { fontSize: 11, color: '#888', fontWeight: '600', letterSpacing: 1 },
  input: { backgroundColor: '#222834', height: 52, borderRadius: 12, paddingHorizontal: 16, color: '#fff', fontSize: 15 },
  forgotText: { color: '#ff6b00', textAlign: 'right', fontSize: 13, marginTop: -4 },
  btnPrimary: { backgroundColor: '#ff6b00', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  btnPrimaryText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerText: { color: '#aaa', fontSize: 14 },
  linkText: { color: '#ff6b00', fontWeight: '700', fontSize: 14 }
});