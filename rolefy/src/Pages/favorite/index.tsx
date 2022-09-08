import ButtonNav from "../../components/ButtonNav";
import ShowFavorites from "../../components/Favorites";
import { Container } from "./styled";

function  Favorite() {
  return <Container>
    <ShowFavorites/>
    <ButtonNav />
  </Container>
}

export default Favorite;
