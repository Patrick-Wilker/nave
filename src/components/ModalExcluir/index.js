import React from 'react'

import {ModalExcluirContainer, ModalExcluirBox} from './styles'

function ModalExcluir(props){

    return (
        <ModalExcluirContainer>
            <ModalExcluirBox>
                <h1>Excluir Naver</h1>

                <p>Tem certeza que deseja excluir este Naver?</p>
                
                <div>
                    <button type="button" className="cancelar" onClick={props.close}>Cancelar</button>
                    <button type="button" className="excluir" onClick={props.remove} >Excluir</button>
                </div>
            </ModalExcluirBox>
        </ModalExcluirContainer>
    )
}

export default ModalExcluir