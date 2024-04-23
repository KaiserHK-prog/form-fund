import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name:"Marcos", email:"marcosg@gmail.com", biografia:"Sou um advogado", funcao:"Administrador"}} />
    </div>
  );
};

export default App;
