import AppScreen from './components/AppScreen'
import {withTheme} from './components/Theme/Theme'

function App({setDarkMode, darkMode}) {
    return <AppScreen setDarkMode={setDarkMode} darkMode={darkMode} />
}

export default withTheme(App)
