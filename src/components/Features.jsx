import React from 'react'
import { Link } from 'lucide-react'

const features = ({feature}) => {
  return (
    <div>
        <p>{feature.title}</p>
        <h1>{feature.details}</h1>
        <h2>{feature.moreinfo}</h2>
        <button>{feature.cta}</button>
    </div>
  )
}

export default features
