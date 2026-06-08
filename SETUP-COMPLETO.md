# 🎯 Plano Completo de Colaboração - Eletro Lab

## ✅ O QUE JÁ FOI CONFIGURADO

### 1️⃣ Repositório Git Local Inicializado
- ✅ Pasta `.git` criada em `C:\Users\User\Desktop\Eletro Lab`
- ✅ Arquivo `.gitignore` configurado com padrões adequados
- ✅ 2 commits iniciais realizados

### 2️⃣ Estrutura de Branches Criada
```
master (atual - branch principal)
├── staging (para testes pré-release)
├── develop (integração de todas as features)
├── user/portela (seu desenvolvimento pessoal)
├── user/matheus (desenvolvimento do Matheus)
└── user/diogo (desenvolvimento do Diogo)
```

### 3️⃣ Documentação Completa Criada
- 📋 **README.md** - Descrição do projeto e equipe
- 📖 **WORKFLOW.md** - Fluxo detalhado de trabalho
- 👥 **TEAM-INSTRUCTIONS.md** - Instruções personalizadas por membro
- 🛠️ **TROUBLESHOOTING.md** - Resolução de problemas
- 🔗 **GITHUB-TEMPLATES.md** - Templates para PRs e Issues
- ⚡ **QUICK-COMMANDS.bat** - Referência rápida de comandos

### 4️⃣ Configurações Recomendadas
- 🎨 **.vscode-settings-recommended.json** - Extensões e settings do VS Code

---

## 🚀 PRÓXIMAS AÇÕES (CRÍTICAS!)

### PASSO 1: CRIAR O REPOSITÓRIO NO GitHub
**Quem faz:** Portela (@Portel44)

1. Acesse https://github.com/new
2. Nome do repositório: **Eletro-lab** (exatamente assim)
3. Descrição: "Projeto colaborativo de desenvolvimento em equipe"
4. Tipo: **Public** (ou Private se preferir)
5. ❌ NÃO marque "Initialize with README" (já temos os arquivos)
6. Clique "Create repository"

### PASSO 2: CONECTAR SEU REPOSITÓRIO LOCAL AO GitHub
**Quem faz:** Portela (no Terminal/PowerShell)

```bash
cd "C:\Users\User\Desktop\Eletro Lab"

# Adicionar remote
git remote add origin https://github.com/Portel44/Eletro-lab.git

# Renomear master para main (OPCIONAL - recomendado)
git branch -m master main

# Fazer push de todas as branches
git push -u origin main
git push -u origin develop
git push -u origin staging
git push -u origin user/portela
git push -u origin user/matheus
git push -u origin user/diogo
```

### PASSO 3: CONFIGURAR PROTEÇÃO DE BRANCHES NO GitHub
**Quem faz:** Portela

1. Vá para: https://github.com/Portel44/Eletro-lab → Settings → Branches
2. Clique "Add rule"
3. Para a branch `main`:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require code reviews before merging (2 approvals)
4. Clique "Create"

5. Repita para `develop`:
   - ✅ Require a pull request before merging
   - ✅ Require code reviews before merging (1 approval)

### PASSO 4: CONFIGURAR ACESSO DA EQUIPE
**Quem faz:** Portela

1. Vá para: https://github.com/Portel44/Eletro-lab → Settings → Collaborators
2. Clique "Add people"
3. Adicione:
   - Matheus (username no GitHub)
   - Diogo (username no GitHub)

---

## 📥 INSTRUÇÕES PARA CADA MEMBRO

### 🟢 PORTELA (@Portel44) - JÁ CONFIGURADO ✅

Depois que fizer os PASSOS 1-4 acima, você está pronto!

```bash
# Verificar seu setup
cd "C:\Users\User\Desktop\Eletro Lab"
git status
git branch -a
git remote -v
```

### 🔵 MATHEUS

Quando Portela disser que o repositório está pronto, execute:

