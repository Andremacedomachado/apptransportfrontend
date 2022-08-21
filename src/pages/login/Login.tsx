import { Box, Button, Paper, Typography } from '@mui/material';
import { Form } from '@unform/web';
import { VTextField } from '../../shared/forms/VTextField';


export const Login: React.FC = () => {



    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={1} overflow='hidden' >
            <Box
                bgcolor={'#322F3D'}
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
                    width='30%'
                    height='70%'
                    bgcolor={'#4B5D67'}
                    display='flex'
                    flexDirection='column'
                    padding={2}
                    gap={4}
                    justifyContent='center'
                >

                    <Typography variant='h5'> Login</Typography>
                    <Form onSubmit={console.log} >
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