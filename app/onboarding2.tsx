import { images } from "@/constants/images";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding2() {
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
				<Text className="absolute color-lingua-lilac z-[2] top-[62px] left-[10px] text-[26px]">
					✦
				</Text>
				<Text className="absolute color-lingua-lilac z-[2] top-[16px] right-[42px] text-[15px]">
					✦
				</Text>
				<Text className="absolute color-lingua-lilac z-[2] top-[148px] right-[6px] text-[20px]">
					✦
				</Text>
				<Image
					source={images.mascot2}
					className="size-[260px] z-[1]"
					resizeMode="contain"
				/>
			</View>

			{/* Text content */}
			<View className="px-8 items-center mt-[14px]">
				<Text className="font-nunito-bold text-[30px] leading-[38px] color-lingua-deep text-center">
					Bite-sized lessons{"\n"}that work.
				</Text>
				<Text className="font-nunito text-[15px] leading-[22px] text-gray-500 text-center mt-[10px]">
					Short, focused lessons designed to fit into{"\n"}
					your day and help you make real progress{"\n"}
					without the overwhelm.
				</Text>
			</View>

			{/* Feature list */}
			<View className="flex-1 items-center px-8 mt-[18px] gap-[14px]">
				<View className="flex-row w-full items-center justify-center gap-[14px]">
					<View className="w-14 h-14 rounded-[14px] bg-[#EDE9FF] items-center justify-center">
						<MaterialCommunityIcons
							name="bullseye-arrow"
							size={28}
							color="#6C4DF5"
						/>
					</View>
					<View className="flex-1 pt-1">
						<Text className="text-heading-2 color-lingua-deep">
							Focused learning
						</Text>
						<Text className="font-nunito text-[14px] leading-5 text-gray-500 mt-0.5">
							Each lesson targets one skill so you learn faster.
						</Text>
					</View>
				</View>

				<View className="flex-row w-full items-center gap-[14px]">
					<View className="w-14 h-14 rounded-[14px] bg-[#EDE9FF] items-center justify-center">
						<MaterialCommunityIcons
							name="calendar-check"
							size={28}
							color="#6C4DF5"
						/>
					</View>
					<View className="flex-1 pt-1">
						<Text className="text-heading-2 color-lingua-deep">
							Build a daily habit
						</Text>
						<Text className="font-nunito text-[14px] leading-5 text-gray-500 mt-0.5">
							Just a few minutes a day keeps you moving forward.
						</Text>
					</View>
				</View>

				<View className="flex-row w-full items-center gap-[14px]">
					<View className="w-14 h-14 rounded-[14px] bg-[#EDE9FF] items-center justify-center">
						<MaterialCommunityIcons
							name="chart-bar"
							size={28}
							color="#6C4DF5"
						/>
					</View>
					<View className="flex-1 pt-1">
						<Text className="text-heading-2 color-lingua-deep">
							Track your progress
						</Text>
						<Text className="font-nunito text-[14px] leading-5 text-gray-500 mt-0.5">
							{"See how far you've come and stay motivated."}
						</Text>
					</View>
				</View>
			</View>

			{/* Pagination dots */}
			<View className="flex-row items-center justify-center mt-[22px] gap-2">
				<View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
				<View className="w-3 h-3 rounded-full bg-lingua-purple" />
				<View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
			</View>

			{/* Continue button */}
			<View className="px-6 mt-[14px] mb-2">
				<TouchableOpacity
					className="bg-lingua-purple rounded-2xl h-[62px] justify-center px-6"
					onPress={() => router.push("/onboarding3")}
				>
					<View className="flex-row items-center">
						<View className="flex-1" />
						<Text className="font-nunito-bold text-[18px] text-white">
							Continue
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
