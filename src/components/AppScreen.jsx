import Header from './Header/Header'
import {Sidebar} from './sidebar/sidebar'
import './../style.css'
import Content from './content/content'
import {MaterialUISwitch} from './Theme/Switch'

function AppScreen({setDarkMode, darkMode}) {
    const handleChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className="App">
            <Header />
            <MaterialUISwitch checked={darkMode} onChange={handleChange} />

            <div className="main">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}

export default AppScreen
