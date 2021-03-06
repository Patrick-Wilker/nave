import React, { useContext } from 'react'

import Header from '../../components/Header';
import Form from '../../components/Form';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../../components/Modal';

function Create(){
    const {
        close
    } = useContext(ModalContext)

    return(
        <>
            <Header/>
            <div>
                <Form title="Adicionar Naver">
                    <Modal title="Naver criado" text="Naver criado com sucesso!" close={close}/>
                </Form>
            </div>
        </>
    )
}

export default Create