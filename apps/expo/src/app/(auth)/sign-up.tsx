// Sign up screen

import { View, Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  return (
    <SafeAreaView>
      <View className="flex h-full w-full items-center justify-center px-4">
        <View className="flex flex-col gap-4 items-center">
          <Text className="text-2xl">Sign Up</Text>
          <Text>
            Already have an account?{" "}
            <Link href="/sign-in" asChild>
              <Text className="text-primary font-medium text-blue-600 underline">
                Sign In
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
