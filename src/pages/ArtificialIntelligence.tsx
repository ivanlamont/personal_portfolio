import { Heading } from "@chakra-ui/react";
import withColorPage, { ColorPageProps } from "./ColorPage";

const AIContent: React.FC<ColorPageProps> = (props) => {
  return <>
    <Heading>Pending</Heading>
  </>;
}
const ArtificialIntelligence = withColorPage(AIContent);

export default ArtificialIntelligence;
