import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import { Text, Surface, TextInput, Button } from 'react-native-paper';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function IletisimScreen() {
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [mesaj, setMesaj] = useState('');

  const handleMesajGonder = () => {
    const mesajText = `E-posta: ${email}\nTelefon: ${telefon}\nMesaj: ${mesaj}`;
    Linking.openURL(`mailto:${email}?subject=Kolorektal%20Sağlık%20Mesajı&body=${encodeURIComponent(mesajText)}`);
  };

  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.pastelBlue]}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Surface style={styles.surface}>
          <Text variant="headlineMedium" style={styles.title}>
            İletişim
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Bizimle iletişime geçin
          </Text>

          <TextInput
            label="E-posta"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            style={styles.input}
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            label="Telefon"
            value={telefon}
            onChangeText={setTelefon}
            mode="outlined"
            keyboardType="phone-pad"
            style={styles.input}
            left={<TextInput.Icon icon="phone" />}
          />

          <TextInput
            label="Mesajınızı"
            value={mesaj}
            onChangeText={setMesaj}
            mode="outlined"
            multiline
            numberOfLines={4}
            style={styles.input}
            placeholder="Mesajınızı buraya yazın..."
          />

          <Button
            mode="contained"
            onPress={handleMesajGonder}
            disabled={!email.trim() || !telefon.trim() || !mesaj.trim()}
            style={styles.sendButton}
            icon="email"
          >
            Mesaj Gönder
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
    marginTop: spacing.md,
    backgroundColor: colors.primary,
  },
});
