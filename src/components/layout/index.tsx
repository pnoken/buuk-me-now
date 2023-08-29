import React from "react"
import Navbar from "./nav"

interface LayoutProps {
    children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <Navbar />
            <div>{children}</div>
        </React.Fragment>
    )
}