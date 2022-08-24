
import { Box, List, ListItem, Typography, ListItemButton, Paper, Button } from '@mui/material';
import { useEffect, useState } from 'react';

import api from '../../services/api/Api';

interface IUserRolesData {
    roles: string[];
}


export const Dashboard = () => {
    const [perm, setPerm] = useState<IUserRolesData>({} as IUserRolesData);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        async function loadRoles() {
            await api.get('/users/roles')
                .then((result) => {
                    if (result.data instanceof Error) {
                        alert('error ao listar roles');
                    }
                    else {
                        setIsLoading(false);
                        setPerm(result.data);
                    }
                });
        }
        loadRoles();
    }, []);


    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={1} overflow='hidden'>
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
                    width='50%'
                    height='70%'
                    bgcolor={'#4B5D67'}
                    display='flex'
                    flexDirection='column'
                    padding={2}
                    gap={4}
                >
                    <Box
                        variant='outlined'
                        component={Paper}
                        bgcolor={'#1B2430'}
                        display='flex'
                        flexDirection='column'
                        padding={2}
                        gap={2}
                        color='#D6D5A8'
                        justifyContent='center'
                        alignItems='center'
                        height='100%'
                    >
                        <Box>
                            <Typography variant='h6'> Lista de permissoes</Typography>

                        </Box>
                        {!isLoading &&
                            <List>
                                {perm.roles.map((cargo, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <ListItemButton>
                                                <Button variant='contained' fullWidth>
                                                    {cargo.toUpperCase()}
                                                </Button>
                                            </ListItemButton>

                                        </ListItem>
                                    );
                                })}
                            </List>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};