```bash
# 1. Clonar o repositório (executar UMA VEZ)
cd C:\Users\User\Desktop
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab

# 2. Criar sua branch pessoal
git checkout -b user/matheus origin/user/matheus

# 3. Começar a trabalhar
# Seus commits ficarão em user/matheus
```

### 🟣 DIOGO

Quando Portela disser que o repositório está pronto, execute:

```bash
# 1. Clonar o repositório (executar UMA VEZ)
cd C:\Users\User\Desktop
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab

# 2. Criar sua branch pessoal
git checkout -b user/diogo origin/user/diogo

# 3. Começar a trabalhar
# Seus commits ficarão em user/diogo
```

---

## 🔄 FLUXO DE TRABALHO DIÁRIO

### Todo começo de sessão:

```bash
# Para Portela
cd "C:\Users\User\Desktop\Eletro Lab"
git checkout user/portela
git pull origin user/portela

# Para Matheus
cd "C:\Users\User\Desktop\Eletro-lab"
git checkout user/matheus
git pull origin user/matheus

# Para Diogo
cd "C:\Users\User\Desktop\Eletro-lab"
git checkout user/diogo
git pull origin user/diogo
```

### Trabalhar normalmente (no VS Code)
- Edite seus arquivos
- Crie/modifique funcionalidades
- Salve tudo

### Fim de cada sessão ou quando terminar uma tarefa:

```bash
# Ver o que foi modificado
git status

# Adicionar tudo
git add .

# Fazer commit com mensagem descritiva
git commit -m "tipo: descrição breve"
# Exemplos:
# git commit -m "feat: adicionar autenticação"
# git commit -m "fix: corrigir cálculo de desconto"
# git commit -m "docs: atualizar README"

# Enviar para GitHub
git push origin user/[seu-nome]
```

---

## 🔀 SINCRONIZANDO ENTRE A EQUIPE (Pull Requests)

### Quando você terminou uma feature e quer mesclar com `develop`:

#### OPÇÃO 1: Via GitHub (Recomendado) 🌟

1. Acesse https://github.com/Portel44/Eletro-lab
2. Clique na aba "Pull Requests"
3. Clique "New Pull Request"
4. Configure:
   - **base:** `develop` 
   - **compare:** `user/[seu-nome]`
5. Adicione título e descrição
6. Clique "Create Pull Request"
7. **Aguarde outro membro revisar e aprovar**
8. Clique "Merge Pull Request"
9. Sincronize sua branch:
   ```bash
   git checkout user/[seu-nome]
   git pull origin user/[seu-nome]
   git merge origin/develop
   git push origin user/[seu-nome]
   ```

#### OPÇÃO 2: Via Terminal (Se todos souberem Git)

```bash
# Matheus mesclar em develop
git checkout develop
git pull origin develop
git merge user/matheus
git push origin develop

# Depois sincronizar sua branch
git checkout user/matheus
git pull origin user/matheus
```

---

## ⚠️ EVITAR CONFLITOS

### REGRA DE OURO:
**Cada pessoa trabalha em arquivos diferentes sempre que possível!**

- Portela → seus arquivos
- Matheus → seus arquivos
- Diogo → seus arquivos

Se precisarem modificar o mesmo arquivo:
1. Comuniquem em tempo real
2. Uma pessoa faz a mudança
3. As outras sincronizam após o merge

### Se houver conflito:

```bash
# 1. Ver o conflito
git status

# 2. Abrir arquivo no VS Code e resolver manualmente
# Procure por: <<<<<<< ======= >>>>>>>
# Deixe o código que quer manter, delete os marcadores

# 3. Fazer commit da resolução
git add .
git commit -m "fix: resolver conflito em arquivo.js"
git push origin user/[seu-nome]
```

---

## 📊 COMANDOS MAIS USADOS

### Ver histórico
```bash
git log --oneline -10  # Últimos 10 commits
git log --oneline      # Todos os commits
```

### Ver branches
```bash
git branch          # Branches locais
git branch -a       # Todas as branches (local + remota)
```

