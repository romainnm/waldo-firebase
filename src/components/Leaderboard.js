import { useGlobalContext } from "../context";
//Components
import Stopwatch from "./Stopwatch";
//icons
import { MdOutlineTimer } from "react-icons/md";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
const Leaderboard = ({ level }) => {
  const {db, sortPlayers } = useGlobalContext();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const colRef = collection(db, `levels/level${level}/leaderboard`);
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let data = snapshot.docs.map((doc) => doc.data());
      data = sortPlayers(data);
      setLeaderboard(data);
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Level {level}</h2>
      <ol>
        {leaderboard
          .map((player, index) => {
            const { name, time } = player;
            return (
              <li key={index}>
                <div className="center">
                  <span className="bold">{name}~</span>
                  <Stopwatch timer={parseInt(time)} />
                  <MdOutlineTimer />
                </div>
              </li>
            );
          })
          .slice(0, 10)}
      </ol>
    </div>
  );
};

export default Leaderboard;
