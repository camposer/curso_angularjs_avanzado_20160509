# Cómo utilizar BOWER

Ha diferencia de NPM, BOWER es un gestor de paquetes lineal, sólo mantiene una versión por dependencia.

## Para buscar paquetes

```
> bower search NOMBRE_PAQUETE
```

## Para instalar paquetes

- Todos los paquetes listados en el fichero bower.json
```
> bower install
```

- Un paquete específico
```
> bower install NOMBRE_PAQUETE[^VERSION]
```

- Un paquete específico y añadirlo al bower.json (recomendado!)
```
> bower install NOMBRE_PAQUETE --save
```



