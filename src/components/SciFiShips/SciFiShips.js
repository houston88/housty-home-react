import React, { useEffect, useState, memo } from 'react'
import './SciFiShips.scss'
import starDestroyerImage from './assets/star_destroyer.png'
import enterpriseImage from './assets/ncc1701D-Enterprise.png'
import falconImage from './assets/MillenniumFalconTFA-Fathead.png'
import xwingImage from './assets/x-wing-fighter-png-star-wars.png'
import viperImage from './assets/bg_viper.png'

const shipConfigs = {
    enterprise: { baseSize: 300, directions: ['ltr', 'rtl', 'diagonal-ltr', 'diagonal-rtl'] },
    stardestroyer: { baseSize: 250, directions: ['ltr', 'rtl'] },
    viper: { baseSize: 180, directions: ['ltr', 'rtl'] },
    falcon: { baseSize: 150, directions: ['falcon-custom'] },
    xwing: { baseSize: 180, directions: ['ltr', 'rtl', 'diagonal-ltr', 'diagonal-rtl'] }
}
const shipTypes = Object.keys(shipConfigs)

const generateShip = (id) => {
    const type = shipTypes[Math.floor(Math.random() * shipTypes.length)]
    const config = shipConfigs[type]
    const direction = config.directions[Math.floor(Math.random() * config.directions.length)]

    // Random duration depending on ship size (bigger ships slower)
    let duration = 25 + Math.random() * 45 + (config.baseSize / 10)

    // Make fighters twice as fast
    if (['falcon', 'xwing', 'viper'].includes(type)) {
        duration = duration / 2
    }
    // Random delay
    const delay = Math.random() * 20

    const startTop = Math.random() * 80
    // Random end top for diagonals
    const endTop = startTop + (Math.random() * 40 - 20)

    const scale = 0.8 + Math.random() * 0.4
    const size = (config.baseSize / 5) * scale

    return {
        id,
        type,
        direction,
        duration,
        delay,
        startTop,
        endTop,
        size
    }
}

// Enterprise PNG
const Enterprise = () => (
    <img
        src={enterpriseImage}
        alt="Enterprise"
        className="ship-svg enterprise"
        style={{
            objectFit: 'contain'
        }}
    />
)

// Millennium Falcon PNG
const Falcon = () => (
    <img
        src={falconImage}
        alt="Millennium Falcon"
        className="ship-svg falcon"
        style={{
            objectFit: 'contain',
            transform: 'scaleX(-1)'
        }}
    />
)

// Star Destroyer PNG
const StarDestroyer = () => (
    <img
        src={starDestroyerImage}
        alt="Star Destroyer"
        className="ship-svg stardestroyer"
        style={{
            objectFit: 'contain'
        }}
    />
)

// X-Wing PNG
const XWing = () => (
    <img
        src={xwingImage}
        alt="X-Wing Fighter"
        className="ship-svg xwing"
        style={{
            objectFit: 'contain'
        }}
    />
)

// Viper PNG
const Viper = () => (
    <img
        src={viperImage}
        alt="Colonial Viper"
        className="ship-svg viper"
        style={{
            objectFit: 'contain',
            transform: 'scaleX(-1)'
        }}
    />
)

const ShipIcon = ({ type }) => {
    switch (type) {
        case 'enterprise':
            return <Enterprise />
        case 'falcon':
            return <Falcon />
        case 'stardestroyer':
            return <StarDestroyer />
        case 'xwing':
            return <XWing />
        case 'viper':
            return <Viper />
        default:
            return null
    }
}

export const SciFiShips = memo(({ count = 7 }) => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        // Generate initial ships
        const initialShips = Array.from({ length: count }).map((_, i) => generateShip(i))
        setShips(initialShips)
    }, [count])

    // Optional: re-generate a ship when it finishes animation if we wanted an infinite continuous loop, 
    // but CSS infinite animation loops automatically.

    return (
        <div className="sci-fi-ships-container">
            {ships.map((ship) => (
                <div
                    key={ship.id}
                    className={`ship-wrapper ${ship.direction}`}
                    style={{
                        '--start-top': `${ship.startTop}vh`,
                        '--end-top': `${ship.endTop}vh`,
                        width: `${ship.size}px`,
                        animationDuration: `${ship.duration}s`,
                        animationDelay: `${ship.delay}s`,
                        transform: ship.direction.includes('rtl') ? 'scaleX(-1)' : 'none'
                    }}
                >
                    <ShipIcon type={ship.type} />
                </div>
            ))}
        </div>
    )
})

SciFiShips.displayName = 'SciFiShips'

export default SciFiShips
