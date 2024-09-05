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
import AreaContainer from './areaContainer';


const AwardBox = ({
    title,
    body,
    link,
}) => {
    const variant = "outlined"
    // const variant = "contained"
    // const variant = "text"
    const buttonStyle = {
        'px': 1.5,
        'py': 0.05,
        'mt': 0.5,
        'border-radius': '100vh',
        'mr': 1.0
    }
    return (
        // <Card sx={{ my: 1, px: 2, py: 1, boxShadow: 0, border: 1, borderColor: '#b0bec5', borderRadius: 0 }}>
        <Card sx={{ my: 1.5, px: 2, py: 1.5, boxShadow: 0, border: 1, borderColor: '#222', borderRadius: 0 }}>
            {/* <CardMedia
                component="img"
                // height="160"
                width="30%"
                image="/wacv24_thumbnail.jpg"
                alt="random"
                >
            </CardMedia> */}
            <Typography variant='subtitle2' fontWeight={700} color='#222'>{title}</Typography>
            <Typography variant='body2'>{body}</Typography>
            {link ? <Button href={link} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<LinkIcon />}>Link</Button> : <></> }
        </Card>
    )
}

const AwardArea = (props) => {
    const linkMiru22 = "https://sites.google.com/view/miru2022/home/award?authuser=0";
    const linkMiru23 = "http://cvim.ipsj.or.jp/MIRU2023/award/";
    const linkPcsj23 = "https://www.pcsj-imps.org/archive/2023awards.html";
    const linkMiru24 = "https://miru-committee.github.io/miru2024/author/award/";
    return (
        <AreaContainer title="Award" number={props.number}>
            <AwardBox
                title="学生奨励賞 (Student Encouragement Award)"
                body="画像の認識・理解シンポジウム MIRU2024, August 2024"
                link={linkMiru24}
            />
            <AwardBox
                title="ベストポスター賞 (Best Poster Award)"
                body="画像符号化シンポジウム / 映像メディア処理シンポジウム PCSJ/IMPS2023, November 2023"
                link={linkPcsj23}
            />
            <AwardBox
                title="論文評価貢献賞 -ジュニア評価委員 (Outstanding Junior Reviewer Award)"
                body="画像の認識・理解シンポジウム MIRU2023, July 2023"
                link={linkMiru23}
            />
            <AwardBox
                title="論文評価貢献賞 -ジュニア評価委員 (Outstanding Junior Reviewer Award)"
                body="画像の認識・理解シンポジウム MIRU2022, July 2022"
                link={linkMiru22}
            />
            <AwardBox
                title="Outstanding Student Award (Master's Course)"
                body="Group of Electrical Engineering, Communication Engineering, Electronic Engineering, and Information Engineering, Tohoku University, March 2022"
            />
            <AwardBox
                title="Presentation Award"
                body="MIRU2020 Young Researchers Program, August 2020"
            />
        </AreaContainer>
    )
}

export default AwardArea