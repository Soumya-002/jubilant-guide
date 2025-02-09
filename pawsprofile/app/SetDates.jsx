import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import AppHeader from "../components/appHeader";
import ProgressBar from "../components/ProgressBarComponent";
import { useRouter } from "expo-router";
import { useProgress } from "../state/ProgressContext";

export default function ImportantDatesScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [activeTab, setActiveTab] = useState("birth");
  const [birthDate, setBirthDate] = useState(null);
  const [adoptionDate, setAdoptionDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { step, setStep, totalSteps } = useProgress();

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 26 }, (_, i) => 2000 + i); // Years from 2000 to 2049

  const HandleSwitch = () => {
    if (activeTab === "birth") {
      setBirthDate(selected);
      setActiveTab("adoption");
    } else {
      setAdoptionDate(selected);
      handleNextStep();
      router.push({
        pathname: "ShowDates",
        params: {
          birthDate,
          adoptionDate: selected,
        },
      });
    }
  };

  return (
    <View className="flex-1 bg-gray-100 lg:w-1/2 lg:mx-auto">
      <AppHeader title="Important Dates" />
      <ProgressBar />

      <View className="p-4">
        <View className="flex-row mb-6">
          <TouchableOpacity
            onPress={() => setActiveTab("birth")}
            className={`flex-1 p-4 border-b-2 ${
              activeTab === "birth" ? "border-yellow-400" : "border-gray-200"
            }`}
          >
            <Text
              className={`text-center ${
                activeTab === "birth"
                  ? "text-yellow-400 font-bold"
                  : "text-gray-500"
              }`}
            >
              🍰 Birth date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("adoption")}
            className={`flex-1 p-4 border-b-2 ${
              activeTab === "adoption" ? "border-yellow-400" : "border-gray-200"
            }`}
          >
            <Text
              className={`text-center ${
                activeTab === "adoption"
                  ? "text-yellow-400 font-bold"
                  : "text-gray-500"
              }`}
            >
              🏠︎ Adoption date
            </Text>
          </TouchableOpacity>
        </View>
        {/* Year Selection */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {years.map((year) => (
              <Pressable
                key={year}
                onPress={() => setCurrentYear(year)}
                className={`px-6 py-2 mx-1 rounded-full ${
                  currentYear === year ? "bg-blue-100" : "bg-white"
                }`}
              >
                <Text
                  className={`text-lg ${
                    currentYear === year
                      ? "text-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {year}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Month Selection */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {months.map((month, index) => (
              <Pressable
                key={month}
                onPress={() => setCurrentMonth(index + 1)}
                className={`px-6 py-2 mx-1 rounded-full ${
                  currentMonth === index + 1 ? "bg-blue-100" : "bg-white"
                }`}
              >
                <Text
                  className={`text-lg ${
                    currentMonth === index + 1
                      ? "text-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {month}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Calendar */}
        <Calendar
          key={`${currentMonth}-${currentYear}`}
          current={`${currentYear}-${String(currentMonth).padStart(2, "0")}`}
          onDayPress={(day) => setSelected(day.dateString)}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
          className="p-4 border border-blue-600 rounded-lg"
        />
        <TouchableOpacity
          onPress={() => HandleSwitch()}
          className="bg-blue-500 p-3 rounded-lg mt-4"
        >
          <Text className="text-center text-white text-lg">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
