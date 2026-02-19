import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Button, Text, Surface } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

const menuItems = [
  {
    id: 'covid19',
    title: 'COVID-19 Bilgilendirme',
    icon: 'virus',
    description: 'COVID-19 hakkında bilgiler',
    color: colors.pastelBlue,
  },
  {
    id: 'kolorektal',
    title: 'Kolorektal Kanser Hakkında',
    icon: 'information',
    description: 'Kolorektal kanser hakkında detaylı bilgiler',
    color: colors.pastelGreen,
  },
  {
    id: 'belirtiYonetimi',
    title: 'Belirti Yönetimi',
    icon: 'heart-pulse',
    description: 'Belirtilerinizi yönetin ve takip edin',
    color: colors.pastelPink,
  },
  {
    id: 'belirtiTakvimi',
    title: 'Belirti Takvimi',
    icon: 'calendar',
    description: 'Günlük belirti takibi',
    color: colors.pastelPurple,
  },
  {
    id: 'uzmanaSor',
    title: 'Uzmana Sor',
    icon: 'message-question',
    description: 'Uzmanlara soru sorun',
    color: colors.info,
  },
  {
    id: 'hastaDeneyimi',
    title: 'Hasta Deneyimi',
    icon: 'account-group',
    description: 'Diğer hastaların deneyimlerini okuyun',
    color: colors.pastelPurple,
  },
  {
    id: 'kanTahlili',
    title: 'Kan Tahlili',
    icon: 'test-tube',
    description: 'Kan tahlili sonuçlarınızı kaydedin',
    color: colors.pastelBlue,
  },
  {
    id: 'oneriler',
    title: 'Öneriler',
    icon: 'lightbulb',
    description: 'Beslenme ve yaşam önerileri',
    color: colors.warning,
  },
  {
    id: 'iletisim',
    title: 'İletişim',
    icon: 'phone',
    description: 'Bizimle iletişime geçin',
    color: colors.pastelGreen,
  },
  {
    id: 'hakkimizda',
    title: 'Hakkında',
    icon: 'information-outline',
    description: 'Uygulama hakkında bilgiler',
    color: colors.textLight,
  },
];

export default function DashboardScreen({ navigation }) {
  const { user, logout } = useAuth();

  const handleMenuPress = (itemId) => {
    const routeMap = {
      covid19: 'Covid19',
      kolorektal: 'KolorektalKanser',
      belirtiYonetimi: 'BelirtiYonetimi',
      belirtiTakvimi: 'BelirtiTakvimi',
      uzmanaSor: 'UzmanaSor',
      hastaDeneyimi: 'HastaDeneyimi',
      kanTahlili: 'KanTahlili',
      oneriler: 'Oneriler',
      iletisim: 'Iletisim',
      hakkimizda: 'Hakkimizda',
    };

    const route = routeMap[itemId];
    if (route) {
      navigation.navigate(route);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: logout,
        },
      ]
    );
  };

  const handleAdminPress = () => {
    navigation.navigate('AdminPanel');
  };

  return (
    <LinearGradient
      colors={[colors.background, colors.pastelGreen]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Surface style={styles.header}>
          <Text variant="headlineSmall" style={styles.welcomeText}>
            Hoş Geldiniz
          </Text>
          <Text variant="bodyMedium" style={styles.userText}>
            {user?.email}
          </Text>
        </Surface>

        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <Card
              key={item.id}
              style={[styles.menuCard, { borderLeftColor: item.color, borderLeftWidth: 4 }]}
              onPress={() => handleMenuPress(item.id)}
            >
              <Card.Content>
                <View style={styles.cardContent}>
                  <Text variant="titleMedium" style={styles.cardTitle}>
                    {item.title}
                  </Text>
                  <Text variant="bodySmall" style={styles.cardDescription}>
                    {item.description}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>

        {user?.isAdmin && (
          <Button
            mode="contained"
            onPress={handleAdminPress}
            style={styles.adminButton}
            icon="shield-account"
          >
            Admin Paneli
          </Button>
        )}

        <Button
          mode="outlined"
          onPress={handleLogout}
          style={styles.logoutButton}
          icon="logout"
          textColor={colors.error}
        >
          Çıkış Yap
        </Button>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  header: {
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },
  welcomeText: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
    fontFamily: 'Orchids',
  },
  userText: {
    color: colors.textLight,
    fontFamily: 'Orchids',
  },
  menuGrid: {
    gap: spacing.md,
  },
  menuCard: {
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  cardContent: {
    paddingVertical: spacing.xs,
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: spacing.xs,
    color: colors.text,
    fontFamily: 'Orchids',
  },
  cardDescription: {
    color: colors.textLight,
    fontFamily: 'Orchids',
  },
  adminButton: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.warning,
  },
  logoutButton: {
    marginTop: spacing.md,
    marginBottom: spacing.xl,
    borderColor: colors.error,
  },
});
