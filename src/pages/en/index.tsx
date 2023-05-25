import Link from 'next/link';
import Head from 'next/head';
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
      <Head>
        <title>Homepage</title>
        <link rel="shortcut icon" 
          href="/brand.png" 
          type="image/png" 
        />
      </Head>
      
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
            Create your passport!
          </Heading>
        </Box>
      </Center>

      <Center>
        <Information />
      </Center>

      <Link href='/'>
        <Button position="absolute"
          bottom="1rem"
          right="1rem" 
          border='2px'
        >
          <Image src='/ptflag.svg'
            width='2rem'
            height='2rem'
          />

          <Text fontSize='1.25rem' 
            paddingLeft='0.2rem'
          >
            Portugês
          </Text>
        </Button>
      </Link>
    </div>
  );
}