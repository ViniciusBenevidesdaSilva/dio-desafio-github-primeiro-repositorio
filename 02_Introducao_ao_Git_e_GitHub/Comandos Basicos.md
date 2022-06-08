
# Introdução ao Git e GitHub :octocat:

- **Git**: Sistema de *Versionamento de código distribuído*.
- **GitHub**: *Repositório* remoto de código.

## Comandos com Git

> O funcionamento do git ocorre por linhas de comando via console.

- `git init`: Inicia um repositório do git em um diretório.

- `git add`: Move os arquivos alterados para ==Staged==, ou seja, aguardando para serem *commitados*.

- `git commit -m "Mensagem"`: Envelopa todos os arquivos modificados que estão em *Staged* em um commit, salvando essa versão do projeto e retornando-os para o estado ==Unmodified==.

- `git status`: Informa qual o estado atual dos arquivos *(quais estão Modified, Staged, Untracked, entre outros...)*.

---

- `git remote add origin /endereço/`: Liga o repositório local a um repositório remoto (`/endereço/`: *URL*).

- `git push origin master`: Envia a branch "master" para o repositório remoto.

- `git pull origin master`: Recebe os arquivos do repositório remoto na branch "master"

- `git clone /endereço/`: Clona um repositório em um novo diretório

---

- `ls`: Lista os arquivos de um diretório *(Com o parâmetro `-a` lista inclusive os ocultos)*.

- `cd NomeDaPasta`: "Entra" no diretório *"NomeDaPasta"* .

- `cd ..`: Volta um *"nível"* de diretório.

- `mkdir NomeDaPasta`: Cria um novo diretório com o nome passado.

- `echo texto > README.md`: Cria um arquivo do tipo e nome passados contendo o `texto` informado.
