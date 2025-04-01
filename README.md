## 🛠️ REQUISITOS PREVIOS
Herramientas utilizadas:

- IDE utilizado: 
    - Backend: Intellij
    - Front-End: Visual Studio Code 
- Version de lenguaje utilizado:
    - Backend: Java 21
    - Front-End: Node v20.12.2 - Angular v19
    - DBMS: MySQL 8.0

Antes de iniciar, asegurate de tener intalado

- Docker 4.37.0
- Docker compose v1
- MySQL (si no usas Docker para la base de datos)


## 📦 INSTALACION

1. Clona el repositorio:
``` bash
  git clone  https://github.com/Joalink/inventory-management
```
## 🏗️ CONSTRUCCION Y EJECUCION CON DOCKER

Para levantar los servicios con Docker Compose, usa:
``` bash
  docker-compose up --build 
```

Esto ejecutara la API en ``` http://127.0.0.1:8000``` y luego levantara los servicios necesarios (como MySQL si esta en  ```docker-compose.yml```).

Para correr en segundo plano:
``` bash 
  docker-compose up -d
```

para detener los contenedores:
``` bash
  docker-compose down
```
Para ejecutar la appliacion de Frontend, ir a la siguiente ruta dentro del projecto:

👉 [src/main/webapp/inventory-management](src/main/webapp/inventory-management)

y ejecutar el siguiente comando para correr la applicacion de frontend:

``` bash
  ng serve
```
## 👤 Usuarios de Prueba

- ADMIN:
    - admin@gmail.com
    - 123456AC

- USER:
    - user@gmail.com
    - 3467Acba

## 📌 Colección de Postman

Para importar la colección en Postman:

1. Descarga el archivo JSON de la colección desde este repositorio:  

   👉 [InventoryManagement.postman_collection.json](src/main/resources/postman/InventoryManagement.postman_collection.json)
2. Abre **Postman**.

3. Ve a `File` > `Import` y selecciona el archivo descargado.

