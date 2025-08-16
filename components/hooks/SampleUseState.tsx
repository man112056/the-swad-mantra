import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function SampleUseState() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count is :{count}</Text>
      <Button title="Icrement" onPress={() => setCount(count + 1)} />
    </View>
  );
}
