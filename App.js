import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './src/styles/theme';
import GlobalStyles from './src/styles/GlobalStyles';

import ThemeToggleContainer from './src/containers/ThemeToggleContainer';
import CurrencyFormContainer from './src/containers/CurrencyFormContainer';

const App = () => {
    const [isDarkMode] = useState(false);
    
    return (
        <Provider store={store}>
            <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
                <GlobalStyles />
                    <h1>Currency Wallet</h1>
                    <ThemeToggleContainer />
                    <CurrencyFormContainer />
            </ThemeProvider>
        </Provider>
    )
};

export default App;
