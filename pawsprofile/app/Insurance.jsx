import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import DogSelectHeader from "../components/DogSelectHeader";
import Insurance from "../assets/images/Empty Space.svg";
import InsuranceModal from "../components/InsurancreModal";
import PackageDetailsModal from "../components/PackageDetailsModal";


export default function InsurancePage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <View className="h-screen lg:h-max lg:mx-auto">
        <DogSelectHeader />

        <View className="items-center justify-center flex-1 p-8 h-32">
          <Image
            source={Insurance}
            className="w-48 h-48 mb-6"
            resizeMode="contain"
          />
        </View>

        <View className="p-4">
          <TouchableOpacity
            onPress={() => setIsFirstModalVisible(true)}
            className="bg-blue-200 p-5 rounded-full"
          >
            <Text className="text-blue-600 text-lg font-bold text-center">
              Add Insurance
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFirstModalVisible}
        onRequestClose={() => setIsFirstModalVisible(false)}
      >
        <InsuranceModal
          onSelect={(packageId) => {
            setSelectedPackage(packageId);
            setIsFirstModalVisible(false); 
            setIsSecondModalVisible(true);
          }}
          onClose={() => setIsFirstModalVisible(false)}
        />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isSecondModalVisible}
        onRequestClose={() => setIsSecondModalVisible(false)}
      >
        <PackageDetailsModal
          selectedPackage={selectedPackage}
          onNext={() => {
            setIsSecondModalVisible(false);
          }}
          onClose={() => setIsSecondModalVisible(false)}
        />
      </Modal>
    </View>
  );
}
