import React from 'react'

import Header from '../../components/Header';
import Form from '../../components/Form';

import {CreateContainer} from './styles';

function Home(){

    return(
        <>
            <Header/>
            <CreateContainer>
                <Form title="Adicionar Naver"/>
            </CreateContainer>
        </>
    )
}

export default Home