import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Text, Surface } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function AdminPanelScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.warning, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Admin Paneli
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Yönetim işlemleri
          </Text>

          <Card
            style={styles.card}
            onPress={() => navigation.navigate('AdminSorular')}
          >
            <Card.Content>
              <View style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>
                  Soruları Yönet
                </Text>
                <Text variant="bodySmall" style={styles.cardDescription}>
                  Kullanıcı sorularını görüntüleyin ve cevaplayın
                </Text>
              </View>
            </Card.Content>
          </Card>

          <Card
            style={styles.card}
            onPress={() => navigation.navigate('AdminKullanicilar')}
          >
            <Card.Content>
              <View style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>
                  Kullanıcıları Görüntüle
                </Text>
                <Text variant="bodySmall" style={styles.cardDescription}>
                  Kayıtlı kullanıcıları listeleyin
                </Text>
              </View>
            </Card.Content>
          </Card>
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
    marginBottom: spacing.xs,
    color: colors.text,
  },
  cardDescription: {
    color: colors.textLight,
  },
});
