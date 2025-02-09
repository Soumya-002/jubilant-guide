import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { ArrowLeft, Minus, Search } from "lucide-react-native";
import { Link, useRouter } from "expo-router";
import React from "react";
import { useProgress } from "../state/ProgressContext";

export default function appHeader({ title }) {
  const { step, setStep, totalSteps } = useProgress();
  const router = useRouter();

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <View className="flex-row items-center mb-2 mt-12 lg:hidden">
        <TouchableOpacity className="p-5" onPress={() => {
          router.back();
          handlePrevStep();
        }}>
          <ArrowLeft size={24} color="#4B5563" />
        </TouchableOpacity>

      <View className="flex-1">
        <Text className="text-md font-semibold text-center">
          Add Pet Profile
        </Text>
        <Text className="text-sm text-gray-500 text-center">{title}</Text>
      </View>
      <View className="items-center p-5">
        <Text className="text-sm">Step</Text>
        <Text className="text-sm text-gray-500">{step}/{totalSteps}</Text>
      </View>
    </View>
  );
}
