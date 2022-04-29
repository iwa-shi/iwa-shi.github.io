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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SectionTitle from './sectionTitle';
// import Card from '../theme/overrides/Card';

const SkillGraph = ({
    level,
}) => {
    return (
        <Box display="flex" sx={{ height: '25px'}}>
            {
                Array(10).fill(0).map((val, i) => {
                    return (
                      <div className={level<i+1 ? 'skill-graph-cell' : 'skill-graph-cell cell-on'}></div>
                    );
                })
            }
        </Box>
    )
}

const SkillBox = ({
    title,
    level,
}) => {
    return (
        <>
            <Box sx={{
                // px: 2,
                py: 1
            }}>
            <Typography variant='subtitle2'>
                {title}
            </Typography>
            <SkillGraph level={level}></SkillGraph>
            </Box>
        </>
    )
};

const AtCoderBox = () => {
    return (
        <>
        <Typography variant='subtitle1'>AtCoder (Competitive Programming)</Typography>
        <Box sx={{mx: 1, display: 'inline-flex', justifyContent: 'left', alignItems: 'center'}}>
            <Typography variant='body1'>UserName: <Link color="inherit" href='https://atcoder.jp/users/shoakg'>shoakg</Link></Typography>
            <Typography sx={{mx: 2}} variant='body1'>Rate: <span className='atcoder-blue'>1640</span></Typography>
        </Box>
        </>
    )
}

const SkillArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <SectionTitle title="Skills" />
            <Grid container sx={{ mx: 1, alignItems: 'stretch'}} spacing={1}>
                <Grid item xs={6} md={3}>
                    <SkillBox 
                        title="Python"
                        level={9}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="HTML"
                        level={5}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="CSS"
                        level={4}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="JavaScript"
                        level={4}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox 
                        title="PyTorch"
                        level={8}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="TensorFlow"
                        level={3}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="OpenCV"
                        level={7}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="Flask"
                        level={6}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox
                        title="React"
                        level={5}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox 
                        title="jQuery"
                        level={5}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox 
                        title="C"
                        level={2}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <SkillBox 
                        title="Cython"
                        level={3}
                    />
                </Grid>
            </Grid>
            <Box sx={{m: 1, mx: 2, display: 'inline-flex', justifyContent: 'left', alignItems: 'center'}}>
                <InfoOutlinedIcon fontSize="small" sx={{mr: 0.5}}/>
                <Typography variant='body2'>
                    I built this site with <b>React</b> and <b>MUI</b>!
                </Typography>
            </Box>
            <Box sx={{m: 1, mt: 2}}>
                <AtCoderBox />
            </Box>
        </Paper>
    )
}

export default SkillArea