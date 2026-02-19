import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function KolorektalKanserScreen() {
  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            Kolorektal Kanser Hakkında Bilgilendirme
          </Text>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Kolorektal Kanser Nedir?
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Kolorektal kanser, kalın bağırsak (kolon) ve rektum bölgesinde gelişen bir kanser türüdür. Genellikle poliplerden (küçük kitleler) başlar ve zamanla kanserli hücrelere dönüşebilir.
          </Text>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Kimlerde Görülür?
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Kolorektal kanser her yaşta görülebilir ancak 50 yaş üzerindeki kişilerde daha sık görülür. Ailesinde kolorektal kanser öyküsü olanlar, inflamatuar bağırsak hastalığı olanlar ve belirli genetik sendromları olanlar risk altındadır.
          </Text>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Risk Faktörleri
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            • Yaş (50 yaş üzeri){'\n'}
            • Aile öyküsü{'\n'}
            • Kişisel öykü (önceden polip veya kanser){'\n'}
            • İnflamatuar bağırsak hastalıkları{'\n'}
            • Sağlıksız beslenme{'\n'}
            • Fiziksel aktivite eksikliği{'\n'}
            • Obezite{'\n'}
            • Sigara ve alkol kullanımı
          </Text>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Erken Teşhisin Önemi
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            Erken teşhis, kolorektal kanserin başarılı tedavisinde kritik öneme sahiptir. Düzenli tarama testleri ile kanser erken evrede yakalanabilir ve tedavi şansı artar.
          </Text>

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Korunma Yolları
          </Text>
          <Text variant="bodyMedium" style={styles.contentText}>
            • Düzenli tarama testleri yaptırın{'\n'}
            • Sağlıklı beslenin (lifli gıdalar, meyve-sebze){'\n'}
            • Düzenli fiziksel aktivite yapın{'\n'}
            • Sağlıklı kiloda kalın{'\n'}
            • Sigara ve alkolden kaçının{'\n'}
            • Aile öykünüzü bilin ve doktorunuzla paylaşın
          </Text>
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
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  contentText: {
    lineHeight: 24,
    color: colors.text,
    marginBottom: spacing.md,
  },
});
