import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.graySecondary,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingBottom: 5,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.bgBtn,
        tabBarInactiveTintColor: colors.grayPrimary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="view-list" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="carrinho"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
