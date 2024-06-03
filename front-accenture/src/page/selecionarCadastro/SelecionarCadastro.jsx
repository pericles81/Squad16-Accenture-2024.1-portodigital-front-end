import React from 'react'
import { Button } from '../../components/Button'
import styles from './SelecionarCadastro.css'
import { Link } from 'react-router-dom'

const tipos = [
    { src: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-512.png', nome: 'Cliente',to: '/cadastroClientes' },
    { src: 'https://cdn4.iconfinder.com/data/icons/sport-line-v-1/96/rider_biker_sport_motorcycle_motorbike-256.png', nome: 'Entregador', to:"/cadastroEntregador" },
    { src: 'https://cdn3.iconfinder.com/data/icons/shopping-28/32/storefront-256.png', nome: 'Loja', to:'/cadastroLojas' }]
export const SelecionarCadastro = () => {


    return (
        <>
            <h2>Como você quer se cadastrar?</h2>
            <div className='divMainSeleCad'>


                {tipos.map((e) => {
                    ''
                    return (
                        <div>
                            
                            <img src={e.src} alt="" className='imgSeleCad' />
                            <Link to={`${e.to}`}><Button type='button' divClassName='wrap-input btnSeleCad' classInputName='input' value={e.nome} ></Button></Link>

                        </div>)
                })}
            </div>
        </>
    )
}
