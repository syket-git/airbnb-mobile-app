import Colors from "@/constants/Colors";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const ModalHeaderText = () => {
  const [active, setActive] = useState(0);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={{
            fontFamily: "Mono-SemiBold",
            fontSize: 18,
            color: active === 0 ? "#000" : Colors.grey,
            textDecorationLine: active === 0 ? "underline" : "none",
          }}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={{
            fontFamily: "Mono-SemiBold",
            fontSize: 18,
          }}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ModalHeaderText;
