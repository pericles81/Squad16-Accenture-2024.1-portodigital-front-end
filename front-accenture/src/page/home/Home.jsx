import React from 'react'
import { Button } from '../../components/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card';
import styles from './Home.css'
export const Home = () => {
    const [data, setData] = useState([]);

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
                            <Card
                                divMainCard='divCard'
                                img='img'
                                divImg='divImg'
                                h2={e.nome}
                                text1={e.preco}
                                text2={e.quantidade}
                                text3={e.descricao}
                            ></Card>
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