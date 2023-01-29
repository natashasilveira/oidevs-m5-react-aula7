import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login de Agora");


  return (
    <div className="container">
      <Title text={title} />
      <Input text="Name" label="user" />
      <Input text="Password" label="password" hideContent />
      <Button
        btnName="Entrar"
        click={() => navigate("/home")} />
      <Button
        bgColor="Blue"
        btnName="Trocar Título"
        click={() => setTitle("Login")} />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />
    </div>
  );
}

export default Login;