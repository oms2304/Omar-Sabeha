import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();



const Layout = () => {
    const[fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'), //changing fonts pretty much
        DMedium: require('../assets/fonts/DMSans-Bold.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Bold.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout = {onLayoutRootView}/>;

}

export default Layout;