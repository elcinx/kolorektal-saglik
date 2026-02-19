import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Divider } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function SoruDetayScreen({ route }) {
  const { soru } = route.params;

  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Soru Detayı
          </Text>

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Sorunuz
            </Text>
            <Text variant="bodyMedium" style={styles.sectionText}>
              {soru.soru}
            </Text>
            <Text variant="bodySmall" style={styles.tarih}>
              {format(new Date(soru.tarih), 'dd MMMM yyyy HH:mm', { locale: tr })}
            </Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Durum
            </Text>
            <Text
              variant="bodyMedium"
              style={[
                styles.durum,
                soru.durum === 'cevaplandı' ? styles.cevaplandi : styles.beklemede,
              ]}
            >
              {soru.durum === 'cevaplandı' ? '✓ Cevaplandı' : '⏳ Beklemede'}
            </Text>
          </View>

          {soru.cevap && (
            <>
              <Divider style={styles.divider} />
              <View style={styles.section}>
                <Text variant="titleMedium" style={styles.sectionTitle}>
                  Uzman Cevabı
                </Text>
                <Text variant="bodyMedium" style={styles.sectionText}>
                  {soru.cevap}
                </Text>
              </View>
            </>
          )}

          {!soru.cevap && (
            <View style={styles.infoBox}>
              <Text variant="bodySmall" style={styles.infoText}>
                Sorunuz uzmanlarımız tarafından incelenmektedir. En kısa sürede size geri dönüş yapılacaktır.
              </Text>
            </View>
          )}
        </Surface>
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
  content: {
    padding: spacing.md,
  },
  surface: {
    padding: spacing.lg,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: colors.surface,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.primary,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  sectionText: {
    lineHeight: 24,
    color: colors.text,
  },
  tarih: {
    color: colors.textLight,
    marginTop: spacing.xs,
  },
  divider: {
    marginVertical: spacing.md,
  },
  durum: {
    fontWeight: '600',
    fontSize: 16,
  },
  cevaplandi: {
    color: colors.success,
  },
  beklemede: {
    color: colors.warning,
  },
  infoBox: {
    backgroundColor: colors.pastelBlue,
    padding: spacing.md,
    borderRadius: 8,
    marginTop: spacing.md,
  },
  infoText: {
    color: colors.text,
    lineHeight: 20,
  },
});
