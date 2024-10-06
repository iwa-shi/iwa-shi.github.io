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
import AreaContainer from './areaContainer';

var parse = require('html-react-parser');

const NumberBox = ({
    number
}) => {
    return (
        <Box sx={{position: 'absolute', left: '0px', top: '0px', m: 0, width: '25px', background: '#ccc', textAlign: 'center'}}>
            <Typography variant='caption' sx={{m: 0, p: 0}}>{number}</Typography>
        </Box>
    )
}

const Thumbnail = ({path}) => {
    const boxStyle = {
        width: {'sm': '35%', 'xs': '50%'},
        // width: '35%',
        // height: '100%',
        // background: '#eee',
        mr: 1,
        py: 0.5,
        // position: 'relative',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }
    const imgStyle = {
        // position: 'absolute',
        width: '90%',
        objectFit: 'contain',
        // width: '180px',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)'
    }
    return (
        <Box sx={boxStyle}>
        {/* // <Box sx={{width: '200px', background: '#eee', mr: 2}}> */}
            <img src={path} style={imgStyle}></img>
        </Box>
    )
}

const PaperInfo = ({
    paperTitle,
    authors,
    others,
    link='',
    codeLink='',
    pdfLink='',
    misc='',
    slideLink='',
    projectPage='',
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
        <Box sx={{flex: 1}}>
            <Typography variant='subtitle2' fontWeight={700} color='#222'>{paperTitle}</Typography>
            <Typography variant='body2'>{parse(authors)}</Typography>
            <Typography variant='body2'>{others}</Typography>
            {link ? <Button href={link} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<LinkIcon />}>Link</Button> : <></> }
            {projectPage ? <Button href={projectPage} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<LinkIcon />}>Project Page</Button> : <></> }
            {pdfLink ? <Button href={pdfLink} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<PictureAsPdfIcon />}>PDF</Button> : <></> }
            {codeLink ? <Button href={codeLink} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<GitHubIcon />}>Code</Button> : <></> }
            {slideLink ? <Button href={slideLink} sx={buttonStyle} color="black" variant={variant} size="small" startIcon={<LinkIcon />}>Slide</Button> : <></> }
            {misc ? <Box><Typography variant='caption'>{misc}</Typography></Box> : <></>}
        </Box>
    )
}

const PaperBox = ({
    paperTitle,
    authors,
    others,
    link='',
    codeLink='',
    pdfLink='',
    misc='',
    slideLink='',
    number='',
    thumbnail='',
    projectPage='',
}) => {
    
    const pl = thumbnail ? 0 : 3.5
    const xsP = thumbnail ? 1 : 0
    return (
        // <Card sx={{ my: 1, px: 2, py: 1, boxShadow: 0, border: 1, borderColor: '#b0bec5', borderRadius: 0 }}>
        <Card sx={{ py: 1.2, my: 1.5, px: 2, pl: pl, boxShadow: 0, border: 1, borderColor: '#222', borderRadius: 0 }}>
            <Box display='flex' flexDirection={{sm: 'row', xs: 'column'}} sx={{p: {sm: 0, xs: xsP}}}>
                {thumbnail ? <Thumbnail path={thumbnail}></Thumbnail> : <></>}
                <PaperInfo 
                    paperTitle={paperTitle}
                    authors={authors}
                    others={others}
                    link={link}
                    codeLink={codeLink}
                    pdfLink={pdfLink}
                    misc={misc}
                    slideLink={slideLink}
                    number={number}
                    projectPage={projectPage}
                />
            </Box>
            {number ? <NumberBox number={number}></NumberBox> : <></>}
        </Card>
    )
}

