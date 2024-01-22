import { HStack, Image, Text, VStack, Box, Link, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

export type CardType = {
  title: string,
  description: string, 
  imageSrc: string, 
  target: string
}

const Card = (cardInfo: CardType) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 30 }}
    >
      <Box maxW='sm' borderRadius='lg' overflow='hidden' bg='white' boxShadow='dark lg'>
        <Link href={cardInfo.target}>
          <VStack maxHeight="400px">
            <Box minHeight={"170px"} color="red"> <Image p="5px" src={cardInfo.imageSrc} objectFit='fill'></Image> </Box>
            
            <Box p='3' minHeight="180">
              <Box display='flex' alignItems='baseline'>
                <Text as='b' fontSize='2xl' color='black'>{cardInfo.title}</Text>
              </Box>
              <Box display='flex' alignItems='baseline' top ='17'>
                <Text fontSize='sm' color='black'>{cardInfo.description}</Text>
              </Box>
              <Box display='flex' alignItems='baseline' bottom='10'>      
                <HStack py={4} spacing={3} alignItems="left">
                    <Text as='b' fontSize='md' color='black' marginRight="10px">See more</Text>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" color='black' />  
                </HStack>
              </Box>
            </Box>
          </VStack>      
        </Link>
      </Box>
    </motion.div>
  );
};

export default Card;
