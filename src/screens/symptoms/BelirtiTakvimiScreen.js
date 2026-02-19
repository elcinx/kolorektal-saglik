import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Checkbox, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

const belirtiler = [
  'Bulantı & Kusma',
  'İştahsızlık',
  'Enfeksiyon',
  'Kanama',
  'Ağrı',
  'Saç Dökülmesi',
];

export default function BelirtiTakvimiScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBelirtiler, setSelectedBelirtiler] = useState({});
  const [kayitlar, setKayitlar] = useState([]);

  useEffect(() => {
    loadKayitlar();
  }, []);

  useEffect(() => {
    loadGunKayitlari();
  }, [selectedDate]);

  const loadKayitlar = async () => {
    try {
      const data = await AsyncStorage.getItem('belirtiTakvimi');
      if (data) {
        setKayitlar(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading kayitlar:', error);
    }
  };

  const loadGunKayitlari = () => {
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    const gunKayitlari = kayitlar.find((k) => k.date === dateKey);
    if (gunKayitlari) {
      const belirtiMap = {};
      gunKayitlari.belirtiler.forEach((b) => {
        belirtiMap[b] = true;
      });
      setSelectedBelirtiler(belirtiMap);
    } else {
      setSelectedBelirtiler({});
    }
  };

  const handleBelirtiToggle = (belirti) => {
    setSelectedBelirtiler((prev) => ({
      ...prev,
      [belirti]: !prev[belirti],
    }));
  };

  const handleKaydet = async () => {
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    const secilenBelirtiler = Object.keys(selectedBelirtiler).filter(
      (b) => selectedBelirtiler[b]
    );

    const yeniKayitlar = kayitlar.filter((k) => k.date !== dateKey);
    yeniKayitlar.push({
      date: dateKey,
      belirtiler: secilenBelirtiler,
    });

    try {
      await AsyncStorage.setItem('belirtiTakvimi', JSON.stringify(yeniKayitlar));
      setKayitlar(yeniKayitlar);
    } catch (error) {
      console.error('Error saving kayitlar:', error);
    }
  };

  const getGecmisKayitlar = () => {
    return kayitlar
      .filter((k) => k.date !== format(selectedDate, 'yyyy-MM-dd'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 7);
  };

  return (
    <LinearGradient
      colors={[colors.pastelPurple, colors.pastelGreen]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Belirti Takvimi
          </Text>
          <Text variant="bodyMedium" style={styles.dateText}>
            {format(selectedDate, 'dd MMMM yyyy', { locale: tr })}
          </Text>

          <View style={styles.belirtiList}>
            {belirtiler.map((belirti) => (
              <View key={belirti} style={styles.belirtiItem}>
                <Checkbox
                  status={selectedBelirtiler[belirti] ? 'checked' : 'unchecked'}
                  onPress={() => handleBelirtiToggle(belirti)}
                  color={colors.primary}
                />
                <Text variant="bodyLarge" style={styles.belirtiText}>
                  {belirti}
                </Text>
              </View>
            ))}
          </View>

          <Button
            mode="contained"
            onPress={handleKaydet}
            style={styles.saveButton}
          >
            Kaydet
          </Button>
        </Surface>

        {getGecmisKayitlar().length > 0 && (
          <Surface style={styles.surface}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Geçmiş Kayıtlar
            </Text>
            {getGecmisKayitlar().map((kayit) => (
              <View key={kayit.date} style={styles.kayitItem}>
                <Text variant="bodyMedium" style={styles.kayitDate}>
                  {format(new Date(kayit.date), 'dd MMMM yyyy', { locale: tr })}
                </Text>
                <Text variant="bodySmall" style={styles.kayitBelirtiler}>
                  {kayit.belirtiler.join(', ')}
                </Text>
              </View>
            ))}
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
  dateText: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.textLight,
  },
  belirtiList: {
    marginBottom: spacing.md,
  },
  belirtiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  belirtiText: {
    marginLeft: spacing.sm,
    color: colors.text,
  },
  saveButton: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  kayitItem: {
    marginBottom: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  kayitDate: {
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  kayitBelirtiler: {
    color: colors.textLight,
  },
});
