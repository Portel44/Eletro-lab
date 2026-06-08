# Eletro Lab

Projeto colaborativo de desenvolvimento em equipe com **Git** e **GitHub**.

## 👥 Equipe

| Membro | Branch |
|--------|--------|
| **Portela** | `user/portela` |
| **Matheus** | `user/matheus` |
| **Diogo** | `user/diogo` |

## 🌳 Estrutura de Branches

```
master (produção - código pronto)
  ├── develop (integração - merge de todas as features)
  ├── staging (testes antes de ir para produção)
  ├── user/portela (trabalho do Portela)
  ├── user/matheus (trabalho do Matheus)
  └── user/diogo (trabalho do Diogo)
```

## 🚀 Como Funciona

1. **Cada um trabalha em sua própria branch** (`user/[seu-nome]`)
2. **Não há conflito** porque cada um está em um lugar diferente
3. **Quando termina uma tarefa**, faz um Pull Request para `develop`
4. **Outro membro revisa** e aprova a mudança
5. **Merge automático** mescla o código com segurança

## 📥 Setup Inicial (Executar UMA VEZ)

### Matheus e Diogo:

```bash
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/matheus origin/user/matheus  # Para Matheus
git checkout -b user/diogo origin/user/diogo      # Para Diogo
```

### Portela:

```bash
cd "C:\Users\User\Desktop\Eletro Lab"
git remote add origin https://github.com/Portel44/Eletro-lab.git
git push -u origin master
git push -u origin develop
git push -u origin staging
git push -u origin user/portela
git push -u origin user/matheus
git push -u origin user/diogo
```

## 💻 Fluxo Diário

### Começo do dia (TODOS):
```bash
git checkout user/[seu-nome]
git pull origin user/[seu-nome]
```

### Durante o trabalho:
- Edite seus arquivos normalmente no VS Code

### Fim do dia ou quando terminar uma tarefa:
```bash
git add .
git commit -m "tipo: descrição"
git push origin user/[seu-nome]
```

**Tipos de commit:**
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alteração na documentação
- `refactor:` reorganização de código

## 🔀 Mesclar seu Trabalho com develop (Pull Request)

### Via GitHub (Recomendado):

1. Acesse: https://github.com/Portel44/Eletro-lab
2. Clique em **Pull Requests** → **New Pull Request**
3. Configure:
   - **base:** `develop`
   - **compare:** `user/[seu-nome]`
4. Clique **Create Pull Request**
5. Aguarde outro membro revisar e clicar **Merge**

### Depois de mergear, sincronize sua branch:

```bash
git checkout user/[seu-nome]
git pull origin user/[seu-nome]
git merge origin/develop
git push origin user/[seu-nome]
```

## ❓ Problemas Comuns

**Ver GUIA-PRATICO.md para soluções de erros, conflitos e dúvidas.**

## 📝 Resumo das Regras

✅ **Trabalhe sempre em sua branch** (`user/[seu-nome]`)  
✅ **Sincronize todo dia** com `git pull origin user/[seu-nome]`  
✅ **Faça commits pequenos e frequentes**  
✅ **Use mensagens descritivas**  
✅ **Sempre faça Pull Request** para mesclar com `develop`  
✅ **Revise o código** de outro membro antes de aprovar  
❌ **Nunca faça push direto** para `master`, `develop` ou `staging`  

---

**Leia GUIA-PRATICO.md para instruções detalhadas e resolução de problemas.**
