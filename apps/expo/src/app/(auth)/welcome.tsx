import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex h-full w-full items-center justify-center px-4 gap-y-2">
        <Text className="text-2xl">Welcome to the app</Text>
      </View>
    </SafeAreaView>
  );
}
