import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Card } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

const oneriler = [
  {
    title: 'Beslenme Önerileri',
    description: '• Lifli gıdalar tüketin (meyve, sebze, tam tahıllar)\n• Yeterli protein alın\n• Bol su için\n• Küçük ve sık öğünler yiyin\n• İşlenmiş gıdalardan kaçının\n• Doktorunuzun önerdiği diyet programına uyun',
    icon: 'food',
    color: colors.pastelGreen,
  },
  {
    title: 'Günlük Yaşam Tavsiyeleri',
    description: '• Düzenli ve hafif egzersiz yapın\n• Yeterli uyku alın\n• Stresi yönetin\n• Sosyal destek alın\n• Hobi ve aktivitelere zaman ayırın\n• Pozitif düşünmeye çalışın',
    icon: 'lightbulb',
    color: colors.warning,
  },
  {
    title: 'Psikolojik Destek',
    description: '• Aileniz ve arkadaşlarınızla konuşun\n• Profesyonel destek almayı düşünün\n• Destek gruplarına katılın\n• Günlük tutun\n• Meditasyon veya nefes egzersizleri yapın\n• Kendinize zaman ayırın',
    icon: 'heart',
    color: colors.pastelPink,
  },
];

export default function OnerilerScreen() {
  return (
    <LinearGradient
      colors={[colors.warning, colors.pastelGreen]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Öneriler
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Beslenme ve yaşam önerileri
          </Text>

          {oneriler.map((oner) => (
            <Card key={oner.title} style={styles.card}>
              <Card.Content>
                <View style={styles.cardContent}>
                  <Text variant="titleMedium" style={styles.cardTitle}>
                    {oner.title}
                  </Text>
                  <Text variant="bodyMedium" style={styles.cardDescription}>
                    {oner.description}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          ))}
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
  subtitle: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.textLight,
  },
  card: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  cardContent: {
    paddingVertical: spacing.xs,
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: spacing.sm,
    color: colors.text,
  },
  cardDescription: {
    lineHeight: 22,
    color: colors.text,
  },
});
