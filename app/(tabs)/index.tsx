import ListingDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingData from "@/assets/data/airbnb-listings.json";
import ExploreHeader from "@/components/ExploreHeader";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import ListingsMap from "@/components/ListingsMap";
import { Stack } from "expo-router";
import { useMemo, useState } from "react";
import { View } from "react-native";

const index = () => {
  const [category, setCategory] = useState("Tiny Home");
  const items = useMemo(() => ListingData, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listing listings={items as any[]} category={category} /> */}
      <ListingsMap listings={ListingDataGeo} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};
export default index;
