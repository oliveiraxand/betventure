const app = require('./server');
const { sportService } = require('./src/services');
const { authRoutes } = require('./src/routes');
const PORT = 3307

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Funcionando' })
})

app.use('/auth', authRoutes);

app.get('/sports', async (_req, res) => {
  const serviceResponse = await sportService.findAll();
  res.status(200).json({ data: serviceResponse.data });
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta %s', PORT);
})