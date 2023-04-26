 //Usar o hook useEffect pra toast
import { Input, 
    InputGroup, 
    InputLeftAddon, 
    Stack,
    Box,
    Button,
    Center,
} from "@chakra-ui/react";
import React,{ useState } from "react";
import Link from "next/link";

export function Information() {
    const[name, setName]= useState('');
    const changeName = 
    (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const[surname, setSurname]= useState('');
    const changeSurname = 
    (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value);

    const[cpf, setCpf]= useState('');
    const changeCpf = 
    (event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value);

    const[birthdate, setBirthdate]= useState('');
    const changeBirthdate = 
    (event: React.ChangeEvent<HTMLInputElement>) => setBirthdate(event.target.value);

    const[age, setAge]= useState('');
    const changeAge = 
    (event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value);

    return (
        <div>
            <Box 
                bgColor={'#ffe7b3'} 
                padding={'1.25rem'} 
                borderRadius={'lg'}
                border='2px'
                borderColor='blue'
            >
                <Stack spacing={8}>
                    <InputGroup size='lg' 
                        borderColor={'blue'} 
                        borderRadius={1}
                    >
                        <InputLeftAddon children='Name' />
                        <Input 
                            focusBorderColor='#00ffff'
                            value={name}
                            onChange={changeName} 
                            variant='outline' 
                            placeholder="Ex: João"
                        />
                    </InputGroup>

                    <InputGroup size='lg' 
                        borderColor={'blue'} 
                        borderRadius={1}
                    >
                        <InputLeftAddon children='Surname'/>
                        <Input 
                            focusBorderColor='#00ffff'
                            value={surname}
                            onChange={changeSurname} 
                            variant='outline' 
                            placeholder="Ex: Silva"
                        />
                    </InputGroup>

                    <InputGroup size='lg' 
                        borderColor={'blue'} 
                        borderRadius={1}
                    >
                        <InputLeftAddon children='CPF' />
                        <Input 
                            focusBorderColor='#00ffff'
                            value={cpf}
                            onChange={changeCpf} 
                            variant='outline' 
                            placeholder="Ex: 123.456.789-01"
                        />
                    </InputGroup>

                    <InputGroup size='lg' 
                        borderColor={'blue'} 
                        borderRadius={1}
                    >
                        <InputLeftAddon children='Birthdate' />
                        <Input 
                            focusBorderColor='#00ffff'
                            value={birthdate}
                            onChange={changeBirthdate} 
                            variant='outline' 
                            placeholder="Ex: 12/05/2003"
                        />
                    </InputGroup>

                    <InputGroup size='lg' 
                        borderColor={'blue'} 
                        borderRadius={1}
                    >
                        <InputLeftAddon children='Age' />
                        <Input 
                            focusBorderColor='#00ffff'
                            value={age}
                            onChange={changeAge} 
                            variant='outline' 
                            placeholder="Ex: 20"
                        />
                    </InputGroup>
                </Stack>
            </Box>
            <br />
            <Center>
                <Link href='http://localhost:3000/result/card'>
                    <Button   height='60px'
                        width='240px'
                        border='4px'
                        borderColor='white'
                        colorScheme='facebook'    
                        borderRadius='full' 
                        fontSize='2rem'
                        textAlign='center'
                    >
                        Submit
                    </Button>
                </Link>
            </Center>
        </div>
    );
};