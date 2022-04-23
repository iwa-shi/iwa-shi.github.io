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
import { CardContent, CardMedia, CardHeader, Grid, Paper } from '@mui/material';
import { maxWidth, typography } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Email, Google } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';

const PaperArea = ({
    paperTitle,
    authors,
    others,
}) => {
    return (
        <Box>
            <Typography variant='body1'>{paperTitle}</Typography>
            <Typography variant='body2'>{authors}</Typography>
            <Typography variant='body2'>{others}</Typography>
        </Box>
    )
}

const PublicationArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <Typography variant='h4'><span className='title-marker'>Publication</span></Typography>
            <Box sx={{m: 1}}>
                <Typography variant='subtitle1'>International Conference</Typography>
                <PaperArea
                    paperTitle="Self Texture Transfer Networks for Low Bitrate Image Compression"
                    authors="Shoma Iwai, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                    others="In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2021, pp. 1901-1905"
                />
            </Box>
        </Paper>
    )
}

export default PublicationArea