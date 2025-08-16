import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function SampleUseState() {
  const [msg, setMessage] = useState("");

  useEffect(() => {
    setMessage("this is oncreate");
  }, []);
  
  return (
    <View>
      <Text>{msg}</Text>
    </View>
  );

  
}
