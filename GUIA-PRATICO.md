# 📖 GUIA PRÁTICO - Como Trabalhar sem Bagunçar os Arquivos

user/portela
## 🎯 O principal

Cada um de vocês trabalha em uma branch diferente. Isso evita que vocês sobrescrevam o trabalho uns dos outros.

```
Portela → user/portela
Matheus → user/matheus
Diogo   → user/diogo
```

## 🔧 O que fazer primeiro

### Para Portela
1. Abrir o PowerShell
2. Digitar:

```bash
cd C:\Users\User\Desktop
```

3. Digitar:

```bash
git clone https://github.com/Portel44/Eletro-lab.git
```

4. Entrar na pasta:

```bash
cd Eletro-lab
```

5. Criar sua branch:

```bash
git checkout -b user/portela origin/user/portela
```

### Para Matheus

1. Abrir o PowerShell
2. Digitar:

```bash
cd C:\Users\User\Desktop
```

3. Digitar:

```bash
git clone https://github.com/Portel44/Eletro-lab.git
```

4. Entrar na pasta:

```bash
cd Eletro-lab
```

5. Criar sua branch:

```bash
git checkout -b user/matheus origin/user/matheus
```

### Para Diogo

1. Abrir o PowerShell
2. Digitar:

```bash
cd C:\Users\User\Desktop
```

3. Digitar:

```bash
git clone https://github.com/Portel44/Eletro-lab.git
```

4. Entrar na pasta:

```bash
cd Eletro-lab
```

5. Criar sua branch:

```bash
git checkout -b user/diogo origin/user/diogo
```

---

## 🚀 Como trabalhar diariamente

### Antes de começar

```bash
git checkout user/[seu-nome]
git pull origin user/[seu-nome]
```

### Depois de fazer mudanças

```bash
git add .
git commit -m "tipo: descrição"
git push origin user/[seu-nome]
```

### Quando terminar uma tarefa

1. Vá ao GitHub
2. Clique em **Pull Requests**
3. Clique em **New Pull Request**
4. Compare:
   - base: `develop`
   - compare: `user/[seu-nome]`
5. Crie o Pull Request
6. Peça para algum colega revisar
7. Faça o merge se estiver tudo certo

---

## ⚠️ O que evitar

- Não trabalhe na branch dos outros
- Não faça push direto em `develop`, `staging` ou `master`
- Não use `git push --force`
- Não faça commit gigante com muitas mudanças de uma vez

---

## 🔄 Como resolver conflitos

Se o Git avisar conflito, faça:

```bash
git status
```

Abra o arquivo com conflito no VS Code e localize:

```text
HEAD
seu código

código do outro

```

Deixe apenas o código que deve ficar. Salve.

Depois:

```bash
git add .
git commit -m "fix: resolver conflito"
git push origin user/[seu-nome]
```

---

## 🧠 Comandos mais usados
=======
## 🎯 O PRINCIPAL A ENTENDER

**Cada um de vocês trabalha em uma branch diferente. Não se chocam!**

```
Portela     →  user/portela
Matheus     →  user/matheus
Diogo       →  user/diogo
```

**Quando termina uma tarefa**, vocês pedem para um colega revisar e depois mescla com `develop` (a branch de integração).

---

## 🚀 SETUP - FAZER UMA VEZ

### 1️⃣ PORTELA - Setup no GitHub

```bash
cd "C:\Users\User\Desktop\Eletro Lab"

# Adicionar o repositório remoto
git remote add origin https://github.com/Portel44/Eletro-lab.git

# Fazer push de TODAS as branches
git push -u origin master
git push -u origin develop
git push -u origin staging
git push -u origin user/portela
git push -u origin user/matheus
git push -u origin user/diogo
```

### 2️⃣ MATHEUS - Setup Local

```bash
cd C:\Users\User\Desktop

# Clonar o repositório
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab

# Criar sua branch pessoal
git checkout -b user/matheus origin/user/matheus
```

### 3️⃣ DIOGO - Setup Local

```bash
cd C:\Users\User\Desktop

# Clonar o repositório
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab

# Criar sua branch pessoal
git checkout -b user/diogo origin/user/diogo
```

