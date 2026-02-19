import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, TextInput, Button, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

const parametreler = [
  { key: 'hemoglobin', label: 'Hemoglobin (Hb)', birim: 'g/dL', normal: '12-16' },
  { key: 'hematokrit', label: 'Hematokrit (Hct)', birim: '%', normal: '36-48' },
  { key: 'beyazKure', label: 'Beyaz Küre (WBC)', birim: '/μL', normal: '4000-11000' },
  { key: 'trombosit', label: 'Trombosit', birim: '/μL', normal: '150000-450000' },
  { key: 'sedimantasyon', label: 'Sedimantasyon', birim: 'mm/saat', normal: '0-20' },
  { key: 'crp', label: 'CRP', birim: 'mg/L', normal: '<3' },
];

export default function TahlilDetayScreen({ route, navigation }) {
  const { tahlil: mevcutTahlil, yeni } = route.params || {};
  const [tarih, setTarih] = useState(
    mevcutTahlil?.tarih || format(new Date(), 'yyyy-MM-dd')
  );
  const [degerler, setDegerler] = useState(
    mevcutTahlil?.degerler || {}
  );
  const [loading, setLoading] = useState(false);

  const handleDegerChange = (key, value) => {
    setDegerler((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleKaydet = async () => {
    setLoading(true);
    const tahlilData = {
      id: mevcutTahlil?.id || Date.now().toString(),
      tarih,
      degerler,
    };

    try {
      const data = await AsyncStorage.getItem('kanTahlilleri');
      let tahliller = data ? JSON.parse(data) : [];
      
      if (mevcutTahlil) {
        tahliller = tahliller.map((t) => (t.id === tahlilData.id ? tahlilData : t));
      } else {
        tahliller = [tahlilData, ...tahliller];
      }

      await AsyncStorage.setItem('kanTahlilleri', JSON.stringify(tahliller));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving tahlil:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDegerDurum = (deger, normal) => {
    if (!deger) return null;
    // Basit kontrol - gerçek uygulamada daha detaylı olmalı
    return 'normal'; // Placeholder
  };

  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Kan Tahlili Detayı
          </Text>

          <TextInput
            label="Tarih"
            value={tarih}
            onChangeText={setTarih}
            mode="outlined"
            style={styles.input}
            placeholder="YYYY-MM-DD"
          />

          <Divider style={styles.divider} />

          {parametreler.map((param) => (
            <View key={param.key} style={styles.parametreContainer}>
              <View style={styles.parametreHeader}>
                <Text variant="titleSmall" style={styles.parametreLabel}>
                  {param.label}
                </Text>
                <Text variant="bodySmall" style={styles.normalDeger}>
                  Normal: {param.normal} {param.birim}
                </Text>
              </View>
              <TextInput
                label={`Değer (${param.birim})`}
                value={degerler[param.key] || ''}
                onChangeText={(value) => handleDegerChange(param.key, value)}
                mode="outlined"
                keyboardType="numeric"
                style={styles.input}
              />
              {degerler[param.key] && (
                <Text variant="bodySmall" style={styles.aciklama}>
                  Not: Bu değerler bilgilendirme amaçlıdır. Tanı için mutlaka doktorunuza danışın.
                </Text>
              )}
            </View>
          ))}

          <Button
            mode="contained"
            onPress={handleKaydet}
            loading={loading}
            disabled={loading}
            style={styles.saveButton}
          >
            Kaydet
          </Button>
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
    marginBottom: spacing.lg,
    color: colors.primary,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },
  divider: {
    marginVertical: spacing.md,
  },
  parametreContainer: {
    marginBottom: spacing.lg,
  },
  parametreHeader: {
    marginBottom: spacing.sm,
  },
  parametreLabel: {
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  normalDeger: {
    color: colors.textLight,
  },
  aciklama: {
    color: colors.textLight,
    fontStyle: 'italic',
    marginTop: spacing.xs,
  },
  saveButton: {
    marginTop: spacing.md,
    backgroundColor: colors.primary,
  },
});
