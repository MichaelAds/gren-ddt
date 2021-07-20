import { Flex, Text } from "@chakra-ui/react";

interface BoxIndProps {
    nameInd: string;
    numberInd: string;
    colorInd: string;
}

export function BoxInd({nameInd, numberInd, colorInd}: BoxIndProps) {
    return (
        <Flex 
        p={["1", "4"]}
        borderRadius={8}
        border="1px" 
        borderColor="gray.200"
        justify="center"
        align="start"
        direction="column"
        w="10%"
        h="12vh">
            <Text fontSize={14} color="gray.500" fontWeight="700"> {nameInd} </Text>

            <Text  fontSize={26}  color={colorInd}><strong>{numberInd}</strong></Text>
        </Flex>
    );
}