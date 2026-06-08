# Eletro Lab

## 📋 Descrição do Projeto
Projeto de desenvolvimento colaborativo entre três desenvolvedores utilizando Git, GitHub e VS Code.

## 👥 Equipe de Desenvolvimento

| Integrante | GitHub | Branch | Função |
|-----------|--------|--------|--------|
| **Portela** | @Portel44 | `user/portela` | - |
| **Matheus** | - | `user/matheus` | - |
| **Diogo** | - | `user/diogo` | - |

## 🌳 Estrutura de Branches

```
master → main (branch principal - produção)
  ├── staging (pre-release)
  └── develop (integração)
      ├── user/portela (desenvolvimento Portela)
      ├── user/matheus (desenvolvimento Matheus)
      └── user/diogo (desenvolvimento Diogo)
```

- **main**: Branch de produção - código estável e testado
- **staging**: Branch para testes pré-release
- **develop**: Branch de integração - merge de todas as features
- **develop/[nome]**: Branches individuais para cada desenvolvedor

## ⚙️ Configuração Inicial

### Para a Equipe

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Portel44/Eletro-lab.git
   cd Eletro-lab
   ```

2. **Sincronizar branches locais:**
   ```bash
   git fetch origin
   git branch -a
   ```

3. **Criar/verificar sua branch pessoal:**
   ```bash
   # Matheus
   git checkout -b user/matheus origin/user/matheus
   
   # Diogo
   git checkout -b user/diogo origin/user/diogo
   
   # Portela
   git checkout -b user/portela origin/user/portela
   ```

## 🚀 Fluxo de Trabalho

Veja [WORKFLOW.md](./WORKFLOW.md) para instruções detalhadas sobre:
- Como fazer commits
- Como fazer push/pull
- Como criar Pull Requests
- Como sincronizar alterações
- Como resolver conflitos

## 📝 Normas de Commits

- Usar mensagens descritivas em português ou inglês
- Padrão: `tipo: descrição breve`
- Exemplos:
  - `feat: adicionar validação de email`
  - `fix: corrigir bug na autenticação`
  - `docs: atualizar README`
  - `refactor: reorganizar estrutura de pastas`

## 📞 Comunicação

- Usar Issues para bugs e features
- Usar Pull Requests para code review
- Manter comentários nos commits quando necessário

## 📄 Licença

Defina conforme necessário.
