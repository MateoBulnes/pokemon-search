# 🕵️‍♂️ Buscador de Pokémon

## 📌 Descripción
Esta es una aplicación web que permite buscar Pokémon por nombre parcial utilizando la API de [PokeAPI](https://pokeapi.co/). 
El proyecto está desarrollado con **React.js** para el frontend y **Laravel** para el backend, y se ejecuta en contenedores Docker para facilitar su despliegue.

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local.

### 🔹 **1. Clonar el repositorio**
```sh
git clone https://github.com/tu-usuario/buscador-pokemon.git
cd buscador-pokemon
```

### 🔹 **2. Configurar el backend (Laravel)**
```sh
cd backend
cp .env.example .env
composer install
php artisan key:generate
```

Si estás usando SQLite, crea la base de datos:
```sh
touch database/database.sqlite
php artisan migrate --seed
```

---

### 🔹 **3. Configurar el frontend (React.js)**
```sh
cd ../frontend
cp .env.example .env
npm install
```

---

### 🔹 **4. Configurar Docker y levantar la aplicación**
Ejecuta el siguiente comando en la raíz del proyecto:
```sh
docker-compose up --build
```

Esto construirá y ejecutará los contenedores del backend y frontend.

---

## 🚀 Uso de la Aplicación

Una vez que la aplicación esté corriendo, accede a:
- **Frontend (React.js)**: [`http://localhost:3000`](http://localhost:3000)
- **Backend (Laravel API)**: [`http://localhost:8000`](http://localhost:8000)

Para detener los contenedores:
```sh
docker-compose down
```

---

## 🛠 Tecnologías utilizadas
- **Frontend**: React.js + Vite
- **Backend**: Laravel 10
- **Base de Datos**: SQLite
- **Docker**: Para la contenedorización
- **PokeAPI**: API de Pokémon

---

## 📌 Notas adicionales
- Asegúrate de tener **Docker y Docker Compose** instalados en tu sistema.
- En caso de errores, revisa los logs con:
  ```sh
  docker-compose logs -f
  ```
- Para reconstruir los contenedores completamente:
  ```sh
  docker-compose down --volumes --rmi all
  ```

---

## 📄 Licencia
Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir y mejorar! 🎉
