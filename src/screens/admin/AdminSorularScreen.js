import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Card, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function AdminSorularScreen({ navigation }) {
  const [sorular, setSorular] = useState([]);
  const [selectedSoru, setSelectedSoru] = useState(null);
  const [cevap, setCevap] = useState('');

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

  const handleCevapGonder = async () => {
    if (!selectedSoru || !cevap.trim()) {
      return;
    }

    try {
      const guncellenmisSorular = sorular.map((s) =>
        s.id === selectedSoru.id
          ? { ...s, cevap: cevap.trim(), durum: 'cevaplandı' }
          : s
      );
      await AsyncStorage.setItem('uzmanaSorular', JSON.stringify(guncellenmisSorular));
      setSorular(guncellenmisSorular);
      setSelectedSoru(null);
      setCevap('');
    } catch (error) {
      console.error('Error saving cevap:', error);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelBlue, colors.warning]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Sorular
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            {sorular.length} soru bulundu
          </Text>

          {sorular.length === 0 ? (
            <Text variant="bodyMedium" style={styles.emptyText}>
              Henüz soru yok
            </Text>
          ) : (
            sorular.map((soru) => (
              <Card
                key={soru.id}
                style={styles.soruCard}
                onPress={() => {
                  setSelectedSoru(soru);
                  setCevap(soru.cevap || '');
                }}
              >
                <Card.Content>
                  <Text variant="bodyMedium" style={styles.soruText}>
                    {soru.soru}
                  </Text>
                  <Text variant="bodySmall" style={styles.soruTarih}>
                    {format(new Date(soru.tarih), 'dd MMMM yyyy HH:mm', { locale: tr })}
                  </Text>
                  <View style={styles.durumContainer}>
                    <Text
                      variant="bodySmall"
                      style={[
                        styles.durum,
                        soru.durum === 'cevaplandı' ? styles.cevaplandi : styles.beklemede,
                      ]}
                    >
                      {soru.durum === 'cevaplandı' ? '✓ Cevaplandı' : '⏳ Beklemede'}
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            ))
          )}
        </Surface>

        {selectedSoru && (
          <Surface style={styles.surface}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Cevap Yaz
            </Text>
            <Text variant="bodyMedium" style={styles.soruText}>
              {selectedSoru.soru}
            </Text>

            <TextInput
              label="Cevabınız"
              value={cevap}
              onChangeText={setCevap}
              mode="outlined"
              multiline
              numberOfLines={6}
              style={styles.input}
              placeholder="Cevabınızı buraya yazın..."
            />

            <Button
              mode="contained"
              onPress={handleCevapGonder}
              disabled={!cevap.trim()}
              style={styles.sendButton}
            >
              Cevabı Gönder
            </Button>
          </Surface>
        )}
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
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  input: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },
  sendButton: {
    backgroundColor: colors.primary,
  },
});
