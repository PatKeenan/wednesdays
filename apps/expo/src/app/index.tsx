import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex flex-col gap-y-2 px-4">
        <Button>
          <Text>Hello there</Text>
        </Button>
        <Text className="text-2xl font-bold">Hello</Text>
        {/* Dump all the links here */}
        <Link href="/welcome">Go to Welcome Screen</Link>
        <Link href="/sign-in">Go to Sign In Screen</Link>
        <Link href="/sign-up">Go to Sign Up Screen</Link>

        <Link href="/home">Go to Tabs Screen</Link>
      </View>
    </SafeAreaView>
  );
}
