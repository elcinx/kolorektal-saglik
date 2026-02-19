import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Card, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function HastaDeneyimiScreen() {
  const [deneyim, setDeneyim] = useState('');
  const [deneyimler, setDeneyimler] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDeneyimler();
  }, []);

  const loadDeneyimler = async () => {
    try {
      const data = await AsyncStorage.getItem('hastaDeneyimleri');
      if (data) {
        setDeneyimler(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading deneyimler:', error);
    }
  };

  const handleDeneyimPaylas = async () => {
    if (!deneyim.trim()) {
      return;
    }

    setLoading(true);
    const yeniDeneyim = {
      id: Date.now().toString(),
      deneyim: deneyim.trim(),
      tarih: format(new Date(), 'yyyy-MM-dd HH:mm'),
      anonim: true,
    };

    try {
      const yeniDeneyimler = [yeniDeneyim, ...deneyimler];
      await AsyncStorage.setItem('hastaDeneyimleri', JSON.stringify(yeniDeneyimler));
      setDeneyimler(yeniDeneyimler);
      setDeneyim('');
    } catch (error) {
      console.error('Error saving deneyim:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelPurple, colors.pastelPink]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Hasta Deneyimi
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Deneyimlerinizi paylaşın, diğer hastalara destek olun
          </Text>

          <TextInput
            label="Deneyiminizi paylaşın (anonim)"
            value={deneyim}
            onChangeText={setDeneyim}
            mode="outlined"
            multiline
            numberOfLines={6}
            style={styles.input}
            placeholder="Deneyimlerinizi buraya yazın..."
          />

          <Button
            mode="contained"
            onPress={handleDeneyimPaylas}
            loading={loading}
            disabled={loading || !deneyim.trim()}
            style={styles.shareButton}
            icon="share"
          >
            Paylaş
          </Button>
        </Surface>

        <Surface style={styles.surface}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Paylaşılan Deneyimler
          </Text>

          {deneyimler.length === 0 ? (
            <Text variant="bodyMedium" style={styles.emptyText}>
              Henüz deneyim paylaşılmamış
            </Text>
          ) : (
            deneyimler.map((item) => (
              <Card key={item.id} style={styles.deneyimCard}>
                <Card.Content>
                  <Text variant="bodyMedium" style={styles.deneyimText}>
                    {item.deneyim}
                  </Text>
                  <Text variant="bodySmall" style={styles.deneyimTarih}>
                    {format(new Date(item.tarih), 'dd MMMM yyyy', { locale: tr })}
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
  input: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },
  shareButton: {
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
  deneyimCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  deneyimText: {
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.xs,
  },
  deneyimTarih: {
    color: colors.textLight,
  },
});
