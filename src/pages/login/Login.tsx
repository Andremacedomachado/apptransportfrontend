import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Form } from '@unform/web';

import { IUserLoginData, useAuth } from '../../shared/contexts/AuthContext';
import { VTextField } from '../../shared/forms/VTextField';
import { useUserInfo } from '../../shared/contexts/UserInfoContext';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const { registerUserCurrent } = useUserInfo();

    const handleSubmit = useCallback(
        async ({ email, password }: IUserLoginData) => {
            await signIn({ email, password });
            await registerUserCurrent(email);
            navigate('/dashboard');
        }, []);

    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={1} overflow='hidden' >
            <Box
                display='flex'
                flexDirection='column'
                padding={2}
                alignItems='center'
                justifyContent='center'
                flex={1}
            >
                <Box
                    variant='outlined'
                    component={Paper}
                    sx={{ boxShadow: 3 }}
                    width='30%'
                    height='70%'
                    display='flex'
                    flexDirection='column'
                    padding={2}
                    gap={4}
                    justifyContent='center'
                >
                    <Typography variant='h5'> Login</Typography>
                    <Form onSubmit={handleSubmit} >
                        <Box display='flex' flexDirection='column' gap={2}>
                            <VTextField
                                variant='outlined'
                                name='email'
                                label='Email'
                                fullWidth
                            />
                            <VTextField
                                variant='outlined'
                                name='password'
                                label='Senha'
                                fullWidth
                            />
                            <Button variant='contained' type='submit' fullWidth>Entrar</Button>
                        </Box>
                    </Form>
                </Box>
            </Box >
        </Box >
    );
};