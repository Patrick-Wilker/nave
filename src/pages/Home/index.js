import React, {useState} from 'react'
import { FaPen, FaTrash } from "react-icons/fa";
import {Link, useHistory} from 'react-router-dom';

import Header from '../../components/Header';
import ModalExcluir from '../../components/ModalExcluir';

import {HomeContainer, Cards} from './styles';

import {ModalConfirmeProvider} from '../../context/ModalConfirmeContext'
    
function Home(){
    const [isOpenModalExcluir, setIsOpenModalExcluir] = useState(false)
    const history = useHistory()

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
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove" onClick={() => setIsOpenModalExcluir(true)}><FaTrash/></span>
                            <span className="edit" onClick={edit}><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove" onClick={() => setIsOpenModalExcluir(true)}><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove" onClick={() => setIsOpenModalExcluir(true)}><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove" onClick={() => setIsOpenModalExcluir(true)}><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                </Cards>
                
            </HomeContainer>
            {isOpenModalExcluir && <ModalExcluir/>}
        </ModalConfirmeProvider>
    )
}

export default Home