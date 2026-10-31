import React, { useEffect, useState } from "react";

function DoacaoList({ atualizacao }) {
  const [doacoes, setDoacoes] = useState([]);

  // Função para buscar dados da API (GET)
  const buscarDoacoes = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/doacoes");
      const dados = await resposta.json();
      setDoacoes(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }
  };

  useEffect(() => {
    buscarDoacoes();
  }, [atualizacao]);

  if (!doacoes || doacoes.length === 0) {
    return <p>Nenhum registo encontrado.</p>;
  }

  return (
    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
      {doacoes.map((doacao) => (
        <li key={doacao.id} style={{ marginBottom: "8px" }}>
          <strong>{doacao.item || doacao.titulo}</strong>:{" "}
          {doacao.categoria || doacao.descricao}
          {doacao.status && <em> ({doacao.status})</em>}
        </li>
      ))}
    </ul>
  );
}

export default DoacaoList;
