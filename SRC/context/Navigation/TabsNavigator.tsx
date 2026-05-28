// src/navigation/TabsNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Tab = createBottomTabNavigator();
export default function TabsNavigator() {
const { colors, isDark } = useTheme();
return (
<Tab.Navigator
screenOptions={{
tabBarActiveTintColor: colors.primary,
tabBarInactiveTintColor: colors.textSecondary,
tabBarStyle: { backgroundColor: colors.surface },
headerStyle: { backgroundColor: colors.surface },
headerTintColor: colors.text,
}}
>
<Tab.Screen name='Inicio' component={HomeScreen}
options={{ tabBarIcon: ({ color, size }) =>