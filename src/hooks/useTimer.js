import { useState, useEffect, useRef } from 'react';

const useTimer = (isActive) => {
  const [isTimerCount, setIsTimerCount] = useState(isActive);
  const [timer, setTimer] = useState(0);

  let id = useRef(null);

  useEffect(() => {
    console.log({ isTimerCount });
    if (!isTimerCount) {
      clearInterval(id.current);
    } else {
      id.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id.current);
    };
  }, [isTimerCount]);

  const stopTimer = () => {
    setIsTimerCount(false);
  };

  const resumeTimer = () => {
    setIsTimerCount(true);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return {
    timer,
    stopTimer,
    resumeTimer,
    resetTimer,
  };
};

export default useTimer;
