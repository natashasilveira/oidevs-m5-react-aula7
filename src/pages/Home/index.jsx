import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Title text="Home" />
      <Subtitle />
      <Button
        btnName="Voltar"
        click={() => navigate("/")}
      />
    </div>
  );
}

export default Home;