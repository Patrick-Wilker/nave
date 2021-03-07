import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import {FormContainer} from './styles'

import {ModalContext} from '../../context/ModalContext'
import { ModalConfirmeContext } from '../../context/ModalConfirmeContext';

function Form(props){
    const {
        open,
        isActiveModal
    } = useContext(ModalContext)

    const {
        navers,
        updateDatas
    } = useContext(ModalConfirmeContext)

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [age, setAge] = useState(1)
    const [time, setTime] = useState(1)
    const [projects, setProjects] = useState('')
    const [url, setUrl] = useState('')

    useEffect(()=>{
        function edit(){
            setName(navers[props.id].name)
            setJob(navers[props.id].job)
            setAge(navers[props.id].age)
            setTime(navers[props.id].time)
            setProjects(navers[props.id].projects)
            setUrl(navers[props.id].url)
        }

        edit()
    }, [props.id, navers])

    async function validation(event){
        event.preventDefault()

        const validation = {
            name: name, job: job, age: age, time: time, projects: projects, url: url
        }

        const schema = Yup.object().shape({
            name: Yup
                .string()
                .required('Nome é obrigatório'),
            job: Yup
                .string()
                .required('Cargo é obrigatório'),
            age: Yup
                .number().typeError('Informe uma idade válida')
                .required('Idade é obrigatório'),
            time: Yup
                .number().typeError('Informe um tempo de empresa válido')
                .required('Tempo de empresa é obrigatório'),
            projects: Yup
                .string()
                .required('Projetos é obrigatório'),
            url: Yup
                .string()
                .required('URL é obrigatório')  
        });

        try {
            await schema.validate(validation, { abortEarly: false });

            let uptadeNavers

            if(props.id){
                navers.splice(props.id, 1)

                uptadeNavers = [
                    ...navers
                ]
                uptadeNavers.splice(props.id, 0, validation)

            }else{
                uptadeNavers = [
                    ...navers, validation
                ]
            }

            localStorage.setItem('navers', JSON.stringify(uptadeNavers))

            setName('')
            setJob('')
            setAge(1)
            setTime(1)
            setProjects('')
            setUrl('')

            open()
            updateDatas()
            
        } catch(err){
            err.errors && err.errors.map(e => {
                return(
                   toast.dark(e)  
                )
            })
        }

    }

    return(
        <FormContainer>
            <form onSubmit={validation}>
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
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Nome" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" placeholder="Cargo" value={job}
                            onChange={(e) => setJob(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="idade">Idade</label>
                        <input type="text" id="idade" placeholder="Idade" value={props.id !== undefined && props.id != null ? age : ''}
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="empresa">Tempo de empresa</label>
                        <input type="text" id="empresa" placeholder="Tempo de empresa" value={props.id !== undefined && props.id != null ? time : ''}
                            onChange={(e) => setTime(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="projetos">Projetos que participou</label>
                        <input type="text" id="projetos" placeholder="Projetos que participou" value={projects}
                            onChange={(e) => setProjects(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="url">URL da foto da Naver</label>
                        <input type="text" id="url" placeholder="URL da foto da Naver" value={url}
                            onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                </div>
                <div className="salvar">
                    <button type="submit" >Salvar</button>
                </div>
            </form>
            {isActiveModal && props.children}
        </FormContainer>
    )
}

export default Form