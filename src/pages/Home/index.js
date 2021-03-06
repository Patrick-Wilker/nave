import React, {useEffect, useState} from 'react'
import { FaPen, FaTrash } from "react-icons/fa";
import {Link, useHistory} from 'react-router-dom';

import Header from '../../components/Header';
import ModalExcluir from '../../components/ModalExcluir';

import {HomeContainer, Cards} from './styles';

import {ModalConfirmeProvider} from '../../context/ModalConfirmeContext'
    
import {response} from '../../services/navers'

function Home(){
    const [isOpenModalExcluir, setIsOpenModalExcluir] = useState(false)

    const [navers, setNavers] = useState([])

    const history = useHistory()

    useEffect(()=>{
        function  loadDatas() {
            setNavers(response.data)
            localStorage.setItem("navers", JSON.stringify(response.data))
        }

        loadDatas()
    }, [])

    function closeModalExcluir(){
        setIsOpenModalExcluir(false)
    }

    function edit() {
        history.push('/edit')
    }

    return(
        <ModalConfirmeProvider value={closeModalExcluir}>
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
                                        <span className="remove" onClick={() => setIsOpenModalExcluir(true)}><FaTrash/></span>
                                        <span className="edit" onClick={edit}><FaPen/></span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </Cards>
                
            </HomeContainer>
            {isOpenModalExcluir && <ModalExcluir/>}
        </ModalConfirmeProvider>
    )
}

export default Home