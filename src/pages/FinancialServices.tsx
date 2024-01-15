import TradingSection from ".././components/TradingSection";
import PrimeBrokerageSection from ".././components/PrimeBrokerageSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const FinancialServicesContent: React.FC<ColorPageProps> = (props) => {
    return <>
          <TradingSection colors={props.colorSet} colorIndex={1}  />
          <PrimeBrokerageSection colors={props.colorSet} colorIndex={2}  />
    </>;
}

const FinancialServices = withColorPage(FinancialServicesContent)

export default FinancialServices;

