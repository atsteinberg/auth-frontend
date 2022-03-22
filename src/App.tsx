import MuiThemeProvider from 'mui/theme';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Routes from './routes';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
