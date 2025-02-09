import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-4 lg:w-1/3 lg:mx-auto">
      <View className="w-full h-2/5 items-center">
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/2524/6aed/141c52b015b1c0bf39e3b8a30191ae7e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjLATYmM1E4Hg2Ajx1PbKpv0-jTiKdyTZeVlyjROodMwwLWENdNmbBKG3QwNmVe8dK87qs7K7Fi9uRlZIZ7-JuRcuHMfgNFkjvV5wjp4IpOY1dorr5DbntmIIcBCJZN0keBltzr2IyEGc0XxHQslxfiqakFExmLS5ra8oBUl5yoWfZpRVRqY5ksYzythiv5QxL9GxqZCR9Uzffu2Y5-pGLwdAzx3-sLFoUbxY0D-hHN-qap-UOlkySriL-iyLg8dlu1rissjv4gNICOCOZcKuzZHruz9jK-nNwId9mL1tEnERsxmUIM61g1MHQBGkq90s~NGEZVHp87Y8ILB9KzUVA__",
          }}
          className="w-full h-full rounded-lg lg:w-1/2"
          resizeMode="cover"
        />
      </View>

      <View className="absolute bottom-10 bg-white w-11/12 rounded-3xl p-6 shadow-lg items-center">
        <View className="absolute -top-8 bg-white p-3 rounded-full border border-gray-200 shadow-md">
          <Ionicons name="create-outline" size={28} color="#007bff" />
        </View>

        <Text className="text-lg font-semibold text-gray-900 mt-4">
          Personalized Pet Profiles
        </Text>

        <Text className="text-sm text-gray-600 text-center mt-2">
          Create personalized profiles for each of your beloved pets on
          PawBuddy. Share their name, breed, and age while connecting with a
          vibrant community.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/Signup")}
          className="bg-blue-600 w-full py-3 rounded-full mt-6 items-center"
        >
          <Text className="text-white font-medium">Get started</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-3">
          <Text className="text-gray-500">Sign up later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
