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
        <Link href={cardInfo.target} _hover={{ textDecoration: "none" }} >
          <VStack w="100%" maxHeight="390px" display='flex' alignItems={'start'} justifyContent='space-between'>
            <Box w="100%" minHeight={"190px"} alignItems='center' justifyContent='space-between'>
              <Image
                src={cardInfo.imageSrc}
                w="100%"
                maxHeight={"210px"}
                objectFit='cover'
                borderRadius='lg'
                alt={cardInfo.title}
                boxShadow="inset 0 0 0 5px rgba(0,0,0,0.12)"
              />
            </Box>
            <VStack display='flex' p='3' minHeight="150" alignItems='start'>
              <Box display='flex' alignItems='start'>
              <Text as='b' fontSize='xl' color='black'>{cardInfo.title}</Text>
              </Box>
              <Box display='flex' alignItems='start' top ='10'>
              <Text fontSize='sm' color='black'>{cardInfo.description}</Text>
              </Box>
              <Box display='flex' alignItems='start' bottom='10'>      
              <HStack py={4} spacing={3} alignItems="stretch">
                <Text as='b' fontSize='md' color='black' marginRight="10px">See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="2x" color='black' />  
              </HStack>
              </Box>
            </VStack>
          </VStack>      
        </Link>
      </Box>
    </motion.div>
  );
};

export default Card;
