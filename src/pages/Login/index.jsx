import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { useNavigate } from "react-router-dom";

function Login(){

  const navigate = useNavigate();

  return (
    <div className="container">
      <Title text="Login" />
      <Input text="Name" label="user" />
      <Input text="Password" label="password" hideContent />
      <Button
        btnName="Entrar"
        redirect={() => navigate("/home")} />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />
    </div>
  );
}

export default Login;