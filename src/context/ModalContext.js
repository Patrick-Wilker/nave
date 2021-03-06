import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})

export default function ModalProvider({children}){
    const [isActiveModal, setIsActiveModal] = useState(false)

    function open() {
        setIsActiveModal(true)
    }

    function close() {
        setIsActiveModal(false)
    }

    return (
        <ModalContext.Provider
            value={{
                open,
                close, 
                isActiveModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
} 



