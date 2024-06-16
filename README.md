<div align="center">

<img src="./src/assets/images/chat-app-icon.webp" alt="tg chat classification appы" width="100"/>

# Telegram channel classification

Chat app for text with NLP bots for classification telegram channel name by message

</div>

---

## Stack

- Vite
- Typescript
- React 18
- Redux Toolkit
- axios
- styled-components
- MUI
- lodash.debounce
- chart.js

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`

## Production mode

### By docker

<strong> Warning: don't forget to create `.env` </strong>

```sh
docker build -t tg-classification-frontend-app .
```

Run build container

```sh
docker run --name tg-classification-frontend-app --restart=always -d -p 80:80 tg-classification-frontend-app
```

### By package manage (don't recommended)

_Check installation part_

```sh
pn build
pn serve
```

## Dev mode & installation

### Via system

1. [`git`](https://git-scm.com/)
2. [`Node.js`](https://nodejs.org/)
3. [`pnpm`](https://pnpm.io/installation)
4. Install all dependencies `package.json`

**Warning**: before use `pn` command, need to read alias in `.bashrc` or `alias.bat`, also instead `pn` can
called `pnpm`

Terminal

```sh
source .bashrc
```

Cmd

```sh
alias.bat
```

Install all dependencies

```sh
cd autoexpert-frontend
pn i
```

Run `pn dev`
