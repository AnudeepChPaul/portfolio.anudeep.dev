import * as React from 'react'

export interface AppContext {
    links: string[]
    top10Skills: string[]
    theme: string
    skillSet: any[]
    toggleTheme: () => void
    intro: { header: string, tagline: string, description: string }
    data: unknown
    companies: any[]
    controller: unknown
}

export const AppContext = React.createContext<AppContext>( null )