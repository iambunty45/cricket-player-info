import { Routes, Route } from "react-router-dom";
import PlayerList from "../../componet/PlayersList/player-list.componet";
const PlayersPage = () => {
  return (
    <Routes>
      <Route path=":teamId" element={<PlayerList />} />
    </Routes>
  );
};

export default PlayersPage;
