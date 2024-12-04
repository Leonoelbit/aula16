### UC13 - Executar os Processos de Codificação, Manutenção e Documentação de Aplicativos Computacionais para Desktop

## Exercícios - Aula 16

### Objetivo
Este documento detalha os exercícios da Aula 16, com o objetivo de praticar a criação de elementos JSX e componentes em React.

---

## Exercício 1 - Criando Elementos Container e Componentes Pai

**Prosseguimento**:

1. **Criar o Workspace**:
   - Crie um novo projeto React:
     ```bash
     npx create-react-app task-manager
     cd task-manager
     ```

2. **Instalar Dependências Adicionais**:
   - Caso o projeto use bibliotecas extras, como `prop-types`:
     ```bash
     npm install prop-types
     ```

3. **Rodar o Projeto**:
   - Inicie o projeto:
     ```bash
     npm start
     ```

### Passo a Passo 1

1. **No arquivo `src/App.js`, remova o conteúdo padrão e crie um layout com dois containers**:
   - Um cabeçalho para o título do projeto.
   - Uma seção para exibir as tarefas.

2. **Dentro do cabeçalho, insira o título do projeto usando um componente `Header`**:
   - Crie este componente em um novo arquivo `src/components/Header.js`.

3. **Dentro da seção, use um componente `TaskContainer` que será responsável por exibir a lista de tarefas**:
   - Crie este componente em `src/components/TaskContainer.jsx`.

4. **Estrutura esperada em JSX (no `App.js`)**:
   - Importamos o React para utilizar JSX e criar componentes funcionais.
   - Importamos os componentes `Header` e `TaskContainer`.
   - Criamos um componente funcional `App`.
   - Utilizamos JSX para definir a estrutura do componente, incluindo um cabeçalho (`Header`) e uma seção para exibir as tarefas (`TaskContainer`).
   - Exportamos o componente `App` para que ele possa ser utilizado em outros arquivos.

### Passo a Passo 2

1. **No arquivo `TaskContainer.js`, use `React.Fragment` para envolver os itens sem adicionar um nó extra no DOM**.
   - Importamos o React para criar componentes funcionais.
   - Importamos o componente `Task`.
   - Criamos um componente funcional `TaskContainer`.
   - Definimos uma lista de tarefas fictícias dentro do componente.
   - Utilizamos o método `map` para iterar sobre a lista de tarefas e renderizar um componente `Task` para cada item da lista, passando as propriedades necessárias (`title` e `description`).
   - Exportamos o componente `TaskContainer` para que ele possa ser utilizado em outros arquivos.

2. **Adicione uma lista de tarefas fictícias diretamente no componente como elementos JSX**:
   - Estruture-as como elementos `div` aninhados dentro de um `React.Fragment`.

### Passo a Passo 3

1. **Crie um novo arquivo chamado `src/components/Task.js`**:
   - Este componente deve receber `props` contendo o título e a descrição de uma tarefa e renderizá-los.
   - Importamos o React para criar componentes funcionais.
   - Importamos `PropTypes` para validar os tipos das propriedades que o componente `Task` recebe.
   - Criamos um componente funcional `Task` que recebe propriedades (`props`) contendo o título e a descrição de uma tarefa.
   - Utilizamos JSX para definir a estrutura do componente, exibindo o título e a descrição da tarefa.
   - Definimos as `propTypes` para o componente `Task`, especificando que o título e a descrição devem ser strings e são obrigatórios.
   - Exportamos o componente `Task` para que ele possa ser utilizado em outros arquivos.

2. **Modifique o `TaskContainer` para usar o componente `Task` em vez de criar os elementos diretamente**:
   - Atualize `TaskContainer.js`:
     - Importamos o React para criar componentes funcionais.
     - Importamos o componente `Task`.
     - Criamos um componente funcional `TaskContainer`.
     - Definimos uma lista de tarefas fictícias dentro do componente.
     - Utilizamos o método `map` para iterar sobre a lista de tarefas e renderizar um componente `Task` para cada item da lista, passando as propriedades necessárias (`title` e `description`).
     - Exportamos o componente `TaskContainer` para que ele possa ser utilizado em outros arquivos.

### Estrutura Final

Com isso, sua estrutura de arquivos deve ficar assim:

```
src/
├── App.js
└── components/
    ├── Header.js
    ├── Task.js
    └── TaskContainer.jsx
```

### Conclusão & Anotações

Ao completar esses exercícios, aprendi a criar componentes em React, utilizar `React.Fragment` para evitar nós extras no DOM e a validar `props` com `PropTypes`. Aqui estão algumas anotações e situações encontradas:

- **Uso de `React.Fragment`**:
  - Utilizar `React.Fragment` ajuda a manter a estrutura do DOM limpa, evitando a criação de nós desnecessários.

- **Validação de `Props`**:
  - Utilizar `PropTypes` é uma boa prática para garantir que os componentes recebam os tipos corretos de dados, facilitando a detecção de erros durante o desenvolvimento.

- **Componentização**:
  - Dividir a aplicação em componentes menores e reutilizáveis torna o código mais organizado e fácil de manter.

  ![(Foto.png)]