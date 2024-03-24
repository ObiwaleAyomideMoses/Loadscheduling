import { useFonts } from 'expo-font';
import { fonts } from '../constants/fonts';
export function useAppFonts() {
  const [isLoaded] = useFonts({
    'Visby-Bold': fonts.BOLD,
    'Visby-Regular': fonts.REGULAR,
    'Visby-SemiBold': fonts.SEMIBOLD,
    'Visby-Medium': fonts.MEDIUM,
  });

  return isLoaded;
}
