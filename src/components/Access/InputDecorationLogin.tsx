import { Flex, Icon, Input, FormControl, InputProps, FormErrorMessage } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { ElementType } from "toasted-notes/node_modules/@types/react";

interface InputLoginProps extends InputProps{
    name: string;
    type: string;
    icon: ElementType;
    error?: FieldError;
}

export function InputLogin({name, type, icon, error = null, ...rest}: InputLoginProps) {
    return(
        <Flex
            as="label"
            py="4"
            borderRadius="full">
            <Icon as={icon} fontSize="15" color="#5a5a5a" m="auto" />
            <FormControl isInvalid={!!error}>
                <Input
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder={name}
                    name={name}
                    type={type}
                    {...rest}
                />

                {!!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>
                )}
            </FormControl>
        </Flex>
    );
}