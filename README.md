# 🚀 Prueba Técnica Frontend

Aplicación desarrollada en **React + TypeScript + Vite** que implementa autenticación y gestión de usuarios utilizando **Mock Service Worker (MSW)** para simular un backend.

---

## 📦 Tecnologías utilizadas

* ⚛️ React
* ⚡ Vite
* 🟦 TypeScript
* 🎨 TailwindCSS
* 🔄 React Query (@tanstack/react-query)
* 📋 React Hook Form + Zod
* 🧪 MSW (Mock Service Worker)
* 🌐 Axios

---

## 🔐 Funcionalidades

### ✔ Autenticación

* Login con validación de formulario
* Manejo de sesión con `localStorage`
* Protección de rutas (PrivateRoute)

### ✔ Usuarios

* Consumo de endpoint mock `/api/users`
* Listado de usuarios en dashboard

### ✔ Mock de API

* Implementado con **MSW**
* Endpoints simulados:

  * `POST /api/auth/login`
  * `GET /api/users`

---

## 🧪 Credenciales de acceso

```bash
Usuario: admin
Contraseña: Admin123!
```

---

## ⚙️ Instalación y ejecución

```bash
# Clonar repositorio
git clone <URL_DEL_REPO>

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run dev
```

---

## 🧱 Estructura del proyecto

```bash
src/
  api/            # Configuración de axios
  features/
    auth/         # Login, hooks y servicios
    users/        # Usuarios (API + hooks)
  mocks/          # MSW handlers
  pages/          # Vistas principales
  routes/         # Configuración de rutas
  utils/          # Funciones auxiliares
```

---

## 🧠 Decisiones técnicas

* Se utilizó **MSW** para simular el backend y evitar dependencia de servicios externos.
* Se implementó **React Query** para manejo de estado asíncrono.
* Se estructuró el proyecto por **features** para escalabilidad.
* Validaciones realizadas con **Zod + React Hook Form**.

---

## 🚧 Posibles mejoras

* Implementar paginación en usuarios
* Agregar filtros y búsqueda
* Mejorar UI con componentes reutilizables
* Manejo global de errores
* Tests con Jest / React Testing Library
* mejorar todo :(

---

## 📌 Notas

El proyecto fue desarrollado como parte de una prueba técnica, priorizando:

* Buenas prácticas
* Organización del código
* hice lo mejor que pude para implementar lo que pude sin saber mucho sobre el tema

