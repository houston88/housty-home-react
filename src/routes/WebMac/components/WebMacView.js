import React from 'react'
import './WebMacView.scss'

export const WebMacView = () => (
    <div className="web-mac-container">
        <div className="mac-monitor">
            <div className="mac-bezel">
                <div className="mac-screen-container">
                    <iframe
                        src="https://infinitemac.org/embed?disk=System+7.5&infinite_hd=true&machine=Quadra+650"
                        width="1024"
                        height="768"
                        allow="cross-origin-isolated"
                        frameBorder="0"
                        title="Infinite Mac Emulator"
                    ></iframe>
                    <div className="crt-overlay"></div>
                </div>
            </div>
            <div className="mac-chin">
                <div className="mac-logo">
                    <div className="rainbow-apple">
                        <span className="leaf"></span>
                        <span className="apple"></span>
                    </div>
                    <span className="mac-text">Macintosh II</span>
                </div>
                <div className="mac-vents">
                    <div className="vent"></div>
                    <div className="vent"></div>
                    <div className="vent"></div>
                    <div className="vent"></div>
                </div>
            </div>
        </div>
    </div>
)

export default WebMacView
