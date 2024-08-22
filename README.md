# Interface de Gerenciamento de Personagens

Esta é uma interface de linha de comando (CLI) para gerenciar personagens em uma API. Utilizando o Axios para realizar requisições HTTP, esta interface permite listar, criar, buscar, atualizar e deletar personagens.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Readline**: Módulo nativo do Node.js para interface de linha de comando.

## Funcionalidades

- **Listar Personagens**: Exibe todos os personagens armazenados na API.
- **Criar Personagem**: Adiciona um novo personagem à API com nome, ataque e defesa.
- **Buscar Personagem**: Busca um personagem pelo ID.
- **Atualizar Personagem**: Atualiza informações de um personagem existente.
- **Deletar Personagem**: Remove um personagem da API pelo ID.

## Uso

1. Certifique-se de que a API está em execução na URL especificada no arquivo (`http://localhost:3000/api`).

2. Execute o script:

    ```bash
    node nome-do-arquivo.js
    ```

    Substitua `nome-do-arquivo.js` pelo nome do arquivo que contém o código fornecido.

3. Interaja com o menu na linha de comando. As opções disponíveis são:

    - `0`: Sair
    - `1`: Listar personagens
    - `2`: Criar personagem
    - `3`: Buscar personagem
    - `4`: Atualizar personagem
    - `5`: Deletar personagem

## Exemplo de Uso

Menu:
0 - Sair
1 - Listar personagens
2 - Criar personagem
3 - Buscar personagem
4 - Atualizar personagem
5 - Deletar personagem

Escolha uma opção: 1
Personagens: [ ... ]

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou abrir issues para discutir melhorias.

---

Para mais informações ou dúvidas, entre em contato para trocar uma ideia ✌️.
