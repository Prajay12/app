import { View, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <TouchableOpacity
        onPress={() => console.log("Button pressed")}
        disabled={true} // Disables the touchable
        className="bg-white"
      >
        <Text style={{ color: "black", fontSize: 16 }}>Press</Text>
      </TouchableOpacity>
    </View>
  );
}
