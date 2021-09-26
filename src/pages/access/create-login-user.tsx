
import { Flex, Heading, Stack, Link, Text, Spinner } from "@chakra-ui/react";

import { RiLockPasswordFill, RiUserFill} from 'react-icons/ri'

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from "../../components/Form/Button"
import { BackgroundLogo } from "../../components/Access/BackgroundLogo"
import { InputLogin } from "../../components/Access/InputDecorationLogin";

import { useRouter } from "next/dist/client/router";
import { api } from "../../services/api";
import { useQuery } from "react-query";

type SignInFormData ={
    cnpj: string;
}

const signInFormSchema = yup.object().shape({
    cnpj: yup.string().required('CNPJ obrigatório'),
})

export default function CreateUser() {
    
    const {data, isLoading, isFetching, error} = useQuery('users', async () => {
        const { data } = await api.get('/users')
        console.log(data.users)

        return data;
    }, {
        staleTime: 1000 * 5, // demorar isso para chamar uma nova requisição, controlar stado de dados
    })

    
    const { register, handleSubmit, formState} = useForm({
        resolver: yupResolver(signInFormSchema)
      });
    const router = useRouter();
    
      const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        await router.push('create-login-good');

      }
    
      const { errors } = formState;

    return(
        <Flex>
                <Flex as="div" h="100vh" w="50%" bg="#EEEEEE" alignItems="center" justifyContent="center">
                    <Flex
                        as ="form"
                        width="100%"
                        maxWidth={335}
                        p="10"
                        bg="#ffffff"
                        borderRadius={8}
                        flexDir="column"
                        onSubmit={handleSubmit(handleSignIn)}>
                        {isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>

                        ) : error ? (
                            <Flex justify="center">
                                <Text>Falha ao obter dados do usuário.</Text>
                            </Flex>
                        ) : (
                            <>
                                <Stack spacing="4" >
                                    {data.users.map(user => {
                                        return (
                                                <Heading key={user.key} textAlign="center" color="#5a5a5a" fontSize="24px" mx="auto">Legal, {user.name}</Heading>

                                        )
                                    })}
                                    <Text textAlign="center" fontSize="14" color="#5a5a5a">Para continuar nos informe os documentos abaixo</Text>

                                    <Text textAlign="center" fontWeight="700" fontSize="14" color="#5a5a5a">Qual é o número do seu CNPJ?</Text>
                                    <InputLogin error={errors.cnpj} name="cnpj" type="text" {...register("cnpj")}/>
                                </Stack>
                            </>
                        )}
                       
                        <Button loading={formState.isSubmitting} nameButton="Continuar" />
                    </Flex>
                </Flex>

                <BackgroundLogo />
        </Flex>
    );
}