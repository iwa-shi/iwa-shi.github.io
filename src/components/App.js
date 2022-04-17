import './App.css';
import ResponsiveAppBar from './appbar';
import ProfileArea from './profile';

import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ResearchArea from './research';
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
        <Container maxWidth={false} id="containerElement" sx={{ px: 5 }}>

          <ProfileArea></ProfileArea>
          <ResearchArea></ResearchArea>


        </Container>

        </MainStyle>
      </RootStyle>
    </ThemeConfig>
    </>
  );
}

export default App;
