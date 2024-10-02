import { useRef, useState, useEffect} from "react"
import {useNavigate, Link} from 'react-router-dom'
import { MainLogin } from "./loginstyled";
import imgteste from "../.././assets/teste.jpg";

const Login =()=>{

    //Hook-useRef pega a referencia de um componente ou elemento do DOM
    const usuario = useRef();
    const senha = useRef();

    //Hook-useState - Manipula o estado da variavel
    const [usuarios, setUsuarios]=useState([])

    //Hook -useNavigate- ele redireciona para outro componente
    const navigate = useNavigate();

    //criando a função de validação

    function validar(){
        for( let  i=0; i <usuarios.length;i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha ==senha.current.value
            )
            return true
        }
    }
    

    //criado a função handleSubmit
    const handleSubmit=(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();
        if(validar()){
            //criando a autenticação
            let token=
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/cadastrarProd");
        } else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook-useEffect vai buscar os dados do login no json

    useEffect(()=>{
        //pega o link da url
        fetch("http://localhost:5000/usuarios")
        //promise
        .then((res)=>{
            //converte os dados para json
            return res.json();
        })
        .then((res)=>{
            //recebe as alterações da variavel
            setUsuarios(res)
        })
        //retrona um array vazio
    },[])

    return(
        <MainLogin>
      <div className="container">
        {/* Seção da imagem à esquerda */}
        <div className="login-image">
          <img src={imgteste} alt="Login visual" />
        </div>

        {/* Seção do formulário à direita */}
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="titulo-login">Faça seu Login</span>

            <div className="w-input">
              <input
                type="text"
                className="input-form"
                id="usuario"
                ref={usuario}
                placeholder="Digite seu usuário"
              />
            </div>

            <div className="w-input">
              <input
                type="password"
                className="input-form"
                id="senha"
                ref={senha}
                placeholder="Digite sua senha"
              />
            </div>

            <div className="login-btn">
              <button type="submit" className="login-form-btn">Login</button>
            </div>

            <ul className="uteis">
              <li><span>Esqueceu sua senha?</span></li>
              <li><span>Não possui conta? <a href="/cadUsuarios">Criar conta</a></span></li>
            </ul>
          </form>
        </div>
      </div>
    </MainLogin>
    )
}
export default Login