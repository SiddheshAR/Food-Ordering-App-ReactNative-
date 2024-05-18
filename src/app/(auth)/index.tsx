import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, Tabs, useRouter } from 'expo-router';
import React from 'react';
import Button from '@/components/Button'
import { View, Text, StyleSheet, Pressable } from 'react-native';

const AuthIndex = () => {
  const router = useRouter();

  return (
<Link href={'(auth)/sign-in'} asChild>
  <Button text={"Sign-in"} />
</Link>
  );
};
export default AuthIndex