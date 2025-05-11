import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './src/styles/theme';
import GlobalStyles from './src/styles/GlobalStyles';
import ThemeToggleContainer from './src/components/ThemeToggleContainer';

const App = () => {
    const [isDarkMode] = useState(false);
    
    return (
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div>
                <h1>Currency Wallet</h1>
                <ThemeToggleContainer />
            </div>
        </ThemeProvider>
    )
};

export default App;
