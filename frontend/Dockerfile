# Usamos Node.js 18 como base
FROM node:18

# Configurar directorio de trabajo
WORKDIR /app

# Copiar archivos del frontend
COPY package.json ./
COPY package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto 3000
EXPOSE 3000

# Iniciar React
CMD ["npm", "start"]