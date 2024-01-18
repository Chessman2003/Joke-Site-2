import React, {ReactNode} from 'react'
import './ControlPanel.scss'

type ControlPanelProps = {
    children: ReactNode
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ children }) => {
    return(
        <div className="controlPanel">
            {children}
        </div>
    )
}