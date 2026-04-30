import React, { useState } from 'react'

const useClick = () => {
    const [state, setState] = useState(false)

    const toggle = function handleClick() {
        setState((prev) => !prev)
    }

    const close = () => setState(false)

    const close2 = () => setIsOpen(false)

    return [state, toggle,close, close2]
}

export default useClick
