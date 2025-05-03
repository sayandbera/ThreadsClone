import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", animation: "fade_from_bottom" }}
      />
    </Stack>
  );
}
