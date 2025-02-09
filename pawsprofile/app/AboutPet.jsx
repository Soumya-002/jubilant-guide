import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DogHeader from "../components/DogSelectHeader";

const tabs = ["About", "Health", "Nutrition", "Activities"];

export default function PetProfile() {
  const [activeTab, setActiveTab] = useState("About");
  const [isEditing, setIsEditing] = useState(false);

  const [petInfo, setPetInfo] = useState({
    name: "Maxi",
    breed: "Dog | Border Collie",
    appearance:
      "Brown-Dark-White mix, with light eyebrows shape and a heart-shaped patch on left paw.",
    gender: "Male",
    size: "Medium",
    weight: "22.2 kg",
    birthday: "3 November 2019 (5 y.o)",
    adoptionDay: "6 January 2020",
    caretakers: [
      { id: 1, name: "Esther Howard", email: "esther.howard@gmail.com" },
      { id: 2, name: "Guy Hawkins", email: "guyhawkins@gmail.com" },
    ],
  });

  const newCaretaker = {
    id: petInfo.caretakers.length + 1,
    name: "New Caretaker",
    email: "new.caretaker@example.com",
  };

  const HandleUser = () => {
      setPetInfo((prev) => ({
        ...prev,
        caretakers: [...prev.caretakers, newCaretaker],
      }));
  }

  const handleChange = (field, value) => {
    setPetInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <DogHeader />

      <View className="py-2 mt-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`px-6 py-2 mx-1 rounded-full ${
                activeTab === tab ? "bg-yellow-400" : "bg-white"
              }`}
            >
              <Text
                className={`text-lg ${
                  activeTab === tab ? "text-white font-bold" : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View className="bg-white rounded-lg p-4 mt-4 border border-gray-200">
        <View className="flex-row items-center mb-2.5">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
            }}
            className="w-24 h-24 rounded-full mr-4 shadow-lg"
          />
          <View className="flex-1">
            <View className="flex-row items-center justify-between">
              {isEditing ? (
                <TextInput
                  className="text-2xl font-bold flex-1"
                  value={petInfo.name}
                  onChangeText={(text) => handleChange("name", text)}
                />
              ) : (
                <Text className="text-2xl font-bold">{petInfo.name}</Text>
              )}
              <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                <FontAwesome name="edit" size={24} className="text-blue-500" />
              </TouchableOpacity>
            </View>
            {isEditing ? (
              <TextInput
                className="text-gray-500 text-base"
                value={petInfo.breed}
                onChangeText={(text) => handleChange("breed", text)}
              />
            ) : (
              <Text className="text-gray-500 text-base">{petInfo.breed}</Text>
            )}
          </View>
        </View>

        <Text className="text-base font-bold mt-2.5">
          Appearance and distinctive signs
        </Text>
        {isEditing ? (
          <TextInput
            className="text-gray-500 text-base"
            value={petInfo.appearance}
            onChangeText={(text) => handleChange("appearance", text)}
          />
        ) : (
          <Text className="text-gray-500 text-base">{petInfo.appearance}</Text>
        )}

        {/* Gender, Size, Weight */}
        {["gender", "size", "weight"].map((field) => (
          <View key={field} className="flex-row justify-between mt-2">
            <Text className="text-gray-500 capitalize">{field}</Text>
            {isEditing ? (
              <TextInput
                className="font-bold"
                value={petInfo[field]}
                onChangeText={(text) => handleChange(field, text)}
              />
            ) : (
              <Text className="font-bold">{petInfo[field]}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Important Dates */}
      <View className="bg-white rounded-lg p-4 mt-4 border border-gray-200">
        <Text className="text-base font-bold mb-2">Important Dates</Text>
        {["birthday", "adoptionDay"].map((field) => (
          <View key={field} className="flex-row justify-between mt-2">
            <Text className="text-gray-500">
              {field === "birthday" ? "🎂 Birthday" : "📅 Adoption Day"}
            </Text>
            {isEditing ? (
              <TextInput
                className="font-bold"
                value={petInfo[field]}
                onChangeText={(text) => handleChange(field, text)}
              />
            ) : (
              <Text className="font-bold">{petInfo[field]}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Caretakers */}
      <View className="bg-white rounded-lg p-4 mt-4 border border-gray-200">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base font-bold">Caretakers</Text>
          <TouchableOpacity
            onPress={() => HandleUser()}
          >
            <FontAwesome name="plus-circle" size={24} color="green" />
          </TouchableOpacity>
        </View>
        
        {petInfo.caretakers.map((caretaker) => (
          <View key={caretaker.id} className="flex-row items-center mb-2">
            <Image
              source={{
                uri: `https://randomuser.me/api/portraits/women/50.jpg`,
              }}
              className="w-10 h-10 rounded-full mr-2"
            />
            <View className="flex-1">
              <Text className="text-base font-bold">{caretaker.name}</Text>
              <Text className="text-gray-500">{caretaker.email}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setPetInfo((prev) => ({
                  ...prev,
                  caretakers: prev.caretakers.filter(
                    (c) => c.id !== caretaker.id
                  ),
                }));
              }}
            >
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => setIsEditing(false)}
        className="bg-blue-500 p-4 rounded-lg mt-4 mb-4"
      >
        <Text className="text-white text-center font-bold">
          {isEditing ? "Save" : "Done"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
