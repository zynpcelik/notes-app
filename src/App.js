import "./App.css";
import SearchBar from "./components/SearchBar";
import TextArea from "./components/TextArea";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List";

function App() {
  const store = useSelector((state) => state.notes.all);

  return (
    <div>
      <SearchBar />
      <TextArea />
      <List />
    </div>
  );
}

export default App;
