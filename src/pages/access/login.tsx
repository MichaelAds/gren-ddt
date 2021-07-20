
import { Flex, Heading, Stack, Link } from "@chakra-ui/react";

import { RiLockPasswordFill, RiUserFill} from 'react-icons/ri'

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from "../../components/Form/Button"
import { BackgroundLogo } from "../../components/Access/BackgroundLogo"
import { InputLogin } from "../../components/Access/InputDecorationLogin";

import { useRouter } from "next/dist/client/router";

type SignInFormData ={
    email: string;
    password: string;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória'),
})

export default function Login() {
    const { register, handleSubmit, formState} = useForm({
        resolver: yupResolver(signInFormSchema)
      });
    const router = useRouter();
    
      const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
    
        console.log(values);
        router.push('/dashboard');

      }
    
      const { errors } = formState;

    return(
        <Flex>
                <Flex as="div" h="100vh" w="50%" bg="#EEEEEE" alignItems="center" justifyContent="center">
                    <Flex
                        as ="form"
                        width="100%"
                        maxWidth={360}
                        p="10"
                        bg="#ffffff"
                        borderRadius={8}
                        flexDir="column"
                        onSubmit={handleSubmit(handleSignIn)}>

                        <Stack spacing="4">
                            <Heading color="#5a5a5a" fontSize="25px" mx="auto">Log in</Heading>
                            <InputLogin error={errors.email} name="email" type="email" icon={RiUserFill} {...register("email")}/>
                            
                            <InputLogin error={errors.password} name="password" type="password" icon={RiLockPasswordFill}  {...register("password")}/>
                        </Stack>
                        <Link ml="revert" color="#5a5a5a" fontSize={12}>esqueci a senha</Link>
                        <Button loading={formState.isSubmitting} nameButton="Log in" />
                    </Flex>
                </Flex>

                <BackgroundLogo />
        </Flex>
    );
}