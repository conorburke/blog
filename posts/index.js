const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors())

const posts = {};

// used before k8s and also the query getter
// app.get('/posts', (req, res) => {
//     res.send(posts);
// });

app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {id, title};

    // await axios.post('http://localhost:4005/events', {
    // for k8s
    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title
        }
    })

    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('received event type', req.body.type);

    res.send({});
});

app.listen(4000, () => {
    console.log('update kubectl version for demo');
    console.log('test skaffold update');
    console.log('update to show the preferred method for updating section 4.66');
    console.log('listening on port 4000')
})