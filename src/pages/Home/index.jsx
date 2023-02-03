import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import UserItem from "../../components/UserItem"

const Home = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { listOfUsers } = location.state;

  return (
    <div className="container">
      <Title text="Home" />
      <Subtitle />
      <Button
        btnName="Voltar"
        click={() => navigate("/")}
      />
      <ul>
        {listOfUsers.map((user) => (
          <UserItem key={user.id} username={user.username} />
        ))}
      </ul>
    </div>
  );
}

export default Home;