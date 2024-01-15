import LandingSection from ".././components/LandingSection";
import ProjectsSection from ".././components/ProjectsSection";
import ContactMeSection from ".././components/ContactMeSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const MainPageContent: React.FC<ColorPageProps> = (props) => {
  return <>
    <LandingSection colors={props.colorSet} colorIndex={1} />
    <ProjectsSection colors={props.colorSet} colorIndex={2} />
    <ContactMeSection colors={props.colorSet} colorIndex={3} />
  </>;
}

const MainPage = withColorPage(MainPageContent);

export default MainPage;
