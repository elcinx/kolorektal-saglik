import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, Surface } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }

    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (!result.success) {
      setError(result.error || 'Giriş başarısız');
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pastelGreen, colors.pastelBlue]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Surface style={styles.surface}>
            <Text variant="headlineMedium" style={styles.title}>
              Hoş Geldiniz
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              Kolorektal Sağlık Uygulaması
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

            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : null}

            <Button
              mode="contained"
              onPress={handleLogin}
              loading={loading}
              disabled={loading}
              style={styles.button}
            >
              Giriş Yap
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.navigate('Register')}
              style={styles.registerButton}
            >
              Hesabınız yok mu? Kayıt Olun
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
  registerButton: {
    marginTop: spacing.md,
  },
  error: {
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
