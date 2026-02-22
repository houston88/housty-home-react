import React, { useEffect, useState, memo } from 'react'
import './FlyingObjects.scss'

const objectConfigs = {
    bird1: { baseSize: 40, directions: ['ltr', 'rtl'] },
    bird2: { baseSize: 50, directions: ['ltr', 'rtl'] }
}
const objectTypes = Object.keys(objectConfigs)

const generateObject = (id) => {
    const type = objectTypes[Math.floor(Math.random() * objectTypes.length)]
    const config = objectConfigs[type]
    const direction = config.directions[Math.floor(Math.random() * config.directions.length)]

    // Birds
    let duration = 20 + Math.random() * 30 + (config.baseSize / 5)

    const delay = Math.random() * 20
    const startTop = Math.random() * 80
    const endTop = startTop + (Math.random() * 40 - 20)
    const scale = 0.8 + Math.random() * 0.4
    const size = config.baseSize * scale

    return { id, type, direction, duration, delay, startTop, endTop, size }
}

const Bird1 = () => (
    <svg viewBox="0 0 100 50" className="flying-svg bird1">
        <path d="M 10 20 Q 25 5, 50 20 Q 75 5, 90 20 Q 75 15, 50 25 Q 25 15, 10 20 Z" fill="#333" />
    </svg>
)

const Bird2 = () => (
    <svg viewBox="0 0 100 50" className="flying-svg bird2">
        <path d="M 10 25 Q 30 15, 50 30 Q 70 15, 90 25 Q 70 20, 50 35 Q 30 20, 10 25 Z" fill="#555" />
    </svg>
)

const ObjectIcon = ({ type }) => {
    switch (type) {
        case 'bird1': return <Bird1 />
        case 'bird2': return <Bird2 />
        default: return null
    }
}

export const FlyingObjects = memo(({ count = 12 }) => {
    const [objects, setObjects] = useState([])

    useEffect(() => {
        const initialObjects = Array.from({ length: count }).map((_, i) => generateObject(i))
        setObjects(initialObjects)
    }, [count])

    return (
        <div className="flying-objects-container">
            {objects.map((obj) => (
                <div
                    key={obj.id}
                    className={`object-wrapper ${obj.direction}`}
                    style={{
                        '--start-top': `${obj.startTop}vh`,
                        '--end-top': `${obj.endTop}vh`,
                        width: `${obj.size}px`,
                        animationDuration: `${obj.duration}s`,
                        animationDelay: `${obj.delay}s`,
                        transform: obj.direction.includes('rtl') ? 'scaleX(-1)' : 'none'
                    }}
                >
                    <ObjectIcon type={obj.type} />
                </div>
            ))}
        </div>
    )
})

FlyingObjects.displayName = 'FlyingObjects'

export default FlyingObjects
