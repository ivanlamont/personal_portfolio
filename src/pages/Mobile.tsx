import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import {MobileHistorySection, MobileRecentSection} from "../components/MobileSections";

const MobileContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <MobileHistorySection colors={props.colorSet} {...props} colorIndex={1}  />
      <MobileRecentSection colors={props.colorSet} {...props} colorIndex={2}  />
    </> 
}

const MobilePage = withColorPage(MobileContent)

export default MobilePage;

