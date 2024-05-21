import {  Stack, Tabs } from 'expo-router';

export default function OrdersLayout() {
  return (
  <Stack>
      <Stack.Screen name="index" options={{ headerShown: true, title: 'Orders' }} />
      <Stack.Screen name="[id]" options={{ headerShown: true }} />
</Stack>);
};