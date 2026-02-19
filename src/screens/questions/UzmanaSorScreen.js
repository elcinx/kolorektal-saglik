import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Button, TextInput, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function UzmanaSorScreen({ navigation }) {
  const [soru, setSoru] = useState('');
  const [sorular, setSorular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSorular();
  }, []);

  const loadSorular = async () => {
    try {
      const data = await AsyncStorage.getItem('uzmanaSorular');
      if (data) {
        setSorular(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading sorular:', error);
    }
  };

  const handleSoruGonder = async () => {
    if (!soru.trim()) {
      return;
    }

    setLoading(true);
    const yeniSoru = {
      id: Date.now().toString(),
      soru: soru.trim(),
      tarih: format(new Date(), 'yyyy-MM-dd HH:mm'),
      durum: 'beklemede',
      cevap: null,
    };

    try {
      const yeniSorular = [yeniSoru, ...sorular];
      await AsyncStorage.setItem('uzmanaSorular', JSON.stringify(yeniSorular));
      setSorular(yeniSorular);
      setSoru('');
    } catch (error) {
      console.error('Error saving soru:', error);
    } finally {
      setLoading(false);
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
            Uzmana Sor
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Sorularınızı yazabilir veya sesli gönderebilirsiniz
          </Text>

          <TextInput
            label="Sorunuzu yazın"
            value={soru}
            onChangeText={setSoru}
            mode="outlined"
            multiline
            numberOfLines={4}
            style={styles.input}
            placeholder="Sorunuzu buraya yazın..."
          />

          <Button
            mode="contained"
            onPress={handleSoruGonder}
            loading={loading}
            disabled={loading || !soru.trim()}
            style={styles.sendButton}
            icon="send"
          >
            Soru Gönder
          </Button>

          <Button
            mode="outlined"
            onPress={() => {
              // Sesli soru gönderme - placeholder
            }}
            style={styles.voiceButton}
            icon="microphone"
          >
            Sesli Soru Gönder
          </Button>
        </Surface>

        <Surface style={styles.surface}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Sorularım
          </Text>

          {sorular.length === 0 ? (
            <Text variant="bodyMedium" style={styles.emptyText}>
              Henüz soru göndermediniz
            </Text>
          ) : (
            sorular.map((item) => (
              <Card
                key={item.id}
                style={styles.soruCard}
                onPress={() => navigation.navigate('SoruDetay', { soru: item })}
              >
                <Card.Content>
                  <Text variant="bodyMedium" style={styles.soruText}>
                    {item.soru}
                  </Text>
                  <Text variant="bodySmall" style={styles.soruTarih}>
                    {format(new Date(item.tarih), 'dd MMMM yyyy HH:mm', { locale: tr })}
                  </Text>
                  <View style={styles.durumContainer}>
                    <Text
                      variant="bodySmall"
                      style={[
                        styles.durum,
                        item.durum === 'cevaplandı' ? styles.cevaplandi : styles.beklemede,
                      ]}
                    >
                      {item.durum === 'cevaplandı' ? '✓ Cevaplandı' : '⏳ Beklemede'}
                    </Text>
                  </View>
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
  sendButton: {
    marginBottom: spacing.sm,
    backgroundColor: colors.primary,
  },
  voiceButton: {
    marginBottom: spacing.md,
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
  soruCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  soruText: {
    color: colors.text,
    marginBottom: spacing.xs,
  },
  soruTarih: {
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  durumContainer: {
    marginTop: spacing.xs,
  },
  durum: {
    fontWeight: '600',
  },
  cevaplandi: {
    color: colors.success,
  },
  beklemede: {
    color: colors.warning,
  },
});
