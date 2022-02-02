import React, { useState, useEffect, useContext, useRef } from "react";
import levels from "./data";
import firebaseConfig from "./firebaseConfig";
// Initialize Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* === States === */
  const [levelSelected, setLevelSelected] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msgAlert: "" });
  const [startTimer, setStartTimer] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const [gameTimer, setGameTimer] = useState(0);
  const [waitStartGame, setWaitStartGame] = useState(true);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);
  const [topTen, setTopTen] = useState(false);
  const [clickPosition, setClickPosition] = useState({
    left: 0,
    top: 0,
  });
  const dropdownContainer = useRef(null);
  /* === Manage window === */
  // eslint-disable-next-line
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  /* === Initialize stage === */
  useEffect(() => {
    if (gameStart) {
      setCharacters(levels[levelSelected - 1].characters);
    }
    // eslint-disable-next-line
  }, [gameStart]);

  /* === Alert logics === */
  const handleAlert = (show, type, msg) => {
    setAlert({
      show: show,
      type: type,
      msgAlert: msg,
    });
  };
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        closeDropdown();
        setAlert({ ...alert, show: false });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  /* === Game Start & End logics === */
  // Start
  const handleGameStart = () => {
    setComingSoon(false);
    setWaitStartGame(false);
    setGameOver(false);
    setTopTen(false);
    setGameStart(true);
    setStartTimer(true);
  };
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setGameTimer((prev) => prev + 10);
      }, 10);
      return () => clearInterval(timer);
    }
  }, [startTimer]);
  // Game Over
  const checkIsGameOver = () => {
    const isGameOver = characters.every((char) => char.found === true);
    if (isGameOver) {
      setGameStart(false);
      setGameOver(true);
      setFinalTime(gameTimer);
      enterLeader(gameTimer);
      setStartTimer(false);
      setGameTimer(0);
    }
  };
  useEffect(() => {
    if (!waitStartGame) {
      checkIsGameOver();
    }
    // eslint-disable-next-line
  }, [characters]);
  const nextLevel = () => {
    const newLevel = levelSelected + 1;
    if (newLevel > 2) {
      setComingSoon(true);
      setGameStart(false);
      setWaitStartGame(false);
      setGameOver(false);
    } else {
      setLevelSelected(newLevel);
      handleGameStart();
    }
  };
  const playAgain = () => {
    const newLevel = levelSelected;
    setLevelSelected(newLevel);
    handleGameStart();
  };
  const restart = () => {
    setLevelSelected(1);
    setWaitStartGame(true);
  };

  /* === Leaderboard logics === */
  const sortPlayers = (players) => {
    return players.sort((a, b) => a.time - b.time).slice(0, 10);
  };
  const enterLeader = (playerTime) => {
    let topPlayers;
    const colRef = collection(db, `levels/level${levelSelected}/leaderboard`);
    onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      topPlayers = sortPlayers(data);
      if (topPlayers === undefined) {
        topPlayers = [];
      }
      if (!topPlayers[9]) {
        setTopTen(true);
      }
      if (topPlayers[9] && playerTime < topPlayers[9].time) {
        setTopTen(true);
      }
    });
  };
  // Add player to leaderboard
  const addLeaderboard = async (e, playerName, playerTime) => {
    e.preventDefault();
    const newEntry = { name: playerName, time: playerTime };
    const colRef = collection(db, `levels/level${levelSelected}/leaderboard`);
    await addDoc(colRef, newEntry);
    setTopTen(false);
  };

  /* === Click & coordintates logics === */
  const clickLocation = (e) => {
    const xClickCoord =
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100;
    const yClickCoord =
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100;
    const clickCoord = { xClickCoord, yClickCoord };
    return clickCoord;
  };
  const updateClickPosition = (coordinates) => {
    const { xClickCoord, yClickCoord } = coordinates;
    const updatePositions = { left: xClickCoord, top: yClickCoord };
    setClickPosition(updatePositions);
  };
  const handleImageClick = (e) => {
    const coordinates = clickLocation(e);
    updateClickPosition(coordinates);
    openDropdown();
  };

  /* === Dropdown logics (character selection on click) === */
  const openDropdown = () => {
    setShowDropdown(true);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  // update the dropdown position onclick
  const dropdownPosition = (side, refContainer, x, y) => {
    if (side === "left") {
      refContainer.current.style.right = "unset";
      refContainer.current.style.left = `${x}`;
      refContainer.current.style.top = `${y}`;
    }
    if (side === "right") {
      refContainer.current.style.left = "unset";
      refContainer.current.style.right = `${x}`;
      refContainer.current.style.top = `${y}`;
    }
  };
  useEffect(() => {
    //Change dropdown display position depending of click coordinates(X)
    if (clickPosition.left < 50 && showDropdown) {
      dropdownPosition(
        "left",
        dropdownContainer,
        clickPosition.left + 2 + "%",
        clickPosition.top - 5 + "%"
      );
    }
    if (clickPosition.left > 50 && showDropdown) {
      dropdownPosition(
        "right",
        dropdownContainer,
        100 - clickPosition.left + 2 + "%",
        clickPosition.top - 5 + "%"
      );
    }
    // eslint-disable-next-line
  }, [clickPosition]);

  /* === Character selection from Dropdown logics === */
  const handleCharacterSelection = async (character) => {
    const docRef = doc(
      db,
      `levels/level${levelSelected}/characters/${character.value}/`
    );
    const getCharacter = await getDoc(docRef);
    let docData;
    if (getCharacter.exists()) {
      docData = getCharacter.data();
      checkCharacterPosition(docData.xChar, docData.yChar, character.value);
    }
  };

  // check character position & if it is found
  const checkCharacterPosition = async (xChar, yChar, character) => {
    const { left, top } = clickPosition;
    const checkX = left - 5 < xChar && xChar < left + 5;
    const checkY = top - 5 < yChar && yChar < top + 5;
    const checkXY = checkX && checkY;
    characterFound(checkXY, character);
  };

  const characterFound = (isFound, character) => {
    const charSelection = characters.find((char) => char.name === character);
    if (isFound) {
      if (!charSelection.found) {
        handleAlert(true, "success", `You found ${charSelection.name}!`);
      } else {
        handleAlert(
          true,
          "success",
          `${charSelection.name} was already found!`
        );
      }
      setCharacters(
        characters.map((character) => {
          if (character.id === charSelection.id) {
            return { ...character, found: true };
          }
          return character;
        })
      );
    }
    if (!isFound) {
      if (charSelection.found) {
        handleAlert(true, "danger", `${charSelection.name} was already found!`);
      } else {
        handleAlert(true, "danger", `That's not ${charSelection.name}!`);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        characters,
        alert,
        showDropdown,
        dropdownContainer,
        waitStartGame,
        gameOver,
        gameTimer,
        finalTime,
        nextLevel,
        levelSelected,
        handleGameStart,
        handleCharacterSelection,
        handleImageClick,
        playAgain,
        restart,
        comingSoon,
        topTen,
        addLeaderboard,
        sortPlayers,
        closeDropdown,
        db,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
