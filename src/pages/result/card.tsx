import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Head from 'next/head';
import Link from 'next/link';

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

    type FormData ={
        name:string;
        surname: string;
        cpf:string;
        birthdate:string;
        age:string;
    }

export default function Result(){
    
    const [cookies] = useCookies(['name', 'surname', 'cpf', 'birthdate', 'age']);

    const name = cookies.name;
    const surname = cookies.surname;
    const cpf = cookies.cpf;
    const age = cookies.age;
    const birthdate = cookies.birthdate;

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
                        {name} {surname}
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
                            {cpf} 
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
                            {birthdate} 
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
                            {age}
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
                    <Button size='md'>Página Inicial</Button>
                </Link>
            </Center>
        </Box>
    );
}