import React, {useState} from 'react'

import Header from '../../components/Header';
import ModalExcluir from '../../components/ModalExcluir';
import Form from '../../components/Form';

import {CreateContainer} from './styles';

import {ModalConfirmeProvider} from '../../context/ModalConfirmeContext'

function Home(){
    const [isOpenModalExcluir, setIsOpenModalExcluir] = useState(false)

    function closeModalExcluir(){
        setIsOpenModalExcluir(false)
    }

    return(
        <ModalConfirmeProvider value={closeModalExcluir}>
            <Header/>
            <CreateContainer>
                <Form title="Adicionar Naver"/>
            </CreateContainer>
            {isOpenModalExcluir && <ModalExcluir/>}
        </ModalConfirmeProvider>
    )
}

export default Home