const PublicationArea = (props) => {
    return (
        <AreaContainer title="Publication" number={props.number}>
            <Box sx={{m: 1}}>
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6'>International Journal</Typography>
                    <PaperBox
                        paperTitle="Semantically-Guided Image Compression for Enhanced Perceptual Quality at Extremely Low Bitrates"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, and Shinichiro Omachi."
                        others="IEEE Access, vol. 12, pp. 10057 - 10072, 2024."
                        link='https://ieeexplore.ieee.org/document/10601636'
                        number='1'
                        thumbnail='/thumbnail/access2024_semantic.png'
                    />
                </Box>
                {/* 国際会議 */}
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6'>International Conference</Typography>
                    <PaperBox
                        paperTitle="Layout-Corrector: Alleviating Layout Sticking Phenomenon in Discrete Diffusion Model"
                        authors="<u>Shoma Iwai</u>, Atsuki Osanai, Shunsuke Kitada, and Shinichiro Omachi."
                        others="In Proceedings of European Conference on Computer Vision (ECCV), 2024"
                        misc="*This work was conducted during an internship at LINE Corporation (currently LY Corporation). Code will be released soon."
                        projectPage='https://iwa-shi.github.io/Layout-Corrector-Project-Page/'
                        pdfLink='https://arxiv.org/pdf/2409.16689'
                        number='5'
                        thumbnail='/thumbnail/eccv2024_layout_corrector.png'
                        />
                    <PaperBox
                        paperTitle="Controlling Rate, Distortion, and Realism: Towards a Single Comprehensive Neural Image Compression Model (Oral)"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, and Shinichiro Omachi."
                        others="In Proceedings of IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pp. 2900-2909, 2024"
                        link='https://openaccess.thecvf.com/content/WACV2024/html/Iwai_Controlling_Rate_Distortion_and_Realism_Towards_a_Single_Comprehensive_Neural_WACV_2024_paper.html'
                        codeLink='https://github.com/iwa-shi/CRDR'
                        pdfLink='https://openaccess.thecvf.com/content/WACV2024/papers/Iwai_Controlling_Rate_Distortion_and_Realism_Towards_a_Single_Comprehensive_Neural_WACV_2024_paper.pdf'
                        number='4'
                        thumbnail='/thumbnail/wacv2024_crdr.png'
                    />
                    <PaperBox
                        paperTitle="Self Texture Transfer Networks for Low Bitrate Image Compression"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, pp. 1901-1905, 2021"
                        link='https://openaccess.thecvf.com/content/CVPR2021W/CLIC/html/Iwai_Self_Texture_Transfer_Networks_for_Low_Bitrate_Image_Compression_CVPRW_2021_paper.html'
                        pdfLink='https://openaccess.thecvf.com/content/CVPR2021W/CLIC/papers/Iwai_Self_Texture_Transfer_Networks_for_Low_Bitrate_Image_Compression_CVPRW_2021_paper.pdf'
                        number='3'
                        thumbnail='/thumbnail/cvprw2021_self_texture.png'
                    />
                    <PaperBox
                        paperTitle="Fidelity-controllable Extreme Image Compression with Generative Adversarial Networks (Oral)"
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In Proceedings of the 25th International Conference on Pattern Recognition (ICPR), pp. 8235-8242, 2020"
                        link='https://arxiv.org/abs/2008.10314'
                        codeLink='https://github.com/iwa-shi/fidelity_controllable_compression'
                        pdfLink='https://arxiv.org/pdf/2008.10314.pdf'
                        number='2'
                        thumbnail='/thumbnail/icpr2020_fidelity_control.png'
                    />
                    <PaperBox
                        paperTitle="Two-Stage Training for High-Fidelity Image Compression with Generative Adversarial Networks "
                        authors="<u>Shoma Iwai</u>, Tomo Miyazaki, Yoshihiro Sugaya, and Shinichiro Omachi."
                        others="In International Workshops on Emerging ICT, 2020."
                        number='1'
                    />
                </Box>
                <Box sx={{ my: 2 }}>
                    <Typography variant='h6'>Domestic Conference</Typography>
                    <PaperBox
                        paperTitle="Layout-Corrector: Alleviating Layout Sticking Phenomenon in Discrete Diffusion Model (Oral)"
                        authors="<u>岩井翔真</u>, 長内淳樹, 北田俊輔, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2024"
                        slideLink='https://speakerdeck.com/lycorptech_jp/miru2024-layout-corrector'
                        misc="*Student Encouragement Award"
                        number='9'
                    />
                    <PaperBox
                        paperTitle="画像圧縮におけるVQGAN活用のための双条件付き学習 (Oral)"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2024"
                        misc="*Student Encouragement Award"
                        number='8'
                    />
                    <PaperBox
                        paperTitle="学習済みVQGANを活用した深層画像符号化手法の検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="2023年度画像符号化シンポジウム/映像メディア処理シンポジウム（PCSJ/IMPS2023)"
                        misc="*Best poster award"
                        number='7'
                    />
                    <PaperBox
                        paperTitle="GANを使ったマルチレート画像符号化モデルのための学習戦略の検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2023"
                        number='6'
                    />
                    <PaperBox
                        paperTitle="生成画像を利用した少数データくずし字認識に関する検討"
                        authors="阿部楓也, <u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2023"
                        number='5'
                    />
                    <PaperBox
                        paperTitle="GANを使った画像符号化における識別器に関する検討"
                        authors="<u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2022"
                        number='4'
                    />
                    <PaperBox
                        paperTitle="少数くずし字データ補強のための画像生成に関する検討"
                        authors="阿部楓也, <u>岩井翔真</u>, 宮崎智, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2022"
                        number='3'
                    />
                    <PaperBox
                        paperTitle="参照型超解像による特徴転移を利用した高品質な画像符号化"
                        authors="<u>岩井翔真</u>, 宮崎智, 菅谷至寛, 大町真一郎."
                        others="画像の認識・理解シンポジウム MIRU2021"
                        number='2'
                    />
                    <PaperBox
                        paperTitle="Semantic Guided Extreme Image Compression with Generative Adversarial Networks"
                        authors="<u>岩井翔真</u>, 宮崎智, 菅谷至寛, 大町真一郎."
                        others="電気関係学会東北支部連合大会 IEEE Student Session 2021"
                        number='1'
                    />
                </Box>
            </Box>
        </AreaContainer>
    )
}

export default PublicationArea