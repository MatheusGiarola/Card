import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
    
  const [data, setData] = useState<FormData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/form");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (!data) {
    return <Heading>Carregando...</Heading>;
  }

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
                        {data.name} {data.surname}
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
                            {data.cpf} 
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
                            {data.birthdate} 
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
                            {data.age}
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