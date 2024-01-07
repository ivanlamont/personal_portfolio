import { Heading, HStack, Image, Text, VStack, Box, Array, Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box maxW='sm' borderRadius='lg' overflow='hidden'>
      <VStack>
        <Image src={imageSrc}>

        </Image>
      </VStack>

      <Box p='6' bg='white' minHeight="200">
        <Box display='flex' alignItems='baseline'>
          <Text as='b' fontSize='lg' color='black'>{title}</Text>
        </Box>
        <Box display='flex' alignItems='baseline' top ='14'>
          <Text fontSize='sm' color='black'>{description}</Text>
        </Box>
        <Box display='flex' alignItems='baseline' bottom='10'>
      
        <HStack
          py={4}
          spacing={3} 
          alignItems="left">
          <Text as='b' fontSize='md' color='black'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color='black' />  
        </HStack>
        </Box>

      </Box>

    </Box>
  );
};

export default Card;
