import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import axios from 'axios';

export const MyProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cliente = parseInt(localStorage.getItem('userId'), 10);
        setIsLoggedIn(cliente);

        if (!isLoggedIn) {
          setIsLoading(false); 
          return; 
        }

        const url = cliente ? 'http://localhost:8080/produtos/cliente/' : 'http://localhost:8080/produtos/loja/';

        const response = await axios.get(url + cliente);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [isLoggedIn]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {
        isLoggedIn ? (
          data.length ? (
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
            <h3>Não existem produtos cadastrados.</h3>
          )
        ) : (
          <h3>Você não está logado. Por favor, faça login para ver seus produtos.</h3>
        )
      }
    </>
  );
};
