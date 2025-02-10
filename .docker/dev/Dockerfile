FROM node:lts

WORKDIR /usr/src/app

# Establece el entorno de desarrollo
ENV NODE_ENV=development

# Instala dependencias completas (incluye devDependencies)
COPY . .

# Instala pnpm
RUN npm install -g pnpm

# Añade el directorio global de pnpm al PATH
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Instala las dependencias
RUN pnpm install

# Instala Angular
RUN pnpm add -g @angular/cli@18

# Expone el puerto
EXPOSE 4200

# Corre el servidor en modo desarrollo
CMD ["pnpm", "start"]