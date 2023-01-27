import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

function Login(){
  return (
    <div className="container">
      <Title text="Login" />
      <Input text="Name" label="user" />
      <Input text="Password" label="password" />
      <Button url="https://discord.gg/kd9nvMy5" btnName="Login" />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />
    </div>
  );
}

export default Login;