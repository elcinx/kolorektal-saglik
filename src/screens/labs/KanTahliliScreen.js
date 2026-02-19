import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Card, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function KanTahliliScreen({ navigation }) {
  const [tahliller, setTahliller] = useState([]);

  useEffect(() => {
    loadTahliller();
  }, []);

  const loadTahliller = async () => {
    try {
      const data = await AsyncStorage.getItem('kanTahlilleri');
      if (data) {
        setTahliller(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading tahliller:', error);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelBlue, colors.pastelGreen]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Kan Tahlili
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Kan tahlili sonuçlarınızı kaydedin ve takip edin
          </Text>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('TahlilDetay', { yeni: true })}
            style={styles.addButton}
            icon="plus"
          >
            Yeni Tahlil Ekle
          </Button>
        </Surface>

        <Surface style={styles.surface}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Tahlil Geçmişi
          </Text>

          {tahliller.length === 0 ? (
            <Text variant="bodyMedium" style={styles.emptyText}>
              Henüz tahlil kaydı yok
            </Text>
          ) : (
            tahliller.map((tahlil) => (
              <Card
                key={tahlil.id}
                style={styles.tahlilCard}
                onPress={() => navigation.navigate('TahlilDetay', { tahlil })}
              >
                <Card.Content>
                  <Text variant="titleMedium" style={styles.tahlilTarih}>
                    {format(new Date(tahlil.tarih), 'dd MMMM yyyy', { locale: tr })}
                  </Text>
                  <Text variant="bodySmall" style={styles.tahlilBilgi}>
                    {Object.keys(tahlil.degerler).length} parametre kayıtlı
                  </Text>
                </Card.Content>
              </Card>
            ))
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
    marginBottom: spacing.md,
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
  addButton: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: spacing.md,
  },
  tahlilCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  tahlilTarih: {
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  tahlilBilgi: {
    color: colors.textLight,
  },
});
