import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "~/components/ThemedView";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}></Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
