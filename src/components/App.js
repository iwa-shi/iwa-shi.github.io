import './App.css';
import ResponsiveAppBar from './appbar';
import ProfileArea from './profile';

import ThemeConfig from '../theme';
import GlobalStyles from '../theme/globalStyles';
import { styled } from '@mui/material/styles';
// import * as Scroll from 'react-scroll';
// import { Link } from "react-scroll";

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const APP_BAR_MOBILE = 2;
const APP_BAR_DESKTOP = 2;

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  // paddingTop: APP_BAR_MOBILE,
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up('lg')]: {
    // paddingTop: APP_BAR_DESKTOP,
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1)
  }
}));

function App() {
  return (
    <>
    <ThemeConfig>
      <RootStyle>
        <MainStyle>
        <ResponsiveAppBar></ResponsiveAppBar>
        <ProfileArea></ProfileArea>
        <div>
          Hello
        </div>

        </MainStyle>
      </RootStyle>
    </ThemeConfig>
    </>
  );
}

export default App;
