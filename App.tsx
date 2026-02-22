// Gege Money Tracker - Main App Entry
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import DashboardScreen from './src/screens/DashboardScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import VoiceScreen from './src/screens/VoiceScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Theme colors
export const COLORS = {
  primary: '#f97316',      // Orange
  background: '#fdfbf7',   // Cream/warm white
  surface: '#ffffff',
  text: '#1f2937',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  success: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  border: '#e5e7eb',
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;
              
              if (route.name === 'Dashboard') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Transactions') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Voice') {
                iconName = focused ? 'mic' : 'mic-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else {
                iconName = 'help-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.textMuted,
            tabBarStyle: {
              backgroundColor: COLORS.surface,
              borderTopColor: COLORS.border,
              paddingBottom: 8,
              paddingTop: 8,
              height: 64,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            },
            headerStyle: {
              backgroundColor: COLORS.background,
            },
            headerTintColor: COLORS.text,
            headerTitleStyle: {
              fontWeight: '600',
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Transactions" component={TransactionsScreen} />
          <Tab.Screen 
            name="Voice" 
            component={VoiceScreen}
            options={{
              tabBarLabel: 'Gege',
            }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor={COLORS.background} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
