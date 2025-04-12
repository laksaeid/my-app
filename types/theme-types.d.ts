type ThemeColors = 'Zinc' | 'Rose' | 'Blue' | 'Green' | 'Orange';

type ThemeColorStateParams = {
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
};
