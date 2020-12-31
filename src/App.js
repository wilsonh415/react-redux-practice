import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Articles:
        <List/>
      </h1>
      <div>
        <h2>Add a new article</h2>
        <Form/>
      </div>
    </div>
  );
}

export default App;
