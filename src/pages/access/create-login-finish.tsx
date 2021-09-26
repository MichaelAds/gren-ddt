
import { Flex, Heading, Stack, Link, Text } from "@chakra-ui/react";

import { Button } from "../../components/Form/Button"
import { BackgroundLogo } from "../../components/Access/BackgroundLogo"




export default function CreateFinish() {

    return(
        <Flex>
                <Flex as="div" h="100vh" w="50%" bg="#EEEEEE" alignItems="center" justifyContent="center">
                    <Flex
                        as ="form"
                        width="100%"
                        maxWidth={335}
                        p="10"
                        bg="#ffffff"
                        borderRadius={8}
                        flexDir="column">
                        
                        <Stack spacing="4" >
                            <Heading textAlign="center" color="#5a5a5a" fontSize="24px" mx="auto">Pronto</Heading>
                                    
                            <Text textAlign="center" fontSize="14" color="#5a5a5a">Cadastro realizado com sucesso!</Text>

                            <Text textAlign="center" fontSize="14" color="#5a5a5a">Para acessar a plataforma, basta clicar no link enviado no seu email.</Text>
                        </Stack>
                        <Link href="/access/login" w="60%" mx="auto" textDecor="none" textDecoration="none" passHref>
                            <Button type="a" nameButton="Log in" width="100%"/>
                        </Link>
                    </Flex>
                </Flex>

                <BackgroundLogo />
        </Flex>
    );
}