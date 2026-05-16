import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { images } from '@/constants/images';

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Skip */}
      <View className="px-6 items-end pt-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="font-nunito-semibold text-[16px] color-lingua-purple">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Mascot illustration */}
      <View className="flex-1 items-center justify-center">
        <View className="w-[300px] h-[320px] items-center justify-center">
          <View className="absolute w-[260px] h-[260px] rounded-full bg-[#EDE9FF]" />
          <Text className="absolute color-lingua-lilac z-[2] top-[70px] left-[8px] text-[28px]">✦</Text>
          <Text className="absolute color-lingua-lilac z-[2] top-[18px] right-[38px] text-[16px]">✦</Text>
          <Text className="absolute color-lingua-lilac z-[2] top-[148px] right-[4px] text-[22px]">✦</Text>
          <Image
            source={images.mascot1}
            className="w-[260px] h-[300px] z-[1]"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Text content */}
      <View className="px-8 items-center">
        <Text className="font-nunito-bold text-[32px] leading-[42px] color-lingua-deep text-center">
          Learn languages.{'\n'}Grow every day.
        </Text>
        <Text className="font-nunito text-[16px] leading-6 text-gray-500 text-center mt-4">
          Fun, bite-sized lessons that fit your day{'\n'}
          and help you build real language skills{'\n'}
          step by step.
        </Text>
      </View>

      {/* Pagination dots */}
      <View className="flex-row items-center justify-center mt-8 gap-2">
        <View className="w-3 h-3 rounded-full bg-lingua-purple" />
        <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      </View>

      {/* Get Started button */}
      <View className="px-6 mt-6 mb-6">
        <TouchableOpacity
          className="bg-lingua-purple rounded-2xl h-[62px] justify-center px-6"
          onPress={() => router.push('/onboarding2')}
        >
          <View className="flex-row items-center">
            <View className="flex-1" />
            <Text className="font-nunito-bold text-[18px] text-white">Get Started</Text>
            <View className="flex-1 items-end">
              <Text className="font-nunito-bold text-[20px] text-white">→</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
