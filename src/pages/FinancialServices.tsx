import { VStack } from "@chakra-ui/react";
import { TradingSection } from ".././components/TradingSection";
import { PrimeBrokerageTopSection, PrimeBrokerageBusinessSection, PrimeBrokerageDetailsSection } from "../components/PrimeBrokerageSection";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";

const FinancialServicesContent: React.FC<PageProps> = (props) => {
    return <VStack>
        <TradingSection {...props} colorIndex={1}  />
        <PrimeBrokerageTopSection {...props} colorIndex={2} />
        <PrimeBrokerageBusinessSection {...props} colorIndex={3} />
        <PrimeBrokerageDetailsSection {...props} colorIndex={4} />
    </VStack>;
}

const FinancialServices = withMultisectionPage(FinancialServicesContent)

export default FinancialServices;

