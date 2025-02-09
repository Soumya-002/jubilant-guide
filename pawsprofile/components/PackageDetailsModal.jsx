import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "./appHeader";
import ProgressBar from './ProgressBarComponent';

export default function PackageDetailsScreen({ navigation }) {
  // const { packageId } = route.params;
  const packageDetails = [
    { title: "Accidents and Injuries", price: "$20.000" },
    { title: "Illnesses and Conditions", price: "$20.000" },
    { title: "Exams and Prescriptions", price: "$10.000" },
    { title: "Procedures and Diagnostics", price: "$10.000" },
    { title: "Holistic/Alternative Therapies", price: "$3.000" },
    { title: "Other Emergencies", price: "$3.000" },
  ];
  return (
    <SafeAreaView className="flex-1 justify-end bg-black bg-opacity-50">
      <View className="flex bg-white w-11/12 rounded-3xl p-6 shadow-lg justify-end mx-auto">
        <AppHeader title="PackageDetails" />
        <ProgressBar />
        <Text className="text-lg font-semibold mt-4">Comfy Pack</Text>
        {packageDetails.map((item, index) => (
          <View
            key={index}
            className="flex-row justify-between py-4 border-b border-gray-200"
          >
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg items-center mt-4"
          onPress={() => navigation.navigate("HowItWorks")}
        >
          <Text className="text-white font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
