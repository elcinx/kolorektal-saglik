import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

const belirtiler = [
  {
    id: 'bulanti',
    title: 'Bulantı & Kusma',
    icon: 'emoticon-sick',
    color: colors.pastelPink,
  },
  {
    id: 'istahsizlik',
    title: 'İştahsızlık',
    icon: 'food-off',
    color: colors.pastelOrange,
  },
  {
    id: 'enfeksiyon',
    title: 'Enfeksiyon',
    icon: 'virus',
    color: colors.error,
  },
  {
    id: 'kanama',
    title: 'Kanama',
    icon: 'water',
    color: colors.error,
  },
  {
    id: 'agri',
    title: 'Ağrı',
    icon: 'emoticon-cry',
    color: colors.warning,
  },
  {
    id: 'sacDokulmesi',
    title: 'Saç Dökülmesi',
    icon: 'hair-dryer',
    color: colors.textLight,
  },
];

export default function BelirtiYonetimiScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.pastelPink, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>
          Belirti Yönetimi
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Belirtileriniz hakkında bilgi almak için seçin
        </Text>

        {belirtiler.map((belirti) => (
          <Card
            key={belirti.id}
            style={[styles.card, { borderLeftColor: belirti.color, borderLeftWidth: 4 }]}
            onPress={() => navigation.navigate('BelirtiDetay', { belirti })}
          >
            <Card.Content>
              <View style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>
                  {belirti.title}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
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
  title: {
    textAlign: 'center',
    marginBottom: spacing.xs,
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
    color: colors.text,
  },
});
