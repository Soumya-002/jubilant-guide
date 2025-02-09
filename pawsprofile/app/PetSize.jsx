import { Link, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { useProgress } from '../state/ProgressContext';
import ProgressBar from '../components/ProgressBarComponent';
import AppHeader from '../components/appHeader';
import { useRouter } from "expo-router";


const sizes = [
  { id: 'small', label: 'Small', weight: 'Under 14kg', photos:require('../assets/images/Dog_sm.svg') },
  { id: 'medium', label: 'Medium', weight: '14-25kg', photos:require('../assets/images/Dog_md.svg') },
  { id: 'large', label: 'Large', weight: 'Over 25kg', photos:require('../assets/images/Dog_lg.svg') },
];

export default function addPet() {
    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState(null);
    const { step, setStep, totalSteps } = useProgress();

    const handleNextStep = () => {
      if (step < totalSteps) {
        setStep(step + 1);
      }
    };
    // source={{ uri: "https://s3-alpha-sig.figma.com/img/2524/6aed/141c52b015b1c0bf39e3b8a30191ae7e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjLATYmM1E4Hg2Ajx1PbKpv0-jTiKdyTZeVlyjROodMwwLWENdNmbBKG3QwNmVe8dK87qs7K7Fi9uRlZIZ7-JuRcuHMfgNFkjvV5wjp4IpOY1dorr5DbntmIIcBCJZN0keBltzr2IyEGc0XxHQslxfiqakFExmLS5ra8oBUl5yoWfZpRVRqY5ksYzythiv5QxL9GxqZCR9Uzffu2Y5-pGLwdAzx3-sLFoUbxY0D-hHN-qap-UOlkySriL-iyLg8dlu1rissjv4gNICOCOZcKuzZHruz9jK-nNwId9mL1tEnERsxmUIM61g1MHQBGkq90s~NGEZVHp87Y8ILB9KzUVA__",

  return (
    <View className="flex bg-gray-100 lg:w-1/3 lg:mx-auto">
      <AppHeader title="Breed"/>
      <ProgressBar/>
      <View className="p-6">
        <View className="items-center mb-8">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0fGVufDB8fDB8fHww' }}
            className="w-24 h-24 rounded-full mb-6"
            resizeMode="cover"
          />
          <Text className="text-2xl font-bold text-center">
            What's your pet's size?
          </Text>
          <Text className="text-gray-600 text-center mt-2">
            Automatic selection based on your pets breed.{'\n'}
            Adjust according to reality.
          </Text>
        </View>

        <View className="flex-row justify-between items-center mb-8 ">
          {sizes.map((size) => (
            <Pressable
              key={size.id}
              onPress={() => setSelectedSize(size.id)}
              className={`items-center w-[30%] p-4 rounded-xl ${
                selectedSize === size.id
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <View className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${
                selectedSize === size.id ? 'bg-blue-500' : 'bg-gray-100'
              }`}>
                <Image
                source={size.photos}
                 className={`text-2xl ${
                  selectedSize === size.id ? 'text-white' : 'text-gray-400'
                }`}/>
              </View>
              <Text className={`font-semibold ${
                selectedSize === size.id ? 'text-blue-500' : 'text-gray-900'
              }`}>
                {size.label}
              </Text>
              <Text className="text-xs text-gray-500 text-center mt-1">
                {size.weight}
              </Text>
            </Pressable>
          ))}
        </View>

        <TouchableOpacity
          className={`p-4 rounded-lg mt-4 ${
            selectedSize ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          disabled={!selectedSize}
          onPress={() => {
            router.push("/WeightScreen"
            );
          }}
        >
          <Text className="text-white text-center font-bold text-lg">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}