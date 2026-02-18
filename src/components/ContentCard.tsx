import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type ContentCardProps = BoxProps & {
  children: React.ReactNode;
};

const ContentCard: React.FC<ContentCardProps> = ({ children, ...props }) => {
  return (
    <Box
      borderWidth="2px"
      borderColor="gray.500"
      borderRadius="lg"
      bg="blackAlpha.200"
      boxShadow="sm"
      p={{ base: 4, md: 5 }}
      w="100%"
      mx={{ base: 1, md: 0 }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ContentCard;
