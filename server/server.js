const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
]


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username && user.password === password)

    if(user) {
        res.status(200).json({ message: 'Login successful'});
    }
    else{
        res.status(401).json({ message: 'Login failed'})
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});