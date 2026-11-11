import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ForgetPassword({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Құпия сөзді ұмыттыңыз ба?</Text>
        <Text style={styles.subtitle}>Құпия сөзді қалпына келтіру үшін поштаңызды жазыңыз</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Электрондық пошта</Text>
          <TextInput style={styles.input} placeholder="@gmail.com" placeholderTextColor="#aaa" />
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('ResetPasswordScreen')}>
          <Text style={styles.btnPrimaryText}>Код жіберу</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24', padding: 24, justifyContent: 'center' },
  header: { marginBottom: 30 },
  title: { fontSize: 26, fontWeight: '700', color: '#fff', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center' },
  form: { gap: 16 },
  inputContainer: { gap: 6 },
  label: { fontSize: 11, color: '#888', fontWeight: '600' },
  input: { backgroundColor: '#222834', height: 52, borderRadius: 12, paddingHorizontal: 16, color: '#fff', fontSize: 15 },
  btnPrimary: { backgroundColor: '#ff6b00', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  btnPrimaryText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});