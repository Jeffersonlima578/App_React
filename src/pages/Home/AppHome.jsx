
import { useRef, useState } from "react"

import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from "./styles"

// React Hooks
// useRef
// useState / estado -> É uma variavel que, toda vez que troca de valor 
// a tela irá "recarregar os valores"



function AppHome() {
    const [produtos, setProdutos] = useState ([])
    const inputRef = useRef()
     
   

       function cliqueiNoBotao () {
       console.log(v4())
        setProdutos([ { id: v4(),nome: inputRef.current.value}, ...produtos])
           
      }  


        function deletarProduto (id) {
            produtos.filter(produto => produto.id !== id)
          
        }


  return (
    
    <Container>
        <h1>Lista de Compras</h1>
        <input placeholder="produto..." ref={inputRef} />
        <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
        
        {
          produtos.map( (produto) => (
              <Product key={produto.id}>
                 <p>{produto.nome}</p>
                 <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
              </Product>
          ) ) }
        
    </Container>  


  )
}

export default AppHome

  