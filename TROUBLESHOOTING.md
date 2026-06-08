# 🆘 Guia de Resolução de Problemas Git

## Problema 1: "Merge Conflict"

### Sintoma:
```
CONFLICT (content): Merge conflict in arquivo.js
Automatic merge failed; fix conflicts and then commit the result.
```

### Solução:

**Passo 1: Ver o conflito**
```bash
git status
```

**Passo 2: Abrir no VS Code**
- O arquivo conflitado terá marcadores:
```javascript
<<<<<<< HEAD
seu código
=======
código do outro
>>>>>>> branch-name
```

**Passo 3: Editar manualmente**
- Escolha qual código manter, deletar os marcadores, salvar
- Ou use a interface do VS Code: "Accept Current Change" / "Accept Incoming Change"

**Passo 4: Resolver e commitar**
```bash
git add arquivo.js
git commit -m "fix: resolver conflito em arquivo.js"
git push origin develop/[seu-nome]
```

---

## Problema 2: "Permission denied (publickey)"

### Sintoma:
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

### Solução Rápida (Use HTTPS):

```bash
# Verificar URL atual
git remote -v

# Trocar para HTTPS (recomendado para Windows)
git remote set-url origin https://github.com/Portel44/Eletro-lab.git

# Testar conexão
git pull
```

### Solução Completa (Configure SSH):

1. Gerar chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu-email@gmail.com"
```
Apertar Enter para todas as perguntas

2. Adicionar ao SSH Agent:
```bash
ssh-add $ENV:USERPROFILE\.ssh\id_ed25519
```

3. Copiar a chave pública:
```bash
cat $ENV:USERPROFILE\.ssh\id_ed25519.pub
# Copiar saída
```

4. Adicionar no GitHub:
- Ir para https://github.com/settings/ssh/new
- Colar a chave
- Salvar

5. Testar:
```bash
ssh -T git@github.com
```

---

## Problema 3: "Your branch has diverged"

### Sintoma:
```
Your branch and 'origin/develop/portela' have diverged,
and have X and Y different commits each, respectively.
```

### Solução:

```bash
# Opção 1: Sincronizar via merge (mais seguro)
git pull origin develop/portela
git push origin develop/portela

# Opção 2: Sincronizar via rebase (se você sabe o que faz)
git pull --rebase origin develop/portela
git push origin develop/portela
```

---

## Problema 4: "Changes would be overwritten by merge"

### Sintoma:
```
error: Your local changes to 'arquivo.js' would be overwritten by merge
```

### Solução:

**Opção 1: Salvar mudanças em temp (recomendado)**
```bash
git stash
git pull origin develop/[seu-nome]
git stash pop
```

**Opção 2: Descartar mudanças locais**
```bash
# CUIDADO! Isso vai deletar suas mudanças!
git checkout -- arquivo.js
git pull origin develop/[seu-nome]
```

**Opção 3: Commitar tudo**
```bash
git add .
git commit -m "WIP: backup"
git pull origin develop/[seu-nome]
```

---

## Problema 5: "Detached HEAD"

### Sintoma:
```
You are in 'detached HEAD' state.
```

### Solução:

```bash
# Voltar para sua branch
git checkout develop/[seu-nome]

# Ou criar uma nova branch
git checkout -b backup-branch
```

---

## Problema 6: "Arquivo mudou mas está igual"

### Sintoma:
```
git status mostra arquivo modificado mas o conteúdo é idêntico
```

### Solução:

```bash
# Resetar para versão remota
git checkout -- arquivo.js

# Ou resetar tudo
git reset --hard origin/develop/[seu-nome]
```

---

## Problema 7: "Não consigo fazer push"

### Sintoma:
```
rejected: failed to push some refs to 'origin'
```

### Solução:

```bash
# Sincronizar primeiro
git pull origin develop/[seu-nome]

# Depois tentar novamente
git push origin develop/[seu-nome]

# Se ainda não funcionar:
git pull --rebase origin develop/[seu-nome]
git push origin develop/[seu-nome]
```

---

## Problema 8: "Preciso desfazer um commit"

### Sintoma:
Fiz um commit mas quero desfazer

### Solução:

**Se ainda não fez push:**
```bash
# Desfazer último commit, mantendo mudanças
git reset --soft HEAD~1

# Ou desfazer e descartar mudanças
git reset --hard HEAD~1
```

**Se já fez push:**
```bash
# Criar um commit que desfaz o anterior (mais seguro)
git revert HEAD

# Depois fazer push
git push origin develop/[seu-nome]
```

---

## Problema 9: "Arquivo não aparece no Git"

### Sintoma:
Criei arquivo mas não aparece no `git status`

### Solução:

```bash
# Ver todos os arquivos (incluindo ignorados)
git status --ignored

# Verificar .gitignore
cat .gitignore

# Remover do .gitignore se necessário
# Depois adicionar:
git add arquivo.js
git commit -m "add: arquivo.js"
```

---

## Problema 10: "Perdi meu commit!"

### Sintoma:
Fiz reset hard e perdi tudo!

### Solução (às vezes funciona):

```bash
# Ver histórico de commits perdidos
git reflog

# Encontrar o commit que quer recuperar (ex: HEAD@{2})
git checkout HEAD@{2}

# Criar uma branch com o commit:
git checkout -b recuperado
```

---

## ⚡ Comandos de Emergência

```bash
# Ver tudo que foi feito
git reflog

# Ver diferenças
git diff
git diff HEAD~1

# Ver quem fez o quê
git blame arquivo.js

# Limpar branches locais deletadas remotamente
git fetch --prune

# Listar todas as branches
git branch -a

# Deletar branch local
git branch -d develop/branch-velha

# Ver commits não sincronizados
git log origin/develop/[seu-nome]..HEAD
```

---

## 📞 Quando Chamar Help

Se nada disso funcionar:

1. **Faça screenshot** do erro
2. **Anote os comandos** que rodou
3. **Compartilhe** com o Portela
4. **Não force push** ou delete branches até resolver

---

## 🆘 Nuclear Option (Último Recurso)

Se tudo quebrar irreversivelmente:

```bash
# 1. Renomear pasta atual
cd ..
ren "Eletro-lab" "Eletro-lab-backup"

# 2. Clonar novamente
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab

# 3. Cria sua branch novamente
git checkout -b develop/[seu-nome] origin/develop/[seu-nome]

# 4. Copiar seus arquivos do backup se necessário
# Depois deletar a pasta backup
```

---

**Sempre faça backup antes de operações arriscadas!**
