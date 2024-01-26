import { trigger } from "react-native-haptic-feedback";

import { selectForPlatform } from "./selectForPlatform.ts";

const options = {
  ignoreAndroidSystemSettings: false,
};

export class HapticFeedback {
  static lightImpact() {
    trigger(selectForPlatform("soft", "effectTick"), options);
  }

  static mediumImpact() {
    trigger(selectForPlatform("impactMedium", "effectHeavyClick"), options);
  }

  static heavyImpact() {
    trigger(selectForPlatform("impactHeavy", "effectDoubleClick"), options);
  }
}
