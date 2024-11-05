const colorsData = [
   {
      fond: '#333333',
      screen: {
         fond: '#b8c0a9',
         data: '#333333',
      },
      buttons: {
         fond: '#838383',
         data: '#fcfcfc',
      },
   },
   {
      fond: '#333333',
      screen: {
         fond: 'aliceblue',
         data: '#333333',
      },
      buttons: {
         fond: 'aliceblue',
         data: '#333333',
      },
   },
   {
      fond: '#019a9c',
      screen: {
         fond: 'aliceblue',
         data: '#333333',
      },
      buttons: {
         fond: 'aliceblue',
         data: '#333333',
      },
   },
   {
      fond: '#565c6c',
      screen: {
         fond: '#36b7d4',
         data: '#333333',
      },
      buttons: {
         fond: '#36b7d4',
         data: '#333333',
      },
   },
]

export const initialColors = {
   '--fond': colorsData[0].fond,
   '--screenFond': colorsData[0].screen.fond,
   '--screenColor': colorsData[0].screen.data,
   '--buttonsFond': colorsData[0].buttons.fond,
   '--buttonsColor': colorsData[0].buttons.data,
}

export default colorsData
