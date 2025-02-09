import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Minus, Search } from 'lucide-react-native';
import AppHeader from '../components/appHeader';
import ProgressBar from '../components/ProgressBarComponent';
import { useRouter } from 'expo-router';
import { useProgress } from '../state/ProgressContext';


export default function CareTakes() {
  const router = useRouter();
  const { step, setStep, totalSteps } = useProgress();
  
    const handleNextStep = () => {
      if (step < totalSteps) {
        setStep(step + 1);
      }
    };
  
  return (
    <ScrollView className="flex-1 bg-white lg:w-1/3 lg:mx-auto">
      <AppHeader title="CareTakes"/>
      <ProgressBar/>
      <View className="rounded-lg p-8 items-center ">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a" }}
          className="w-36 h-36 rounded-full"
        />
      </View> 

      <View className="p-4">
        <View className="relative">
          <View className="relative">
            <TextInput
              placeholder="Search by name, tag, email..."
              className="w-full p-5 border rounded-lg pl-10 border-gray-300"
            />
            <View className="absolute left-3 top-6">
              <Search size={16} color="#9CA3AF" className="mx-auto" />
            </View>
          </View>
        </View>
      </View>

      <View className="p-4">
        <Text className="text-sm text-gray-600 mb-3">Added contacts</Text>
        <View className="flex-row items-center justify-between p-3 border border-gray-300 rounded-lg">
          <View className="flex-row items-center gap-3">
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" }}
              className="w-10 h-10 rounded-full"
            />
            <View>
              <Text className="font-medium">Guy Hawkins</Text>
              <Text className="text-sm text-gray-500">guyhawkins@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity className="p-2">
            <Minus size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
      onPress={() => {
        router.push("/Dashboard");
        handleNextStep();
      }}
       className="w-auto bg-blue-500 p-4 rounded-lg items-center m-6">
        <Text className="text-white font-medium">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}