import './Login.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import ErrorMessage from '../../components/ErrorMessage';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import UserItem from '../../components/UserItem';

const Login = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [loginFail, setLoginFail] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Raniel',
      password: 'oidevs'
    },
    {
      id: 2,
      username: 'Juliana',
      password: 'oidevs'
    },
    {
      id: 3,
      username: 'Sueli',
      password: 'oidevs'
    }
  ]);

  const authenticateUser = () => {
    const loggedUser = users.find((currentUser) =>
      currentUser.username === username &&
      currentUser.password === password
    );

    if (loggedUser) {
      navigate("/home");
    } else {
      setLoginFail(true);
    }
  }


  return (
    <div className="container">
      <Title text={title} />
      {loginFail && <ErrorMessage loginFail={loginFail} />}
      <Input
        text="Usuário"
        label="user"
        loginFail={loginFail}
        change={(e) => setUsername(e.target.value)} />
      <Input
        text="Senha"
        label="password" hideContent
        loginFail={loginFail}
        change={(e) => setPassword(e.target.value)} />
      <Button
        btnName="Entrar"
        click={authenticateUser} />
      <Button
        bgColor="Blue"
        btnName="Trocar Título"
        click={() => setTitle("Título Trocado")} />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />

      <ul>
        {users.map((user) => (
          <UserItem key={user.id} username={user.username} />
        ))}
      </ul>
    </div>
  );
}

export default Login;