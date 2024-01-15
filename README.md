
# Movie App

Esta es una aplicacion basica realizada en React native para manejar una api (nodejs) y la cual consule una DB en firebase acerca de peliculas.
Se planteo utiliazr Atomic design aunque por lo pequeño del proyecto esta sin completar,
Tambien considerar agregar Redux o React Context en un futuro para manejo de estados globales.

## Inicio Rápido

Este proyecto está construido con React Native y Expo. Para iniciar la aplicación, sigue estos pasos:

### Requisitos Previos

- Node.js
- npm o Yarn
- Expo CLI

### Instalación

1. Clona el repositorio:
 ```bash
git clone https://github.com/EmmanuelSkapple/movieApp.git
```
2. Instala las dependencias:
   ```bash
   npm install
   ```
   o
   ```bash
   yarn install
   ```
3. Inicia la aplicación con Expo:
   ```bash
   expo start
   ```

## Acciones basicas
En este momento hay 4 funciones basicas en la aplicacion:<br/>
1.- Ver peliculas  <br/>
2.- Filtrar por nombre<br/>
3.- Mirar detalles de pelicula<br/>
4.- Agregar una pelicula nueva<br/>
## Pantallas de la Aplicación

### Home
Basicamente esta constituido por dos elmentos uno es la barra de busqueda y la lista de peliculas

### Movie Details

En esta pantalla se veran todo los detalles de la pelicula

### Nueva Pelicula

Esta no es una pantalla agregada al stack de navegacion si no un modal que surge de abajo hacia arriba y despliega un formulario para subir una nueva pelicula
la primer parte tienes que seleccionar una imagen precargada, esto para agilizar el testeo
### Form Nueva Pelicula
Aqui puedes escribir llas dato de la pelicula 



## Contributing

Los Pull request son bienvenidos. Para cambios mayores, porfavor abrir un issue primero y podemos descutir que te gustaria cambiar o agregar

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
