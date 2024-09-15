import { View } from "react-native";
import { Text } from "~/components/ui/text";
import * as React from "react";
import { getBaseUrl } from "~/utils/get-base-url";
import { memberSchema } from "schemas";
import { z } from "zod";
import { Stack, Tabs } from "expo-router";

type Member = z.infer<typeof memberSchema>;

// Create a custom fetch hook similar to useSWR
type UseFetch<T> = {
  data?: T;
  error: Error | null;
  isLoading: boolean;
};

function useFetch<T>(url: string, options?: RequestInit): UseFetch<T> {
  const [data, setData] = React.useState<T | undefined>();
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // add fake timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, error, isLoading };
}

export default function HomeScreen() {
  const {
    data: members,
    error,
    isLoading,
  } = useFetch<Member[]>(`${getBaseUrl()}/api/members`);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <Text>
        {members?.map((i) => (
          <Text key={i.name}>{i.name}</Text>
        ))}
      </Text>
    </View>
  );
}
