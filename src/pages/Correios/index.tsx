import React, { useState, FormEvent } from "react";

import { Container, Content, ContentResults } from "./styles";

import api from "../../services/api";

interface CepProps {
  status: number;
  code: string;
  state: string;
  city: string;
  district: string;
  address: string;
  message: string;
}

const Correios: React.FC = () => {
  const [inputcep, SetInputCep] = useState("");

  const [cep, SetCep] = useState<CepProps[]>([]);

  async function handlePesqCep(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!inputcep) {
      console.log("Preencha o cep");
      return;
    }

    const response = await api.get<CepProps>(`/${inputcep}.json`);
    const find = response.data;

    console.log(find);

    if (find.status == 400) {
      console.log("Cep nao encontrado");
      return;
    }
    SetInputCep("");
    SetCep([...cep, find]);
  }
  return (
    <Container>
      <Content>
        <h1>Busca de CEP Api Correios</h1>
        <form onSubmit={handlePesqCep}>
          <input
            name="cep"
            value={inputcep}
            onChange={(e) => SetInputCep(e.target.value)}
            placeholder="Digite seu cep"
          />
          <button type="submit">Pesquisar</button>
        </form>

        <ContentResults>
          {" "}
          <h1>Resultado da Consulta</h1>
          {cep.map((results) => (
            <div key={results.code}>
              <label htmlFor="state">Estado</label>
              <input name="state" type="text" value={results.state} />
              <label htmlFor="city">Cidade</label>
              <input name="city" type="text" value={results.city} />
              <label htmlFor="address">Endereço</label>
              <input name="address" type="text" value={results.address} />
            </div>
          ))}
        </ContentResults>
      </Content>
    </Container>
  );
};

export default Correios;
