import express from "express";
const app = express();
const port = 5000;

app.use(express.json());

app.get("/api/mesas", (req, res) => {
  res.json({ mesas: [] }); // Substitua com dados reais
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
