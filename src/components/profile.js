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
import { Email, Google } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';

const InfoIcon = ({
    type
}) => {
    if (type === 'github') {
        return <GitHubIcon></GitHubIcon>;
    } else if (type === 'email') {
        return <Email></Email>;
    } else if (type === 'google') {
        return <Google></Google>;
    } else if (type === 'group') {
        return <GroupsIcon></GroupsIcon>;
    }
}

const InfoBox = ({
    text,
    icontype,
    link='',
}) => {
    return (
        // <Box className="prof-link">
            <a href={link} className="prof-link">
                <Box sx={{ display: 'inline-flex', justifyContent: 'left', alignItems: 'center', px: 1, py: 0.5}} className="prof-link-box">
                    <InfoIcon type={icontype}/>
                    <Typography variant='body1' sx={{ mx: 0.5 }}>
                        {text}
                    </Typography>
                </Box>
            </a>
        // </Box>
    )
};

const ProfileArea = () => {
    return (
        <>
            {/* <Container> */}
                <Box sx={{py: 2}}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{ width: '25%', maxWidth: 180, mx: 2, minWidth: 130}}>
                            {/* <img src="/IMG_3514.png" className='profileimg'> */}
                            <img src="/profile_circle_mini.jpg" className='profileimg'>
                            </img>
                        </Box>
                        <Box >
                            <Typography variant='h1' sx={{ mt: -1 }}>
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', my: 1}}>
                    <Grid container sx={{ maxWidth: 550, justifyContent: 'center'}} columns={{ xs: 14, md: 18 }}>
                        <Grid item xs={9}>
                            <InfoBox text="GitHub" icontype="github" link='https://github.com/iwa-shi'/>
                            </Grid>
                        <Grid item xs={9}>
                            <InfoBox text="shoma.iwai.s4(at)dc.tohoku.ac.jp" icontype="email" link='mailto:shoma.iwai.s4@dc.tohoku.ac.jp'/>
                        </Grid>
                        <Grid item xs={9}>
                            <InfoBox text="Google Scholer" icontype="google" link='https://scholar.google.com/citations?user=jCVwlyIAAAAJ&'/>
                        </Grid>
                        <Grid item xs={9}>
                            <InfoBox text="Lab. Homepage" icontype="group" link='http://www.iic.ecei.tohoku.ac.jp/index.html' />
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            {/* </Container> */}
        </>
    )
}

export default ProfileArea