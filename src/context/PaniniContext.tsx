import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export enum SplashScreenValues {
  PaniniCreator = 'Panini Creator',
  PaniniOrdered = 'Panini ordered',
  Begin = 'begin',
  StartAgain = 'start again',
}

type Props = {
  children: ReactNode;
};

type SplashScreenValuesType = {
  headerName: string;
  buttonName: string;
};

type PaniniContextType = {
  animate: boolean;
  setAnimate: (a: boolean) => void;
  splashScreenValues: SplashScreenValuesType;
  setSplashScreenValues: Dispatch<SetStateAction<{ headerName: SplashScreenValues; buttonName: SplashScreenValues }>>;
};

const PaniniContext = createContext<PaniniContextType>({
  animate: false,
  setAnimate: () => {},
  splashScreenValues: { headerName: '', buttonName: '' },
  setSplashScreenValues: () => {},
});

const PaniniProvider = ({ children }: Props) => {
  const [animate, setAnimate] = useState(false);
  const [splashScreenValues, setSplashScreenValues] = useState({
    headerName: SplashScreenValues.PaniniCreator,
    buttonName: SplashScreenValues.Begin,
  });
  return (
    <PaniniContext.Provider value={{ animate, setAnimate, splashScreenValues, setSplashScreenValues }}>
      {children}
    </PaniniContext.Provider>
  );
};
export { PaniniContext, PaniniProvider };
