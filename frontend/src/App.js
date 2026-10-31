import React, { useState } from "react";
import DoacaoForm from "./components/DoacaoForm";
import DoacaoList from "./components/DoacaoList";

function App() {
  const [atualizar, setAtualizar] = useState(false);

  const handleCadastrar = () => {
    // Alterna o estado para atualizar a listagem automaticamente
    setAtualizar(!atualizar);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Projeto DoaMaisEduca (ODS 4)</h1>
      <p>
        Gestão integrada de recursos educacionais - Front-End React com API
        Node.js
      </p>

      <DoacaoForm aoCadastrar={handleCadastrar} />
      <hr style={{ margin: "20px 0" }} />
      <DoacaoList atualizacao={atualizar} />
    </div>
  );
}

export default App;
