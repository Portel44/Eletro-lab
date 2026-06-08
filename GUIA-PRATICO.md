# 📖 GUIA PRÁTICO - Como Trabalhar sem Bagunçar os Arquivos

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
<<<<<<< HEAD
seu código
=======
código do outro
>>>>>>> branch
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

| O que fazer | Comando |
|---|---|
| Ver status | `git status` |
| Ver branch atual | `git branch` |
| Trocar de branch | `git checkout user/[seu-nome]` |
| Atualizar branch | `git pull origin user/[seu-nome]` |
| Ver arquivos alterados | `git diff` |
| Adicionar mudanças | `git add .` |
| Fazer commit | `git commit -m "tipo: descrição"` |
| Enviar para GitHub | `git push origin user/[seu-nome]` |

---

## ✅ Dica importante

Sempre faça `git pull origin user/[seu-nome]` antes de começar a trabalhar. Isso garante que você esteja com o código mais recente.
