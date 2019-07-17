import React from 'react'
import {KIND, Notification} from 'baseui/notification';


const tips = [
    'You can invite unlimited teammates to Cannyx',
    'Cannyx is entirely free to use',
    'The github repo is open source so you can contribute to',
    'Cannyx do almost all features as canny.io'
]

const tip = tips[Math.floor(Math.random() * tips.length)]

export const Tip = () => {
    return <div>
        <Notification closeable kind={KIND.positive} overrides={{Body: {style: {width: "100%"}}}}> {tip}</Notification>
    </div>
}