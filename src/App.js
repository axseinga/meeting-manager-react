import "./App.css";
import data from "./db/data.json";
import Calendar from "./components/Calendar";

function App() {
    const { meetings } = data;
    return <Calendar data={meetings} />;
}

export default App;
