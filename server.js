const express = require('express');
const { sequelize, User } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.listen(5006, async () => {
  console.log('App listening on port 5006!');
  await sequelize.sync({ force: true });
  console.log('Database synced');
});
