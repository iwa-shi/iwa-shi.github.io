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

const EducationBox = ({
    title,
    body,
}) => {
    return (
        <Box sx={{m: 1}}>
            <Typography variant='subtitle1'>{title}</Typography>
            <Typography variant='body2'>{body}</Typography>
        </Box>
    )
}

const EducationArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <SectionTitle title="Education" />
            <EducationBox 
                title="PhD in Engineering, April 2022 - Present"
                body="Department of Communication Engineering, Graduate School of Engineering, Tohoku University"
            />
            <EducationBox 
                title="M.S. in Engineering, April 2020 - March 2022"
                body="Department of Communication Engineering, Graduate School of Engineering, Tohoku University"
            />
            <EducationBox 
                title="B.S. in Engineering, April 2016 - March 2020"
                body="Department of Electrical, Information and Physics Engineering, Tohoku University"
            />
        </Paper>
    )
}

export default EducationArea