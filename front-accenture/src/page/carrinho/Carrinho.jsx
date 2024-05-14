import React, { useState } from 'react'
import styles from './Carrinho.css'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
const categorias = ['', 'Cozinha', 'Banheiro', 'Acessorios', 'Lembranças', 'Roupas para bebês', 'Roupas', 'Brechó']
export const Carrinho = () => {

    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        nome: "",
        senha: "",
        email: "",
        categoria: ""
    })

    const handleChange = (e) => {
        let newProp = form
        newProp[e.target.name] = e.target.value
        setForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let emptyValues = Object.values(form).some(obj => obj === "")
        setEmptyValue(emptyValues)

    }

    const handlePostRequest = async () => {
        try {
            const response = await axios.post('http://localhost:8080/clientes', form);
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <form className='login-form' onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='login-form-title'>
                        <span className='title'>Agora nos informe os dados do produto</span>
                    </div>

                    <div>
                        <label htmlFor="categoria">O que você quer anunciar?</label>
                        <select onChange={(e) => handleChange(e)} name="categoria">
                            {categorias.map((e) => {
                                return (
                                    <option>{e}</option>
                                )
                            })}
                        </select>
                    </div>
                    <>
                        <div> {emptyValue && form['categoria'] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}</div>
                    </>

                    <Button
                        divClassName='wrap-input divButton'
                        classInputName='input'
                        label='Nome do produto:'
                        placeholder='Digite o nome do produto'
                        id='nome'
                        name='nome'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["nome"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Descrição'
                        placeholder='Digite a descrição do produto'
                        id='senha'
                        name='senha'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["senha"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>
                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Preço:'
                        placeholder='00,00'
                        id='email'
                        name='email'
                        onBlur={(e) => handleChange(e)}
                    ></Button>
                    <>{emptyValue && form["email"] === "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>

                    {/* <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Senha:'
                        placeholder='*******'
                        id='username'
                    ></Button>

                    <Button
                        classInputName='input' divClassName='wrap-input divButton'
                        label='Confirme sua senha:'
                        placeholder='*******'
                        id='username'
                    ></Button> */}

                    <Button
                        divClassName='login-form-button'
                        classInputName='login-form-btn'
                        type='submit'
                        value='Confirmar'
                        placeholder='kkkk'
                        id='postSingin'
                        onClick={handlePostRequest}
                    ></Button>

                    <div className='login-form-button-register'>
                        <button className='register'>
                            <span>Já possui cadastro?</span> <Link to={'/login'} >Entrar</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
