import { Heading, HStack, Image, Text, VStack, Box, Link, Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, target }) => {
  return (
    <Box maxW='sm' borderRadius='lg' overflow='hidden'>
      <VStack>
        <Image src={imageSrc}>

        </Image>
      </VStack>

      <Box p='6' bg='white' minHeight="180">
        <Box display='flex' alignItems='baseline'>
          <Text as='b' fontSize='2xl' color='black'>{title}</Text>
        </Box>
        <Box display='flex' alignItems='baseline' top ='14'>
          <Text fontSize='sm' color='black'>{description}</Text>
        </Box>
        <Box display='flex' alignItems='baseline' bottom='10'>
      
        <HStack
          py={4}
          spacing={3} 
          alignItems="left">
          <Link href={target}>
            <Text as='b' fontSize='md' color='black'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color='black' />  
          </Link>
        </HStack>
        </Box>

      </Box>

    </Box>
  );
};

export default Card;
