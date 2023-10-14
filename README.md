# [_**Quiz**_](https://github.com/MatiasOrtizF/quiz-app "Live app")

## Quiz App
"Quiz" es una aplicación de preguntas y respuestas con 4 categorías y un ranking de jugadores.

- Elige una categoría y responde las 10 preguntas en el menor tiempo posible. 🧠
- Compite contra otros jugadores para ver quién es el más rápido. 💨

## Features

- **Navigation:** Posibilidad de navegar entre distintas pantallas.
- **Preguntas y respuesta aleatorias:** Cada vez que el usuario seleccione una categoría, se consumirán de la API 10 preguntas con sus respectivas respuestas.
- **Ranking:** Al terminar de responder todas las preguntas, el usuario tendrá la posibilidad de guardar sus puntos mediante una base de datos para ser visualizados por todos.


## Tecnologias Utilizadas
### _Lenguajes_
<p align='center'>
    <img height="30"src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

### _Librerias_

- [react-navigation] - Librería de enrutamiento y navegación.
- [axios] - Librería para peticiones HTTP en JavaScript.


## Instalación
1. Clonar el repositorio
```sh
git clone https://github.com/MatiasOrtizF/quiz-app.git
```
2. Instalar las dependencias desde NPM
```sh
npm i
```
3. Asegúrate de tener Expo instalado globalmente en tu computadora. Si no lo tienes, puedes instalarlo usando el siguiente comando:
```sh
npm install -g expo-cli
```

3. Iniciar el proyecto con Expo:
```sh
expo start
```

[react-navigation]: <https://reactnavigation.org/>
[axios]: <https://axios-http.com/es/docs/intro>