import { DefaultTheme } from '@react-navigation/native'
import { Platform } from 'react-native'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#615efc',
    primary: '#03A1AB',
    secondary: '#929292',
    error: '#f13a59',
    background:'#03A1AB',//00F0FF
    disable:'#dbd9d3',
    btnText:'#00F0FF' //almost used with text in button
  },
  //:::::::::::::::::: font can't access now ::::::::::::://
  fonts:
Platform.select({
    ...DefaultTheme,
    default: {     
        regular: {
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
          
        },
        medium: {
          fontFamily: 'sans-serif-medium',
          fontWeight: 'normal',
        },
        bold: {
          fontFamily: 'sans-serif',
          fontWeight: "600",
          fontSize:20
        },
        heavy: {
          fontFamily: 'sans-serif',
          fontWeight: '700',
        },
      },
})
}