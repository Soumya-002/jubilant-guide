import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Slider from '@react-native-community/slider';
import AppHeader from '../components/appHeader';
import ProgressBar from "../components/ProgressBarComponent";
import { useRouter } from "expo-router";
import { useProgress } from "../state/ProgressContext";


export default function weightScreen() {
  const router = useRouter();
  const [weight, setWeight] = useState(22.2);
  const [unit, setUnit] = useState("kg");
  const { step, setStep, totalSteps } = useProgress();

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <View className="flex-1 bg-white lg:w-1/3 lg:mx-auto">
      <AppHeader title="weightScreen"/>
      <ProgressBar/>

    <View className="flex-1 p-6 justify-center">
      <View className="items-center mb-8">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' }}
          className="w-28 h-28 rounded-full"
        />
      </View>

      <Text className="text-xl font-semibold text-center mb-2">
        What's your pet's weight?
      </Text>
      <Text className="text-gray-500 text-center mb-12">
        Automatic selection based on your pets breed.{'\n'}
        Adjust according to reality
      </Text>

      <Text className="text-7xl text-blue-500 font-bold text-center mb-8">
        {weight.toFixed(1)}
      </Text>

      <View className="mb-8">
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={weight}
          onValueChange={setWeight}
          minimumTrackTintColor="#2196F3"
          maximumTrackTintColor="#EEEEEE"
          thumbTintColor="#2196F3"
        />
        <View className="flex-row justify-between px-2">
          <Text className="text-gray-400">|</Text>
          <Text className="text-gray-400">|</Text>
          <Text className="text-gray-400">|</Text>
          <Text className="text-gray-400">|</Text>
          <Text className="text-gray-400">|</Text>
        </View>
      </View>

      <View className="flex-row justify-center space-x-4 mb-12">
        <TouchableOpacity
          className={`px-8 py-2 rounded-full ${
            unit === 'kg' ? 'bg-blue-500' : 'bg-gray-100'
          }`}
          onPress={() => setUnit('kg')}
        >
          <Text
            className={`${unit === 'kg' ? 'text-white' : 'text-gray-500'}`}
          >
            kg
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-8 py-2 rounded-full ${
            unit === 'lb' ? 'bg-blue-500' : 'bg-gray-100'
          }`}
          onPress={() => setUnit('lb')}
        >
          <Text
            className={`${unit === 'lb' ? 'text-white' : 'text-gray-500'}`}
          >
            lb
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-full"
        onPress={() => {
          router.push("/SetDates");
          handleNextStep();
        }}
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};