### Ver mudanças
```bash
git status          # Status geral
git diff            # Diferenças não commitadas
git diff HEAD~1     # Diferenças do último commit
```

### Sincronizar
```bash
git fetch --all     # Buscar tudo do GitHub
git pull            # Trazer mudanças e mesclar
```

### Desfazer coisas (com cuidado!)
```bash
git reset --soft HEAD~1    # Desfazer commit, manter mudanças
git reset --hard HEAD~1    # Desfazer commit, descartar tudo
git checkout -- arquivo.js # Descartar mudanças de um arquivo
```

---

## 🆘 PROBLEMAS COMUNS

### "Permission denied (publickey)"
```bash
# Trocar para HTTPS (mais fácil no Windows)
git remote set-url origin https://github.com/Portel44/Eletro-lab.git
```

### "Your branch has diverged"
```bash
git pull origin user/[seu-nome]
git push origin user/[seu-nome]
```

### "Changes would be overwritten by merge"
```bash
# Salvar mudanças
git stash

# Atualizar
git pull origin user/[seu-nome]

# Recuperar mudanças
git stash pop
```

### "Merge conflict"
- Abrir arquivo no VS Code
- Resolver manualmente (procurar `<<<<<<<` e `>>>>>>>`)
- Fazer commit: `git commit -m "fix: resolver conflito"`

**Para outros problemas, ver:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📋 CHECKLIST FINAL

### Para Portela (FAÇA AGORA):
- [ ] Criar repositório no GitHub
- [ ] Fazer push de todas as branches
- [ ] Configurar proteção de branches
- [ ] Adicionar Matheus e Diogo como colaboradores
- [ ] Enviar link para Matheus e Diogo

### Para Matheus e Diogo (QUANDO PORTELA AVISAR):
- [ ] Clonar o repositório
- [ ] Criar sua branch pessoal
- [ ] Fazer um teste (criar arquivo, commitar, fazer push)

### Todos:
- [ ] Ler [WORKFLOW.md](WORKFLOW.md)
- [ ] Ler [TEAM-INSTRUCTIONS.md](TEAM-INSTRUCTIONS.md)
- [ ] Instalar extensão GitLens no VS Code (opcional mas recomendado)

---

## 📚 DOCUMENTAÇÃO COMPLETA

| Arquivo | Objetivo |
|---------|----------|
| **README.md** | Descrição geral do projeto |
| **WORKFLOW.md** | Fluxo detalhado de trabalho |
| **TEAM-INSTRUCTIONS.md** | Instruções personalizadas |
| **TROUBLESHOOTING.md** | Resolução de problemas |
| **GITHUB-TEMPLATES.md** | Templates para Pull Requests |
| **.gitignore** | Arquivos ignorados pelo Git |

---

## ✨ BENEFÍCIOS DESTA ESTRUTURA

✅ **Sem conflitos desnecessários** - cada um trabalha em sua branch
✅ **Histórico completo** - todos os commits são rastreados
✅ **Code review** - mudanças são revisadas antes de mesclar
✅ **Rollback seguro** - pode desfazer tudo se algo der errado
✅ **Trabalho simultâneo** - 3 pessoas podem trabalhar ao mesmo tempo
✅ **Sincronização fácil** - tudo está em um único lugar (GitHub)

---

## 🎓 PRÓXIMAS LIÇÕES (OPCIONAIS)

Depois que tudo estiver funcionando, vocês podem aprender:
- GitFlow (fluxo mais formal)
- Semantic Versioning
- Continuous Integration (CI/CD)
- GitHub Actions para automação
- Protected branches com status checks

---

## 📞 SUPORTE

**Dúvidas?** Consulte:
1. [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. [WORKFLOW.md](WORKFLOW.md)
3. [TEAM-INSTRUCTIONS.md](TEAM-INSTRUCTIONS.md)

**Ainda com dúvidas?** Pesquise no Google ou ChatGPT com a mensagem de erro.

---

**Última atualização:** 2024
**Status:** ✅ Configuração Completa Pronta para GitHub
