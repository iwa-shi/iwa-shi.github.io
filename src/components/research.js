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
import AreaContainer from './areaContainer';

const ResearchArea = ( props ) => {
    return (
        <AreaContainer title="Study and Research" number={props.number}>
            <Box sx={{ m: 1 }}>
                <Typography variant='body1'>
                    He is a third-year PhD student at Tohoku University, specializing in <span className='green-font bold'>Learned Image Compression</span> at <Link href="http://www.iic.ecei.tohoku.ac.jp/" target="_blank" color="inherit">Image Information Communication Lab</Link>, under the supervision of <Link href="http://www.iic.ecei.tohoku.ac.jp/~machi/index-e.html" target="_blank" color="inherit">Prof. Shinichiro Omachi</Link>.
                </Typography>
                <Typography variant='body1'>
                    He is a recipient of the <span className='green-font bold'>JSPS Research Fellowship for Young Scientists (学振DC2)</span> and is also a member of <Link href='https://www.aie.tohoku.ac.jp/english/greeting/' color="inherit">AIE WISE Program for AI Electronics</Link>.
                </Typography>
            </Box>
            <Box sx={{ m: 1 }}>
                <Typography variant='subtitle1'>Interests</Typography>
                <Typography variant='body2'>
                    Machine Learning, Computer Vision, Image Compression, Generative Models
                </Typography>
            </Box>
        </AreaContainer>
    )
}

export default ResearchArea