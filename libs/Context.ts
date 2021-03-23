import * as React from 'react'

export interface AppContext {
    links: string[]
    top10Skills: string[]
    theme: string
    skillSet: any[]
    intro: { header: string, tagline: string, description: string }
    companies: any[]
}

export const AppContext = React.createContext<AppContext>({} as AppContext)