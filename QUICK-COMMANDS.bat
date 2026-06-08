@echo off
REM Comandos rápidos para Eletro Lab - Execute no PowerShell (como Admin)

REM ====================
REM PARA PORTELA
REM ====================
REM Setup Inicial:
REM git clone https://github.com/Portel44/Eletro-lab.git
REM cd Eletro-lab
REM git checkout -b develop/portela origin/develop/portela

REM Início de Sessão:
REM git checkout develop/portela
REM git pull origin develop/portela

REM Depois de Trabalhar:
REM git add .
REM git commit -m "tipo: descrição"
REM git push origin develop/portela

REM Sincronizar:
REM git merge origin/develop
REM git push origin develop/portela

REM ====================
REM PARA MATHEUS
REM ====================
REM Setup Inicial:
REM git clone https://github.com/Portel44/Eletro-lab.git
REM cd Eletro-lab
REM git checkout -b develop/matheus origin/develop/matheus

REM Início de Sessão:
REM git checkout develop/matheus
REM git pull origin develop/matheus

REM Depois de Trabalhar:
REM git add .
REM git commit -m "tipo: descrição"
REM git push origin develop/matheus

REM Sincronizar:
REM git merge origin/develop
REM git push origin develop/matheus

REM ====================
REM PARA DIOGO
REM ====================
REM Setup Inicial:
REM git clone https://github.com/Portel44/Eletro-lab.git
REM cd Eletro-lab
REM git checkout -b develop/diogo origin/develop/diogo

REM Início de Sessão:
REM git checkout develop/diogo
REM git pull origin develop/diogo

REM Depois de Trabalhar:
REM git add .
REM git commit -m "tipo: descrição"
REM git push origin develop/diogo

REM Sincronizar:
REM git merge origin/develop
REM git push origin develop/diogo

REM ====================
REM COMANDOS ÚTEIS (Para Todos)
REM ====================

REM Ver status
REM git status

REM Ver histórico
REM git log --oneline -5

REM Ver branches
REM git branch -a

REM Ver commits não sincronizados
REM git log --oneline @{u}..

REM Sincronização Completa
REM git fetch --all
REM git pull origin [sua-branch]

REM Resolver Conflito - Adicionar arquivo
REM git add arquivo.js

REM Resolver Conflito - Commitar
REM git commit -m "fix: resolver conflito"

REM Desfazer mudanças (CUIDADO!)
REM git reset --hard origin/[sua-branch]

REM Salvar mudanças temporariamente
REM git stash

REM Recuperar mudanças
REM git stash pop

REM Ver diferenças
REM git diff

REM Ver branches e commits
REM git log --all --decorate --oneline --graph

echo.
echo ============================================
echo        ELETRO LAB - Quick Reference
echo ============================================
echo.
echo Documentacao completa:
echo - README.md
echo - WORKFLOW.md
echo - TEAM-INSTRUCTIONS.md
echo - TROUBLESHOOTING.md
echo.
echo Para usar: descomente as linhas que precisa no terminal
echo.
