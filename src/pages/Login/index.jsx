import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Subtitle from '../../components/Subtitle';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState();

  const changeSubtitle = () => {
    const user = document.getElementById('user').value;
    setSubtitle(user);
  }


  return (
    <div className="container">
      <Title text={title} />
      <Subtitle text={subtitle} />
      <Input text="Name" label="user" change={changeSubtitle} />
      <Input text="Password" label="password" hideContent />
      <Button
        btnName="Entrar"
        click={() => navigate("/home")} />
      <Button
        bgColor="Blue"
        btnName="Trocar Título"
        click={() => setTitle("Título Trocado")} />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />
    </div>
  );
}

export default Login;