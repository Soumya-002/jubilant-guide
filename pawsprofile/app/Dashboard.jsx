import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Search, Menu, ChevronRight } from "lucide-react-native";
import { Link } from "expo-router";
import UserHeader from "../components/userHeader";
import { ArrowRight } from "lucide-react-native";

export default function dashboard() {
  return (
    <ScrollView className="flex-1 bg-white px-4 lg:w-1/3 lg:mx-auto">
      <UserHeader />

      <View className="mb-8">
        <View className="flex-row items-center justify-between mb-2 ">
          <Text className="font-semibold">Active pet profiles</Text>
          <View className="bg-gray-100 px-2 py-1 rounded">
            <Text className="text-sm">2</Text>
          </View>
        </View>

        <View className="bg-blue-500 p-8 rounded-lg flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-2xl font-semibold mb-1 text-white">Maxi</Text>
            <Text className="text-sm text-blue-100">Dog | Border Collie</Text>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
            }}
            className="w-16 h-16 rounded-full"
          />
        </View>
      </View>

      <View>
        <View className="flex flex-row items-center">
          <TouchableOpacity className="w-[48%] p-4 bg-gray-50 rounded-lg">
            <View className="flex-row justify-center items-start mb-4">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936",
                }}
                className="w-12 h-12 rounded"
              />
            </View>
            <Text className="font-semibold mb-1 text-center">
              Share profile
            </Text>
            <View className="flex-col justify-between">
              <Text className="text-sm text-gray-500 text-center">
                Easily share your pet's profile or add a new one
              </Text>
              <ArrowRight size={24} color="#4B5563" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-[48%] p-4 bg-gray-50 rounded-lg">
            <View className="flex-row justify-center items-start mb-4">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1606149059549-6042addafc5a",
                }}
                className="w-12 h-12 rounded"
              />
            </View>
            <Text className="font-semibold mb-1 text-center">Nutrition</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row">
          <TouchableOpacity className="w-[48%] p-4 bg-gray-50 rounded-lg">
            <View className="flex-row justify-center items-start mb-4">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
                }}
                className="w-12 h-12 rounded"
              />
            </View>
            <Text className="font-semibold mb-1 text-center">Health Card</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[48%] p-4 bg-gray-50 rounded-lg">
            <View className="flex-row justify-center items-center mb-4">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
                }}
                className="w-12 h-12 rounded"
              />
            </View>
            <Text className="font-semibold mb-1 text-center">Activities</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
