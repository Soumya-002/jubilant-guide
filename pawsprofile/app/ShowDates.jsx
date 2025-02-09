import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../components/appHeader";
import ProgressBar from "../components/ProgressBarComponent";
import { router } from "expo-router";

export default function ImportantDatesSummaryScreen() {
  const route = useRoute();
  const { birthDate = "", adoptionDate = "" } = route.params || {};

  const calculateAge = (dateString) => {
    if (!dateString) return "N/A";

    const [year, month, day] = dateString.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <View className="flex-1 bg-gray-100 lg:w-1/2 lg:mx-auto">
        <AppHeader title="Important Dates" />
        <ProgressBar />
      <View className="p-6 flex-1 justify-center">
        <View className="items-center mb-8">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
            }}
            className="w-36 h-36 rounded-full mb-6"
            resizeMode="cover"
          />
          <Text className="text-2xl font-bold text-center">
            Time to celebrate!
          </Text>
        </View>

        {/* Birthday Section */}
        {birthDate && (
          <View className="bg-white rounded-xl p-4 mb-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-4">
                <Text className="text-blue-500 text-xl">🎂</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-500">Birthday</Text>
                <Text className="font-semibold">{birthDate}</Text>
              </View>
              <Text className="text-xl font-bold text-gray-700">
                {calculateAge(birthDate)} y.o
              </Text>
            </View>
          </View>
        )}

        {/* Adoption Date Section */}
        {adoptionDate && (
          <View className="bg-white rounded-xl p-4 mb-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-4">
                <Text className="text-green-500 text-xl">🏠</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-500">Adoption Day</Text>
                <Text className="font-semibold">{adoptionDate}</Text>
              </View>
            </View>
          </View>
        )}

        {/* Continue Button */}
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg mt-4"
          onPress={() => router.push("/CareTakes")}
        >
          <Text className="text-white text-center font-bold text-lg">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
