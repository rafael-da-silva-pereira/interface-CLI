
import axios from 'axios';
import readline from 'readline';

// Configura o cliente Axios para apontar para sua API
const api = axios.create({
    baseURL: 'http://localhost:3000/api', //Por URL de sua Apli apenas exemplo que está no meu github
    timeout: 10000,
});

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
};

const listarPersonagens = async () => {
    try {
        const response = await api.get('/personagens');
        console.log('Personagens:', response.data);
    } catch (error) {
        console.error('Erro ao listar personagens:', error.message);
    }
};

const criarPersonagem = async () => {
    try {
        const nome = await prompt('Nome do personagem: ');
        const ataque = await prompt('Ataque do personagem: ');
        const defesa = await prompt('Defesa do personagem: ');

        const response = await api.post('/personagens', { nome, ataque, defesa });
        console.log('Personagem criado:', response.data);
    } catch (error) {
        console.error('Erro ao criar personagem:', error.message);
    }
};

const buscarPersonagem = async () => {
    try {
        const id = await prompt('ID do personagem: ');
        const response = await api.get(`/personagens/${id}`);
        console.log('Personagem encontrado:', response.data);
    } catch (error) {
        console.error('Erro ao buscar personagem:', error.message);
    }
};

const atualizarPersonagem = async () => {
    try {
        const id = await prompt('ID do personagem: ');
        const nome = await prompt('Novo nome do personagem: ');
        const ataque = await prompt('Novo ataque do personagem: ');
        const defesa = await prompt('Nova defesa do personagem: ');

        const response = await api.put(`/personagens/${id}`, { nome, ataque, defesa });
        console.log('Personagem atualizado:', response.data);
    } catch (error) {
        console.error('Erro ao atualizar personagem:', error.message);
    }
};

const deletarPersonagem = async () => {
    try {
        const id = await prompt('ID do personagem: ');
        await api.delete(`/personagens/${id}`);
        console.log('Personagem deletado com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar personagem:', error.message);
    }
};

const menu = async () => {
    console.log('\nMenu:');
    console.log('0 - Sair');
    console.log('1 - Listar personagens');
    console.log('2 - Criar personagem');
    console.log('3 - Buscar personagem');
    console.log('4 - Atualizar personagem');
    console.log('5 - Deletar personagem');

    const opcao = await prompt('Escolha uma opção: ');

    switch (opcao) {
        case '0':
            rl.close();
            return;
        case '1':
            await listarPersonagens();
            break;
        case '2':
            await criarPersonagem();
            break;
        case '3':
            await buscarPersonagem();
            break;
        case '4':
            await atualizarPersonagem();
            break;
        case '5':
            await deletarPersonagem();
            break;
        default:
            console.log('Opção inválida.');
    }

    // Retorna ao menu após a execução
    await menu();
};

// Inicia o menu
menu();
