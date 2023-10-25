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


const WorkExperienceArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <SectionTitle title='Work Experience' />
            <Box sx={{m: 1}}>
                <Typography variant='subtitle1'>Research Assistant: Tohoku University</Typography>
                <Typography variant='body2'>April 2021 - Present</Typography>
            </Box>
            <Box sx={{m: 1}}>
                <Typography variant='subtitle1'>R&D Internship: LINE Corporation</Typography>
                <Typography variant='body2'>August 2023 - September 2023</Typography>
            </Box>
            <Box sx={{m: 1}}>
                <Typography variant='subtitle1'>R&D Internship: Huawei Japan Tokyo Laboratory</Typography>
                <Typography variant='body2'>August 2022 - November 2022</Typography>
            </Box>
            <Box sx={{m: 1}}>
                <Typography variant='subtitle1'>R&D Internship: Sony Group Corporation</Typography>
                <Typography variant='body2'>August 2020 - September 2020</Typography>
            </Box>
        </Paper>
    )
}

export default WorkExperienceArea