import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card';
import styles from './Shopping.css'
import { Button } from './../../components/Button';

export const Lojas = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='divMain'>
            <div className='divButtons'>
                <Button divClassName='divButton' classInputName='input'></Button>

                <Button divClassName='divButton' classInputName='inputBtn' type='button' value='Buscar loja'></Button>
            </div>

            {data.length ? (<>
                <div className="divCards" >
                    {data.map((e) => {
                        return (
                            <Card
                                divMainCard='divMainCard'
                                img='imgLoja'
                                h2={e.title}
                                text1={e.title}
                                text2={e.id}
                                text3
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