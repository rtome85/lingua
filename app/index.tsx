import { Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-8">
      <Text className="text-display-lg color-lingua-purple">
        Welcome to Lingua
      </Text>
      <TouchableOpacity onPress={() => router.push('/onboarding')}>
        <Text className="text-body-lg color-lingua-purple">
          View Onboarding →
        </Text>
      </TouchableOpacity>
    </View>
  );
}
