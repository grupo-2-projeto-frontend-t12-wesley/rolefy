import ButtonNav from "../../components/ButtonNav";
import ShowFavorites from "../../components/Favorites";
import { Container } from "./styled";
import { motion } from "framer-motion";

function Favorite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <ShowFavorites />
        <ButtonNav />
      </Container>
    </motion.div>
  );
}

export default Favorite;
