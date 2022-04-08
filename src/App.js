import Header from "./components/Header/Header";
import { Sidebar } from "./components/sidebar/sidebar";
import "./style.css";
import Content from "./components/content/content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
