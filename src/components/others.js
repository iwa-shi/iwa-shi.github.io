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
import SectionTitle from './sectionTitle';
import LinkIcon from '@mui/icons-material/Link';
import AreaContainer from './areaContainer';


const OthersArea = (props) => {
    const imgStyle = {
        width: '80%'
    }
    const paperLink = 'https://github.com/iwa-shi/paper_memo'
    const variant = "outlined"
    // const variant = "contained"
    // const variant = "text"
    const buttonStyle = {
        'px': 1.5,
        'py': 0.05,
        'border-radius': '100vh',
        mt: 1,
        // 'mr': 1.0,
        // "ml": 1.0
    }
    return (
        <AreaContainer title='Others' number={props.number}>
            <Box sx={{m: 1}}>
                <Box display='flex'>
                    <Typography variant='subtitle1'>Paper Summary (in Japanese)</Typography>
                </Box>
                <Typography variant='body2'>Summaries of <b>300+ papers</b> that I read.</Typography>
                <Button href={paperLink} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<LinkIcon />}>Link</Button>
                {/* <Typography variant='body2'>Summaries of <b>300+ papers</b> that I read can be found <Link href='https://github.com/iwa-shi/paper_memo' color='inherit'>here</Link>.</Typography> */}
                <Box sx={{mt: 1}}>
                    <img style={imgStyle} src="/paper_summary_thumbnail.jpeg" className='paperMemo'></img>
                </Box>
            </Box>
        </AreaContainer>
    )
}

export default OthersArea