import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function Covid19Screen() {
  return (
    <LinearGradient
      colors={[colors.pastelBlue, colors.pastelGreen]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            COVID-19 Bilgilendirme
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            COVID-19 (Coronavirus Disease 2019), SARS-CoV-2 virüsünün neden olduğu bir solunum yoluşum hastalığıdır.
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Belirtiler:
          </Text>
          <View style={styles.list}>
            <Text variant="bodySmall" style={styles.listItem}>• Yüksek atış</Text>
            <Text variant="bodySmall" style={styles.listItem}>• Öksürme</Text>
            <Text variant="bodySmall" style={styles.listItem}>• Nefes dönüşü</Text>
            <Text variant="bodySmall" style={styles.listItem}>• Boğaz ağrısı</Text>
            <Text variant="bodySmall" style={styles.listItem}>• Taşlık kaybı</Text>
          </View>
          <Text variant="bodyMedium" style={styles.contentText}>
            Korunma:
          </Text>
          <View style={styles.list}>
            <Text variant="bodySmall" style={styles.listItem}>• Sosyal izolasyon</Text>
            <Text variant="bodySmall" style={styles.listItem}>• Maske takibi</Text>
            <Text variant="bodySmall" style={styles.listItem}>• El dezenimi</Text>
            <Text variant="bodySmall" style={styles.listItem}>• İzolasyon</Text>
          </View>
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
    marginBottom: spacing.sm,
    color: colors.primary,
    fontWeight: 'bold',
  },
  contentText: {
    lineHeight: 24,
    color: colors.text,
    marginBottom: spacing.md,
  },
  list: {
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  listItem: {
    marginBottom: spacing.xs,
    color: colors.text,
  },
});
