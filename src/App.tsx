import MuiThemeProvider from 'mui/theme';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MuiThemeProvider>
          <Routes />
          <ToastContainer />
        </MuiThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
