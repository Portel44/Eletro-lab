# Adicionar ao seu projeto para melhor colaboração

## Para usar estes templates no GitHub:

1. Crie uma pasta `.github/ISSUE_TEMPLATE/` no repositório
2. Crie uma pasta `.github/PULL_REQUEST_TEMPLATE/` no repositório
3. Salve os arquivos correspondentes lá

---

## 📝 Bug Report Template

Salvar em: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Relatório de Bug
about: Relatar um bug encontrado
title: '[BUG] '
labels: 'bug'
assignees: ''

---

## 📌 Descrição do Bug

[Descreva claramente qual é o problema]

## 🔍 Como Reproduzir

1. Passo 1...
2. Passo 2...
3. Passo 3...

## 😵 Comportamento Esperado

[O que deveria acontecer]

## 🎬 Comportamento Atual

[O que está acontecendo]

## 📸 Screenshots

[Se aplicável, adicione screenshots]

## 🖥️ Ambiente

- Windows / macOS / Linux
- VS Code versão:
- Node.js versão (se aplicável):
- Navegador (se aplicável):

## 📝 Notas Adicionais

[Qualquer informação adicional relevante]
```

---

## ✨ Feature Request Template

Salvar em: `.github/ISSUE_TEMPLATE/feature_request.md`

```markdown
---
name: Sugestão de Feature
about: Sugerir uma nova feature
title: '[FEATURE] '
labels: 'enhancement'
assignees: ''

---

## 📌 É uma melhoria relacionada a um problema?

[Descreva o problema ou caso de uso]

## 💡 Descrição da Solução

[Descreva sua ideia de implementação]

## 💭 Alternativas Consideradas

[Descreva alternativas que você considerou]

## 📊 Contexto Adicional

[Qualquer outro contexto ou screenshots]
```

---

## 🔀 Pull Request Template

Salvar em: `.github/pull_request_template.md`

```markdown
## 📝 Descrição

[Descreva as mudanças neste PR]

## 🔗 Relacionado a Issue

Fecha: #[número da issue]

## 🎯 Tipo de Mudança

- [ ] Bug fix (mudança não-breaking que corrige um problema)
- [ ] New feature (mudança não-breaking que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentation update

## 📋 Checklist

- [ ] Meu código segue o estilo do projeto
- [ ] Fiz auto-review do meu próprio código
- [ ] Adicionei comentários onde apropriado
- [ ] Atualizei documentação relacionada
- [ ] Minhas mudanças não geram novos warnings
- [ ] Adicionei testes que comprovam a fix/feature
- [ ] Testes novos e existentes passam localmente

## 🖼️ Screenshots (se aplicável)

[Adicione screenshots das mudanças visuais]

## 📝 Notas para Revisor

[Qualquer observação importante para quem vai revisar]
```

---

## 🤖 GitHub Actions (CI/CD)

Para adicionar testes automáticos, crie: `.github/workflows/tests.yml`

```yaml
name: Tests

on:
  push:
    branches: [ develop, main ]
  pull_request:
    branches: [ develop, main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [14.x, 16.x]
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linter
      run: npm run lint
```

---

## 🔐 Branch Protection Rules

No GitHub, vá para: Settings → Branches → Add rule

Configure para `develop` e `main`:
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
- ✅ Require code reviews before merging
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require conversation resolution before merging
```
