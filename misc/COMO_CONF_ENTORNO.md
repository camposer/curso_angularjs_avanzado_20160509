# Cómo configurar el entorno

## Instalar Node

- Descargar la última versión de NodeJS (MSI para Windows). 
	- https://nodejs.org/en/download/current/

## Instalar Git

- Descargar la última versión de Git
	- https://git-scm.com/download/win
	- Al instalar seleccionar: Use Git from Windows Command Prompt
- Configurar GIT para utilizar HTTP en lugar de HTTPS
```
> git config --global url."http://".insteadOf https://
```

## Configurar proxy

- Añadir la variable de entorno: `http_proxy=http://PROXY_HOST:PROXY_PORT`

## Instalar Bower (global)

- Ejecutar el siguiente comando:
```
> npm install -g bower
```

## Probar

- Para probar que el node ha sido configurado correctamente, ejecutar:
`npm --version`
- Para probar que el git ha sido configurado correctamente, ejecutar:
`git --version`
- Para probar que el bower ha sido configurado correctamente, ejecutar:
`bower --version`

# Ejecutando frontend

## Clonar Angular Seed

- Abrir una consola y clonar el repo de Angular Seed
```
> git clone https://github.com/angular/angular-seed.git
```

## Constuir proyecto

- Ejecutar en una consola:
```
> npm start
```

- Abrir en un navegador: http://localhost:8000/app












