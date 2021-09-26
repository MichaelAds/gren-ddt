
import { Flex, Heading, Stack, Link, Text } from "@chakra-ui/react";

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
    email: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('email obrigatório').email('inserir email valido'),
})

export default function CreateGood() {
    const {data, isLoading, isFetching, error} = useQuery('users', async () => {
        const { data } = await api.get('/users')

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
    
        await router.push('create-login-finish');

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
                        
                        <Stack spacing="4" >
                            <Heading textAlign="center" color="#5a5a5a" fontSize="24px" mx="auto">Boa!</Heading>
                                    
                            <Text textAlign="center" fontSize="14" color="#5a5a5a">Por fim, enviaremos um link para a validação do email e para que crie uma senha de acesso</Text>

                            <Text textAlign="center" fontWeight="700" fontSize="14" color="#5a5a5a">Qual é o seu e-mail?</Text>
                            <InputLogin error={errors.email} name="email" type="text" {...register("email")}/>
                        </Stack>
                       
                        <Button loading={formState.isSubmitting} nameButton="Finalizar" />
                    </Flex>
                </Flex>

                <BackgroundLogo />
        </Flex>
    );
}