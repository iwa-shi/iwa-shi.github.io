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
import { CardContent, CardMedia, CardHeader, Grid, Paper, Link } from '@mui/material';
import { maxWidth, typography } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Email, Google } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import palette from '../theme/palette';
import zIndex from '@mui/material/styles/zIndex';
// import SectionTitle from './sectionTitle';

const SectionTitle = ({
    title,
    number="01",
}) => {
    const stickyStyle = {
        position: 'sticky',
        top: '0px',
        backgroundColor: palette.background.default,
        pt: 0.5,
        zIndex: 10,
    }
    return (
        <>
        {/* <Typography sx={{mb: -1.0}} variant='h6' ><span className='title-marker'>{number}</span></Typography> */}
        <Box sx={stickyStyle}>
            <Typography variant='h4' ><span className='title-marker'>{title}</span></Typography>
        </Box>
        </>
    )
}

const AreaContainer = (props) => {
    const paperStyle = {
        // px: {md: 3, xs: 2},
        // py: 2.5,
        pb: 2.5,
        pt: 1.5,
        // pt: 0,
        // pr: 5,
        // borderRadius: 0,
        borderLeft: 1.5,
        // borderBottom: 1.5,
        // borderLeft: 2,
        borderBottom: 2,
        borderColor: '#111',
        borderRadius: 0,
    }
    const numberStyle = {
        position: 'sticky',
        top: '10px',
        mr: 1,
        transform: 'rotate(-90deg)',
        width: '20px',
        mt: 2,
    }
    return (
    <>
        <Box display='flex' alignItems='start' >
        {/* <Box sx={paperStyle}> */}
        {/* <Box> */}
            <Typography sx={numberStyle} variant='h4' >{props.number}</Typography>
            {/* <Box > */}
            {/* </Box> */}
            <Box sx={{px: {md: 5, xs: 2}, ...paperStyle}} flexGrow={1}>
                <SectionTitle title={props.title} number={props.number} />
                {props.children}
            </Box>
        </Box>
    </>
        
    )
}

export default AreaContainer