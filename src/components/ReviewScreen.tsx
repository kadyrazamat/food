import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewScreen({ navigation }: { navigation?: any }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    Alert.alert('Рақмет!', 'Пікіріңіз бен бағаңыз сәтті жіберілді.', [
      { text: 'Жарайды', onPress: () => navigation?.navigate('HomeScreen') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Баға беру</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Додо Пицца тағамдары ұнады ма?</Text>
        <Text style={styles.subtitle}>Сапаны жақсартуға көмектесіңіз</Text>

        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons name={star <= rating ? 'star' : 'star-outline'} size={36} color="#FFB800" />
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Пікіріңізді жазыңыз..."
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit}>
          <Text style={styles.btnPrimaryText}>ПІКІР ҚАЛДЫРУ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  content: { padding: 24, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#181C2E', textAlign: 'center', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#777', marginBottom: 24 },
  starsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  textArea: { width: '100%', backgroundColor: '#F0F5FA', borderRadius: 14, padding: 14, fontSize: 14, color: '#181C2E', minHeight: 110, textAlignVertical: 'top', marginBottom: 20 },
  btnPrimary: { width: '100%', backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});