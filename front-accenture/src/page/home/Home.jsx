import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import styles from './Home.css';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/produtos');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='divMain'>
            <div>
                <img className='imgMain' src="https://marketplace.canva.com/EAFuKwSatM8/1/0/1600w/canva-banner-para-loja-online-frete-gr%C3%A1tis-com-desconto-roxo-e-branco-kdzISsOH_AA.jpg" alt="" />
            </div>

            <div className='divButtons'>
                <Button divClassName='divButton' classInputName='input' placeholder='Qual produto você deseja?' />
                <Button divClassName='divButton' classInputName='inputBtn' type='button' value='Buscar produto' />
            </div>

            {data.length ? (
                <div className="divCards">
                    {data.map((produto) => (
                        <Card
                            key={produto.id}
                            divMainCard='divCard'
                            img='img'
                            divImg='divImg'
                            h2={produto.nome}
                            text1={`Preco: ${produto.preco}`}
                            text2={`Descrição: ${produto.descricao}`}
                            text3={`Quantidade: ${produto.quantidade}`}
                        />
                    ))}
                </div>
            ) : (
                <h3>AINDA NÃO EXISTEM PRODUTOS CADASTRADAS</h3>
            )}
        </div>
    );
};
