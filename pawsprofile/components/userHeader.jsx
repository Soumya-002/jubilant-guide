import { View, Text, Image, TouchableOpacity } from "react-native";
import { Search, Menu } from "lucide-react-native";
import React from "react";
import { useRouter } from "expo-router"; // Import router

export default function UserHeader() {
  const router = useRouter(); // Initialize router

  return (
    <View className="flex-row items-center justify-between mb-6 mt-6">
      {/* Profile Section */}
      <View className="flex-row items-center gap-3">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          }}
          className="w-10 h-10 rounded-full"
        />
        <View>
          <Text className="text-sm text-gray-500">Hello,</Text>
          <Text className="font-bold text-gray-600">Esther</Text>
        </View>
      </View>

      {/* Icons Section */}
      <View className="flex-row gap-2">
        {/* Search Button */}
        <TouchableOpacity onPress={() => console.log("Search pressed")}>
          <Search size={24} color="#4B5563" className="mr-2" />
        </TouchableOpacity>

        {/* Menu Button */}
        <TouchableOpacity onPress={() => router.push("/DashboardDetails")}>
          <Menu size={24} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
