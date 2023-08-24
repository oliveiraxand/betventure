const app = require('./server');
const { authModel } = require('./src/models');
const { authService } = require('./src/services');
const PORT = 3307

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Funcionando' })
})

app.get('/auth/token', (_req, res) => {
  const serviceResponse = authService.tokenGenerate();
  return res.status(201).json({ token: serviceResponse.data })
})

app.listen(PORT, () => {
  console.log('Servidor rodando na porta %s', PORT);
})