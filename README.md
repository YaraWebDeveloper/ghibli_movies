# Ghilbi Movies Search

Basado en [React Ethereal](https://github.com/YaraWebDeveloper/react_ethereal)

### Instalación
1. Clonar o descargar el repositorio
`$ git clone  https://github.com/YaraWebDeveloper/ghibli_movies.git`
2. Entrar en la carpeta `$ cd ghibli_movies`
3. Ejecutar [npm](https://npmjs.com) `$ npm i`
4. Si hay problemas de compilación. `$ npm i --only=dev`
5. Editar archivo de configuración con puerto, base_url y demás setups `app/conf/conf.js`
6. Ejecutar `$ npm start`

### Descripción
Mediante el consumo de la APiI de Ghibli realicé un buscador dinámico acompañado de imágenes sacadas de la API de búsqueda de BingAzure ya que por defecto la api principal no contaba con ellas.

Realice la prueba en una arquitectura basada en Redux Basado en [React Ethereal](https://github.com/YaraWebDeveloper/react_ethereal) escrita en su totalidad por mi, usando patrón de Store, Actions, Reducer, Components. La principal razón es por la comodidad que presento con esta arquitectura.

Las principales mejoras o Trade-Offs sería mejorar la visualización, algunos componentes de búsqueda y mejoras en la descripción, como mostrar personajes y mas info de cada película.

La mejor parte es la búsqueda asíncrona de las imágenes para cada una de las películas, se puede encontrar en `app/actions/search/SearchActions.js`

La aplicación queda alojada en la siguiente URL: [Ghibli Movies - YaraWeb](https://ghibli-movies.herokuapp.com/)


### TODO
- Realizar pruebas automatizadas.


## License
- MIT

---
**Enjoy the ride, love the ending**
by [YaraWebDeveloper](https://github.com/YaraWebDeveloper/react_ethereal)
