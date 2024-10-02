import React, { useEffect, useState } from 'react';
import imagem1 from "../.././assets/yuan.jpg"
import imagem2 from "../.././assets/han.jpg"
import imagem3 from "../.././assets/dolphin-mini.jpg"
import imagem4 from "../.././assets/seal.jpg"
import imagem5 from "../.././assets/tan.jpg"
import imagem6 from "../.././assets/dolphin.jpg"
import { MainProd } from "./produtosytled"



const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
  
    // Função para carregar os produtos do localStorage
    useEffect(() => {
      const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || [];
      setProdutos(produtosCadastrados);
    }, []);

    const deletarProduto = (index) => {
        const produtosAtualizados = produtos.filter((_, i) => i !== index); // Remove o produto pelo índice
        setProdutos(produtosAtualizados);
        localStorage.setItem('produtos', JSON.stringify(produtosAtualizados)); // Atualiza o localStorage
      };

    return(
    <MainProd>
    <div className="produtos">
      <h2>Produtos</h2>
      <div className="produtos-grid">

        <section className="card">
        <img src={imagem1} className="imagem-produtos" />
          <h3>BYD Yuan</h3>
          <p className="preco">R$235.800</p>
        </section>

        <section className="card">
        <img src={imagem2} className="imagem-produtos" />
          <h3>BYD Han</h3>
          <p className="preco">R$539.800</p>
        </section>

        <section className="card">
        <img src={imagem3} className="imagem-produtos" />
          <h3>BYD Dolphin Mini</h3>
          <p className="preco">R$119.800</p>
        </section>

        <section className="card">
        <img src={imagem4} className="imagem-produtos" />
          <h3>BYD Seal</h3>
          <p className="preco">R$299.800</p>
        </section>

        <section className="card">
        <img src={imagem5} className="imagem-produtos" />
          <h3>BYD Tan</h3>
          <p className="preco">R$536.800</p>
        </section>

        <section className="card">
        <img src={imagem6} className="imagem-produtos" />
          <h3>BYD Dolphin</h3>
          <p className="preco">R$159.800</p>
        </section>


        {produtos.map((produto, index) => (
            <section className="card" key={index}>
              <img src={imagem1} className="imagem-produtos" /> 
              <h3>{produto.nome}</h3>
              <p className="preco">R${produto.preco}</p>
              <p>{produto.descricao}</p>
              <button onClick={() => deletarProduto(index)}>Deletar</button>
            </section>
          ))}
        
      </div>
    </div>
    </MainProd>
    )
}
export default Produtos