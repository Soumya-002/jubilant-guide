import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import UserHeader from "../components/userHeader";
import Capture from "../assets/images/capture.png";
import { useRouter } from "expo-router";

export default function empty() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white ">
      <View className="p-4 h-screen lg:h-max lg:mx-auto">
        <UserHeader />

        <View className="items-center justify-center flex-1 p-8 h-32">
          <Image
            source={Capture}
            className="w-48 h-48 mb-6"
            resizeMode="contain"
          />

          <Text className="text-2xl font-bold mb-4">Uh Oh!</Text>
          <Text className="text-gray-500 text-center">
            Looks like you have no profiles set up at this moment, add your pet
            now
          </Text>
        </View>

        <View className="p-4">
          <TouchableOpacity
            onPress={() => router.push("/PetProfile")}
            className="bg-blue-200 p-4 rounded-full"
          >
            <Text className="text-blue-600 font-bold text-center">
              Swipe to continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
