import "../../global.css";
import { DarkTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      card: "#101010",
    },
  };

  return (
    <ThemeProvider value={CustomDarkTheme}>
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
