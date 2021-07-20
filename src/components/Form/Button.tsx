import { Button as ChakraButton } from "@chakra-ui/react";


interface ButtonProps {
    nameButton: string
    loading?: boolean;
}

export function Button({ nameButton, loading }: ButtonProps) {
    return(
        <ChakraButton
            type="submit"
            mt="6"
            mx="auto"
            w="60%"
            borderRadius="25"
            bg="#35CB8C"
            size="lg"
            fontSize="15px"
            fontWeight="normal"
            _hover={{
                bgColor:"#52d39d"
            }}
            isLoading={loading}
            color="white"
            >{nameButton}</ChakraButton>
    );
}