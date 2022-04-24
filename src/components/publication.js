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
var parse = require('html-react-parser');

const PaperBox = ({
    paperTitle,
    authors,
    others,
}) => {
    return (
        <Box sx={{ m: 1 }}>
            <Typography variant='subtitle2' fontWeight={700}>{paperTitle}</Typography>
            <Typography variant='body2'>{parse(authors)}</Typography>
            <Typography variant='body2'>{others}</Typography>
        </Box>
    )
}

const PublicationArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <Typography variant='h4'><span className='title-marker'>Publication</span></Typography>
            <Box sx={{m: 1}}>
                {/* 国際会議 */}
                <Box sx={{ my: 2 }}>
                    <Typography variant='subtitle1'>International Conference</Typography>
                    <PaperBox
                        paperTitle="Self Texture Transfer Networks for Low Bitrate Image Compression"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2021, pp. 1901-1905"
                    />
                    <PaperBox
                        paperTitle="Fidelity-controllable Extreme Image Compression with Generative Adversarial Networks (oral)"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of the 25th International Conference on Pattern Recognition (ICPR), 2020, pp. 8235-8242"
                    />
                    <PaperBox
                        paperTitle="Two-Stage Training for High-Fidelity Image Compression with Generative Adversarial Networks "
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In International Workshops on Emerging ICT, 2020."
                    />
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography variant='subtitle1'>Domestic Conference</Typography>
                    <PaperBox
                        paperTitle="参照型超解像による特徴転移を利用した高品質な画像符号化"
                        authors="<u>岩井翔真</u>, 宮崎智, 菅谷至寛, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2021"
                    />
                    <PaperBox
                        paperTitle="Semantic Guided Extreme Image Compression with Generative Adversarial Networks"
                        authors="<u>岩井翔真</u>, 宮崎智, 菅谷至寛, 大町真一郎."
                        others="電気関係学会東北支部連合大会 IEEE Student Session 2021"
                    />
                </Box>
            </Box>
        </Paper>
    )
}

export default PublicationArea