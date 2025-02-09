import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "./appHeader";
import ProgressBar from './ProgressBarComponent';
import { useProgress } from "../state/ProgressContext";


const insurancePackages = [
  {
    id: "1",
    name: "Basic Pack",
    price: "$20 /month",
    icon: "umbrella-outline",
  },
  {
    id: "2",
    name: "Comfy Pack",
    price: "$25 /month",
    icon: "shield-checkmark-outline",
  },
  { id: "3", name: "King Pack", price: "$35 /month", icon: "crown-outline" },
];



export default function InsuranceModal({ onClose, onSelect }) {
  const [selectedPackage, setSelectedPackage] = useState(null); 
  const { step, setStep, totalSteps } = useProgress(); 
  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <View className="flex-1 justify-end bg-black bg-opacity-50">
      <View className="flex bg-white w-11/12 rounded-3xl p-6 shadow-lg justify-end mx-auto">
        <AppHeader title="Packages"/>
        <ProgressBar/>

        <FlatList
          data={insurancePackages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`flex-row items-center justify-evenly p-4 my-2 border rounded-lg ${
                selectedPackage === item.id
                  ? "border-2 border-blue-500"
                  : "border-gray-300"
              }`}
              onPress={() => setSelectedPackage(item.id)} 
            >
              <View className="flex-row items-center flex-1 justify-between p-4">
                <Ionicons
                  name={item.icon}
                  size={24}
                  color={selectedPackage === item.id ? "blue" : "gray"}
                />
                <Text className="text-base font-semibold">{item.name}</Text>
                <Text className="text-sm text-gray-500">{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Confirm Selection Button */}
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg items-center mt-4"
          onPress={() => {
            if (selectedPackage) {
              handleNextStep(); // Increment step
              onSelect(selectedPackage); // Send selected package back to parent
              onClose(); // Close the modal
            }
          }}
        >
          <Text className="text-white font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
