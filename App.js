import React, { useState } from "react";
import StoreNavigator from './navigation/StoreNavigation';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/montserrat-alternates';

export const Context = React.createContext()

export default function App() {
  const [list, setList] = useState([])

  function removeFromList(prod) {
    setList(list.filter(item => item.index !== prod.index))
  }

  function resetList() {
    setList([])
  }

  function addToList(prod) {
    setList([...list, prod])
  }

  let [fontsLoaded] = useFonts({
    "textFont": require('./assets/fonts/MontserratAlternates-Medium.ttf'),
    "headerFont": require('./assets/fonts/MontserratAlternates-ExtraBold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
  return (
    <Context.Provider value={{ list, addToList, removeFromList, resetList }}>
      <StoreNavigator />
    </Context.Provider>
  )
}
