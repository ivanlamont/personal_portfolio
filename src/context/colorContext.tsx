import React from 'react';

export const ColorThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
