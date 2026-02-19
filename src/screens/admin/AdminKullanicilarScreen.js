import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function AdminKullanicilarScreen() {
  const [kullanicilar, setKullanicilar] = useState([]);

  useEffect(() => {
    loadKullanicilar();
  }, []);

  const loadKullanicilar = async () => {
    try {
      // Basit bir kullanıcı listesi - gerçek uygulamada API'den gelecek
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        // Tüm kullanıcıları simüle etmek için
        setKullanicilar([
          { id: user.id, email: user.email, kayitTarihi: new Date().toISOString() },
        ]);
      }
    } catch (error) {
      console.error('Error loading kullanicilar:', error);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.warning]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Kullanıcılar
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            {kullanicilar.length} kullanıcı bulundu
          </Text>

          {kullanicilar.length === 0 ? (
            <Text variant="bodyMedium" style={styles.emptyText}>
              Henüz kullanıcı yok
            </Text>
          ) : (
            kullanicilar.map((kullanici) => (
              <Card key={kullanici.id} style={styles.kullaniciCard}>
                <Card.Content>
                  <Text variant="titleMedium" style={styles.kullaniciEmail}>
                    {kullanici.email}
                  </Text>
                  <Text variant="bodySmall" style={styles.kullaniciTarih}>
                    Kayıt Tarihi: {new Date(kullanici.kayitTarihi).toLocaleDateString('tr-TR')}
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
  kullaniciCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  kullaniciEmail: {
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  kullaniciTarih: {
    color: colors.textLight,
  },
});
