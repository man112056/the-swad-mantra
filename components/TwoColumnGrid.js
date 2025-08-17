import { StyleSheet, Text, View } from "react-native";

export default function TwoColumnGrid() {
  return (
    <View style={styles.container}>
      {[...Array(10).keys()].map((i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.boxText}>Box {i + 1}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse", // main axis horizontal (row)
    flexWrap: "wrap", // allow wrapping to next line
    justifyContent: "space-between", // space between items horizontally
    padding: 10,
  },
  box: {
    backgroundColor: "#8d903aa0",
    width: "18%", // roughly half width to get 2 columns with space-between
    height: 100,
    marginBottom: 10,
    justifyContent: "center", // center text vertically
    alignItems: "center", // center text horizontally
    borderRadius: 15,
  },
  boxText: {
    color: "white",
    fontSize: 18,
  },
});
