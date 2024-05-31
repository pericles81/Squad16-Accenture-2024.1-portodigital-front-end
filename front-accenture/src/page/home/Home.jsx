import React from 'react'
import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card';
import styles from './Home.css'
import { getItem, setItem } from '../../services/LocalStorageCarrinho';
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
export const Home = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinhoItens') || []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/produtos');
                setData(response.data);
                console.log(data);
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
            setItem('carrinhoItens', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoItens', [...cart, obj])
        }
    }

    return (
        <div className='divMain'>
            <div>
                <img className='imgMain' src="https://339028l.ha.azioncdn.net/img/2023/07/produto/29308/abajur-murano-cristal-1chatelet-garnet-ambientada-sottile-casa-1.jpg" alt="" />
            </div>
            <div className='divButtons'>
                <Button divClassName='divButton' classInputName='input' placeholder='Qual produto você deseja?'></Button>

                <Button divClassName='divButton' classInputName='inputBtn' type='button' value='Buscar produto'></Button>
            </div>

            {data.length ? (<>
                <div className="divCards" >
                    {data.map((e) => {
                        return (
                            <div key={e.idProduto} className='divCard' >
                                <Card

                                    img='img'
                                    divImg='divImg'
                                    h2={e.nome}
                                    text1={e.preco}
                                    text2={e.quantidade}
                                    text3={e.descricao}
                                ></Card>
                                <button onClick={() => handleClick(e)}>
                                    {
                                        cart.some((itemCart) => itemCart.idProduto == e.idProduto) ? (
                                            <BsCartCheckFill />
                                        ) : (
                                            <BsCartPlus />
                                        )
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
    )
}