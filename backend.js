const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === "cliente@teste.com" && senha === "1234") {
    res.send("Login realizado com sucesso!");
  } else {
    res.send("Email ou senha inválidos.");
  }
});

// Rota de pagamento
app.post('/pagamento', (req, res) => {
  const { nome, endereco, forma } = req.body;
  res.send(`Pedido confirmado para ${nome}, entrega em ${endereco}, pagamento via ${forma}.`);
});

// Inicializa servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
app.post('/pagamento', (req, res) => {
    const { nome, endereco, forma, itens } = req.body;
    const listaItens = JSON.parse(itens || "[]");
    res.send(`Pedido confirmado para ${nome}, entrega em ${endereco}, pagamento via ${forma}. Itens: ${listaItens.map(i => i.nome).join(", ")}`);
  });
  