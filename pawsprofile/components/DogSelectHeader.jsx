import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DogSelecteader() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedDog, setSelectedDog] = useState({
    name: 'Maxi',
    image: 'https://placekitten.com/40/40'
  });

  const dogs = [
    { name: 'Maxi', image: 'https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=2048x2048&w=is&k=20&c=cHYjLUgpd8iz2NHmEgZZS2TsPaNsWMMyYdybxlwtE6g=' },
    { name: 'Bella', image: 'https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=2048x2048&w=is&k=20&c=cHYjLUgpd8iz2NHmEgZZS2TsPaNsWMMyYdybxlwtE6g=' },
    { name: 'Luna', image: 'https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=2048x2048&w=is&k=20&c=cHYjLUgpd8iz2NHmEgZZS2TsPaNsWMMyYdybxlwtE6g=' }
  ];

  return (
    <View>
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#000" className="p-2" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Pet Profile</Text>
        </View>
        <TouchableOpacity 
          className="flex-row items-center gap-4"
          onPress={() => setDropdownVisible(true)}
        >
          <Image
            source={{ uri: selectedDog.image }}
            className="w-10 h-10 rounded-full"
          />
          <Text className="font-medium">{selectedDog.name}</Text>
          <Ionicons name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity 
          className="flex-1 bg-black/50"
          onPress={() => setDropdownVisible(false)}
        >
          <View className=" bg-white mt-16 mx-4 rounded-xl">
            {dogs.map((dog, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-4 gap-3 border-b border-gray-100"
                onPress={() => {
                  setSelectedDog(dog);
                  setDropdownVisible(false);
                }}
              >
                <Image
                  source={{ uri: dog.image }}
                  className="w-10 h-10 rounded-full"
                />
                <Text className="text-base">{dog.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
