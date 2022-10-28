import React, { useState } from 'react'

type Props = React.PropsWithChildren;

export interface IConsoleContext {
    saveConsole: Console;
}

export const ConsoleContext = React.createContext<IConsoleContext>({ saveConsole: console })

export default function ConsoleProvider({ children }: Props) {
    const [saveConsole, setSaveConsole] = useState(console);

    return (
        <ConsoleContext.Provider value={{ saveConsole }}>
            {
                children
            }
        </ConsoleContext.Provider>
    )
}