import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding3() {
	return (
		<SafeAreaView style={styles.safeArea}>
			{/* Header */}
			<View className="flex-row justify-between items-center px-5 pt-1">
				<TouchableOpacity onPress={() => router.back()} className="p-1">
					<Ionicons name="chevron-back" size={26} color="#6C4DF5" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push("/")}>
					<Text className="font-nunito-semibold text-[16px] color-lingua-purple">
						Skip
					</Text>
				</TouchableOpacity>
			</View>

			{/* Mascot */}
			<View className="w-[300px] h-[240px] self-center items-center justify-center mt-1">
				<Text className="absolute color-lingua-lilac z-[2] top-[28px] left-[24px] text-[22px]">
					✦
				</Text>
				<Text className="absolute color-lingua-lilac z-[2] top-[110px] left-[6px] text-[28px]">
					✦
				</Text>
				<Text className="absolute color-lingua-lilac z-[2] top-[130px] right-[12px] text-[20px]">
					✦
				</Text>
				<Image
					source={images.mascot3}
					className="w-[260px] h-[240px] z-[1]"
					resizeMode="contain"
				/>
			</View>

			{/* Text content */}
			<View className="px-8 items-center mt-2">
				<Text className="font-nunito-bold text-[32px] leading-[40px] color-lingua-deep text-center">
					{"You've got this!"}
				</Text>
				<Text className="font-nunito text-[15px] leading-[22px] text-gray-500 text-center mt-2">
					Start your language journey today{"\n"}
					and open up a world of opportunities.
				</Text>
			</View>

			{/* Pagination dots */}
			<View className="flex-row items-center justify-center mt-5 gap-2">
				<View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
				<View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
				<View className="w-3 h-3 rounded-full bg-lingua-purple" />
			</View>

			{/* Let's Go! button */}
			<View className="px-6 mt-4 mb-2">
				<TouchableOpacity
					className="bg-lingua-purple rounded-2xl h-[62px] justify-center px-6"
					onPress={() => router.push("/")}
				>
					<View className="flex-row items-center">
						<View className="flex-1" />
						<Text className="font-nunito-bold text-[18px] text-white">
							{"Let's Go!"}
						</Text>
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
		backgroundColor: "#FFFFFF",
	},
});
