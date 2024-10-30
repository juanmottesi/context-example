import { AuthContext } from "@/hooks/AuthContext";
import { useContext } from "react";
import { Text, View } from "react-native";

const User = () => {
  const user = useContext(AuthContext);
  console.log(user)
  return (
    <View>
      <Text>Home - User</Text>
    </View>
  )
}

export default User;
