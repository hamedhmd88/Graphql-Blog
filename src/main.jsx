import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/fonts.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom";

import theme from './mui/theme.js'

const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/clxt8dz67028207wgccxijzcc/master',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
)
