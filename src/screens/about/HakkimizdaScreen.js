import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function HakkimizdaScreen() {
  return (
    <LinearGradient
      colors={[colors.textLight, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Hakkında
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Kolorektal Sağlık, meme kanserinin hakkında bilgilerini takip edin ve meme kanserinin yakınlarını gösterin bir hastalık uygulamasıdır.
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Bu uygulama, hastalarınızın sağlıklarına yardımcı olmak ve hasta dostu bir mobil uygulama içeriği oluşturmanı istiyorum.
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Versiyon: 1.0.0
          </Text>
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
});
