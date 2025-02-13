# Usamos una imagen oficial de PHP con Apache
FROM php:8.2-apache

# Instalamos extensiones necesarias para Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar directorio de Laravel
WORKDIR /var/www/html

# Copiar archivos del backend
COPY . .

# Instalar dependencias de Laravel
RUN composer install --no-dev --optimize-autoloader

# Dar permisos a storage y bootstrap
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exponer puerto 8000
EXPOSE 8000

# Iniciar servidor Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000