---

## 💻 ROTINA DIÁRIA - TODOS FAZEM ISSO

### Começo do Dia (5 minutos)

```bash
# Abra o PowerShell/Terminal na pasta do projeto
# Matheus:
git checkout user/matheus
git pull origin user/matheus

# Diogo:
git checkout user/diogo
git pull origin user/diogo

# Portela:
git checkout user/portela
git pull origin user/portela
```

**Isso garante que você tem o código mais atualizado.**

### Durante o Dia

- Edite seus arquivos normalmente no VS Code
- Não se preocupe com Git
- Trabalhe na sua funcionalidade

### Fim do Dia (ou quando termina uma tarefa)

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar tudo
git add .

# 3. Fazer um commit (MENSAGEM IMPORTANTE!)
git commit -m "tipo: descrição breve"

# EXEMPLOS:
# git commit -m "feat: adicionar validação de email"
# git commit -m "fix: corrigir bug no cálculo"
# git commit -m "docs: atualizar README"
# git commit -m "refactor: reorganizar funções"

# 4. Enviar para GitHub
git push origin user/[seu-nome]
```

---

## 🔀 QUANDO TERMINA UMA FUNCIONALIDADE - PULL REQUEST

### Como Fazer

1. Acesse: https://github.com/Portel44/Eletro-lab
2. Clique em **"Pull Requests"** no topo
3. Clique em **"New Pull Request"**
4. Configure assim:
   - **Base:** `develop` (aonde quer colocar)
   - **Compare:** `user/[seu-nome]` (sua branch)
5. Clique **"Create Pull Request"**
6. Adicione uma descrição do que fez
7. Clique **"Create Pull Request"**

### O Colega Aprova (1 minuto)

O Matheus ou Diogo (ou o colega) vai:
1. Revisar seu código
2. Clicar em **"Review changes"**
3. Clicar em **"Approve"**
4. Clicar em **"Merge pull request"**

### Depois do Merge - Sincronize Sua Branch

```bash
# Volta para sua branch
git checkout user/[seu-nome]

# Busca o que foi mesclado
git pull origin user/[seu-nome]

# Atualiza sua branch com as mudanças do develop
git merge origin/develop

# Envia de volta
git push origin user/[seu-nome]
```

---

## ⚠️ ERROS COMUNS E SOLUÇÕES

### Erro 1: "Permission denied (publickey)"

**Problema:** Não consegue fazer push

**Solução:**

```bash
# Trocar para HTTPS (mais fácil)
git remote set-url origin https://github.com/Portel44/Eletro-lab.git

# Tentar novamente
git push origin user/[seu-nome]
```

### Erro 2: "Your branch and origin have diverged"

**Problema:** Sua branch está diferente da do GitHub

**Solução:**

```bash
# Sincronizar
git pull origin user/[seu-nome]
git push origin user/[seu-nome]
```

### Erro 3: "Changes would be overwritten by merge"

**Problema:** Tem mudanças locais mas quer atualizar

**Solução:**

```bash
# Salvar mudanças temporariamente
git stash

# Atualizar
git pull origin user/[seu-nome]

# Recuperar mudanças
git stash pop
```

### Erro 4: "Merge Conflict"

**Problema:** Vocês editaram o mesmo arquivo

**Solução:**

```bash
# Ver o status
git status

# Abrir o arquivo no VS Code
# Procurar por: <<<<<<< ======= >>>>>>>
# Escolher qual código quer manter
# Deletar os marcadores

# Fazer commit da resolução
git add .
git commit -m "fix: resolver conflito em [arquivo].js"
git push origin user/[seu-nome]
```

### Erro 5: "Nothing to commit"

**Problema:** Tentou fazer commit mas não tem mudanças

**Solução:** Edite seus arquivos no VS Code e salve. Depois:

```bash
git status  # Ver se aparece os arquivos
git add .
git commit -m "tipo: descrição"
git push origin user/[seu-nome]
```

---

## 🎯 FLUXO COMPLETO DO DIA (RESUMO)

```bash
# MANHÃ
git checkout user/[seu-nome]
git pull origin user/[seu-nome]

