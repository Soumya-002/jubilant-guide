import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Checkbox } from "react-native-paper";


export default function CreateAccountScreen() {
  const router = useRouter();
  const [isSelected, setSelection] = useState(false);
  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-4 lg:w-1/3 lg:mx-auto">
      <View className="w-full h-2/5 items-center">
      <Image
        source={{ uri: "https://s3-alpha-sig.figma.com/img/2524/6aed/141c52b015b1c0bf39e3b8a30191ae7e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjLATYmM1E4Hg2Ajx1PbKpv0-jTiKdyTZeVlyjROodMwwLWENdNmbBKG3QwNmVe8dK87qs7K7Fi9uRlZIZ7-JuRcuHMfgNFkjvV5wjp4IpOY1dorr5DbntmIIcBCJZN0keBltzr2IyEGc0XxHQslxfiqakFExmLS5ra8oBUl5yoWfZpRVRqY5ksYzythiv5QxL9GxqZCR9Uzffu2Y5-pGLwdAzx3-sLFoUbxY0D-hHN-qap-UOlkySriL-iyLg8dlu1rissjv4gNICOCOZcKuzZHruz9jK-nNwId9mL1tEnERsxmUIM61g1MHQBGkq90s~NGEZVHp87Y8ILB9KzUVA__",
        }}
        className="flex-1 w-full h-full mx-auto lg:w-1/4"
      />
      </View>

      <View className="absolute bottom-10 bg-white w-11/12 rounded-3xl p-6 shadow-lg items-center">

        <View className="absolute -top-8 bg-white p-3 rounded-full border border-gray-200 shadow-md">
          <Ionicons name="person-outline" size={28} color="#007bff" />
        </View>


        <Text className="text-xl font-bold mt-14">Create account</Text>
        <Text className="text-gray-500 text-sm text-center mb-4">
          Welcome! Please enter your information below and get started.
        </Text>

        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-3"
          placeholder="Your email"
        />
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-3"
          placeholder="Password"
          secureTextEntry
        />

        <View className="flex-row items-center mb-5">
          <Checkbox
            status={isSelected ? "checked" : "unchecked"}
            onPress={() => {
              setSelection(!isSelected);
            }}
           />
          <Text className="text-gray-600">Accept Terms and Conditions</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/ValidationScreen")}
         className="bg-blue-500 w-full py-3 rounded-lg items-center">
          <Text className="text-white text-lg font-semibold">Create account</Text>
        </TouchableOpacity>

        <Text className="text-gray-600 mt-3">
          Already have an account?{" "}
          <Text className="text-blue-500 font-bold">Log in here!</Text>
        </Text>
      </View>
    </View>
  );
}
