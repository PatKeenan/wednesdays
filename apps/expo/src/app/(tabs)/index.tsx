import { View } from "react-native";
import { Text } from "~/components/ui/text";
import * as React from "react";
import { getBaseUrl } from "~/utils/get-base-url";
import { memberSchema } from "schemas";
import { z } from "zod";

type Member = z.infer<typeof memberSchema>;

export default function HomeScreen() {
  const [members, setMembers] = React.useState<Member[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${getBaseUrl()}/api/members`);

      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data: Promise<Member[]> = await response.json();
      setMembers(await data);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>
        {members.map((i) => (
          <Text key={i.name}>{i.name}</Text>
        ))}
      </Text>
    </View>
  );
}
