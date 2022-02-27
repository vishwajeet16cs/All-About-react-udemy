import Todos from './components/Todos';

function App() {
  let number = 100
  let emp={
    name:"vishwajeet",
    roll:129
  }
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypeScript']} number={number} emp={emp} />
    </div>
  );
}

export default App;