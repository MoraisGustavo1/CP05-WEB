import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainCadP } from './styledcadproduto';
import tesla from '../.././assets/tesla.jpg';

function CadastrarProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    descricao: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtém os produtos existentes do localStorage
    const produtosExistentes = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adiciona o novo produto
    const novosProdutos = [...produtosExistentes, produto];

    // Salva os produtos atualizados no localStorage
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));

    alert('Produto cadastrado com sucesso!');

    // Limpa o formulário
    setProduto({ nome: '', preco: '', descricao: '' });

    // Redireciona para a página de produtos
    navigate('/produtos');
  };

  return (
    <MainCadP>
    <div className="container">
    <div className="product-image">
      <img src={tesla} alt="Product Image" />
    </div>
    <div className="product-form-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
        />
        <label>Preço:</label>
        <input
          type="number"
          name="preco"
          value={produto.preco}
          onChange={handleChange}
        />
        <label>Descrição:</label>
        <input
          type="text"
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  </div>
    </MainCadP>
  );
}

export default CadastrarProduto;
