import { Stack, usePathname } from 'expo-router';
import "../global.css";
import { PaperProvider } from 'react-native-paper';
import { ProgressProvider } from '../state/ProgressContext';

const screens = [
  "index", "Signup", "ValidationScreen", "Empty", "PetProfile", "PetName",
  "WeightScreen", "SetDates", "ShowDates", "CareTakes", "Dashboard",
  "DashboardDetails", "dummy", "Insurance", "AboutPet"
];

export default function _layout() {
  const totalSteps = 8;

  return (
    <ProgressProvider totalSteps={totalSteps}>
      <PaperProvider>
        <Stack>
          {screens.map(screen => (
            <Stack.Screen key={screen} name={screen} options={{ headerShown: false }} />
          ))}
        </Stack>
      </PaperProvider>
    </ProgressProvider>
  );
}
