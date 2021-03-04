import React, { useContext } from 'react'

import {ModalExcluirContainer, ModalExcluirBox} from './styles'

import ModalConfirmeContext from '../../context/ModalConfirmeContext'

function ModalExcluir(){
    const closeModalExcluir = useContext(ModalConfirmeContext)

    function  cancelar() {
        closeModalExcluir()
    }

    return (
        <ModalExcluirContainer>
            <ModalExcluirBox>
                <h1>Excluir Naver</h1>

                <p>Tem certeza que deseja excluir este Naver?</p>
                
                <div>
                    <button type="button" className="cancelar" onClick={cancelar}>Cancelar</button>
                    <button type="button" className="excluir" >Excluir</button>
                </div>
            </ModalExcluirBox>
        </ModalExcluirContainer>
    )
}

export default ModalExcluir