import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import {FormContainer} from './styles'

import {ModalContext} from '../../context/ModalContext'

function Form(props){
    const {
        open,
        isActiveModal
    } = useContext(ModalContext)

    function salvar() {
        open()
    }

    return(
        <FormContainer>
            <form>
                <header>
                    <Link to="/home">
                        <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.51 1.86998L10.73 0.0999756L0.839996 9.99998L10.74 19.9L12.51 18.13L4.38 9.99998L12.51 1.86998Z" fill="black"/>
                        </svg>   
                    </Link>

                    <h1>{props.title}</h1>
                </header>
                <div className="fields">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="field">
                        <label htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" placeholder="Cargo"/>
                    </div>
                    <div className="field">
                        <label htmlFor="idade">Idade</label>
                        <input type="text" id="idade" placeholder="Idade"/>
                    </div>
                    <div className="field">
                        <label htmlFor="empresa">Tempo de empresa</label>
                        <input type="text" id="empresa" placeholder="Tempo de empresa"/>
                    </div>
                    <div className="field">
                        <label htmlFor="projetos">Projetos que participou</label>
                        <input type="text" id="projetos" placeholder="Projetos que participou"/>
                    </div>
                    <div className="field">
                        <label htmlFor="url">URL da foto da Naver</label>
                        <input type="text" id="url" placeholder="URL da foto da Naver"/>
                    </div>
                </div>
                <div className="salvar" onClick={()=> salvar()}>
                    <button type="button">Salvar</button>
                </div>
            </form>
            {isActiveModal && props.children}
        </FormContainer>
    )
}

export default Form