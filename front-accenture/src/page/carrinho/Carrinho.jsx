import React, {useState} from 'react'
import styles from './Carrinho.css'
import { Card1 } from '../../components/CardCarrinho/Card1'
import { Button } from './../../components/Button';
import { getItem ,setItem } from '../../services/LocalStorageCarrinho';
import { Link } from 'react-router-dom';
export const Carrinho = () => {
  const [cart, setCart] = useState(getItem('itensCarrinho') ||[]);
  const soma = cart.reduce((acumulador, item) => acumulador + item.preco, 0);
  return (
    <div className='divMainCarrinho'>
        <h2>Carrinho de compras</h2>
        <div className='divMainCarrinho1'>
        <div className='divCardsCarrinho'>
          {cart.map((e)=>{
            return(
                        <Card1
                        nome={e.nome}
                        quantidade='50'
                        preco={e.preco}
                        ></Card1>
            )
          })}
        </div>

        <div className='divSubtotal'>
          <h3>Subtotal: {soma}</h3>
          <Link to={'/pagamento'}><Button type='button' value='Ir para pagamento'></Button></Link>
        </div>
        </div>
    </div>
  )
}
