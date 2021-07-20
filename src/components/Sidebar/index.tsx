import { Box, Img, VStack, Text, Flex, Button } from "@chakra-ui/react";

export function Sidebar() {
    return(
        <Box as="aside" w="64">
            <VStack spacing="12" align="flex-start">
                <Flex as={Button} bg="#fff" width="23%" align="center" direction="column" justify="center" _hover={{bgColor: 'white'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M0 0H24V24H0V0Z" fill="white"/>
                        <path d="M4 12.8889H11.1111V4H4V12.8889ZM4 20H11.1111V14.6667H4V20ZM12.8889 20H20V11.1111H12.8889V20ZM12.8889 4V9.33333H20V4H12.8889Z" fill="#35CB8C" />
                    </svg>
                    <Text fontSize={12} color="#35CB8C">dashboard</Text>
                </Flex>

                <Flex as={Button}  _hover={{bgColor: 'white', fill: 'green'}} bg="#fff" width="23%" align="center" direction="column" justify="center">
                    <Img src="/images/contact.svg" alt="aba cadastro"/>
                    <Text fontSize={12} color="gray.700">cadastro</Text>
                </Flex>

                <Flex as={Button}  _hover={{bgColor: 'white'}} bg="#fff" width="23%" align="center" direction="column" justify="center">
                    <Img src="/images/orcamento.svg" alt="aba orcamento"/>
                    <Text fontSize={12} color="gray.700">orçamento</Text>
                </Flex>
            </VStack>
        </Box>
    );
}