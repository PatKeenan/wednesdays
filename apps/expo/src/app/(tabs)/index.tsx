import { View } from "react-native";
import { Text } from "~/components/ui/text";
import * as React from "react";

export default function HomeScreen() {
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
