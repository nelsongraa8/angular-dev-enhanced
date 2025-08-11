# 🅰️ Angular Dev Enhanced

[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://hub.docker.com/r/<tu-usuario>/angular-dev-enhanced)
[![npm version](https://img.shields.io/npm/v/angular-dev-enhanced)](https://www.npmjs.com/package/angular-dev-enhanced)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> Plantilla profesional de Angular lista para desarrollo, CI/CD y Docker, con las mejores prácticas y herramientas integradas.

---

## ✨ Características

- **Angular** (última versión) con configuración optimizada.
- **Jest** para tests unitarios.
- **Playwright** para tests end-to-end (E2E).
- **Husky + Commitlint** para control de commits estandarizados.
- **ESLint** con reglas estrictas y buenas prácticas.
- **Prettier** para formato de código.
- **Docker** listo para desarrollo y producción.
- **Scripts de automatización** para tareas comunes.
- **Soporte para pnpm** (recomendado) o npm.

---

## 📦 Requisitos

- [Node.js 22+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (recomendado) o npm
- Docker (opcional, recomendado para entornos homogéneos)

---

## 🚀 Instalación

```bash
git clone https://github.com/<tu-usuario>/angular-dev-enhanced.git
cd angular-dev-enhanced
pnpm install
```

---

## 🛠️ Scripts principales

| Comando            | Descripción                                      |
|--------------------|--------------------------------------------------|
| `pnpm start`       | Inicia el servidor de desarrollo con HMR         |
| `pnpm build`       | Compila para producción                          |
| `pnpm test`        | Ejecuta tests unitarios con Jest                 |
| `pnpm test:e2e`    | Ejecuta tests E2E con Playwright                 |
| `pnpm lint`        | Ejecuta ESLint                                   |
| `pnpm format`      | Formatea el código con Prettier                  |
| `pnpm commit`      | Asistente de commit (Commitlint + Husky)         |
| `pnpm docker:dev`  | Entorno Docker para desarrollo                   |
| `pnpm docker:prod` | Construye y levanta el contenedor de producción  |

---

## 🧪 Testing

- **Unitarios (Jest):**
  ```bash
  pnpm test
  ```
- **End-to-End (Playwright):**
  ```bash
  pnpm test:e2e
  ```

---

## 🐳 Docker

- **Desarrollo:**
  ```bash
  pnpm docker:dev
  ```
  Levanta el entorno con hot-reload dentro de un contenedor.

- **Producción:**
  ```bash
  pnpm docker:prod
  ```
  Genera la imagen optimizada para producción.

---

## 🧹 Calidad de código

- **Husky:** Ejecuta hooks en cada commit para garantizar calidad.
- **Commitlint:** Valida mensajes de commit siguiendo Conventional Commits.
- **ESLint y Prettier:** Integrados para estilo y buenas prácticas.

---

## 📂 Estructura recomendada

```plaintext
src/
  app/
    core/          # Servicios, guardas y lógica central
    shared/        # Componentes y utilidades compartidas
    features/      # Módulos de funcionalidades
tests/             # Configuración y utilidades para testing
```

---

## 🤝 Contribuir

1. Haz un fork del repositorio.
2. Crea una rama para tu feature o fix:
   ```bash
   git checkout -b feature/mi-feature
   ```
3. Realiza tus cambios y haz commit siguiendo las reglas de commitlint.
4. Abre un Pull Request.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y adaptarlo libremente.
