import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen({ navigation }: { navigation?: any }) {
  const [name, setName] = useState('Азамат Қадыр');
  const [email, setEmail] = useState('azamat.food@gmail.com');
  const [phone, setPhone] = useState('+7 (707) 123-45-67');

  const handleSave = () => {
    Alert.alert('Сақталды', 'Жеке деректеріңіз жаңартылды.', [
      { text: 'Жарайды', onPress: () => navigation?.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Жеке деректер</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>АТЫ-ЖӨНІ</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholderTextColor="#888" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ЭЛЕКТРОНДЫҚ ПОШТА</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ТЕЛЕФОН НӨМІРІ</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholderTextColor="#888" />
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={handleSave}>
          <Text style={styles.btnPrimaryText}>ӨЗГЕРІСТЕРДІ САҚТАУ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, marginBottom: 16 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  form: { gap: 18 },
  inputGroup: { gap: 6 },
  label: { fontSize: 11, fontWeight: '700', color: '#888', letterSpacing: 1 },
  input: { backgroundColor: '#F0F5FA', height: 52, borderRadius: 12, paddingHorizontal: 16, fontSize: 15, color: '#181C2E' },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginTop: 12 },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});