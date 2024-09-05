import './App.css';
import ResponsiveAppBar from './appbar';
import ProfileArea from './profile';

import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ResearchArea from './research';
import EducationArea from './education';
import { ClipLeftDown, ClipRightDown } from './clipContainer';
import { Box, Stack } from '@mui/material';
import PublicationArea from './publication';
import WorkExperienceArea from './workExperience';
import SkillArea from './skill';
import AwardArea from './award';
import OthersArea from './others';
// import * as Scroll from 'react-scroll';
// import { Link } from "react-scroll";

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  // overflow: 'hidden'
});

const APP_BAR_MOBILE = 3;
const APP_BAR_DESKTOP = 3;

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  // overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  // [theme.breakpoints.up('lg')]: {
    // paddingTop: APP_BAR_DESKTOP,
    // paddingLeft: theme.spacing(5),
    // paddingRight: theme.spacing(5)
  // }
}));

function App() {
  return (
    <>
    <ThemeConfig>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <RootStyle>
        <MainStyle>
        {/* <Container maxWidth={false} id="containerElement" sx={{ px: 5 }}> */}
        {/* <Container maxWidth="100%" id="containerElement" sx={{ m: 0, p:0 }}> */}
        <Box sx={{pt: 4, pb: 20, px: {xs: 0, sm: 2}}}>
          {/* <ClipLeftDown> */}
            {/* <ProfileArea></ProfileArea> */}
          {/* </ClipLeftDown> */}
          <Stack sx={{maxWidth: 'md', mx: 'auto', px: {sm: 3, xs: 1.5}, pl: {sm: 3, xs: 1.5}}} spacing={4}>
            <ProfileArea />
            <ResearchArea number="01"/>
            <EducationArea number="02" />
            <PublicationArea number="03" />
            <WorkExperienceArea number="04" />
            <AwardArea number="05" />
            <SkillArea number="06" />
            <OthersArea number="07" />
          </Stack>
        </Box>
          

        {/* </Container> */}

        </MainStyle>
      </RootStyle>
    </ThemeConfig>
    </>
  );
}

export default App;
