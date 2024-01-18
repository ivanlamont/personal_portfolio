import { TradingSection } from ".././components/TradingSection";
import { PrimeBrokerageTopSection, PrimeBrokerageBusinessSection, PrimeBrokerageDetailsSection } from "../components/PrimeBrokerageSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const FinancialServicesContent: React.FC<ColorPageProps> = (props) => {
    return <>
        <TradingSection {...props} colorIndex={1}  />
        <PrimeBrokerageTopSection {...props} colorIndex={2} />
        <PrimeBrokerageBusinessSection {...props} colorIndex={3} />
        <PrimeBrokerageDetailsSection {...props} colorIndex={4} />
    </>;
}

const FinancialServices = withColorPage(FinancialServicesContent)

export default FinancialServices;

