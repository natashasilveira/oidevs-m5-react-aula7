import Title from './components/Title'
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Link from './components/Link';

function App() {
    return (
    <div className="App">
      <Title text="Login" />
      <Input text="Name" label="user" />
      <Input text="Password" label="password" />
      <Button url="https://discord.gg/kd9nvMy5" btnName="Login" />
      <Link text="Esqueceu a senha?" url="https://www.google.com/" />

    </div>
  );
}

export default App;
