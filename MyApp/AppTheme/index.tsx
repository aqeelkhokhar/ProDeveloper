import { DefaultTheme } from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
      primary: '#f0c7ea',
    iconsColor:'#51aff7',
    accent: '#03dac4',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    disabled: 'rgba(0, 0, 0, 0.38)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
};

export const DarkThemes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#bb86fc',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    text: '#ffffff',
    disabled: 'rgba(255, 255, 255, 0.38)',
    placeholder: 'rgba(255, 255, 255, 0.54)',
    backdrop: 'rgba(255, 255, 255, 0.5)',
  },
};

export const ReverseTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff5722', 
    accent: '#ffc107', 
    background: '#000000',
    surface: '#000000',
    text: '#ffffff', 
    disabled: 'rgba(255, 255, 255, 0.38)',
    placeholder: 'rgba(255, 255, 255, 0.54)',
    backdrop: 'rgba(255, 255, 255, 0.5)',
  },
};

export const ColorBlindTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff69b4', 
    accent: '#8b0000', 
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    disabled: 'rgba(0, 0, 0, 0.38)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
};
