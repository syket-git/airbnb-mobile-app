import ListingData from "@/assets/data/airbnb-listings.json";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";
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
      <Listing listings={items} category={category} />
    </View>
  );
};
export default index;
