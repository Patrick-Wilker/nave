import React, { useEffect, useState } from 'react'
import { FaPen, FaTrash } from "react-icons/fa";

import {VisualizarContainer, VisualizarBox} from './styles'

function Visualizar(props){

    const {navers} = props

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [age, setAge] = useState(1)
    const [time, setTime] = useState(1)
    const [projects, setProjects] = useState('')
    const [url, setUrl] = useState('')

    useEffect(()=>{
        function loadDataVisualizar(){
            if(props.id > 0){
                setName(navers[props.id].name)
                setJob(navers[props.id].job)
                setAge(navers[props.id].age)
                setTime(navers[props.id].time)
                setProjects(navers[props.id].projects)
                setUrl(navers[props.id].url)
            }else{
                setName(navers[props.id].name)
                setJob(navers[props.id].job)
                setAge(navers[props.id].age)
                setTime(navers[props.id].time)
                setProjects(navers[props.id].projects)
                setUrl(navers[props.id].url)
            }
        }

        loadDataVisualizar()
    }, [props.id, navers])

    function removeVisualizar(id){
        props.openConfirme(id)
        props.close(false)
    }

    return (
        <VisualizarContainer>
            <VisualizarBox>

                <figure>
                    <img src={url} alt={name}/>
                </figure>

                <section>
                    <div className="fechar" onClick={()=>{props.close(false)}}>
                        <svg  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#212121"/>
                        </svg> 
                    </div>

                    <h1>{name}</h1>
                    <h2>{job}</h2>

                    <div className="field">
                        <p>Idade</p>
                        <span>{age}</span>
                    </div>
                    <div className="field">
                        <p>Tempo de empresa</p>
                        <span>{time}</span>
                    </div>
                    <div className="field">
                        <p>Projetos que participou</p>
                        <span>{projects}</span>
                    </div>

                    <div className="buttons">
                        <span className="remove" onClick={()=>{removeVisualizar(props.id)}}><FaTrash/></span>
                        <span className="edit" onClick={()=>{props.edit(props.id)}}><FaPen/></span>
                    </div>
                </section>

            </VisualizarBox>
        </VisualizarContainer>
    )
}

export default Visualizar