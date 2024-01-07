import React from "react";
import {Box, Flex, Text, VStack} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#17171a">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <VStack>
            <Text fontSize='sm'>This website was built using React.JS</Text>        
            <Text fontSize='sm'>Ivan J Lamont • © 2023-24 All Rights Reserved</Text>
          </VStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
