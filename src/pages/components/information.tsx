import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Box,
    Button,
    Center,
} from "@chakra-ui/react";

export function Information() {

    const [name, setName] = useState('');
    const changeName =
        (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const [surname, setSurname] = useState('');
    const changeSurname =
        (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value);

    const [cpf, setCpf] = useState('');
    const changeCpf =
        (event: React.ChangeEvent<HTMLInputElement>) => setCpf(event.target.value);

    const [birthdate, setBirthdate] = useState('');
    const changeBirthdate =
        (event: React.ChangeEvent<HTMLInputElement>) => setBirthdate(event.target.value);

    const [age, setAge] = useState('');
    const changeAge =
        (event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value);

    function isFilled() {
        return true
    };

    const router = useRouter();

     const handleSubmit = async (event: FormEvent) => {
        if (isFilled()) {
            event.preventDefault();
            //router.push(`/result/card?name=${name}&surname=${surname}&cpf=${cpf}&birthdate=${birthdate}&age=${age}`);
            const res = await fetch("/api/form", {
                method: "POST",
                body: JSON.stringify({ name, surname, cpf, birthdate, age }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                router.push('/result/card');
            } else {
                alert('Um erro inesperado aconteceu. Tente recarregar a página e preencha novamente')
            }
        }
    };

    return (
        <div>
            <Box
                bgColor='#ffe7b3'
                padding='1.25rem'
                borderRadius='lg'
                border='2px'
                borderColor='blue'
            >
                <Stack>
                    <InputGroup size='lg'
                        borderColor='blue'
                        borderRadius='1'
                    >
                        <InputLeftAddon children='Nome' />

                        <Input
                            focusBorderColor='#00ffff'
                            value={name}
                            onChange={changeName}
                            variant='outline'
                            placeholder="Ex: João"
                        />
                    </InputGroup>

                    <InputGroup size='lg'
                        borderColor='blue'
                        borderRadius='1'
                    >
                        <InputLeftAddon children='Sobrenome' />

                        <Input
                            focusBorderColor='#00ffff'
                            value={surname}
                            onChange={changeSurname}
                            variant='outline'
                            placeholder="Ex: Silva"
                        />
                    </InputGroup>

                    <InputGroup size='lg'
                        borderColor='blue'
                        borderRadius='1'
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
                        borderColor='blue'
                        borderRadius='1'
                    >
                        <InputLeftAddon children='Data de Nascimento' />

                        <Input
                            focusBorderColor='#00ffff'
                            value={birthdate}
                            onChange={changeBirthdate}
                            variant='outline'
                            placeholder="Ex: 14/05/2003"
                        />
                    </InputGroup>

                    <InputGroup size='lg'
                        borderColor='blue'
                        borderRadius='1'
                    >
                        <InputLeftAddon children='Idade' />

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
                <Link href='/result/card'>
                    <Button height='60px'
                        width='240px'
                        border='4px'
                        borderColor='white'
                        colorScheme='facebook'
                        borderRadius='full'
                        fontSize='2rem'
                        textAlign='center'
                        onClick={handleSubmit}
                    >
                        Enviar
                    </Button>
                </Link>
            </Center>
        </div>
    );
};