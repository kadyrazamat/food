import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: { navigation?: any }) {
  const menuItems = [
    { icon: 'person-outline', label: 'Жеке деректер', route: 'EditProfileScreen' },
    { icon: 'location-outline', label: 'Мекенжайларым', route: 'AddressesScreen' },
    { icon: 'receipt-outline', label: 'Тапсырыс тарихы', route: 'OrdersHistoryScreen' },
    { icon: 'heart-outline', label: 'Таңдаулы тағамдар', route: 'FavoritesScreen' },
    { icon: 'card-outline', label: 'Төлем карталары', route: 'PaymentMethodsScreen' },
    { icon: 'notifications-outline', label: 'Хабарландырулар', route: 'NotificationsScreen' },
    { icon: 'help-circle-outline', label: 'Көмек және қолдау', route: 'SupportScreen' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Профиль</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.navigate('SettingsScreen')}>
          <Ionicons name="settings-outline" size={20} color="#181C2E" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>АҚ</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Азамат Қадыр</Text>
            <Text style={styles.userPhone}>+7 (707) 123-45-67</Text>
          </View>
          <TouchableOpacity onPress={() => navigation?.navigate('EditProfileScreen')}>
            <Ionicons name="create-outline" size={22} color="#FF7622" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuBox}>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.menuRow, idx === menuItems.length - 1 && { borderBottomWidth: 0 }]}
              onPress={() => navigation?.navigate(item.route)}
            >
              <View style={styles.menuLeft}>
                <View style={styles.iconWrap}>
                  <Ionicons name={item.icon as any} size={20} color="#FF7622" />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#A0A5BA" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation?.navigate('LoginScreen')}>
          <Ionicons name="log-out-outline" size={20} color="#E53935" />
          <Text style={styles.logoutText}>Аккаунттан шығу</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 20, paddingBottom: 36 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 18, marginBottom: 20 },
  avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#FF7622', justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  avatarText: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  profileInfo: { flex: 1 },
  userName: { fontSize: 17, fontWeight: 'bold', color: '#181C2E', marginBottom: 4 },
  userPhone: { fontSize: 13, color: '#777' },
  menuBox: { backgroundColor: '#FFFFFF', borderRadius: 18, paddingHorizontal: 16, marginBottom: 20 },
  menuRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F0F5FA' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  iconWrap: { width: 36, height: 36, borderRadius: 10, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  menuLabel: { fontSize: 15, fontWeight: '600', color: '#181C2E' },
  logoutBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFEBEE', paddingVertical: 15, borderRadius: 14, gap: 8 },
  logoutText: { color: '#E53935', fontSize: 15, fontWeight: '700' },
});