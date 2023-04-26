import React from 'react';
import { Center, 
    Image, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    Text, 
    Box,
    Button} from '@chakra-ui/react'
import Head from 'next/head';
import Link from 'next/link';

export default function Result(){
    return (
        <Box>
            <Head>
                <title>Seu cartão está pronto!</title>
            </Head>
            <br />
            <br />
            <Center>
                <Card bgColor='#eadbcb'
                    borderRadius="2xl"
                    borderColor="black"
                    border='4px'                
                >
                    <CardHeader>
                        <Heading size='4xl' 
                        textAlign="center"
                        color='black'
                        fontFamily="mono"
                        >
                           Passaporte
                        </Heading>
                        <Center>
                            <Image src="/brasao.png"
                            width='16rem'
                            height='14rem'
                            />
                        </Center>
                    </CardHeader>

                    <CardBody textAlign="left">
                        <Heading size= 'lg'
                        color='#36454F'
                        fontFamily="inherit"
                        >
                            Nome
                        </Heading>
                        <Text
                        noOfLines={1}
                        as='i'
                        size='lg'
                        >
                            Name and surname goes here 
                        </Text>

                        <Heading size= 'lg'
                        color='#36454F'
                        fontFamily="inherit"
                        >
                            CPF
                        </Heading>
                        <Text
                        noOfLines={1}
                        as='i'
                        size='lg'                    
                        >
                            CPF goes here 
                        </Text>

                        <Heading size= 'lg'
                        color='#36454F'
                        fontFamily="inherit"
                        >
                            Data de Nascimento
                        </Heading>
                        <Text
                        noOfLines={1}
                        as='i'
                        size='lg'                    
                        >
                            Birthdate goes here 
                        </Text>

                        <Heading size= 'lg'
                        color='#36454F'
                        fontFamily="inherit"
                        >
                            Idade
                        </Heading>
                        <Text
                        noOfLines={1}
                        as='i'
                        size='lg'
                        >
                            Age goes here 
                            </Text>
                    </CardBody>
                    
                    <CardFooter>
                        <Text textAlign='center'
                        as='b'
                        fontFamily='mono'
                        >
                            REPÚBLICA FEDERATIVA DO BRASIL
                        </Text>
                    </CardFooter>
                </Card>
            </Center>

            <Center h='5rem'>
                <Link href='/'>
                    <Button size='sm'>Página Inicial</Button>
                </Link>
            </Center>
        </Box>
    );
}