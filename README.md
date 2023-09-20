# Padrão de Commit
- Este projeto segue um padrão de commit baseado no Conventional Commits para manter um histórico de alterações organizado e fácil de entender.
- As mensagens de commit seguem o formato: <tipo>(<escopo>): <mensagem>

## Tipos de Commit
- feat: Nova funcionalidade adicionada
- fix: Correção de bugs
- chore: Atualizações de tarefas, configurações, etc.
- docs: Alterações na documentação
- style: Atualizações que não afetam o código (formatação, espaço em branco, etc.)
- refactor: Refatoração do código
- test: Adição ou modificação de testes

## Exemplos de Commits
- feat(login): Adiciona página de login
- fix(api): Corrige bug na rota de autenticação
- docs(readme): Atualiza instruções de instalação
  
Mantenha as mensagens de commit claras, concisas e descritivas para uma melhor compreensão do histórico do projeto.

# Instalação
- npx create-expo-app nomeDoProjeto
Documentação: https://reactnative.dev/docs/environment-setup

## Bibliotecas
React Native elemente: 
- npm install @rneui/themed @rneui/base
- npm install react-native-vector-icons
Documentação: https://reactnativeelements.com/docs/installation#using-expo

# Como Contribuir
Se desejar contribuir para este projeto, siga as etapas abaixo:
- Faça um fork do projeto
- Crie uma nova branch (git checkout -b feature/nova-feature)
- Faça suas alterações e adicione seus commits no padrão descrito acima
- Envie a branch (git push origin feature/nova-feature)
- Abra um Pull Request


# Padrão de Criação de Branches
O padrão para criar branches pode seguir a seguinte estrutura: <tipo>/<descricao>

## Tipo: Indica a natureza da branch (obrigatório). Exemplos de tipos incluem:
- feature: Para o desenvolvimento de uma nova funcionalidade.
- fix: Para correção de bugs.
- hotfix: Para correção de bugs críticos em produção.
- chore: Para tarefas de manutenção, configurações ou outras atividades não relacionadas a
- funcionalidades específicas.
- docs: Para atualizações ou adições de documentação.
- release: Para preparação de uma nova versão para release.
- test: Para adição ou modificação de testes.
- Descrição: Breve descrição da funcionalidade ou bug que está sendo tratado (obrigatório).

# Exemplos de Nomenclatura de Branches
- feature/nova-funcionalidade
- fix/correcao-login
- hotfix/bug-critico-producao
- chore/atualizacao-dependencias
- docs/atualizacao-readme
- release/prepara-versao-1.0
- test/adiciona-testes-autenticacao

# Considerações
 
- ## Mantenha Consistência:
  - É importante manter a consistência na aplicação desse padrão em toda a equipe para evitar confusões.

- ## Evite Caracteres Especiais:
  - Evite caracteres especiais e espaços na nomenclatura, pois podem causar problemas em alguns sistemas.

- ## Seja Descritivo:
  - A descrição deve ser informativa e concisa, refletindo claramente o propósito da branch.

- ## Utilize Hífens ou Underlines:
  - Use hífens ou underlines para separar palavras na descrição, o que melhora a legibilidade.
