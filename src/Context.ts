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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const controller = new window.ScrollMagic.Controller()

export const AppContext = React.createContext<AppContext>( null )