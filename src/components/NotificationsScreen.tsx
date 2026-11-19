import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen({ navigation }: { navigation?: any }) {
  const notifs = [
    { id: 1, title: 'Жаңа акция!', body: 'Додо Пиццада 20см пиццаға арнайы ұсыныс басталды.', time: '10 мин бұрын' },
    { id: 2, title: 'Тапсырыс жеткізілді', body: '#FD-1042 нөмірлі тапсырысыңыз сәтті табысталды.', time: 'Кеше' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Хабарландырулар</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {notifs.map((n) => (
          <View key={n.id} style={styles.notifCard}>
            <View style={styles.iconCircle}>
              <Ionicons name="notifications" size={20} color="#FF7622" />
            </View>
            <View style={styles.notifBody}>
              <Text style={styles.notifTitle}>{n.title}</Text>
              <Text style={styles.notifText}>{n.body}</Text>
              <Text style={styles.notifTime}>{n.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 20, gap: 12 },
  notifCard: { flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 14, borderRadius: 16, gap: 12 },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center' },
  notifBody: { flex: 1 },
  notifTitle: { fontSize: 15, fontWeight: 'bold', color: '#181C2E' },
  notifText: { fontSize: 13, color: '#666', marginVertical: 4, lineHeight: 18 },
  notifTime: { fontSize: 11, color: '#A0A5BA' },
});