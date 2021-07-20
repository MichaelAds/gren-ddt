import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string;
}

export function Input({ name, ...rest }: InputProps) {
    return (
        <FormControl>
            <ChakraInput
              name={name}
              id={name}
              borderRadius="25"
              variant="filled"
              _hover={{
                bgColor: '#fff'
              }}
              size="lg"
              fontSize="15px"
              {...rest}
            />
          </FormControl>
    );
}