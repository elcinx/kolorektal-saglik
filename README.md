# Kolorektal Saglik Uygulamasi

Kolorektal Saglik Uygulamasi; kolorektal kanser hastalari, hasta yakinlari ve saglik profesyonelleri icin gelistirilmis, bilgilendirme ve gunluk takip odakli bir mobil uygulamadir.

Uygulama; kullanici girisi, belirti takibi, laboratuvar kayitlari, uzmana soru sorma, hasta deneyimleri ve yonetsel admin ekranlari gibi modullerle tek bir akista calisir.

## Projenin Amaci

- Hastalarin hastalik surecini daha duzenli takip etmesini saglamak
- Bilgilendirme iceriklerine tek yerden hizli erisim sunmak
- Belirti, tahlil ve deneyim verilerini uygulama icinde kayit altina almak
- Uzman ile iletisim surecini dijital olarak desteklemek

## Temel Ozellikler

- Kullanici kayit ve giris sistemi
- Kolorektal kanser bilgilendirme ekrani
- COVID-19 bilgilendirme ekrani
- Belirti yonetimi ve belirti takvimi
- Kan tahlili kaydi ve tahlil detay goruntuleme
- Uzmana soru sorma ve soru detay akisi
- Hasta deneyimi paylasim alani
- Beslenme ve yasam onerileri
- Iletisim ve hakkimizda ekranlari
- Admin paneli, admin sorular ve admin kullanicilar ekranlari

## Teknoloji Yigini

- `React Native` (mobil uygulama)
- `Expo` (gelistirme ve build altyapisi)
- `React Navigation` (ekran gecisleri)
- `React Native Paper` (UI bilesenleri)
- `AsyncStorage` (yerel veri saklama)
- `expo-linear-gradient`, `expo-font`, `@expo/vector-icons`

## Mimari Ozet

Uygulama iki ana navigasyon akisina ayrilir:

- `AuthNavigator`: Giris ve kayit ekranlari
- `MainNavigator`: Uygulamanin ana modulleri

Kullanici oturumu `AuthContext` icinde yonetilir. Giris bilgisi ve bazi modullerdeki veri, cihazda `AsyncStorage` ile saklanir.

## Proje Klasor Yapisi

```text
src/
  context/        -> Uygulama durumu (AuthContext)
  navigation/     -> Auth ve Main navigator tanimlari
  screens/
    about/        -> Hakkimizda
    admin/        -> Admin ekranlari
    auth/         -> Giris / Kayit
    contact/      -> Iletisim
    experience/   -> Hasta deneyimleri
    info/         -> Bilgilendirme ekranlari
    labs/         -> Kan tahlili ekranlari
    main/         -> Dashboard
    questions/    -> Uzmana sor modulu
    recommendations/ -> Oneriler
    symptoms/     -> Belirti yonetimi ve takvimi
  theme/          -> Uygulama temasi
```

## Kurulum

Gereksinimler:

- Node.js 18+
- npm 9+
- Expo Go (telefon/tablet)

Adimlar:

1. Bagimliliklari yukleyin:

```bash
npm install
```

2. Uygulamayi baslatin:

```bash
npm start
```

3. Ayni agdaki mobil cihazdan Expo Go ile QR kodu okutun.

Not: Ag problemi yasarsaniz su komut daha stabil calisir:

```bash
npx expo start --tunnel --port 8085
```

## NPM Scriptleri

- `npm start` -> Expo development server (`--port 8085`)
- `npm run android` -> Android emulator/cihaz
- `npm run ios` -> iOS simulator (macOS)
- `npm run web` -> Web preview

## Demo Giris Bilgisi

Admin ekranlarini test etmek icin:

- E-posta: `admin@kolorektal.com`
- Parola: Herhangi bir deger (demo akis)

## Veri Saklama

Bu surumde backend baglantisi yoktur. Veriler cihazda yerel olarak saklanir:

- Oturum bilgisi: `user`
- Belirti takvimi: `belirtiTakvimi`
- Uzmana sorular: `uzmanaSorular`
- Hasta deneyimleri: `hastaDeneyimleri`
- Kan tahlilleri: `kanTahlilleri`

## Uretim Build (EAS)

1. EAS CLI kurulum:

```bash
npm install -g eas-cli
eas login
```

2. Android build:

```bash
eas build --platform android --profile production
```

3. iOS build:

```bash
eas build --platform ios --profile production
```

## Hocalar Icin APK Dagitimi (GitHub Release)

Hocalarin uygulamayi kolayca indirip kurabilmesi icin `APK` dosyasini repo icine degil, GitHub `Release` alanina yukleyin.

1. APK olusturun:

```bash
npm run build:apk
```

2. Build tamamlandiginda EAS size `.apk` indirme linki verir. Dosyayi indirin.

3. GitHub repo sayfasinda:
- `Releases` -> `Draft a new release`
- Tag olusturun (ornek: `v1.0.0`)
- APK dosyasini `Attach binaries` ile ekleyin
- `Publish release`

4. README icine release linkini ekleyin ki hocalar direkt indirebilsin.

## Bilinen Notlar

- Proje su anda demo amaclidir.
- Kimlik dogrulama backend yerine lokal akista calisir.
- Uretim icin API, guvenli auth, validasyon ve test katmani eklenmelidir.

## Yol Haritasi (Oneri)

- JWT tabanli gercek kimlik dogrulama
- Doktor/Hemsire rolleri icin yetkilendirme
- Bulut veritabani entegrasyonu
- Bildirim altyapisi
- Form validasyon ve hata yonetimi iyilestirmeleri
- Birim ve entegrasyon testleri

## Lisans

Bu proje egitim ve prototipleme amacli gelistirilmistir.
