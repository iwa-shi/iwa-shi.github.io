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


const ResearchArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <Typography variant='h4'><span className='title-marker'>Study and Research</span></Typography>
            <Box sx={{m: 1}}>
            <Typography variant='body1'>
            I'm a first year PhD student at Tohoku University. I'm studying <span className='green-font bold'>Learned Image Compression</span> at <a href="http://www.iic.ecei.tohoku.ac.jp/" target="_blank">Image Information Communication Lab</a>, where I am supervised by <a href="http://www.iic.ecei.tohoku.ac.jp/~machi/index-e.html" target="_blank">Prof. Shinichiro Omachi</a>.
            </Typography>
            </Box>
            <Box sx={{m: 1}}>
            <Typography variant='subtitle1'>Interests</Typography>
            <Typography variant='body2'>
            Machine Learning, Computer Vision, Image Compression, Generative Models
            </Typography>
            </Box>
        </Paper>
    )
}

export default ResearchArea