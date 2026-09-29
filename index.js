const express = require("express");
const app = express();
const PORT = 3000;

// Permite que o Express entenda dados no formato JSON enviados no corpo da requisição
app.use(express.json());

// Nosso "Banco de Dados" temporário na memória
let doacoes = [
  {
    id: 1,
    item: "5 Cadernos Universitários",
    categoria: "Material Escolar",
    status: "Disponível",
  },
  {
    id: 2,
    item: "Notebook Usado Core i3",
    categoria: "Tecnologia",
    status: "Pendente",
  },
];

// 1. Rota Principal / Inicial
app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo à API doamaiseduca!" });
});

// 2. Rota GET: Listar todas as doações
app.get("/doacoes", (req, res) => {
  res.json(doacoes);
});

// 3. Rota POST: Criar uma nova doação
app.post("/doacoes", (req, res) => {
  const { item, categoria } = req.body;

  if (!item || !categoria) {
    return res
      .status(400)
      .json({ erro: "Por favor, informe o item e a categoria." });
  }

  const novaDoacao = {
    id: doacoes.length + 1,
    item,
    categoria,
    status: "Disponível",
  };

  doacoes.push(novaDoacao);
  res.status(201).json(novaDoacao);
});

// 4. Rota DELETE: Remover uma doação pelo ID
app.delete("/doacoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  doacoes = doacoes.filter((d) => d.id !== id);
  res.json({ mensagem: `Doação com ID ${id} removida com sucesso!` });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor doamaiseduca rodando na porta ${PORT}`);
});
