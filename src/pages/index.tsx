import Link from 'next/link';
import { Information } from './components/information';

import { Heading, 
  Center, 
  Box, 
  Button, 
  Text, 
  Image} from '@chakra-ui/react';

export default function Home() {
  
  return (
    <div>
      <Center h= '15rem'>
        <Box>
          <Heading size='4xl' 
            color='#232deb'
            bgColor='gray.100'
            borderRadius='3xl'
            border='4px'
            borderColor='blue.300'
            padding='1.5rem'
          >
            Crie seu passaporte!
          </Heading>
        </Box>
      </Center>

      <Center>
        <Information />
      </Center>

      <Link href='/en/pages/'>
        <Button position="absolute"
          bottom="1rem"
          right="1rem" 
          border='2px'
        >
          <Image src='/enflag.svg'
            width='2rem'
            height='2rem'
          />

          <Text fontSize='1.25rem' 
            paddingLeft='0.2rem'
          >
            English
          </Text>
        </Button>
      </Link>
    </div>
  );
}