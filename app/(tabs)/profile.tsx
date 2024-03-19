import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";
const profile = () => {
  const { signOut, isSignedIn } = useAuth();
  const router = useRouter();
  return (
    <View>
      {isSignedIn ? (
        <Button title="Logout" onPress={() => signOut()} />
      ) : (
        <Button title="Login" onPress={() => router.push("/(modals)/login")} />
      )}
    </View>
  );
};
export default profile;
