const mainColors = {
    blue1: '#00ACEE',
    dark: '#112340',
    grey1: '#7D8797',
    grey2: '#DFE1F2',
    grey3: '#F4F7F8',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1: '#ff0000',
};

export const colors = {
    primary: mainColors.blue1,
    secondary: mainColors.dark,
    white: 'white',
    black: 'black',
    text: {
        primary: mainColors.dark,
        secondary: mainColors.grey3,
        inactive: mainColors.grey3,
        active: mainColors.dark
    },
    button: {
        primary: {
            background: mainColors.blue1,
            text: mainColors.dark,
        },
        secondary: {
            background: 'white',
            text: mainColors.dark,
        },
    },
    border: {
        primary: mainColors.blue1,
        secondary: mainColors.grey1
    },
    loadingBackground: mainColors.black2,
    error: mainColors.red1,
};