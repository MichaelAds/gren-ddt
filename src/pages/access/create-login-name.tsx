
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from "../../components/Form/Button"
import { BackgroundLogo } from "../../components/Access/BackgroundLogo"
import { InputLogin } from "../../components/Access/InputDecorationLogin";

import { useRouter } from "next/dist/client/router";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type NewUserFormData ={
    name: string;
}

const newUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
})

export default function CreateName() {
    const router = useRouter();
    const createUser = useMutation(async (user: NewUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
            }
        })
        console.log(response.data.user)
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    }
    )

    const { register, handleSubmit, formState} = useForm({
        resolver: yupResolver(newUserFormSchema)
      });
    
      const handleNewUser: SubmitHandler<NewUserFormData> = async (values) => {
        await createUser.mutateAsync(values)

        await router.push('create-login-user')
      }
    
      const { errors } = formState;

    return(
        <Flex>
                <Flex as="div" h="100vh" w="50%" bg="#EEEEEE" alignItems="center" justifyContent="center">
                    <Flex
                        as ="form"
                        width="100%"
                        maxWidth={440}
                        p="10"
                        bg="#ffffff"
                        borderRadius={8}
                        flexDir="column"
                        onSubmit={handleSubmit(handleNewUser)}>

                        <Stack spacing="4">
                            <Heading textAlign="center" color="#5a5a5a" fontSize="24px" mx="auto">Olá, seja bem vindo à plataforma GreenDDT</Heading>
                            <Text textAlign="center" fontSize="14" color="#5a5a5a">Precisaremos de algumas informações suas, para iniciar nos diga como devemos lhe chamar</Text>

                            <Text textAlign="center" fontWeight="700" fontSize="14" color="#5a5a5a">Qual é o seu nome?</Text>
                            <InputLogin error={errors.name} name="name" type="text" {...register("name")}/>
                        </Stack>
                       
                        <Button loading={formState.isSubmitting} nameButton="Continuar" />
                    </Flex>
                </Flex>

                <BackgroundLogo />
        </Flex>
    );
}