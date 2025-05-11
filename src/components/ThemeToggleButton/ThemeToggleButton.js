import React from "react";
import { ThemeButton } from './ThemeToggleButton.styled';

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    return (
        <ThemeButton onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </ThemeButton>
    );
};

export default ThemeToggleButton;