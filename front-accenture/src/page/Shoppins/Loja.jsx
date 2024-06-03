import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { BsCartCheckFill, BsCartPlus } from 'react-icons/bs';
import { getItem, setItem } from '../../services/LocalStorageCarrinho';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export const Loja = () => {
    
    const { id } = useParams();
    const [data, setData] = useState({});
    const [itens, setItens] = useState([]);
    const [cart, setCart] = useState(getItem('itensCarrinho') ||[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/lojas/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);
    console.log(data)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/produtos/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleClick = (obj) => {
        const element = cart.find((e) => e.idProduto == obj.idProduto)
        if (element) {
            const arrFilter = cart.filter((e) => e.idProduto != obj.idProduto)
            setCart(arrFilter)
            setItem('itensCarrinho',arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('itensCarrinho',[...cart, obj])
        }
    }

    return (
        <div className='divMain'>
            <div>
                <img className='imgMain' src="https://marketplace.canva.com/EAFuKwSatM8/1/0/1600w/canva-banner-para-loja-online-frete-gr%C3%A1tis-com-desconto-roxo-e-branco-kdzISsOH_AA.jpg" alt="" />
            </div>

            <div className='divButtons'>
                <Button divClassName='divButton' classInputName='input' placeholder='Qual produto você deseja?' />
                <Button divClassName='divButton' classInputName='inputBtn' type='button' value='Buscar produto' />
            </div>

            {data.length ? (<>
                <div className="divCards" >
                    {data.map((e) => {
                        return (
                            <div className='divCard' key={e.idProduto}>
                            <Card
                                img='img'
                                divImg='divImg'
                                h2={e.nome}
                                text1={e.preco}
                                text2={e.quantidade}
                                text3={e.descricao}
                            ></Card>
                            <button onClick={()=> handleClick(e)}>
                                {
                                    cart.some((itemCart) => itemCart.idProduto === e.idProduto) ? (<BsCartCheckFill/>) : (<BsCartPlus/>)
                                }
                            </button>
                            </div>
                        )
                    })}
                </div></>) : 
                <>
                    <h3>AINDA NAO EXISTEM PRODUTOS CADASTRADOS </h3>
                </>
            }
        </div>
    );
}