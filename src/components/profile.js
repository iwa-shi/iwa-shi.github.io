import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardContent, CardMedia, CardHeader, Grid, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BorderLeft, Email, Google } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import palette from '../theme/palette';
import AreaContainer from './areaContainer';


const InfoIcon = ({
    type
}) => {
    const style = {
        mr: {sm: 1, xs: 0.3},
    }
    if (type === 'github') {
        return <GitHubIcon fontSize='small' sx={style}></GitHubIcon>;
    } else if (type === 'email') {
        return <Email fontSize='small' sx={style}></Email>;
    } else if (type === 'google') {
        return <Google fontSize='small' sx={style}></Google>;
    } else if (type === 'group') {
        return <GroupsIcon fontSize='small' sx={style}></GroupsIcon>;
    }
}

const InfoBox = ({
    text,
    icontype,
    link='',
    borderRight=0,
    paddingLeft=1.0,
}) => {
    const boxStyle = {
        // display: 'inline-flex',
        // justifyContent: 'left',
        // display: 'flex',
        // alignItems: 'center',
        // flexWrap: 1,
        gap: 0,
        px: 0,
        pl: paddingLeft,
        py: {sm: 0.5, xs: 0.2},
        borderRight: borderRight,
        borderBottom: 1,
        borderColor: '#222',
        width: '100%',
        height: '100%',
        border: 1,
        borderRadius: '100vh',
        backgroundColor: '#fff',
        // backgroundColor: '#222',
        // color: '#fff',
        // fontWeight: 700,
        // pb: 1,
    }
    return (
        <a href={link} style={{color: palette.text.primary}} className="prof-link">
            <Box sx={boxStyle} className="prof-link-box_" display="flex" flexWrap="nowrap" alignItems="center">
                <InfoIcon type={icontype} />
                <Typography variant='body2' fontWeight={500} sx={{ mx: 0 }}>{text}</Typography>
            </Box>
        </a>
    )
};

const ProfileImage = () => {
    return (
        <Box sx={{ width: '30%', maxWidth: {xs: 120, sm: 130}, mx: 0, minWidth: 115,}} className='profileImgBox'>
            {/* <img src="/profile/profile_miru2024.jpg" className='profileimg'></img> */}
            {/* <img src="/profile/profile_main.jpg" className='profileimg'></img> */}
            <img src="/profile/profile_mono_006.png" className='profileimg'></img>
        </Box>
    )
}

const LinkArea = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', alignItems: 'center', mt: 0.5}}>
            <Grid container sx={{ maxWidth: { xs: 240, sm: 300, md: 500 }, justifyContent: 'left'}} columns={{ xs: 13, sm: 13, md: 25 }} gap={{xs: 0.5, md: 0.5}} alignItems="stretch">
                <Grid item xs={6}>
                    <InfoBox text="GitHub" icontype="github" link='https://github.com/iwa-shi'/>
                </Grid>
                <Grid item xs={6}>
                    <InfoBox text="Scholar" icontype="google" link='https://scholar.google.com/citations?user=jCVwlyIAAAAJ&'/>
                </Grid>
                <Grid item xs={6}>
                    <InfoBox text="Email" icontype="email" link='mailto:shoma.iwai.s4@dc.tohoku.ac.jp'/>
                </Grid>
                <Grid item xs={6}>
                    <InfoBox text="Lab" icontype="group" link='http://www.iic.ecei.tohoku.ac.jp/index.html' borderRight={1} />
                </Grid>
            </Grid>
        </Box>
    )
}

const ProfileArea = () => {
    const boxStyle = {
        // py: 5,
        pt: 2,
        pb: 2,
        borderLeft: 0,
        borderBottom: 0,
    }
    const borderTopRight = {
        borderRadius: 0,
        borderRight: 1,
        borderTop: 1,
        // border: 0,
        borderTopRightRadius: {sm: 30, xs: 30},
        borderColor: '#222',
        pr: {sm: 3, xs: 1},
        ml: {sm: 5, xs: 2},
    }

    // const gradientBackground = 'linear-gradient(217deg, rgba(255,0,0,.01), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.01), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.01), rgba(0,0,255,0) 70.71%);'
    const gradientBackground = '#fff'
    return (
        <Paper sx={{py: 0.0, background: gradientBackground, ...borderTopRight}} className='left-border_'>
            <Box sx={boxStyle}>
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'left', alignItems: 'end', borderTop: 0, borderBottom: 0, mb: 1, gap: {sm: 3, xs: 1}}}>
                    <ProfileImage />
                    <Box sx={{pl: 0, py: 1, borderColor: '#222', border: 0, borderLeft: 0, borderTop: 0, flexGrow: 1}}>
                        <Typography variant='h1' sx={{ mt: -1 }} className='title-marker'>Shoma Iwai</Typography>
                        <Typography variant='h6' sx={{ mt: -1 }}>岩井 翔真</Typography>
                        <Typography variant='body1'>PhD Student @ Tohoku University</Typography>
                        <LinkArea />
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default ProfileArea