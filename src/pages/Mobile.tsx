import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import MobileHistorySection from "../components/MobileHistory";
import MobileRecentSection from "../components/MobileRecent";

const MobileContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <MobileHistorySection  colorSet={props.colorSet} colorIndex={1} colors={[]} />
      <MobileRecentSection  colors={props.colorSet} colorIndex={2} />
    </>    
}

const Mobile = withColorPage(MobileContent)

export default Mobile;

