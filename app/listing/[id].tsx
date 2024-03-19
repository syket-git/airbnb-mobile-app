import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
const ListingDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>ListingDetails {id}</Text>
    </View>
  );
};
export default ListingDetails;
