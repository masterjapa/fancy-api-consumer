export interface ITheme {
    primaryDark: string,
    primaryFontFamily: string,
    primaryLight: string,
    secondaryLight: string,
    mobileBreakView: string,
    desktopBreakView: string,
    badgeColors: {
      active: string,
      done: string,
      default: string,
    }
  }
  
  const theme: ITheme = {
    primaryDark: `#ff5824`,
    primaryFontFamily: 'MontSerrat',
    primaryLight: '#e5eafa',
    secondaryLight: '#fff',
    mobileBreakView: '26.25rem',
    desktopBreakView: '64rem',
    badgeColors: {
      active: '#c6ccb2',
      done: '#00b383',
      default: '#ff5824'
    }
  }

  export {
      theme
  }