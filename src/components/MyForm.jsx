import './MyForm.css';
import {useState} from 'react';

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [biografia, setBiografia] = useState(user ? user.biografia : '');
  const [funcao, setFuncao] = useState(user ? user.funcao : '');
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("Enviando o Formulário");
  console.log(name, email, biografia, funcao);
  //console.log(name);
  //console.log(email);
  setName('');
  setEmail('');
  setBiografia('');
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            <label><span>E-Mail:</span><input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/></label>
            <label><span>Biografia:</span><textarea name="biografia" placeholder="Descrição do usuário" onChange={(e) => setBiografia(e.target.value)} value={biografia}></textarea></label>
            <label><span>Função no Sistema:</span><select name="funcao" onChange={(e) => setFuncao(e.target.value)} value={funcao}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
              </select></label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  );
};

export default MyForm;