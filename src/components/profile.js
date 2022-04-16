import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, CardHeader, Grid } from '@mui/material';
import { maxWidth, typography } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProfileArea = () => {
    return (
        <>
            <Card>
                <CardContent >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{ width: '25%', maxWidth: 220, mx: 2, minWidth: 150}}>
                            <img src="/IMG_3514.png" className='profileimg'>
                            </img>
                        </Box>
                        <Box sx={{ minWidth: 300}}>
                            <Typography variant='h1'>
                                Shoma Iwai
                            </Typography>
                            <Typography variant='h6' sx={{ mt: -1}}>
                                岩井 翔真
                            </Typography>
                            
                            <Typography variant='body1'>
                            {/* <SchoolIcon></SchoolIcon> */}
                                PhD Student@Tohoku University
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container>
                        <Grid item>
                            <Card>
                            <CardContent>
                                <SchoolIcon></SchoolIcon>
                                PhD Student, Tohoku University, Sendai, Japan
                            </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                            <GitHubIcon></GitHubIcon>
                            GitHub
                            </Card>
                        </Grid>
                    </Grid>
                
                {/* <Grid container alignItems='center' maxWidth="md">
                    <Grid item xs={3}>
                        <img src="/IMG_3514.png" className='profileimg'>
                        </img>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant='h1'>
                            Shoma Iwai
                        </Typography>
                        <Typography variant='h4'>
                            岩井 翔真
                        </Typography>
                    </Grid>

                </Grid> */}
                </CardContent>
                
                
                
            </Card>
        </>
    )
}

export default ProfileArea