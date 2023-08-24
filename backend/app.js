const app = require('./server');
const { sportModel } = require('./src/models');
const { authRoutes } = require('./src/routes');
const PORT = 3307

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Funcionando' })
})

app.use('/auth', authRoutes);


app.get('/sports', async (_req, res) => {
  const sports = await sportModel.findAll();
  console.log(sports);
  res.status(200).json({ sports });
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta %s', PORT);
})