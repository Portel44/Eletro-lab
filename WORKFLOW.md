# 📋 Guia de Fluxo de Trabalho Colaborativo

## 🎯 Estrutura de Branching

```
main (produção)
 └─ staging (testes)
     └─ develop (integração)
         ├─ develop/portela
         ├─ develop/matheus
         └─ develop/diogo
```

---

## 🔄 Passo a Passo do Fluxo

### **PASSO 1: OBTER O PROJETO (Clone)**

Executar **UMA VEZ** quando começar:

```bash
# Matheus
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b develop/matheus origin/develop/matheus

# Diogo
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b develop/diogo origin/develop/diogo

# Portela
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b develop/portela origin/develop/portela
```

---

### **PASSO 2: ATUALIZAR SUA BRANCH (Antes de começar a trabalhar)**

Executar a cada início de sessão:

```bash
# Matheus
git checkout develop/matheus
git pull origin develop/matheus

# Diogo
git checkout develop/diogo
git pull origin develop/diogo

# Portela
git checkout develop/portela
git pull origin develop/portela
```

---

### **PASSO 3: FAZER ALTERAÇÕES NO CÓDIGO**

Trabalhe normalmente no seu editor (VS Code).

Verifique status dos arquivos:
```bash
git status
```

---

### **PASSO 4: PREPARAR E COMMITAR ALTERAÇÕES**

```bash
# Ver arquivos modificados
git status

# Adicionar todos os arquivos alterados
git add .

# Ou adicionar arquivo específico
git add nome-do-arquivo.js

# Commitar com mensagem descritiva
git commit -m "tipo: descrição breve"
```

**Exemplos de commits:**
```bash
git commit -m "feat: adicionar função de validação"
git commit -m "fix: corrigir cálculo de desconto"
git commit -m "docs: atualizar instruções"
git commit -m "refactor: melhorar legibilidade do código"
```

---

### **PASSO 5: ENVIAR ALTERAÇÕES PARA GitHub (Push)**

```bash
# Matheus
git push origin develop/matheus

# Diogo
git push origin develop/diogo

# Portela
git push origin develop/portela
```

---

### **PASSO 6: SINCRONIZAR COM A BRANCH PRINCIPAL (Pull Request)**

Quando quiser mesclar sua branch pessoal com `develop`:

#### Via GitHub (Recomendado):

1. Vá para https://github.com/Portel44/Eletro-lab
2. Clique em "Pull Requests" → "New Pull Request"
3. Comparar: `base: develop` ← `compare: develop/[seu-nome]`
4. Adicione título e descrição
5. Clique "Create Pull Request"
6. Aguarde aprovação de outro membro
7. Clique "Merge Pull Request"

#### Via Linha de Comando:

```bash
# Matheus mergear em develop
git checkout develop
git pull origin develop
git merge develop/matheus
git push origin develop

# Depois sincronizar sua branch
git checkout develop/matheus
git pull origin develop/matheus
```

---

### **PASSO 7: SINCRONIZAR NOVAMENTE SUA BRANCH**

Após um merge ser aceito, todos devem sincronizar:

```bash
# Matheus
git checkout develop/matheus
git pull origin develop/matheus
git merge origin/develop
git push origin develop/matheus

# Diogo
git checkout develop/diogo
git pull origin develop/diogo
git merge origin/develop
git push origin develop/diogo

# Portela
git checkout develop/portela
git pull origin develop/portela
git merge origin/develop
git push origin develop/portela
```

---

## ⚡ Ciclo Completo Diário

```bash
# 1. INÍCIO DO DIA
git checkout develop/[seu-nome]
git pull origin develop/[seu-nome]

# 2. TRABALHE NO SEU CÓDIGO

# 3. FIM DO DIA
git add .
git commit -m "tipo: descrição do que fez"
git push origin develop/[seu-nome]

# 4. SE QUISER MESCLAR
git checkout develop
git pull origin develop
git merge develop/[seu-nome]
git push origin develop

# 5. ATUALIZE SUA BRANCH
git checkout develop/[seu-nome]
git merge origin/develop
git push origin develop/[seu-nome]
```

---

## 🚨 Resolvendo Conflitos

### Quando o Erro Acontece:

```
error: Your local changes to 'arquivo.js' would be overwritten by merge
```

### Solução:

```bash
# 1. Ver status
git status

# 2. Fazer commit de tudo
git add .
git commit -m "WIP: trabalho em progresso"

# 3. Tentar novamente
git pull origin develop/[seu-nome]

# Se ainda tiver conflito:
# 4. Ver os conflitos
git status

# 5. Abrir arquivo no VS Code e resolver manualmente:
# Procure por:
<<<<<<< HEAD
código seu
=======
código do outro
>>>>>>> branch-name

# 6. Editar e deixar apenas o código que deseja
# 7. Fazer commit da resolução
git add .
git commit -m "fix: resolver conflito em arquivo.js"
git push origin develop/[seu-nome]
```

---

## 📊 Comandos Úteis

### Ver Histórico de Commits:
```bash
# Últimos 5 commits
git log --oneline -5

# Histórico completo
git log --oneline

# Com detalhes
git log --all --decorate --oneline --graph
```

### Ver Diferenças:
```bash
# Mudanças não commitadas
git diff

# Mudanças no stage
git diff --staged

# Diferença entre branches
git diff develop..develop/matheus
```

### Desfazer Mudanças:
```bash
# Descartar mudanças locais (cuidado!)
git checkout -- arquivo.js

# Remover arquivo do stage
git reset arquivo.js

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Criar Backup:
```bash
# Salvar mudanças temporariamente
git stash

# Recuperar mudanças salvas
git stash pop

# Ver mudanças guardadas
git stash list
```

---

## ✅ Checklist de Segurança

- [ ] Sempre fazer `git pull` antes de começar a trabalhar
- [ ] Fazer commits pequenos e frequentes (não acumular 1000 mudanças)
- [ ] Usar mensagens de commit descritivas
- [ ] Verificar `git status` antes de fazer push
- [ ] Sempre fazer backup de código importante
- [ ] Comunicar com a equipe antes de grandes refatorações
- [ ] Fazer code review via Pull Request
- [ ] Sincronizar branch pessoal com `develop` diariamente

---

## 🔗 Referências

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

---

## 📞 Problemas Comuns

### "Permission denied (publickey)"
- [ ] Verificar SSH keys configuradas
- [ ] Usar HTTPS em vez de SSH se necessário

### "Your branch is ahead of 'origin/branch' by X commits"
- [ ] Fazer `git push origin develop/[seu-nome]`

### Arquivo aparece como modificado mas não foi alterado
- [ ] Executar: `git reset --hard origin/develop/[seu-nome]`

---

**Última atualização:** 2024
