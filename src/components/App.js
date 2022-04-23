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
      <ResponsiveAppBar></ResponsiveAppBar>
      <RootStyle>
        <MainStyle>
        {/* <Container maxWidth={false} id="containerElement" sx={{ px: 5 }}> */}
        {/* <Container maxWidth="100%" id="containerElement" sx={{ m: 0, p:0 }}> */}
        <div>
          <ClipLeftDown>
            <ProfileArea></ProfileArea>
          </ClipLeftDown>
          <Stack sx={{maxWidth: 'md', mx: 'auto', px: 2}} spacing={3}>
            <ResearchArea></ResearchArea>
            <EducationArea></EducationArea>
            <PublicationArea></PublicationArea>
          </Stack>
        </div>
          

        {/* </Container> */}

        </MainStyle>
      </RootStyle>
    </ThemeConfig>
    </>
  );
}

export default App;
