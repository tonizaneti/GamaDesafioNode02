import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { ButtonContainer, Container, Description, Title } from './styles';


export default function Home() {
  return (
    <Container>
      <Title>Gestão de Cadastros - Eletro Fácil</Title>
      <Description>Sistema para gestão de cadastros. Clique em Clientes para adicionar clientes ou em Produtos para Gerenciar os Produtos da LocalStage.</Description>
      <ButtonContainer>
        <NavLink to='/clientes'><Button backColor='#044E09'>Clientes</Button></NavLink>
        <NavLink to='/produtos'><Button backColor='#04144E'>Produtos</Button></NavLink>
      </ButtonContainer>
    </Container>
  )
}
