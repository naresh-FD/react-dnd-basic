import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { List } from "./List";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DndProvider backend={HTML5Backend}>
        <List />
      </DndProvider>
    </div>
  );
}
