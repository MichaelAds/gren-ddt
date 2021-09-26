import { Box, Flex, Icon, Input, Select, HStack, Button, Table, Thead, Tr, Th, Text, Tbody, Td, Link } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { HiOutlinePlusSm } from "react-icons/hi"
export default function cadastro() {
    return (
        <Flex
            direction="column"
            h="100vh"
        >
            <Header name="Register"/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" >
                <Sidebar dashColor="#5a5a5a" cadColor=" #35CB8C" orcaColor="#5a5a5a"/>
                <Flex
                    align="flex-start"
                    direction="column"
                    w="100%"
                >
                    <Flex w="100%"  justify="space-between">
                        <HStack spacing={3}>
                            <Select w="30%" variant="outline" placeholder="Buscar">
                                <option value="option1">Todos</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Flex
                            as="label"
                            px="4"
                            borderRadius="full">
                                <Input placeholder="search" px="4" mr="4" />
                                {/* <Icon as={BiSearchAlt2} fontSize="15" color="#5a5a5a" m="auto" /> */}
                            </Flex>
                        </HStack>
                        <Link href="/novo_cadastro">
                            <Button display="block" color="#fff"  bgColor="#35CB8C" leftIcon={<Icon as={HiOutlinePlusSm}/>} >
                                adicionar
                            </Button>
                        </Link>
                    </Flex>
                    <Box p="5" 
                        mt="10"
                        borderRadius={8}
                        border="1px" 
                        borderColor="gray.200">

                        <Table borderColor="gray.300">
                            <Thead>
                                <Tr>
                                    <Th><Text fontWeight="700" color="gray.500">código</Text></Th>
                                    <Th><Text fontWeight="700" color="gray.500">responsável</Text></Th>
                                    <Th><Text fontWeight="700" color="gray.500">região</Text></Th>
                                    <Th><Text fontWeight="700" color="gray.500">serviço</Text></Th>
                                    <Th><Text fontWeight="700" color="gray.500">última dedetização</Text></Th>
                                    <Th><Text fontWeight="700" color="gray.500">vencimento</Text></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Loja 1</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Loja 1</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Loja 1</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Lucas Cardozo M...</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">Zona Sul - SP</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">ratos e formigas</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                    <Td>
                                        <Text fontSize={12} color="gray.500">23/03/2021</Text>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}