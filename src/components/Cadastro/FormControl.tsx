import { Box, FormLabel, Input } from "@chakra-ui/react";

interface FormProps {
    nameLabel: string,
    typeInput: any
}

export function FormControl({nameLabel, typeInput}: FormProps) {
    return(
        <Box mr="5">
            <FormLabel color="#8D8D8D">{nameLabel}</FormLabel>
            <Input w="initial" type={typeInput} />
        </Box>
    );
}