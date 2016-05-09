# Cómo configurar el entorno

## Instalar Node

- Descargar la última versión de NodeJS (MSI para Windows). 
	- https://nodejs.org/en/download/current/
- Configurar variables de entorno:
```
NODE_HOME=RUTA_NODE
PATH=%PATH%;%NODE_HOME%\bin
```
Nota: Añada las variables de entorno para el usuario

## Instalar Git

- Descargar la última versión de Git
	- https://git-scm.com/download/win
	- Al instalar seleccionar: Use Git from Windows Command Prompt

## Probar

- Para probar que el node ha sido configurado correctamente, ejecutar:
`node --version`
- Para probar que el git ha sido configurado correctamente, ejecutar:
`git --version`


