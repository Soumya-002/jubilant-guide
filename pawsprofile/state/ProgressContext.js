import React, { createContext, useState, useContext } from 'react';

// Create Context
const ProgressContext = createContext();

// Create Provider Component
export function ProgressProvider({ children, totalSteps }) {
  const [step, setStep] = useState(1);

  return (
    <ProgressContext.Provider value={{ step, setStep, totalSteps }}>
      {children}
    </ProgressContext.Provider>
  );
}

// Custom Hook to Use Progress Context
export function useProgress() {
  return useContext(ProgressContext);
}
