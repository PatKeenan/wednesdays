// Sign in screen

import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";

export default function SignInScreen() {
  return (
    <SafeAreaView>
      <View className="flex h-full w-full items-center justify-center px-4">
        <View className="flex flex-col gap-4 items-center">
          <Text className="text-2xl">Sign In Page</Text>
          <Text>
            Don't have an account?{" "}
            <Link href="/sign-up" asChild>
              <Text className="text-primary font-medium text-blue-600 underline">
                Sign Up
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
