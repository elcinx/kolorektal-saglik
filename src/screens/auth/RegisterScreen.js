import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, Surface } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }

    if (password !== confirmPassword) {
      setError('Parolalar eşleşmiyor');
      return;
    }

    if (password.length < 6) {
      setError('Parola en az 6 karakter olmalıdır');
      return;
    }

    setLoading(true);
    setError('');

    const result = await register(email, password);
    
    if (!result.success) {
      setError(result.error || 'Kayıt başarısız');
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelBlue, colors.pastelGreen]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Surface style={styles.surface}>
            <Text variant="headlineMedium" style={styles.title}>
              Kayıt Ol
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              Yeni hesap oluşturun
            </Text>

            <TextInput
              label="E-posta"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
            />

            <TextInput
              label="Parola"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
            />

            <TextInput
              label="Parola Tekrar"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              left={<TextInput.Icon icon="lock-check" />}
            />

            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : null}

            <Button
              mode="contained"
              onPress={handleRegister}
              loading={loading}
              disabled={loading}
              style={styles.button}
            >
              Kayıt Ol
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.goBack()}
              style={styles.loginButton}
            >
              Zaten hesabınız var mı? Giriş Yapın
            </Button>
          </Surface>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
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
  button: {
    marginTop: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.primary,
  },
  loginButton: {
    marginTop: spacing.md,
  },
  error: {
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
