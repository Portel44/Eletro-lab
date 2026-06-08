# 👥 Instruções Personalizadas para Cada Membro da Equipe

## 🟢 PORTELA (@Portel44)

### Sua Branch: `user/portela`

#### Setup Inicial (executar UMA VEZ):
```bash
cd C:\Users\User\Desktop\Eletro\ Lab
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/portela origin/user/portela
```

#### Início de Cada sessão:
```bash
cd C:\Users\User\Desktop\Eletro\ Lab\Eletro-lab
git checkout user/portela
git pull origin user/portela
```

#### Depois de Trabalhar:
```bash
git add .
git commit -m "tipo: sua descrição aqui"
git push origin user/portela
```

#### Para Mesclar seu Trabalho com develop:
1. Vá para https://github.com/Portel44/Eletro-lab → Pull Requests
2. New Pull Request → user/portela para develop
3. Peça para Matheus ou Diogo revisar e aprovar
4. Clique "Merge Pull Request"
5. Volte ao VS Code e execute:
```bash
git checkout user/portela
git pull origin user/portela
git merge origin/develop
git push origin user/portela
```

---

## 🔵 MATHEUS

### Sua Branch: `user/matheus`

#### Setup Inicial (executar UMA VEZ):
```bash
cd C:\Users\User\Desktop\Eletro\ Lab
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/matheus origin/user/matheus
```

#### Início de Cada Sessão:
```bash
cd C:\Users\User\Desktop\Eletro\ Lab\Eletro-lab
git checkout user/matheus
git pull origin user/matheus
```

#### Depois de Trabalhar:
```bash
git add .
git commit -m "tipo: sua descrição aqui"
git push origin user/matheus
```

#### Para Mesclar seu Trabalho com develop:
1. Vá para https://github.com/Portel44/Eletro-lab → Pull Requests
2. New Pull Request → user/matheus para develop
3. Peça para Portela ou Diogo revisar e aprovar
4. Clique "Merge Pull Request"
5. Volte ao VS Code e execute:
```bash
git checkout user/matheus
git pull origin user/matheus
git merge origin/develop
git push origin user/matheus
```

---

## 🟣 DIOGO

### Sua Branch: `user/diogo`

#### Setup Inicial (executar UMA VEZ):
```bash
cd C:\Users\User\Desktop\Eletro\ Lab
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/diogo origin/user/diogo
```

#### Início de Cada Sessão:
```bash
cd C:\Users\User\Desktop\Eletro\ Lab\Eletro-lab
git checkout user/diogo
git pull origin user/diogo
```

#### Depois de Trabalhar:
```bash
git add .
git commit -m "tipo: sua descrição aqui"
git push origin user/diogo
```

#### Para Mesclar seu Trabalho com develop:
1. Vá para https://github.com/Portel44/Eletro-lab → Pull Requests
2. New Pull Request → user/diogo para develop
3. Peça para Portela ou Matheus revisar e aprovar
4. Clique "Merge Pull Request"
5. Volte ao VS Code e execute:
```bash
git checkout user/diogo
git pull origin user/diogo
git merge origin/develop
git push origin user/diogo
```

---

## 📋 Tipos de Commits Recomendados

Use estes prefixos para manter o histórico organizado:

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova feature | `feat: adicionar autenticação` |
| `fix` | Correção de bug | `fix: corrigir validação de email` |
| `docs` | Documentação | `docs: atualizar README` |
| `style` | Formatação | `style: aplicar eslint` |
| `refactor` | Reorganização | `refactor: melhorar estrutura` |
| `perf` | Performance | `perf: otimizar algoritmo` |
| `test` | Testes | `test: adicionar testes unitários` |
| `chore` | Tarefas | `chore: atualizar dependências` |

---

## 🔄 Sincronização Diária

**Importante: Faça isso toda manhã!**

```bash
# Seu nome (Portela, Matheus ou Diogo)
git checkout user/[seu-nome]
git pull origin user/[seu-nome]
git merge origin/develop
git push origin user/[seu-nome]
```

Isso garante que você sempre tem o código mais atualizado da equipe.

---

## 🆘 Problemas?

### Erro: "Your branch has diverged"
```bash
git pull origin develop/[seu-nome]
git merge origin/develop
git push origin develop/[seu-nome]
```

### Erro: "Merge conflict"
1. Abrir o arquivo no VS Code
2. Resolver manualmente (procurar por `<<<<<<<` e `>>>>>>>`)
3. Fazer commit: `git commit -m "fix: resolver conflito"`
4. Fazer push: `git push origin develop/[seu-nome]`

### Erro: "Permission denied"
- Verificar autenticação Git (usar HTTPS em vez de SSH se necessário)
- Ver: https://github.com/settings/tokens

---

## ⚠️ NUNCA Faça Isso

❌ Não fazer push direto para `main`
❌ Não fazer force push (`git push --force`)
❌ Não deletar branches remotas sem avisar
❌ Não ignorar conflitos de merge
❌ Não fazer commits com código quebrado

---

**Leia WORKFLOW.md para mais detalhes!**
