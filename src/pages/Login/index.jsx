import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
// import Subtitle from '../../components/Subtitle';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([
    {
      username: 'Raniel',
      password: 'oidevs'
    },
    {
      username: 'Juliana',
      password: 'oidevs'
    },
    {
      username: 'Sueli',
      password: 'oidevs'
    }
  ]);

  // const changeSubtitle = () => {
  //   const user = document.getElementById('user').value;
  //   setSubtitle(user);
  // }

  const authenticateUser = () => {
    console.log("Autenticando Usuário");
    console.log(username);
    console.log(password);
    const existUser = users.find((currentUser) => {
      if (
        currentUser.username === username &&
        currentUser.password === password
      )
      return currentUser
    });

    if(existUser) {
      console.log(existUser); 
      navigate("/home"); 
    }
  }


  return (
    <div className="container">
      <Title text={title} />
      {/* <Subtitle text={subtitle} /> */}
      <Input 
        text="Name" 
        label="user" 
        change={(e) => setUsername(e.target.value)} />
      <Input 
        text="Password" 
        label="password" hideContent 
        change={(e) => setPassword(e.target.value)} />
      <Button
        btnName="Entrar"
        click={authenticateUser} />
      <Button
        bgColor="Blue"
        btnName="Trocar Título"
        click={() => setTitle("Título Trocado")} />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />
    </div>
  );
}

export default Login;