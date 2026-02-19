import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Surface, Divider } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

const belirtiDetaylari = {
  bulanti: {
    title: 'Bulantı & Kusma',
    nedir: 'Bulantı ve kusma, tedavi sürecinde sık görülen yan etkilerdir. Genellikle kemoterapi veya radyoterapi sonrası ortaya çıkar.',
    tehlikeli: 'Şiddetli ve sürekli kusma, dehidratasyon belirtileri (ağız kuruluğu, idrar azalması) veya kanlı kusma durumunda acil tıbbi yardım alınmalıdır.',
    evde: [
      'Küçük ve sık öğünler tüketin',
      'Yağlı ve baharatlı yiyeceklerden kaçının',
      'Bol sıvı alın (su, çay, çorba)',
      'Nane çayı veya zencefil tüketin',
      'Yemekten sonra hemen yatmayın',
    ],
    doktor: '24 saat içinde 3-4 kez kusma, yemek yiyememe, dehidratasyon belirtileri veya kanlı kusma durumunda doktorunuza başvurun.',
  },
  istahsizlik: {
    title: 'İştahsızlık',
    nedir: 'İştahsızlık, tedavi sürecinde sık görülen bir durumdur. Yemek yeme isteğinin azalması veya tamamen kaybolması şeklinde görülebilir.',
    tehlikeli: 'Aşırı kilo kaybı, güçsüzlük, yorgunluk ve beslenme yetersizliği durumunda mutlaka doktorunuza danışın.',
    evde: [
      'Küçük porsiyonlar halinde sık yemek yiyin',
      'Besin değeri yüksek gıdalar tercih edin',
      'Sıvı beslenme destekleri kullanın',
      'Yemekleri çekici hale getirin',
      'Hafif egzersiz yapın',
    ],
    doktor: 'Bir haftadan uzun süren iştahsızlık, kilo kaybı veya beslenme sorunları durumunda doktorunuza başvurun.',
  },
  enfeksiyon: {
    title: 'Enfeksiyon',
    nedir: 'Tedavi sırasında bağışıklık sistemi zayıflayabilir ve enfeksiyon riski artabilir.',
    tehlikeli: 'Yüksek ateş (38°C üzeri), titreme, nefes darlığı veya şiddetli ağrı durumunda acil tıbbi yardım alınmalıdır.',
    evde: [
      'Ellerinizi sık sık yıkayın',
      'Kalabalık ortamlardan kaçının',
      'Aşılarınızı yaptırın',
      'Açık yaraları temiz tutun',
      'Sağlıklı beslenin',
    ],
    doktor: 'Ateş, titreme, öksürük veya enfeksiyon belirtileri görüldüğünde derhal doktorunuza başvurun.',
  },
  kanama: {
    title: 'Kanama',
    nedir: 'Kanama, tedavi sırasında trombosit sayısının düşmesi nedeniyle ortaya çıkabilir.',
    tehlikeli: 'Şiddetli kanama, kanlı öksürük, kanlı idrar veya dışkı, baş ağrısı veya görme bozukluğu durumunda acil tıbbi yardım alınmalıdır.',
    evde: [
      'Kesici aletlerden kaçının',
      'Diş fırçalarken yumuşak fırça kullanın',
      'Burun temizlerken nazik olun',
      'Aspirin ve benzeri ilaçlardan kaçının',
      'Ağır kaldırmayın',
    ],
    doktor: 'Herhangi bir kanama durumunda veya morarma görüldüğünde derhal doktorunuza başvurun.',
  },
  agri: {
    title: 'Ağrı',
    nedir: 'Ağrı, hastalık veya tedavi sürecinde ortaya çıkabilen bir belirtidir.',
    tehlikeli: 'Şiddetli ve kontrol edilemeyen ağrı, ani başlayan şiddetli ağrı veya ağrıya eşlik eden diğer belirtiler durumunda doktorunuza başvurun.',
    evde: [
      'Doktorunuzun önerdiği ağrı kesicileri kullanın',
      'Rahatlatıcı teknikler uygulayın (nefes egzersizleri)',
      'Ilık kompres uygulayın',
      'Hafif masaj yapın',
      'Rahat bir pozisyon bulun',
    ],
    doktor: 'Ağrı şiddetliyse, günlük aktivitelerinizi engelliyorsa veya ilaçlarla kontrol edilemiyorsa doktorunuza başvurun.',
  },
  sacDokulmesi: {
    title: 'Saç Dökülmesi',
    nedir: 'Saç dökülmesi, kemoterapi tedavisinin yaygın bir yan etkisidir. Genellikle geçicidir.',
    tehlikeli: 'Saç dökülmesi genellikle tehlikeli değildir ancak psikolojik olarak zorlayıcı olabilir.',
    evde: [
      'Yumuşak şampuanlar kullanın',
      'Saçınızı nazikçe tarayın',
      'Saç kurutma makinesinden kaçının',
      'Peruk veya şapka kullanabilirsiniz',
      'Saçınızı kısa kestirmeyi düşünün',
    ],
    doktor: 'Saç dökülmesi hakkında endişeleriniz varsa doktorunuzla konuşun. Tedavi sonrası saçlar genellikle yeniden çıkar.',
  },
};

export default function BelirtiDetayScreen({ route }) {
  const { belirti } = route.params;
  const detay = belirtiDetaylari[belirti.id] || belirtiDetaylari.bulanti;

  return (
    <LinearGradient
      colors={[colors.pastelBlue, colors.pastelPink]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            {detay.title}
          </Text>

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Nedir?
            </Text>
            <Text variant="bodyMedium" style={styles.sectionText}>
              {detay.nedir}
            </Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Ne Zaman Tehlikelidir?
            </Text>
            <Text variant="bodyMedium" style={styles.sectionText}>
              {detay.tehlikeli}
            </Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Evde Yapılabilecekler
            </Text>
            {detay.evde.map((item, index) => (
              <Text key={index} variant="bodySmall" style={styles.listItem}>
                • {item}
              </Text>
            ))}
          </View>

          <Divider style={styles.divider} />

          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Ne Zaman Doktora Başvurulmalı?
            </Text>
            <Text variant="bodyMedium" style={styles.sectionText}>
              {detay.doktor}
            </Text>
          </View>
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
  section: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  sectionText: {
    lineHeight: 24,
    color: colors.text,
  },
  divider: {
    marginVertical: spacing.md,
  },
  listItem: {
    marginBottom: spacing.xs,
    color: colors.text,
    lineHeight: 22,
  },
});
