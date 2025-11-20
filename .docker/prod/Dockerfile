# =================================================================
# ETAPA 1: BUILDER - Compila la aplicación de Angular
# =================================================================
# Usamos una imagen de Node 20 basada en Alpine Linux por su ligereza
FROM node:24-alpine AS builder

# Habilitamos corepack para poder usar pnpm (incluido en Node.js)
# Habilita pnpm
RUN corepack enable

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json para cachear las dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos las dependencias del proyecto usando pnpm
RUN pnpm install

# Copiamos el resto del código fuente de la aplicación
COPY . .

# ¡IMPORTANTE! Asegúrate de que el script 'build:prod' esté definido en tu package.json
# Compilamos la aplicación para producción.
# El output se generará en /app/dist/tu-proyecto-angular/browser
RUN pnpm build:prod





# =================================================================
# ETAPA 2: RUNNER - Sirve la aplicación con Nginx
# =================================================================
# Usamos una imagen de Nginx estable y ligera basada en Alpine
FROM nginx:stable-alpine

# Copiamos la configuración personalizada de Nginx
COPY ./.docker/prod/config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# ¡IMPORTANTE! Reemplaza 'tu-proyecto-angular' con el nombre de tu proyecto
# que aparece en la carpeta 'dist' después de compilar.
# Copiamos los artefactos de build de la etapa anterior al directorio web de Nginx
COPY --from=builder /app/dist/angular-dev-enhanced/browser /usr/share/nginx/html

# Exponemos el puerto 80, que es el puerto por defecto de Nginx
EXPOSE 80

# El comando por defecto de la imagen de Nginx ya inicia el servidor,
# por lo que no es necesario un CMD explícito.
