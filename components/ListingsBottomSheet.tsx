import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Listing from "./Listing";

interface Props {
  listings: any;
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoint = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState(0);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoint}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      enablePanDownToClose={false}
      index={1}
      style={styles.sheetContainer}
    >
      <View style={{ flex: 1 }}>
        <Listing listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteButton}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
            <Text style={{ color: "#fff", fontFamily: "Mono-SemiBold" }}>
              Map
            </Text>
            <Ionicons name="map" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteButton: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    flexDirection: "row",
    borderRadius: 30,
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 10,
  },
});

export default ListingsBottomSheet;
