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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Email, Google } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import LinkIcon from '@mui/icons-material/Link';
import SectionTitle from './sectionTitle';
var parse = require('html-react-parser');

const PaperBox = ({
    paperTitle,
    authors,
    others,
    link='',
    codeLink='',
    pdfLink=''
}) => {
    const variant = "outlined"
    // const variant = "contained"
    // const variant = "text"
    const buttonStyle = {
        'px': 1.0,
        'py': 0.2,
        'mr': 1.0
    }
    return (
        <Card sx={{ my: 1, px: 2, py: 1, boxShadow: 0, border: 0, borderColor: '#b0bec5' }}>
            {/* <CardMedia
                component="img"
                // height="160"
                width="30%"
                image="/wacv24_thumbnail.jpg"
                alt="random"
                >
            </CardMedia> */}
            <Typography variant='subtitle2' fontWeight={700}>{paperTitle}</Typography>
            <Typography variant='body2'>{parse(authors)}</Typography>
            <Typography variant='body2'>{others}</Typography>
            {link ? <Button href={link} sx={buttonStyle} color="secondary" variant={variant} size="small" startIcon={<LinkIcon />}>Link</Button> : <></> }
            {pdfLink ? <Button href={pdfLink} sx={buttonStyle} color="secondary" variant={variant} size="small" startIcon={<PictureAsPdfIcon />}>PDF</Button> : <></> }
            {codeLink ? <Button href={codeLink} sx={buttonStyle} color="secondary" variant={variant} size="small" startIcon={<GitHubIcon />}>Code</Button> : <></> }
            
        </Card>
    )
}

const PublicationArea = () => {
    return (
        <Paper sx={{px: 5, py: 0.5}} className='left-border'>
            <SectionTitle title="Publication" />
            <Box sx={{m: 1}}>
                {/* 国際会議 */}
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6'>International Conference</Typography>
                    <PaperBox
                        paperTitle="Controlling Rate, Distortion, and Realism: Towards a Single Comprehensive Neural Image Compression Model (Oral)"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, and Shinichiro Omachi."
                        others="In Proceedings of IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) , 2024, pp. 2900-2909"
                        link='https://openaccess.thecvf.com/content/WACV2024/html/Iwai_Controlling_Rate_Distortion_and_Realism_Towards_a_Single_Comprehensive_Neural_WACV_2024_paper.html'
                        codeLink='https://github.com/iwa-shi/CRDR'
                        pdfLink='https://openaccess.thecvf.com/content/WACV2024/papers/Iwai_Controlling_Rate_Distortion_and_Realism_Towards_a_Single_Comprehensive_Neural_WACV_2024_paper.pdf'
                    />
                    <PaperBox
                        paperTitle="Self Texture Transfer Networks for Low Bitrate Image Compression"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2021, pp. 1901-1905"
                        link='https://openaccess.thecvf.com/content/CVPR2021W/CLIC/html/Iwai_Self_Texture_Transfer_Networks_for_Low_Bitrate_Image_Compression_CVPRW_2021_paper.html'
                        pdfLink='https://openaccess.thecvf.com/content/CVPR2021W/CLIC/papers/Iwai_Self_Texture_Transfer_Networks_for_Low_Bitrate_Image_Compression_CVPRW_2021_paper.pdf'
                    />
                    <PaperBox
                        paperTitle="Fidelity-controllable Extreme Image Compression with Generative Adversarial Networks (Oral)"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of the 25th International Conference on Pattern Recognition (ICPR), 2020, pp. 8235-8242"
                        link='https://arxiv.org/abs/2008.10314'
                        codeLink='https://github.com/iwa-shi/fidelity_controllable_compression'
                        pdfLink='https://arxiv.org/pdf/2008.10314.pdf'
                    />
                    <PaperBox
                        paperTitle="Two-Stage Training for High-Fidelity Image Compression with Generative Adversarial Networks "
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In International Workshops on Emerging ICT, 2020."
                    />
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6'>Domestic Conference</Typography>
                    <PaperBox
                        paperTitle="学習済みVQGANを活用した深層画像符号化手法の検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="2023年度画像符号化シンポジウム/映像メディア処理シンポジウム（PCSJ/IMPS2023)"
                    />
                    <PaperBox
                        paperTitle="GANを使ったマルチレート画像符号化モデルのための学習戦略の検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2023"
                    />
                    <PaperBox
                        paperTitle="生成画像を利用した少数データくずし字認識に関する検討"
                        authors="阿部楓也, <u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2023"
                    />
                    <PaperBox
                        paperTitle="GANを使った画像符号化における識別器に関する検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2022"
                    />
                    <PaperBox
                        paperTitle="少数くずし字データ補強のための画像生成に関する検討"
                        authors="阿部楓也, <u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2022"
                    />
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