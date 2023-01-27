import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Button
        btnName="Voltar"
        redirect={() => navigate("/")}
      />
    </>
  );
}

export default Home;