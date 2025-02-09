import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import AppHeader from "../components/appHeader";
import ProgressBar from "../components/ProgressBarComponent";
import { useRouter } from "expo-router";
import { useProgress } from "../state/ProgressContext";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PetName() {
  const router = useRouter();
  const [petName, setPetName] = useState("");
  const [image, setImage] = useState("https://images.unsplash.com/photo-1583337130417-3346a1be7dee");
  const { step, setStep, totalSteps } = useProgress();

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white lg:w-1/3 lg:mx-auto">
      <AppHeader title="Name" />
      <ProgressBar />

      <View className="flex-1 p-6 items-center justify-center">
        {/* Pet Image */}
        <TouchableOpacity onPress="" className="mb-8">
          <View className="w-40 h-40 rounded-full bg-gray-100">
              <Image source={{ uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" }} className="w-full h-full rounded-full" />
              <View className=" w-full h-full items-center justify-end">
                <View className="absolute -top-5 bg-white p-3 rounded-full border border-gray-200 shadow-md">
                  <Ionicons name="image-outline" size={18} color="#007bff" />
                </View>
              </View>
          </View>
        </TouchableOpacity>

        <Text className="text-lg font-medium mb-4 text-center">
          What's your pet's name?
        </Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-gray-500"
          placeholder="Your pet's name"
          value={petName}
          onChangeText={setPetName}
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 m-4 p-4 rounded-lg"
        onPress={() => {
          router.push("/WeightScreen");
          handleNextStep();
        }}
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
