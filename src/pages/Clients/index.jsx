import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Description, Title } from "../Home/styles";
import { Success } from "../Products/styles";
import {
  ButtonContainer,
  FormatedInput,
  DataForm,
  Form,
  Input,
  Label,
  ModifiedButton,
} from "./styles";


export default function Clients() {
  const [status, setStatus] = useState(false);
  const [clientData, setClientData] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    mobile: "",
  });

  function handleChange(e) {
    const field = e.target.getAttribute("id");
    const value = e.target.value;

    setClientData({
      ...clientData,
      [field]: value,
    });
  }

  function setDataToStorage(e) {
    e.preventDefault();
    if (
      clientData.name !== "" &&
      clientData.email !== "" &&
      clientData.cpf !== "" &&
      clientData.phone !== ""&&
      clientData.mobile !== ""
    ) {
      localStorage.setItem(
        `clientData${clientData.cpf}`,
        JSON.stringify(clientData)
      );
      setClientData({
        name: "",
        cpf: "",
        email: "",
        phone: "",
        mobile: "",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    } else {
      alert("Preencha todos os campos corretamente");
    }
  }

  console.log(clientData);
  return (
    <Container>
      <Title>Gestão de Clientes - Eletro Fácil</Title>
      <Description>Secção para adição de clientes no LocalStorage.</Description>
      {status && <Success>Cliente cadastrado com sucesso</Success>}
      <Form onSubmit={setDataToStorage}>
        <DataForm>
          <Label htmlFor="name">Nome</Label>
          <Input
            placeholder="Digite seu nome completo"
            type="text"
            id="name"
            value={clientData.name}
            onChange={handleChange}
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="cpf">CPF</Label>
          <FormatedInput
            id='cpf'
            value={clientData.cpf}
            onChange={handleChange}
            placeholder="Digite somente os números"
            format="###.###.###-##"
            mask="_"
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="contato@vtex.com"
            value={clientData.email}
            onChange={handleChange}
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="phone">Telefone</Label>
          <FormatedInput
            id="phone"
            placeholder="Digite somente os números"
            value={clientData.phone}
            onChange={handleChange}
            format="(##) #####-####"
            mask="_"
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="mobile">Celular</Label>
          <FormatedInput
            id="mobile"
            placeholder="Digite somente os números"
            value={clientData.mobile}
            onChange={handleChange}
            format="(##) ######-####"
            mask="_"
          />
        </DataForm>
        <ButtonContainer>
          <NavLink to="/">
            <ModifiedButton type="submit" backColor="transparent">
              Voltar
            </ModifiedButton>
          </NavLink>
          <ModifiedButton type="submit" backColor="#117BB0">
            Adicionar Cliente
          </ModifiedButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
