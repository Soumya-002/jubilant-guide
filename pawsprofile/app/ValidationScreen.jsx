import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from 'expo-router';


export default function ValidationScreen() {
    const router = useRouter();
  
  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-4 lg:w-1/3 lg:mx-auto">
      <View className="w-full h-2/5 items-center">
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/2524/6aed/141c52b015b1c0bf39e3b8a30191ae7e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjLATYmM1E4Hg2Ajx1PbKpv0-jTiKdyTZeVlyjROodMwwLWENdNmbBKG3QwNmVe8dK87qs7K7Fi9uRlZIZ7-JuRcuHMfgNFkjvV5wjp4IpOY1dorr5DbntmIIcBCJZN0keBltzr2IyEGc0XxHQslxfiqakFExmLS5ra8oBUl5yoWfZpRVRqY5ksYzythiv5QxL9GxqZCR9Uzffu2Y5-pGLwdAzx3-sLFoUbxY0D-hHN-qap-UOlkySriL-iyLg8dlu1rissjv4gNICOCOZcKuzZHruz9jK-nNwId9mL1tEnERsxmUIM61g1MHQBGkq90s~NGEZVHp87Y8ILB9KzUVA__",
          }}
          className="w-full h-full rounded-lg lg:w-3/5"
          resizeMode="cover"
        />
      </View>
      <View className="absolute bottom-10 bg-white w-11/12 rounded-3xl p-6 shadow-lg items-center">
        <View className="absolute -top-8 bg-white p-3 rounded-full border border-gray-200 shadow-md">
          <Ionicons name="create-outline" size={28} color="#007bff" />
        </View>

        <Text className="text-xl font-bold mt-2">Validation code</Text>
        <Text className="text-gray-500 text-center mt-1 px-5">
          Check your email inbox and enter the validation code here
        </Text>

        <View className="flex-row justify-center mt-5">
          {[...Array(5)].map((_, index) => (
            <TextInput
              key={index}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-bold mx-1"
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => router.push('/Empty')}
          className="bg-blue-500 py-3 px-28 rounded-lg mt-5"
        >
          <Text className="text-white text-sm font-semiboldbold">Confirm</Text>
        </TouchableOpacity>

        <Text className="mt-3 text-gray-500">
          Did not receive the code?{" "}
          <Text className="text-blue-500 font-bold">Resend</Text>
        </Text>
      </View>
    </View>
  );
}
