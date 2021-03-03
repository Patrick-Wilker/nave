import React, {useEffect, useState} from 'react'
import { FaPen, FaTrash } from "react-icons/fa";

import Header from '../../components/Header';

import {HomeContainer, Cards} from './styles';

import api from '../../services/api'

function Home(){
    const [data, setData] = useState({})
    const [navers, setNavers] = useState([])

    useEffect(()=>{
        async function loadDatas(){
            const response = await api.get('e6afe4028c2a1e56e577/users/index')

            setData(response.data)
            setNavers(response.data.item[0].item)
        }

        loadDatas()
    }, [])

    return(
        <>
            <Header/>
            <HomeContainer>
                <header>
                    <h1>Navers</h1>
                    <button>Adicionar Naver</button>
                </header>

                <Cards>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove"><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove"><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove"><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="Naver"/>
                        <p>Juliano Reis</p>
                        <span>Frontend Developer</span>
                        <div>
                            <span className="remove"><FaTrash/></span>
                            <span className="edit"><FaPen/></span>
                        </div>
                    </li>
                </Cards>

            </HomeContainer>
        </>
    )
}

export default Home