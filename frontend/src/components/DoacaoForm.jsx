import React, { useState } from "react";

function DoacaoForm({ aoCadastrar }) {
  const [item, setItem] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaDoacao = { item, categoria, status: "Disponível" };

    try {
      const resposta = await fetch("http://localhost:3000/doacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaDoacao),
      });

      if (resposta.ok) {
        alert("Cadastrado com sucesso!");
        setItem("");
        setCategoria("");
        aoCadastrar();
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (erro) {
      console.error("Erro na requisição:", erro);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px 0",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h3>Cadastrar Novo Apoio (ODS 4)</h3>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Item (ex: Cadernos Universitários)"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Categoria (ex: Material Escolar)"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "8px 15px",
          background: "#007ACC",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Salvar na API
      </button>
    </form>
  );
}

export default DoacaoForm;
