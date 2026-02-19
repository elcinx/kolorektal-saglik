import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/main/DashboardScreen';
import KolorektalKanserScreen from '../screens/info/KolorektalKanserScreen';
import Covid19Screen from '../screens/info/Covid19Screen';
import BelirtiYonetimiScreen from '../screens/symptoms/BelirtiYonetimiScreen';
import BelirtiDetayScreen from '../screens/symptoms/BelirtiDetayScreen';
import BelirtiTakvimiScreen from '../screens/symptoms/BelirtiTakvimiScreen';
import UzmanaSorScreen from '../screens/questions/UzmanaSorScreen';
import SoruDetayScreen from '../screens/questions/SoruDetayScreen';
import HastaDeneyimiScreen from '../screens/experience/HastaDeneyimiScreen';
import KanTahliliScreen from '../screens/labs/KanTahliliScreen';
import TahlilDetayScreen from '../screens/labs/TahlilDetayScreen';
import OnerilerScreen from '../screens/recommendations/OnerilerScreen';
import IletisimScreen from '../screens/contact/IletisimScreen';
import HakkimizdaScreen from '../screens/about/HakkimizdaScreen';
import AdminPanelScreen from '../screens/admin/AdminPanelScreen';
import AdminSorularScreen from '../screens/admin/AdminSorularScreen';
import AdminKullanicilarScreen from '../screens/admin/AdminKullanicilarScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#81C784',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ title: 'Ana Menü' }}
      />
      <Stack.Screen 
        name="KolorektalKanser" 
        component={KolorektalKanserScreen}
        options={{ title: 'Kolorektal Kanser Hakkında' }}
      />
      <Stack.Screen 
        name="Covid19" 
        component={Covid19Screen}
        options={{ title: 'COVID-19 Bilgilendirme' }}
      />
      <Stack.Screen 
        name="BelirtiYonetimi" 
        component={BelirtiYonetimiScreen}
        options={{ title: 'Belirti Yönetimi' }}
      />
      <Stack.Screen 
        name="BelirtiDetay" 
        component={BelirtiDetayScreen}
        options={{ title: 'Belirti Detayı' }}
      />
      <Stack.Screen 
        name="BelirtiTakvimi" 
        component={BelirtiTakvimiScreen}
        options={{ title: 'Belirti Takvimi' }}
      />
      <Stack.Screen 
        name="UzmanaSor" 
        component={UzmanaSorScreen}
        options={{ title: 'Uzmana Sor' }}
      />
      <Stack.Screen 
        name="SoruDetay" 
        component={SoruDetayScreen}
        options={{ title: 'Soru Detayı' }}
      />
      <Stack.Screen 
        name="HastaDeneyimi" 
        component={HastaDeneyimiScreen}
        options={{ title: 'Hasta Deneyimi' }}
      />
      <Stack.Screen 
        name="KanTahlili" 
        component={KanTahliliScreen}
        options={{ title: 'Kan Tahlili' }}
      />
      <Stack.Screen 
        name="TahlilDetay" 
        component={TahlilDetayScreen}
        options={{ title: 'Tahlil Detayı' }}
      />
      <Stack.Screen 
        name="Oneriler" 
        component={OnerilerScreen}
        options={{ title: 'Öneriler' }}
      />
      <Stack.Screen 
        name="Iletisim" 
        component={IletisimScreen}
        options={{ title: 'İletişim' }}
      />
      <Stack.Screen 
        name="Hakkimizda" 
        component={HakkimizdaScreen}
        options={{ title: 'Hakkımızda' }}
      />
      <Stack.Screen 
        name="AdminPanel" 
        component={AdminPanelScreen}
        options={{ title: 'Admin Paneli' }}
      />
      <Stack.Screen 
        name="AdminSorular" 
        component={AdminSorularScreen}
        options={{ title: 'Sorular' }}
      />
      <Stack.Screen 
        name="AdminKullanicilar" 
        component={AdminKullanicilarScreen}
        options={{ title: 'Kullanıcılar' }}
      />
    </Stack.Navigator>
  );
}
