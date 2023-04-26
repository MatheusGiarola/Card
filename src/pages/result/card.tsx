import React from 'react';
import { Center, Image, Card, CardHeader, CardBody, CardFooter, Heading, Text, AbsoluteCenter, Box } from '@chakra-ui/react'

export default function Result(){
    return (
        <Box>
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
                           Passport
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
                            Name
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
                            Birthdate
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
                            Age
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
        </Box>
    );
}