import React from 'react'
import styles from './Carrinho.css'
import { Card1 } from '../../components/CardCarrinho/Card1'
import { Button } from './../../components/Button';
import { Link } from 'react-router-dom';
export const Carrinho = () => {
  const subtotal = 100
  return (
    <div className='divMainCarrinho'>
        <h2>Carrinho de compras</h2>
        <div className='divMainCarrinho1'>
        <div className='divCardsCarrinho'>
            <Card1
            nome='ola'
            quantidade='50'
            preco='50'
            ></Card1>

            <Card1
            nome='ola'
            quantidade='50'
            preco='50'
            ></Card1>
        </div>

        <div className='divSubtotal'>
          <h3>Subtotal: {subtotal}</h3>
          <Link to={'/pagamento'}><Button type='button' value='Ir para pagamento'></Button></Link>
        </div>
        </div>
    </div>
  )
}
