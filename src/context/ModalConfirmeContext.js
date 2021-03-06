import React, { createContext, useContext, useEffect, useState } from 'react'

import Modal from '../components/Modal'

import {response} from '../services/navers'
import { ModalContext } from './ModalContext'

export const ModalConfirmeContext = createContext({})

export default function ModalConfirmeProvider({children}) {
    const {
        isActiveModal,
        open,
        close
    } = useContext(ModalContext)

    const [isActiveModalConfirme, setIsActiveModalConfirme] = useState(false)
    const [id, setId] = useState()

    const [navers, setNavers] = useState([])

    useEffect(()=>{
        function  loadDatas() {
            setNavers(response.data)
            localStorage.setItem("navers", JSON.stringify(response.data))
        }

        loadDatas()
    }, [])

    function openModalConfirme() {
        setIsActiveModalConfirme(true)
    }

    function closeModalConfirme() {
        setIsActiveModalConfirme(false)
    }

    function removeNaver() {
        let savedNavers = JSON.parse(localStorage.getItem('navers'));
        savedNavers.splice(id, 1);

        localStorage.setItem('navers', JSON.stringify(savedNavers));
        updateDatas()
        open()
    }

    function updateDatas(){
        let updatedNavers = JSON.parse(localStorage.getItem("navers"))

        setNavers(updatedNavers)
        closeModalConfirme()
    }
    
    return (
        <ModalConfirmeContext.Provider
            value={{
                openModalConfirme,
                closeModalConfirme, 
                isActiveModalConfirme,
                removeNaver,
                setId,
                navers,
                setNavers
            }}
        >
            {children}
            {isActiveModal && <Modal title="Naver excluído" text="Naver excluído com sucesso!" close={close}/>}
        </ModalConfirmeContext.Provider>
    )
}
