import LandingSection from ".././components/LandingSection";
import ProjectsSection from ".././components/ProjectsSection";
import ContactMeSection from ".././components/ContactMeSection";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";

const MainPageContent: React.FC<PageProps> = (props) => {
  return <>
    <LandingSection  colorIndex={1} {...props} />
    <ProjectsSection   colorIndex={2}  {...props} />
    <ContactMeSection   colorIndex={3} {...props}  />
  </>;
}

const MainPage = withMultisectionPage(MainPageContent);

export default MainPage;
