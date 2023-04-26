import React, { useState, createContext } from 'react'

export interface iTask {
  task: string;
  done: boolean;
}

type Props = {
  children?: React.ReactNode
};

const initialContext: iTask[] = []

export const AppContext = createContext([] as any)


export const AppProviderContext: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<iTask[]>(initialContext);
  

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  )
}
