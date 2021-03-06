import React, {useContext} from 'react'
import { FaPen, FaTrash } from "react-icons/fa";
import {Link, useHistory} from 'react-router-dom';

import Header from '../../components/Header';
import ModalExcluir from '../../components/ModalExcluir';

import {HomeContainer, Cards} from './styles';

import {ModalConfirmeContext} from '../../context/ModalConfirmeContext'
    
function Home(){
    const {
        openModalConfirme,
        closeModalConfirme,
        isActiveModalConfirme,
        removeNaver,
        setId,
        navers
    } = useContext(ModalConfirmeContext)

    const history = useHistory()

    function edit() {
        history.push('/edit')
    }

    function openConfirme(id) {
        openModalConfirme()
        setId(id)
    }

    return(
        <>
            <Header/>
            <HomeContainer>
                <header>
                    <h1>Navers</h1>
                    <Link to="/create">
                        <button>Adicionar Naver</button>
                    </Link>
                    
                </header>

                <Cards>
                    {
                        navers && navers.map((naver, i) => {
                            return(
                                <li key={i}>
                                    <img src={naver.url} alt={naver.name}/>
                                    <p>{naver.name}</p>
                                    <span>{naver.job}</span>
                                    <div>
                                        <span className="remove" onClick={()=>{openConfirme(i)}}><FaTrash/></span>
                                        <span className="edit" onClick={edit}><FaPen/></span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </Cards>
            {isActiveModalConfirme && <ModalExcluir close={closeModalConfirme} remove={removeNaver}/>}
            </HomeContainer>
        </>
    )
}

export default Home