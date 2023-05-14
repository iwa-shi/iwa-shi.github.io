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
import SectionTitle from './sectionTitle';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';


const AwardArea = () => {
    const variant = "outlined"
    // const variant = "contained"
    // const variant = "text"
    const buttonStyle = {
        'px': 1.0,
        'mr': 1.0
    }
    const link = "https://sites.google.com/view/miru2022/home/award?authuser=0";
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <SectionTitle title='Award' />
            <Box sx={{m: 1, my: 2}}>
                <Typography variant='subtitle1'>論文評価貢献賞 -ジュニア評価委員 (Outstanding Junior Reviewer Award)</Typography>
                <Typography variant='body2'>画像の認識・理解シンポジウム MIRU2022, July 2022</Typography> 
                <Button href={link} sx={buttonStyle} color="secondary" variant={variant}  size="small" startIcon={<LinkIcon />}>Link</Button>
            </Box>
            <Box sx={{m: 1, my: 2}}>
                <Typography variant='subtitle1'>Outstanding Student Award (Master's Course)</Typography>
                <Typography variant='body2'>Group of Electrical Engineering, Communication Engineering, Electronic Engineering, and Information Engineering, Tohoku University, March 2022</Typography>
            </Box>
            <Box sx={{m: 1, my: 2}}>
                <Typography variant='subtitle1'>Presentation Award</Typography>
                <Typography variant='body2'>MIRU2020 Young Researchers Program, August 2020</Typography>
            </Box>
        </Paper>
    )
}

export default AwardArea