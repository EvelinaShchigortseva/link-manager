import Header from './Header/Header'
import {Sidebar} from './sidebar/sidebar'
import './../style.css'
import Content from './content/content'

function AppScreen() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}

export default AppScreen
