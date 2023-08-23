const app = require('./server');
const crypto = require ('crypto');
const PORT = 3307

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Funcionando' })
})

app.get('/auth/token', (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  console.log(token.length)
  return res.status(201).json({ token, message: 'Token Gerado com sucesso' })
})

app.listen(PORT, () => {
  console.log('Servidor rodando na porta %s', PORT);
})