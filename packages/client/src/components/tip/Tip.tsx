import { Callout, Tag } from '@blueprintjs/core'
import React from 'react'


const tips = [
  'You can invite unlimited teammates to Cannyx',
  'Cannyx is entirely free to use',
  'The github repo is open source so you can contribute to',
  'Cannyx do almost all features as canny.io'
]

export const Tip = () => {
  return <div>
    <Callout title={undefined}>
      <Tag minimal={true} intent={'warning'}>TIP</Tag> {tips[Math.floor(Math.random() * tips.length)]}
    </Callout>
  </div>
}