import React, {ReactNode} from "react"
import styles from "./layout.module.css"

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FunctionComponent = (props: LayoutProps) => {
    return <div className={styles.container}>{props.children}</div>
}
