import React from "react";
import { View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useProgress } from "../state/ProgressContext";

export default function ProgressBarComponent() {
  const { step, totalSteps } = useProgress();
  const progress = (step / totalSteps) * 100;

  return (
    <View className="h-8 rounded-sm overflow-hidden m-3 bg-white">
      <ProgressBar
        progress={progress}
        style={{ height: 4, width: `${progress}%` }}
        theme={{ colors: { primary: "orange" } }}
      />
    </View>
  );
}
