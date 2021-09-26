import { Button as ChakraButton } from "@chakra-ui/react";


interface ButtonProps {
    nameButton: string
    loading?: boolean;
    width?: string;
    type?: any;
}

export function Button({ nameButton, loading, width = "60%", type = "button" }: ButtonProps) {
    return(
        <ChakraButton
            as={type}
            type="submit"
            mt="6"
            mx="auto"
            w={width}
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