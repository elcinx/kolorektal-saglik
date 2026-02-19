# Kolorektal Sağlık Uygulaması

Kolorektal kanser hastaları ve yakınları için geliştirilmiş mobil sağlık uygulaması.

## Özellikler

- ✅ Kullanıcı girişi ve kayıt sistemi
- ✅ Kolorektal kanser hakkında bilgilendirme
- ✅ COVID-19 bilgilendirme
- ✅ Belirti yönetimi ve takibi
- ✅ Belirti takvimi
- ✅ Uzmana soru sorma
- ✅ Hasta deneyimi paylaşımı
- ✅ Kan tahlili kayıt ve takibi
- ✅ Beslenme ve yaşam önerileri
- ✅ İletişim formu
- ✅ Admin/Hemşire paneli

## Teknolojiler

- React Native
- Expo
- React Navigation
- React Native Paper
- AsyncStorage

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Uygulamayı başlatın:
```bash
npm start
```

3. Expo Go uygulaması ile QR kodu tarayın veya:
- iOS için: `npm run ios`
- Android için: `npm run android`

## Admin Girişi

Admin paneline erişmek için:
- E-posta: `admin@kolorektal.com`
- Parola: Herhangi bir parola (demo amaçlı)

## Lisans

Bu proje eğitim amaçlıdır.

## Üretim için APK/IPA (EAS) oluşturma

1. Expo Application Services (EAS) kurulumu:

```bash
npm install -g eas-cli
eas login
```

2. Proje yapılandırması (zaten ekli): `eas.json`.

3. Android için üretim AAB oluşturma:

```bash
eas build --platform android --profile production
```

4. iOS için (macOS ve Apple hesap bilgisi gerek):

```bash
eas build --platform ios --profile production
```

Notlar:
- EAS ile uygulama imzalama, keystore ve Apple kimlik bilgileri gerektirir; eas-cli sizi adım adım yönlendirecektir.
- Eğer isterseniz ben `eas build` komutlarını sizin hesabınızda çalıştırmanızı kolaylaştırmak için `eas` config ve roller oluşturabilirim.
