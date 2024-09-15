// Root layout for the tabs and other pages

import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
