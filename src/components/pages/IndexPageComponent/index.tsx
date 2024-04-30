/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";

import clsx from "clsx";

import useKey from "@/src/hooks/keyboard/useKey";

import MainContainer from "../../ui/MainContainer";

import s from "./IndexPageComponent.module.scss";

const IndexPageComponent = () => {
  const [timer, setTimer] = useState(0);
  const [timerRef, setTimerRef] = useState<NodeJS.Timer | null>(null);

  useKey(() => {
    if (timerRef) {
      clearInterval(timerRef);
      setTimer(0);
    }

    const interval = setInterval(() => setTimer((prev) => prev + 1), 1);

    setTimerRef(interval);
  }, ["Enter"]);

  return (
    <MainContainer className={s.page}>
      <button
        className={s.button}
        onClick={() => {
          setTimer(0);

          if (timerRef) {
            clearInterval(timerRef);
            setTimerRef(null);
          }
        }}
      >
        сброс
      </button>
      <br />
      <br />
      <br />
      <div
        className={clsx(s.wrapper, timerRef && s.active)}
        onClick={() => {
          if (timerRef) {
            clearInterval(timerRef);
            setTimerRef(null);
          } else {
            setTimerRef(setInterval(() => setTimer((prev) => prev + 1), 1));
          }
        }}
      >
        <div className={s.object} />
      </div>
      <div className={s.timer}>{timer}</div>
    </MainContainer>
  );
};

export default IndexPageComponent;
