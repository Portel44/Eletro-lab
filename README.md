# Eletro Lab

Projeto colaborativo simples — arquivos essenciais e instruções rápidas.

Arquivos presentes neste repositório localmente:

- `README.md` — este arquivo (resumido)
- `GUIA-PRATICO.md` — Guia prático (passo a passo para trabalhar)
- `COMECE-AQUI.txt` — Instruções rápidas do que fazer primeiro
- `EXECUTA-AGORA.txt` — Passos imediatos para publicar no GitHub
- `SETUP-PORTELA.txt` — Instruções para Portela (criar repo / push)
- `SETUP-MATHEUS.txt` — Instruções para Matheus (clone / checkout)
- `SETUP-DIOGO.txt` — Instruções para Diogo (clone / checkout)
- `script.js` — arquivo do projeto
- `.gitignore` — arquivos que o Git ignora

Objetivo deste README: dar um resumo rápido e apontar para os arquivos que vocês vão usar.

Instruções essenciais (muito simples)

1) Se você é a pessoa que vai publicar o repositório no GitHub (Portela):

```powershell
cd "C:\Users\User\Desktop\Eletro Lab"
git remote add origin https://github.com/Portel44/Eletro-lab.git
git push -u origin master
git push -u origin user/portela
git push -u origin user/matheus
git push -u origin user/diogo
```

2) Se você é Matheus ou Diogo — passos simples para começar:

```powershell
# Matheus
cd C:\Users\User\Desktop
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/matheus origin/user/matheus

# Diogo
cd C:\Users\User\Desktop
git clone https://github.com/Portel44/Eletro-lab.git
cd Eletro-lab
git checkout -b user/diogo origin/user/diogo
```

3) Fluxo rápido de trabalho (diário)

```powershell
# 1. Antes de começar
git checkout user/[seu-nome]
git pull origin user/[seu-nome]

# 2. Depois de editar
git add .
git commit -m "tipo: descrição breve"
git push origin user/[seu-nome]
```

4) Criar um Pull Request (quando terminar uma feature)

Vá para o repositório no GitHub → **Pull Requests** → **New Pull Request**
Escolha: base = `develop`, compare = `user/[seu-nome]`, clique em **Create Pull Request**.

Se tiver problemas, abra `GUIA-PRATICO.md` para passos mais detalhados.

---

Se quiser que eu também faça o `git push` desta branch (`user/portela`) para o remoto agora, me autorize e eu executo (pode pedir autenticação).