import { Box, Flex, Text, FormControl, FormLabel, Input, VStack, Button } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { FormControl as Form } from "../components/Cadastro/FormControl";


export default function novoCadastro() {
    return (
        <Flex
            direction="column"
            h="100vh"
        >
            <Header name="Nova Loja"/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
                <Sidebar dashColor="#5a5a5a" cadColor=" #35CB8C" orcaColor="#5a5a5a"/>
                <Flex
                    align="flex-start"
                    direction="column"
                    w="100%"
                >
                    <VStack spacing="4">

                    <Box w="100%" border="1px solid #EEEEEE" borderRadius="5px" p="30px">
                        <Text color="#5a5a5a" fontWeight="700" mb="5">dados empresariais</Text>

                        <FormControl id="codigo">
                            <Flex>
                                <Form nameLabel="código" typeInput="text" />

                                <Form nameLabel="cnpj" typeInput="text" />

                                <Form nameLabel="razão social" typeInput="text" />
                                
                                <Form nameLabel="contato" typeInput="text" />

                                <Form nameLabel="e-mail da loja" typeInput="text" />

                                <Form nameLabel="responsável" typeInput="text" />
                                
                            </Flex>
                        </FormControl>
                    </Box>

                    <Box w="100%" border="1px solid #EEEEEE" borderRadius="5px" p="30px">
                        <Text color="#5a5a5a" fontWeight="700" mb="5">endereço</Text>

                        <FormControl id="codigo">
                            <Flex>
                                <Form nameLabel="cep" typeInput="text" />

                                <Form nameLabel="logradouro" typeInput="text" />

                                <Form nameLabel="número" typeInput="text" />
                                
                                <Form nameLabel="bairro" typeInput="text" />

                                <Form nameLabel="cidade" typeInput="text" />

                                <Form nameLabel="estado" typeInput="text" />
                                
                            </Flex>
                        </FormControl>
                        
                    </Box>

                    <Box w="100%" border="1px solid #EEEEEE" borderRadius="5px" p="30px">
                        <Text color="#5a5a5a" fontWeight="700" mb="5">dimensões</Text>

                        <FormControl id="codigo">
                            <Flex>
                                <Form nameLabel="tipo" typeInput="text" />

                                <Form nameLabel="área externa" typeInput="text" />

                                <Form nameLabel="área interna" typeInput="text" />
                                
                            </Flex>
                        </FormControl>
                    </Box>
                    <Box w="100%">
                        <Button background="#35CB8C" color="#fff">criar novo</Button>

                    </Box>
                    </VStack>
                </Flex>
                
            
            </Flex>
        
        </Flex>
    );
}