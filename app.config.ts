import { ExpoConfig } from "@expo/config";


export default () => {
  const ORG_NAME = process.env.ORG_NAME;
  const PACKAGE_ID = process.env.PACKAGE_ID;
  const PROJECT_ID = process.env.PROJECT_ID;
  const ADMOB_IOS_APP_ID = process.env.ADMOB_IOS_APP_ID;
  const ADMOB_ANDROID_APP_ID = process.env.ADMOB_ANDROID_APP_ID;

  return {
    "expo": {
      "name": "Genius",
      "slug": "genius",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./src/assets/images/icon.png",
      "scheme": "genius",
      "userInterfaceStyle": "automatic",
      "newArchEnabled": true,
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "adaptiveIcon": {
          "backgroundColor": "#ffffff",
          "foregroundImage": "./src/assets/images/adaptive-icon.png"
        },
        "package": PACKAGE_ID,
      },
      "web": {
        "bundler": "metro",
        "output": "server",
        "favicon": "./src/assets/images/favicon.png"
      },
      "plugins": [
        [
          "expo-build-properties",
          {
            "ios": {
              "useFrameworks": "static"
            }
          }
        ],
        [
          "react-native-google-mobile-ads",
          {
            "iosAppId": ADMOB_IOS_APP_ID,
            "androidAppId": ADMOB_ANDROID_APP_ID
          }
        ],      
        "expo-router",
        [
          "expo-splash-screen",
          {
            "imageWidth": 200,
            "resizeMode": "contain",
            "backgroundColor": "#ffffff",
            "image": "./src/assets/images/splash-icon.png"
          }
        ]
      ],
      "experiments": {
        "typedRoutes": true
      },
      "extra": {
        "router": {
          "origin": false
        },
        "eas": {
          "projectId": PROJECT_ID,
        }
      },
      "owner": ORG_NAME,
    } satisfies ExpoConfig,
  } 
};
