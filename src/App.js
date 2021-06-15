import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Next.js"/>
      <Todo text="Explore the Full Next.js Course"/>
    </div>
  );
}

export default App;
