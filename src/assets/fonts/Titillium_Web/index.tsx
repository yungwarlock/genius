import { useFonts } from "expo-font";

const useTitilliumWeb = () => {
  const [loaded, error] = useFonts({
    "TitilliumWeb-Black": require("./TitilliumWeb-Black.ttf"),
    "TitilliumWeb-Bold": require("./TitilliumWeb-Bold.ttf"),
    "TitilliumWeb-BoldItalic": require("./TitilliumWeb-BoldItalic.ttf"),
    "TitilliumWeb-ExtraLight": require("./TitilliumWeb-ExtraLight.ttf"),
    "TitilliumWeb-ExtraLightItalic": require("./TitilliumWeb-ExtraLightItalic.ttf"),
    "TitilliumWeb-Italic": require("./TitilliumWeb-Italic.ttf"),
    "TitilliumWeb-Light": require("./TitilliumWeb-Light.ttf"),
    "TitilliumWeb-LightItalic": require("./TitilliumWeb-LightItalic.ttf"),
    "TitilliumWeb-Regular": require("./TitilliumWeb-Regular.ttf"),
    "TitilliumWeb-SemiBold": require("./TitilliumWeb-SemiBold.ttf"),
    "TitilliumWeb-SemiBoldItalic": require("./TitilliumWeb-SemiBoldItalic.ttf"),
  });
  return [loaded, error];
};

export default useTitilliumWeb;