# TRABALHA NO VS CODE
# (Edita arquivos normalmente)

# FINAL DO DIA
git add .
git commit -m "tipo: descrição"
git push origin user/[seu-nome]

# QUANDO TERMINA UMA FEATURE
# → Abre Pull Request no GitHub
# → Colega aprova
# → Faz merge
# → Sincroniza sua branch
```

---

## 🔒 REGRAS IMPORTANTES

✅ **Sempre trabalhe em sua branch** (`user/[seu-nome]`)  
✅ **Sincronize SEMPRE quando chegar** (`git pull`)  
✅ **Faça commits frequentes** (não acumule 1000 mudanças)  
✅ **Use mensagens claras** nos commits  
✅ **Sempre faça Pull Request** antes de mesclar  
✅ **Revise o código** de um colega  
❌ **NUNCA faça push direto** para `master`, `develop` ou `staging`  
❌ **NUNCA use `git push --force`**  

---

## 📱 COMANDOS MAIS USADOS
master

| O que fazer | Comando |
|---|---|
| Ver status | `git status` |
user/portela
| Ver branch atual | `git branch` |
| Trocar de branch | `git checkout user/[seu-nome]` |
| Atualizar branch | `git pull origin user/[seu-nome]` |
| Ver arquivos alterados | `git diff` |
| Adicionar mudanças | `git add .` |
| Fazer commit | `git commit -m "tipo: descrição"` |
| Enviar para GitHub | `git push origin user/[seu-nome]` |

---

## ✅ Dica importante

Sempre faça `git pull origin user/[seu-nome]` antes de começar a trabalhar. Isso garante que você esteja com o código mais recente.=======
| Ver branches | `git branch -a` |
| Trocar de branch | `git checkout user/[seu-nome]` |
| Atualizar branch | `git pull origin user/[seu-nome]` |
| Ver mudanças | `git diff` |
| Ver histórico | `git log --oneline -5` |
| Adicionar tudo | `git add .` |
| Fazer commit | `git commit -m "tipo: descrição"` |
| Enviar para GitHub | `git push origin user/[seu-nome]` |
| Desfazer último commit | `git reset --soft HEAD~1` |

---

## 🆘 PRECISA DE AJUDA?

**Erro que não entende?**
1. Anote exatamente a mensagem de erro
2. Procure aqui neste arquivo
3. Se não encontrar, Google o erro

**Conflito que não resolve?**
1. Abra o arquivo no VS Code
2. Procure por `<<<<<<<` e `>>>>>>>`
3. Mantenha o código que quer
4. Delete os marcadores
5. Faça commit

**Perdeu seu código?**
1. Calma! Git guarda tudo
2. Execute: `git reflog`
3. Procure seu commit
4. Execute: `git checkout [código-do-commit]`

---

## 📋 CHECKLIST PARA COMEÇAR

- [ ] **Portela**: Criou repositório no GitHub
- [ ] **Portela**: Rodou os comandos de push
- [ ] **Portela**: Adicionou Matheus e Diogo como colaboradores
- [ ] **Matheus**: Clonou o repositório
- [ ] **Matheus**: Criou sua branch pessoal
- [ ] **Diogo**: Clonou o repositório
- [ ] **Diogo**: Criou sua branch pessoal
- [ ] **Todos**: Leram este guia
- [ ] **Todos**: Fizeram um teste (criar arquivo, commitar, fazer push)

---

## 🎓 DICAS PRO

1. **Faça commits pequenos** - Não espere terminar tudo. Commit a cada funcionalidade.
2. **Use nomes descritivos** - `feat: adicionar botão de login` é melhor que `feat: mudanças`.
3. **Sincronize diariamente** - Sempre faça `git pull` quando chegar.
4. **Comunique mudanças grandes** - Se vai refatorar algo que outros usam, avise.
5. **Code review é seu amigo** - Revisar código dos colegas evita bugs.

---

**Dúvida? Releia este arquivo. 90% das respostas estão aqui!**
master