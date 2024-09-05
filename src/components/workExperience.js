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
import AreaContainer from './areaContainer';


const WorkExperienceBox = ({
    position,
    title,
    period,
}) => {
    return (
        // <Box sx={{m: 1}}>
        <Card sx={{ my: 1.0, px: 2, py: 1.0, boxShadow: 0, border: 1, borderColor: '#222', borderRadius: 0 }}>
            <Box sx={{display: 'flex'}}>
                <Typography variant='body1'>{position}:</Typography>
                <Typography sx={{mx: 0.5}} variant='subtitle1'>{title}</Typography>
            </Box>
            <Typography variant='body2'>{period}</Typography>
        </Card>
        // </Box>
    )
}


const WorkExperienceArea = (props) => {
    return (
        <AreaContainer title="Work Experience" number={props.number}>
            <WorkExperienceBox
                position="Research Assistant"
                title="Tohoku University"
                period="April 2021 - Present"
            />
            <WorkExperienceBox
                position="R&D Internship"
                title="LINE Corporation"
                period="August 2023 - September 2023"
            />
            <WorkExperienceBox
                position="R&D Internship"
                title="Huawei Japan Tokyo Laboratory"
                period="August 2022 - November 2022"
            />
            <WorkExperienceBox
                position="R&D Internship"
                title="Sony Group Corporation"
                period="August 2020 - September 2020"
            />
        </AreaContainer>
    )
}

export default WorkExperienceArea