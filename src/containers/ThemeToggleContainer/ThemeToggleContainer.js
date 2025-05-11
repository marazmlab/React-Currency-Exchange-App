import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';
import ThemeToggleButton from '../../components/ThemeToggleButton/ThemeToggleButton';

const ThemeToggleContainer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme }>
            <GlobalStyles />
            <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

export default ThemeToggleContainer;