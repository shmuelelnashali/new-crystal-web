"use client";
import { useState, useContext, createContext } from "react";

const PopUpOptionsContext = createContext(null);
const PopUpOptionsInClientContext = createContext(null);
const MessageContext = createContext(null);
const SelectMonths = createContext(null);
const SelectYears = createContext(null);
const FlagColorContext = createContext(null);
const DisconnectContext = createContext(null);

export function AppProviders({ children }) {
  const [popUpForDeleteAndDisconnect, setPopUpForDeleteAndDisconnect] =
    useState(null);
  const [popUpForDeleteInClient, setPopUpForDeleteInClient] = useState(null);
  const [message, setMessage] = useState(null);
  const [displaySelectMonths, setDisplaySelectMonths] = useState(false);
  const [displaySelectYears, setDisplaySelectYears] = useState(false);
  const [disconnected, setDisconnected] = useState(null);
  const [flagColor, setFlagColor] = useState(false);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <PopUpOptionsContext.Provider
        value={{ popUpForDeleteAndDisconnect, setPopUpForDeleteAndDisconnect }}
      >
        <PopUpOptionsInClientContext.Provider
          value={{ popUpForDeleteInClient, setPopUpForDeleteInClient }}
        >
          <SelectMonths.Provider
            value={{ displaySelectMonths, setDisplaySelectMonths }}
          >
            <SelectYears.Provider
              value={{ displaySelectYears, setDisplaySelectYears }}
            >
              <DisconnectContext.Provider
                value={{ disconnected, setDisconnected }}
              >
                <FlagColorContext.Provider value={{ flagColor, setFlagColor }}>
                  {children}
                </FlagColorContext.Provider>
              </DisconnectContext.Provider>
            </SelectYears.Provider>
          </SelectMonths.Provider>
        </PopUpOptionsInClientContext.Provider>
      </PopUpOptionsContext.Provider>
    </MessageContext.Provider>
  );
}

export const useMessage = () => {
  return useContext(MessageContext);
};

export const usePopUpOptions = () => {
  return useContext(PopUpOptionsContext);
};

export const usePopUpOptionsInClient = () => {
  return useContext(PopUpOptionsInClientContext);
};

export const useSelectMonths = () => {
  return useContext(SelectMonths);
};

export const useSelectYears = () => {
  return useContext(SelectYears);
};

export const useDisconnected = () => {
  return useContext(DisconnectContext);
};

export const useColorFlag = () => {
  return useContext(FlagColorContext);
};
