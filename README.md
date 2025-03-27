# 🚀 Desafio Técnico - Frontend

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como parte de um desafio técnico para a **Solution TI**, demonstrando habilidades em React, Next.js e integração com APIs. A proposta envolvia a criação de um sistema de cadastro de endereços com preenchimento automático e validação de dados.

🔹 **Tecnologias Utilizadas:**
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [shadCN UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)

## 🎯 Funcionalidades
✅ Campo para inserir CEP<br>
✅ Preenchimento automático dos campos de endereço via [API ViaCEP](https://viacep.com.br/)<br>
✅ Validação de CPF e campos obrigatórios<br>
✅ Listagem de endereços salvos<br>
✅ Edição e exclusão de endereços<br>
✅ Comunicação com backend via API<br>
✅ Interface responsiva e moderna<br>

## 📦 Como Rodar o Projeto

### 🔹 Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### 🚀 Instalação e Execução
```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/nome-do-repo.git

# Acesse a pasta do projeto
$ cd cep-manager-react

# Instale as dependências
$ yarn install

# Inicie a aplicação
$ yarn dev
```
O projeto estará disponível rodando localmente (**http://localhost:3000**).

## 🔄 Integração com Backend
Este frontend se comunica com a versão backend do projeto. Certifique-se de que a API está rodando para testar todas as funcionalidades. O backend pode ser encontrado [aqui](https://github.com/vIctorAlexandre2005/cep-manager-java).

## 🛠️ Estrutura do Projeto
```bash
/src
 ├── components/      # Componentes reutilizáveis
 ├── pages/           # Páginas da aplicação
 ├── services/        # Configuração de APIs (Axios)
 ├── context/         # Gerenciamento de estado global
 ├── hooks/           # Hooks customizados
 ├── styles/          # Estilos globais
 └── utils/           # Funções utilitárias
```

## 📜 Licença
Este projeto está sob a licença MIT.

---
💡 *Desenvolvido com ❤️ por [Victor Alexandre](https://github.com/vIctorAlexandre2005)*