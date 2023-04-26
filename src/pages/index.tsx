import { Heading, Center, Box} from '@chakra-ui/react';
import { Information } from '../../components/input';

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
            Create your card!
          </Heading>
        </Box>
      </Center>
      <Center>
        <Information />
      </Center>

    </div>
    );
}