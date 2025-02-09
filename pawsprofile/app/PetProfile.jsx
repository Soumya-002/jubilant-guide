import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from "react-native";
import AppHeader from "../components/appHeader";
import ProgressBar from "../components/ProgressBarComponent";
import { useProgress } from "../state/ProgressContext";
import { useRouter } from "expo-router";

const dogBreeds = [
  {
    id: 1,
    name: "Akita",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/akita.jpg",
  },
  {
    id: 2,
    name: "Beagle",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/beagle.jpg",
  },
  {
    id: 3,
    name: "Border Collie",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/border-collie.jpg",
  },
  {
    id: 4,
    name: "Chow Chow",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/chow-chow.jpg",
  },
  {
    id: 5,
    name: "Golden Retriever",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/golden-retriever.jpg",
  },
  {
    id: 6,
    name: "Husky",
    image:
      "https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-react/app/assets/images/husky.jpg",
  },
];

export default function PetProfile() {
  const router = useRouter();
  const [selectedDog, setSelectedDog] = useState(null);
  const { step, setStep, totalSteps } = useProgress();

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleDogSelect = (dogId) => {
    setSelectedDog(dogId);
    const breed = dogBreeds.find((dog) => dog.id === dogId);
    Alert.alert("Selection", `Selected ${breed?.name}`);
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100 lg:w-1/3 lg:mx-auto">
      <AppHeader
        title="Breeds"
      />
      <ProgressBar />
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold text-center mb-4">
          Select Your Pet's Breed
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {dogBreeds.map((dog) => (
            <Pressable
              key={dog.id}
              className={`w-[48%] mb-4 p-4 rounded-xl ${
                selectedDog === dog.id ? "bg-blue-200" : "bg-white"
              }`}
              onPress={() => handleDogSelect(dog.id)}
            >
              <Image
                source={{ uri: dog.image }}
                className="w-32 h-32 rounded-full self-center mb-2"
                resizeMode="cover"
              />
              <Text className="text-center font-semibold">{dog.name}</Text>
            </Pressable>
          ))}
        </View>

        {selectedDog && (
          <>
            <TouchableOpacity
              className="bg-blue-500 p-4 rounded-xl mt-4"
              onPress={() => {
                router.push("/PetName");
                handleNextStep();
              }}
            >
              <Text className="text-white text-center font-bold text-lg">
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=" p-4 bg-gray-300 rounded-xl mt-4"
              onPress={() => {
                router.push("/PetName")
              }}
            >
              <Text className="text-blue-800 text-center font-bold text-lg">
                Skip for Now
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
