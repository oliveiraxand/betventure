const app = require('./server');
const { authRoutes } = require('./src/routes');
const PORT = 3307

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 'Funcionando' })
})

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Servidor rodando na porta %s', PORT);
})