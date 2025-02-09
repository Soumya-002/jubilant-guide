import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity className="flex-row items-center py-3 px-2">
    <Ionicons name={icon} size={24} color="#4B5563" className="p-2" />
    <Text className="text-white text-base ml-3">{label}</Text>
  </TouchableOpacity>
);

const PetAvatar = ({ name, image, isActive }) => (
  <View className="items-center mr-4">
    <Image
      source={{ uri: image }}
      className={`w-16 h-16 rounded-full ${
        isActive ? "border-4 border-red-500" : ""
      }`}
    />
    <Text
      className={`text-white text-xs mt-1 ${isActive ? "text-blue-500" : ""}`}
    >
      {name}
    </Text>
  </View>
);

export default function DashboardDetails() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1 p-4 mt-4">
        {/* Profile Section */}
        <View className="flex-row items-center mb-6">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            }}
            className="h-12 w-12 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-gray-400">Hello,</Text>
            <Text className="text-white text-lg font-bold">Esther</Text>
          </View>
          <View className="ml-3 flex-1 items-end">
            <TouchableOpacity onPress={() => router.push("/Dashboard")}>
              <Ionicons name="close-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Pets Section */}
        <Text className="text-gray-400 mb-4">Your Pets</Text>
        <View className="flex-row mb-6">
          <PetAvatar
            name="Maxi"
            image="https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=2048x2048&w=is&k=20&c=cHYjLUgpd8iz2NHmEgZZS2TsPaNsWMMyYdybxlwtE6g="
            isActive={true}
          />
          <PetAvatar
            name="Fiona"
            image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
          />
          <View className="items-center mr-4">
            <TouchableOpacity className="w-14 h-14 rounded-full bg-gray-700 items-center justify-center">
              <Text className="text-white text-2xl">+</Text>
            </TouchableOpacity>
            <Text className="text-white text-xs mt-1">add new</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="mt-4">
          <MenuItem icon="apps-outline" label="My Profile" />
          <MenuItem icon="medkit-outline" label="Vaccination Records" />
          <MenuItem icon="calendar-outline" label="Calendar" />
          <MenuItem icon="person" label="Account" />
          <MenuItem icon="settings-outline" label="Settings" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
