import { Camera, Trash } from "phosphor-react-native";
import React, { useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { captureScreen } from "react-native-view-shot";
import { theme } from "../../theme";
import { styles } from "./styles";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: (screenshot: string | null) => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    captureScreen({
      format: "png",
      quality: 0.8,
    })
      .then((uri) => onTakeShot(uri))
      .catch((err) => console.log("err", err))
      .finally(() => setIsTakingScreenshot(false));
  }

  return (
    <View style={styles.container}>
      {isTakingScreenshot ? (
        <ActivityIndicator color={theme.colors.text_primary} />
      ) : (
        <TouchableOpacity
          onPressIn={!screenshot ? handleTakeScreenshot : onRemoveShot}
        >
          {screenshot ? (
            <View>
              <Image source={{ uri: screenshot }} style={styles.image} />

              <Trash
                size={22}
                color={theme.colors.text_secondary}
                weight="fill"
                style={styles.removeIcon}
              />
            </View>
          ) : (
            <Camera size={24} color={theme.colors.text_primary} weight="bold" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
