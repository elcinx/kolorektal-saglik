import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#81C784',
    secondary: '#FFB74D',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    error: '#E57373',
    onSurface: '#424242',
    onSurfaceVariant: '#757575',
  },
};

export const colors = {
  primary: '#81C784',
  secondary: '#FFB74D',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#424242',
  textLight: '#757575',
  border: '#E0E0E0',
  error: '#E57373',
  success: '#81C784',
  info: '#64B5F6',
  warning: '#FFB74D',
  pastelBlue: '#B3E5FC',
  pastelPink: '#F8BBD0',
  pastelPurple: '#E1BEE7',
  pastelGreen: '#C8E6C9',
  pastelOrange: '#FFE0B2',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: 'Orchids',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: 'Orchids',
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    fontFamily: 'Orchids',
  },
  body: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Orchids',
  },
  caption: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: 'Orchids',
  },
};

export const fonts = {
  regular: 'Orchids',
  bold: 'Orchids',
};
