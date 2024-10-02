import React from 'react';
import { ErrorPageContainer, ErrorTitle, BackButton} from "./stylederro.js"

const Error=()=>{
    return(
        <ErrorPageContainer>
          <ErrorTitle>Página não encontrada</ErrorTitle>
          <BackButton href='/'>Voltar ao Home</BackButton>
        </ErrorPageContainer>
      );
    };
export default Error