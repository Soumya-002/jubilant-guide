import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DogSelectHeader from "../components/DogSelectHeader"

const tabs = ["About", "Health", "Nutrition", "Activities"]; 

const HealthItem = ({ icon, title }) => (
  <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white rounded-xl mb-3">
    <View className="flex-row items-center gap-3">
      {icon}
      <Text className="text-base">{title}</Text>
    </View>
    <Ionicons name="add" size={24} color="#2196F3" />
  </TouchableOpacity>
);

export default function dummy() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <SafeAreaView className="flex-1 bg-slate-200">
      <DogSelectHeader />
      <View className="p-1 mb-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              onPress=""
              className={`px-6 py-2 mx-1 rounded-full ${
                activeTab === tab ? "bg-yellow-300" : "bg-white"
              }`}
            >
              <Text
                className={`text-lg ${
                  activeTab === tab
                    ? "text-white font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <ScrollView className="flex-1 p-6">
        <HealthItem
          icon={<Ionicons name="shield-outline" size={24} color="#64B5F6" className="p-1" />}
          title="Insurance"
        />
        <HealthItem
          icon={<Ionicons name="medical-outline" size={24} color="#4CAF50" className="p-1" />}
          title="Vaccines"
        />
        <HealthItem
          icon={<Ionicons name="fitness-outline" size={24} color="#FF4081" className="p-1" />}
          title="Anti-parasitical treatments"
        />
        <HealthItem
          icon={<Ionicons name="heart-outline" size={24} color="#FFA726" className="p-1" />}
          title="Medical interventions"
        />
        <HealthItem
          icon={<Ionicons name="bandage-outline" size={24} color="#EF5350" className="p-1" />}
          title="Other treatments"
        />
      </ScrollView>
      <TouchableOpacity className="bg-blue-500 m-4 p-4 rounded-xl">
        <Text className="text-white text-center font-medium">Edit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
