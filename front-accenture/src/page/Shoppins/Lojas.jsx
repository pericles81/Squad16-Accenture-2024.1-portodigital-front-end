import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card';
import styles from './Shopping.css';
import { Button } from './../../components/Button';

export const Lojas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/lojas');
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
                <Button divClassName='divButton' classInputName='input' placeholder='Qual loja você deseja?' />
                <Button divClassName='divButton' classInputName='inputBtn' type='button' value='Buscar loja' />
            </div>

            {data.length ? (
                <div className="divCards">
                    {data.map((loja) => (
                        <Card
                            key={loja.id}
                            divMainCard='divMainCard'
                            img='imgLoja'
                            h2={loja.nome}
                            text1={`Endereço: ${loja.endereco}`}
                            text2={`Especialidade: ${loja.especialidade}`}
                            text3={`CNPJ: ${loja.cnpj}`}
                        />
                    ))}
                </div>
            ) : (
                <h3>AINDA NÃO EXISTEM LOJAS CADASTRADAS</h3>
            )}
        </div>
    );
};
