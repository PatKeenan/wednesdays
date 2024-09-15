import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import * as React from "react";

export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
