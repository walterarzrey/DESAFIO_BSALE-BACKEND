# Desafio_bsale_2022-Backend
API Rest Desafio Bsale 2022 (Backend)
Bienvenidos a este proyecto, el cual permite intercambiar información mediante endpoints. Por ejemplo, se puede obtener el listado de productos filtrado por categorías.
Esta API no requiere token o algún tipo de autenticación, debido a que es un desarrollo de prueba técnica.

# Contenidos
* [Construido con 🛠️](#Construido-con-🛠️)
* [Instalación](#Instalación)
* [Ejemplos de funcionamiento ⚙️](#Ejemplos-de-funcionamiento-⚙️)
    1. [GET products](#GET-products)
    2. [GET products by Name](#GET-products-by-Name)
    3. [GET products by Category](#GET-products-by-Category)
    4. [GET categories](#GET-categories)
* [Explicación del Desafio 🔈](#Explicación-del-Desafio-🔈)

## Construido con 🛠️
1. Entorno de ejecución - Node js
2. Framework - Express
3. Consultas ORM - Sequelize
4. Cliente MySQL - MySQL2
5. Analizador de cuerpo de solicitudes - Body-parser

## Instalación 🔧
1. Instalar Node.js versión 18.6.0.
2. Clonar o descargar este repositorio.
    ```bash
        $ git clone https://github.com/walterarzrey/Desafio_bsale_2022-Backend.git
    ```
3. Instalación de dependencias del proyecto.
    ```bash
        $ npm install
    ```
4. Ejecuta el archivo de inicio
    ```bash
        start: node app.js  // Archivo de inicio
        $ npm start         // Comando de ejecución
    ```

## Ejemplos de funcionamiento ⚙️
### GET products
Obtiene todos los productos
- `GET /products`
#### Parámetros
- page: El número de paginación en la que se lista los productos.
- ordername: Dato por el cual se ordena la lista de productos.
- direction: Dato (Ascendente o Descendente) por el cual se ordena la lista de productos.
#### Ejemplos
- `GET /products?page=1&ordername=id&direction=ASC`
- `GET /products?page=4&ordername=name&direction=ASC`
#### Respuesta
```json
    {
        "message": "Productos listados exitosamente.",
        "products": [
            {
                "id": 5,
                "name": "ENERGETICA MR BIG",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                "price": 1490,
                "discount": 20,
                "category": 1
            },
            {
                "id": 6,
                "name": "ENERGETICA RED BULL",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
                "price": 1490,
                "discount": 0,
                "category": 1
            },
            {
                "id": 7,
                "name": "ENERGETICA SCORE",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
                "price": 1290,
                "discount": 0,
                "category": 1
            },
            {
                "id": 8,
                "name": "PISCO ALTO DEL CARMEN 35º",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
                "price": 7990,
                "discount": 10,
                "category": 2
            },
            {
                "id": 9,
                "name": "PISCO ALTO DEL CARMEN 40º ",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
                "price": 5990,
                "discount": 0,
                "category": 2
            },
            {
                "id": 10,
                "name": "PISCO ARTESANOS 35º ",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
                "price": 3990,
                "discount": 0,
                "category": 2
            },
            {
                "id": 11,
                "name": "PISCO BAUZA 40º ",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bauza408831.jpg",
                "price": 4990,
                "discount": 0,
                "category": 2
            },
            {
                "id": 12,
                "name": "PISCO CAMPANARIO 35º",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario8845.jpg",
                "price": 2990,
                "discount": 20,
                "category": 2
            }
        ],
        "totalProducts": 57,
        "ITEMS_PER_PAGE": 8,
        "page": 1,
        "ordername": "id",
        "direction": "ASC"
    }
```

### GET products by Name
Obtiene todos los productos filtrados por el nombre
- `GET /products`
#### Parámetros
- product_name: El nombre del producto enviado por el cliente desde el frontend.
- page: El número de paginación en la que se lista los productos.
- ordername: Dato por el cual se ordena la lista de productos.
- direction: Dato (Ascendente o Descendente) por el cual se ordena la lista de productos.
#### Ejemplos
- `GET /products?page=1&ordername=name&direction=ASC`
- `GET /products?page=2&ordername=name&direction=DESC`
#### Respuesta
```json
    {
        "message": "Productos listados exitosamente.",
        "products": [
            {
                "id": 55,
                "name": "Papas Fritas Bolsa Pequeña",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
                "price": 500,
                "discount": 0,
                "category": 5
            },
            {
                "id": 54,
                "name": "Papas Fritas Lisas Bolsa Grande",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
                "price": 1490,
                "discount": 0,
                "category": 5
            },
            {
                "id": 56,
                "name": "Papas Fritas Tarro",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
                "price": 1990,
                "discount": 0,
                "category": 5
            }
        ],
        "totalProducts": 3,
        "ITEMS_PER_PAGE": 8,
        "page": 1,
        "ordername": "name",
        "direction": "ASC",
        "product_name": "papas"
    }
```

### GET products by Category
Obtiene todos los productos filtrados por la categoría
- `GET /products:categoryId`
#### Parámetros
- categoryId: El id de categoría seleccionado por el usuario en el frontend.
- page: El número de paginación en la que se lista los productos.
- ordername: Dato por el cual se ordena la lista de productos.
- direction: Dato (Ascendente o Descendente) por el cual se ordena la lista de productos.
#### Ejemplos
- `GET /products/1?page=1&ordername=id&direction=ASC`
- `GET /products/2?page=2&ordername=name&direction=DESC`
#### Respuesta
```json
    {
        "message": "Productos listados exitosamente.",
        "products": [
            {
                "id": 5,
                "name": "ENERGETICA MR BIG",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                "price": 1490,
                "discount": 20,
                "category": 1
            },
            {
                "id": 6,
                "name": "ENERGETICA RED BULL",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
                "price": 1490,
                "discount": 0,
                "category": 1
            },
            {
                "id": 7,
                "name": "ENERGETICA SCORE",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
                "price": 1290,
                "discount": 0,
                "category": 1
            },
            {
                "id": 34,
                "name": "ENERGETICA MONSTER RIPPER",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
                "price": 1990,
                "discount": 0,
                "category": 1
            },
            {
                "id": 35,
                "name": "ENERGETICA MAKKA DRINKS",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
                "price": 1190,
                "discount": 0,
                "category": 1
            },
            {
                "id": 36,
                "name": "ENERGETICA MONSTER VERDE",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",
                "price": 1990,
                "discount": 0,
                "category": 1
            },
            {
                "id": 77,
                "name": "ENERGETICA MONSTER RIPPER",
                "url_image": "",
                "price": 1990,
                "discount": 0,
                "category": 1
            },
            {
                "id": 79,
                "name": "ENERGETICA MONSTER VERDE",
                "url_image": "",
                "price": 1990,
                "discount": 0,
                "category": 1
            }
        ],
        "totalProducts": 8,
        "ITEMS_PER_PAGE": 8,
        "page": 1,
        "ordername": "id",
        "direction": "ASC",
        "categoryId": "1"
    }
```

### GET categories
Obtiene todas las categorías
- `GET /categories`
#### Parámetros
- Sin parámetros.
#### Ejemplos
- `GET /categories`
#### Respuesta
```json
    {
        "message": "Categorias listadas exitosamente.",
        "categories": [
            {
                "id": 1,
                "name": "bebida energetica"
            },
            {
                "id": 2,
                "name": "pisco"
            },
            {
                "id": 3,
                "name": "ron"
            },
            {
                "id": 4,
                "name": "bebida"
            },
            {
                "id": 5,
                "name": "snack"
            },
            {
                "id": 6,
                "name": "cerveza"
            },
            {
                "id": 7,
                "name": "vodka"
            }
        ]
    }
```

## Explicación del Desafio 🔈
API desarrollada con Node.js
### Estructura
Se utilizó la arquitectura MVC para el desarrollo del API del ejercicio, y se estructuro los archivos de la siguiente manera:
- controllers
    - categoryController.js
    - productController.js
- models
    - categoryModel.js
    - productModel.js
- middleware
    - handlers.js
- routers
    - categoryRoutes.js
    - productRoutes.js
- utilities
    - dbConnection.js
- app.js

#### Controllers
Controla y decide como se muestran los datos a través de consultas MySQL, se utilizó [sequelize](https://sequelize.org/master/index.html) para las consultas, que es un ORM que permite evitar **SQL Injections**.
- categoryController.js - Contiene las siguientes funciones:
    1. *getCategories* - Lista todas las categorias en base a los parámetros y retornar la respuesta en formato JSON.
    2. *getCategoryDetail* - Lista una categoría en específico filtrado por su identificador (ID).
- productController.js - Contiene las siguientes funciones:
    1. *getProducts* - Lista todos los productos en base a los parámetros y retornar la respuesta en formato JSON.
    2. *getProductDetail* - Lista un producto en específico filtrado por su identificador (ID).
    3. *getProductsByCategory* - Lista todos los productos filtrados por la categoría y en base a los parámetros, retornar la respuesta en formato JSON.
   
#### Models
Utilizando *sequelize* se creo los siguientes modelos:
 - categoryModel.js - Entidad que contiene los campos y tipos de datos de la tabla category en la base de datos.
 - productModel.js - Entidad que contiene los campos y tipos de datos de la tabla product en la base de datos.

#### Middleware
Contiene el siguiente archivo:
 - handlers.js - Permite manejar configuraciones CORS y errores de servidor.

#### Routers
Contiene los siguientes archivos:
 - categoryRoutes.js - Rutas y métodos HTTP para las categorías.
 - productRoutes.js - Rutas y métodos HTTP para los productos.

#### Utilities
Contiene el siguiente archivo:
 - dbConnection.js - Contiene la configuración para conectarse a la Base de Datos. Utiliza **Variables de Entorno**.

#### App.js
Archivo de inicio que se debe ejecutar para habilitar la API.