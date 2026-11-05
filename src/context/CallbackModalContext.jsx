import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CallbackModalContext = createContext(null);

export function CallbackModalProvider({ children }) {
  const [show, setShow] = useState(false);

  const openModal = useCallback(() => setShow(true), []);
  const closeModal = useCallback(() => setShow(false), []);

  const value = useMemo(() => ({ show, openModal, closeModal }), [show, openModal, closeModal]);

  return <CallbackModalContext.Provider value={value}>{children}</CallbackModalContext.Provider>;
}

export function useCallbackModal() {
  const ctx = useContext(CallbackModalContext);
  if (!ctx) throw new Error("useCallbackModal must be used inside CallbackModalProvider");
  return ctx;
}
