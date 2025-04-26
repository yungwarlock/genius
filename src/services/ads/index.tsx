import React from "react";

import mobileAds from "react-native-google-mobile-ads";
import { AdEventType, InterstitialAd, TestIds } from "react-native-google-mobile-ads";


interface AdsContextType {
  toggleInterstitialAd: () => void;
  onClose: (func: () => void) => void;
}

const AdsContext = React.createContext({} as AdsContextType);

export const useAds = () => React.useContext(AdsContext);

interface AdsProviderProps {
  children: React.ReactNode;
}

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-6676760040468778/2508632936";

const keywords = ["fashion", "clothing", "news"];

export const interstitialAd = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: keywords,
});

const AdsProvider = ({ children }: AdsProviderProps): JSX.Element => {
  const [closeFunc, setCloseFunc] = React.useState<(() => void) | null>(null);

  React.useEffect(() => {
    mobileAds()
      .initialize()
      .then(() => {
        console.log("Google Mobile Ads SDK initialized");
      })
      .catch((error) => {
        console.error("Error initializing Google Mobile Ads SDK:", error);
      });

    // Set the maximum ad content rating
    // mobileAds().setRequestConfiguration({
    //   maxAdContentRating: MaxAdContentRating.G,
    // });
  }, []);

  React.useEffect(() => {
    interstitialAd.load();
    const subLoaded = interstitialAd.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial ad loaded");
    });
    const subError = interstitialAd.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error("Interstitial ad failed to load:", error);
    });
    const subClosed = interstitialAd.addAdEventListener(AdEventType.CLOSED, () => {
      closeFunc && closeFunc();
      console.log("Interstitial ad closed");
    });
    const subClicked = interstitialAd.addAdEventListener(AdEventType.CLICKED, () => {
      console.log("Interstitial ad clicked");
    });
    const subImpression = interstitialAd.addAdEventListener(AdEventType.OPENED, () => {
      console.log("Interstitial ad impression");
    });

    return () => {
      subError();
      subClosed();
      subLoaded();
      subClicked();
      subImpression();
    };
  }, []);

  const toggleInterstitialAd = () => {
    interstitialAd.show();
  };

  const onClose = (func: () => void) => {
    setCloseFunc(func);
  };

  return (
    <AdsContext.Provider value={{ toggleInterstitialAd, onClose }}>
      {children}
    </AdsContext.Provider>
  );
};


export default AdsProvider;

