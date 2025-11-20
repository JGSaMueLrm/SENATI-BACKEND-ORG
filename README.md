# 🤖 Team-Branch-Senati: API REST CRUD de Personas

Este proyecto es una práctica de desarrollo Backend de SENATI, enfocada en la implementación de una API RESTful para la gestión de un recurso (Persona) utilizando las operaciones CRUD y aplicando flujos de trabajo con ramas de Git (git branch).

---

## 📖 Índice

- [Descripción](#-descripción)
- [Objetivos de la Práctica](#-objetivos-de-la-práctica)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Ejecución](#-instalación-y-ejecución)
- [Endpoints de la API](#-endpoints-de-la-api)
- [Manejo de Errores](#️-manejo-de-errores)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Guía de Práctica Git](#-guía-de-práctica-git)
- [Código Fuente](#-código-fuente)
- [Equipo](#-equipo-de-desarrollo)
- [Licencia](#-licencia)

---

## 📝 Descripción

El proyecto consiste en un servidor simple en **Express.js** que expone cuatro rutas para gestionar la información de un listado de personas almacenado en un arreglo de JavaScript (memoria). Es ideal para comprender el ciclo de vida de una API, el uso del protocolo HTTP, y las responsabilidades del middleware de Express.

---

## 🎯 Objetivos de la Práctica

El principal foco de este proyecto grupal es:

- **Backend:** Dominar la creación de rutas `GET`, `POST`, `PUT`, `DELETE` para implementar el CRUD.
- **Pruebas:** Utilizar clientes REST (Hoppscotch, Postman) para probar los endpoints y los códigos de respuesta (`201`, `400`, `404`).
- **Colaboración:** Aplicar el flujo de trabajo de Git con ramas:
  - Crear una rama por funcionalidad (`git checkout -b feature/nombre-ruta`).
  - Realizar commits atómicos.
  - Hacer Pull Requests para integrar el trabajo al `main`.

---

## 📂 Estructura del Proyecto

La estructura del proyecto es mínima, ya que la lógica principal reside en un único archivo JavaScript.

```
Team-Branch-Senati/
│
├── 📄 index.js          # Lógica principal del servidor Express.
├── 📄 package.json      # Dependencias y scripts.
└── 📄 README.md         # Documentación oficial del proyecto.
```

---

## 💻 Instalación y Ejecución

Para iniciar el servidor, sigue los siguientes pasos.

### Requisitos

- **Node.js** (Ambiente de ejecución).
- **Express** (Framework web).

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/TU-USUARIO/Team-Branch-Senati.git
cd Team-Branch-Senati
```

2. **Instalar dependencias:**

```bash
npm install express
```

3. **Ejecutar el servidor:**

```bash
node index.js
```

> El servidor estará disponible en: `http://localhost:3000`

---

## 🧭 Endpoints de la API

La API funciona en `http://localhost:3000`. Recuerda usar el encabezado `Content-Type: application/json` para `POST` y `PUT`.

| Verbo    | Ruta            | Operación CRUD        | Descripción                              | Respuestas HTTP                      |
|----------|-----------------|----------------------|------------------------------------------|--------------------------------------|
| `GET`    | `/personas/`    | Read (Lectura)       | Obtiene toda la lista de personas.       | `200 OK`                             |
| `POST`   | `/personas/new/`| Create (Creación)    | Agrega un nuevo registro de persona.     | `201 Created`, `400 Bad Request`     |
| `PUT`    | `/personas/:id` | Update (Actualización)| Modifica campos de una persona por su ID.| `200 OK`, `400 Bad Request`, `404 Not Found` |
| `DELETE` | `/personas/:id` | Delete (Borrado)     | Elimina un registro por su ID.           | `204 No Content`, `404 Not Found`    |

---

## ⚠️ Manejo de Errores

El código implementa validaciones para asegurar la robustez de la API.

| Error HTTP       | Causa Principal                                                                 | Solución para el Cliente                                                        |
|------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `404 Not Found`  | ID de persona no encontrado en el array.                                        | Verificar que el ID existe (`GET /personas/`).                                  |
| `400 Bad Request`| 1. Campos obligatorios vacíos (`POST`). 2. Cuerpo JSON vacío o malformado (`PUT`).| Enviar todos los campos requeridos y usar `Content-Type: application/json`.     |
| `204 No Content` | Eliminación exitosa (`DELETE`).                                                 | No esperar cuerpo de respuesta.                                                 |

---

## 🛠️ Tecnologías Utilizadas

| Categoría          | Tecnología            | Uso                                              |
|--------------------|-----------------------|--------------------------------------------------|
| Servidor           | Node.js               | Entorno de ejecución principal.                  |
| Framework          | Express.js            | Creación rápida de endpoints y middleware JSON.  |
| Pruebas            | Hoppscotch / Postman  | Simulación de solicitudes HTTP.                  |
| Control Versiones  | Git                   | Gestión de ramas, commits y colaboración grupal. |

---

## 🌳 Guía de Práctica Git

Sigue estos pasos para trabajar en equipo y aplicar el flujo de trabajo de Git.

### Flujo de Trabajo

1. **Sincronizar la Rama Principal:**

```bash
git checkout main
git pull origin main
```

2. **Crear tu Rama de Funcionalidad:**

Cada integrante debe trabajar en una ruta CRUD diferente (e.g., uno para `POST`, otro para `DELETE`).

```bash
git checkout -b feature/implement-delete
# o git checkout -b feature/ruta-post
```

3. **Desarrollo y Commit:**

Escribe el código en `index.js`. Realiza commits con mensajes claros.

```bash
git add index.js
git commit -m "feat: Implementar la ruta DELETE /personas/:id con manejo de 404"
```

4. **Subir Cambios:**

```bash
git push origin feature/implement-delete
```

5. **Revisión y Merge:**

- Abre un **Pull Request** en GitHub desde tu rama a la rama `main`.
- Espera la revisión de un compañero o del instructor antes de hacer el merge.

---

## 📄 Código Fuente

El código fuente principal se encuentra en `index.js`. Se mantiene el código base con las validaciones de errores cruciales.

```javascript
// CONFIGURACIÓN BASE
const express = require("express");
const app = express();
const port = 3000;

// ... (El código completo de la API)
```

---

## 👥 Equipo de Desarrollo

**TEAM-BRANCH-SENATI** - Estudiantes de Backend

### Contribuciones y Roles

- **Integrante 1:** Implementación de `GET` (Lectura) y `POST` (Creación).
- **Integrante 2:** Implementación de `PUT` (Actualización) y manejo de errores `400`.
- **Integrante 3:** Implementación de `DELETE` (Borrado) y setup inicial del proyecto.

### Cómo Contribuir

1. Fork este repositorio.
2. Clona tu fork.
3. Sigue la [Guía de Práctica Git](#-guía-de-práctica-git).
4. Abre un Pull Request para proponer tus mejoras.

---

## 📄 Licencia

Este proyecto de práctica se comparte bajo el Derecho de Autor de SENATI para fines educativos.

> © 2025 SENATI. Todos los derechos reservados.

---

<div align="center">
  <strong>¡A practicar con Git y Express! 🚀</strong>
</div>