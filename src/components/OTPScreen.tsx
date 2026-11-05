import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function OTPScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Растау коды</Text>
        <Text style={styles.subtitle}>Электрондық поштаңызға жіберілген кодты енгізіңіз{'\n'}@gmail.com</Text>
      </View>

      <View style={styles.otpContainer}>
        <TextInput style={styles.otpInput} keyboardType="number-pad" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="number-pad" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="number-pad" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="number-pad" maxLength={1} />
      </View>

      <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('SelectCityScreen')}>
        <Text style={styles.btnPrimaryText}>РАСТАУ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24', padding: 24, justifyContent: 'center' },
  header: { marginBottom: 30, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center', lineHeight: 20 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, paddingHorizontal: 20 },
  otpInput: { width: 60, height: 60, backgroundColor: '#222834', borderRadius: 14, color: '#fff', fontSize: 24, textAlign: 'center' },
  btnPrimary: { backgroundColor: '#ff6b00', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});