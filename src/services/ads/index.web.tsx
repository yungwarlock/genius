import React from "react";

import { View, StyleSheet } from "react-native";

const ADSENSE_ADSLOT = process.env.EXPO_PUBLIC_ADSENSE_ADSLOT;
const ADSENSE_ADCLIENT = process.env.EXPO_PUBLIC_ADSENSE_ADCLIENT;

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdsContextType {
  toggleInterstitialAd: () => void;
  onClose: (func: () => void) => void;
}

const AdsContext = React.createContext({} as AdsContextType);

export const useAds = () => React.useContext(AdsContext);

interface AdsProviderProps {
  children: React.ReactNode;
}

const AdsProvider = ({ children }: AdsProviderProps): JSX.Element => {
  const adLayoutKey = "-fb+5w+4e-db+86";

  const [showAd, setShowAd] = React.useState<boolean>(false);
  const [closeFunc, setCloseFunc] = React.useState<(() => void) | null>(null);

  React.useEffect(() => {
    try {
      ((window.adsbygoogle = window.adsbygoogle || []).push({}));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const toggleInterstitialAd = () => {
    console.log("toggled showInterstitialAd");
    if (showAd) {
      closeFunc && closeFunc();
    }
    setShowAd(val => !val);
  }

  const onClose = (func: () => void) => {
    setCloseFunc(func);
  }


  return (
    <AdsContext.Provider value={{ toggleInterstitialAd, onClose }}>
      {showAd && (
        <View style={styles.container}>
          <ins
            data-ad-format="fluid"
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-slot={ADSENSE_ADSLOT}
            data-ad-layout-key={adLayoutKey}
            data-ad-client={ADSENSE_ADCLIENT}
          />
        </View>
      )}
      {children}
    </AdsContext.Provider>
  );
};


export default AdsProvider;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    zIndex: 50,
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundColor: "red",
  }
});