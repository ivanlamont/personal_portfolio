import { Link } from "@chakra-ui/react";

export type FlinkProps = {
    url: string;
    text?: string;
  }
  
export const Flink: React.FC<FlinkProps> = (props) => {
    return <Link href={props.url} target="_blank" color='teal.500'>{props.text?? props.url}</Link>  
  }
  