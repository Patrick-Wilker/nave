import React, { useContext } from 'react'

import Header from '../../components/Header';
import Form from '../../components/Form';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../../components/Modal';

function Edit(props){
    const {
        close
    } = useContext(ModalContext)

    return(
        <>
            <Header/>
            <div>
                <Form title="Editar Naver" id={props.match.params.id}>
                    <Modal title="Naver atualizado" text="Naver atualizado com sucesso!" close={close}/>
                </Form>
            </div>
        </>
    )
}

export default Edit