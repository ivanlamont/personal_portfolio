import React from "react";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import {MobileHistorySection, MobileRecentSection} from "../components/MobileSections";

const MobileContent: React.FC<PageProps> = (props) => {
    return <>
      <MobileHistorySection  {...props} colorIndex={1}  />
      <MobileRecentSection   {...props} colorIndex={2}  />
    </> 
}

const MobilePage = withMultisectionPage(MobileContent)

export default MobilePage;

