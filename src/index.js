const express = require('express');

const app = express();

app.use(express.json());


//Rotas para API Rest
app.get('/projects', (request, response) => {
    const { title } = request.query;

    console.log(title);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) =>{
    const body = request.body;

    console.log(body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
});

app.put('/projects/:id', (request, response) => {
    const  params = request.params;

    console.log(params);

    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})

app.delete('/projects', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
        'Projeto 4'
    ]);
})

/* Porta definida para as requisições http */
app.listen(3333, () => {
    console.log('Servidor executando com sucesso! ')
});


