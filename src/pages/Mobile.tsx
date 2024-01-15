import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import MobileHistorySection from "../components/MobileHistory";
import MobileRecentSection from "../components/MobileRecent";

const MobileContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <MobileHistorySection  colors={props.colorSet} colorIndex={1}/>
      <MobileRecentSection  colors={props.colorSet} colorIndex={2} />
    </>    
}

const Mobile = withColorPage(MobileContent)

export default Mobile;

