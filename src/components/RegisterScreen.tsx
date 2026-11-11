import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Тіркелу</Text>
        <Text style={styles.subtitle}>Жаңа аккаунт ашу үшін толтырыңыз</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Аты-жөні</Text>
          <TextInput style={styles.input} placeholder="Аты-жөні" placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Электрондық пошта</Text>
          <TextInput style={styles.input} placeholder="@gmail.com" placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Құпия сөз</Text>
          <TextInput style={styles.input} placeholder="••••••••••" placeholderTextColor="#aaa" secureTextEntry />
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('OTPScreen')}>
          <Text style={styles.btnPrimaryText}>Тіркелу</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24', justifyContent: 'center', padding: 24 },
  header: { marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center' },
  form: { gap: 16 },
  inputContainer: { gap: 6 },
  label: { fontSize: 11, color: '#888', fontWeight: '600', letterSpacing: 1 },
  input: { backgroundColor: '#222834', height: 52, borderRadius: 12, paddingHorizontal: 16, color: '#fff', fontSize: 15 },
  btnPrimary: { backgroundColor: '#ff6b00', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 15 },
  btnPrimaryText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});