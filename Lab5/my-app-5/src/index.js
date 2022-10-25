import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Student from './components/Student';
import College from './components/College';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: 
      [
        'Nunito',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(","),
    }
  }
);


root.render(
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" color="primary" fontFamily="Helvetica Neue">
          <Student name="Rick Rude" number="11111" enrolled="2" />
        </Typography>
        <Typography variant="h5" color="#ff9800" fontFamily="monospace">
          <Student name="Shawn Michaels" number="22222" enrolled="1" />
        </Typography>
        <Typography variant="h5" color="#2e7d32" fontFamily="sans-serif">
          <Student name="Bret Hart" number="33333" enrolled="3" />
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Typography variant="h5" color="secondary" fontFamily="cursive">
          <College name="George Brown" location="Casa Loma" />
        </Typography>
      </ThemeProvider>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
