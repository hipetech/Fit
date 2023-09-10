import React, { FunctionComponent } from "react";
import { useSharedValue } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

import {CurtainOverlay as CurtainOverlayBase} from "./components/curtainOverlay";
import { OpenOverlayButton as OpenOverlayButtonBase } from "./components/openOverlayButton";

interface OverlayButtonProps {
  icon: FunctionComponent<SvgProps>
}


const useCurtainOverlay = (): {CurtainOverlay: React.FC, OpenOverlayButton: React.FC<OverlayButtonProps>} => {
  const animatedHeight = useSharedValue(0);
  const isOverlayOpen = useSharedValue(false);

  const CurtainOverlay = () => (
    <CurtainOverlayBase animatedHeight={animatedHeight} isOverlayOpen={isOverlayOpen} />
  );
  const OpenOverlayButton: React.FC<OverlayButtonProps> = ({icon}) => (
    <OpenOverlayButtonBase icon={icon} animatedHeight={animatedHeight} isOverlayOpen={isOverlayOpen} />
  );

  return {CurtainOverlay, OpenOverlayButton} ;
};

export default useCurtainOverlay;


