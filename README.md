# ⚗️ VirtualLab 3.0

**Laboratorio virtual educativo para estudiantes de secundaria**
**I.E. Paulo VI · Huila, Colombia**
**Autor:** Luis Miguel Cabrera (`lumcab`) · Docente de Física y Matemáticas

---

## 📌 ¿Qué es VirtualLab?

VirtualLab es un sitio web educativo estático (HTML + CSS + JS puro, sin frameworks) diseñado para que los estudiantes de grados 6°, 10° y 11° accedan a contenidos de clase desde su **celular**, con una experiencia visual moderna, simulaciones interactivas y quizzes de práctica estilo ICFES.

---

## 🌐 Demo en línea

> **GitHub Pages:** `https://lumcab.github.io/VirtualLab/`
> *(actualizar este enlace al publicar el repositorio)*

---

## 📁 Estructura del proyecto

```
VirtualLab 3.0/
│
├── index.html                    ← Página principal (LISTO ✅)
│
├── css/
│   └── tema-v2.css               ← Sistema visual aprobado (LISTO ✅)
│
├── assets/
│   └── icons/                    ← Favicon e íconos
│
├── fisica10/                     ← Física 10° · Azul/Índigo
│   ├── index.html                ← Portada materia (pendiente)
│   ├── periodo1/
│   │   ├── index.html            ← Índice período (pendiente)
│   │   ├── 1_intro_fisica.html
│   │   ├── 2_magnitudes_vectores.html
│   │   └── 3_cinematica_v2.html  ← MODELO APROBADO ✅
│   ├── periodo2/ … periodo4/
│
├── fisica11/                     ← Física 11° · Violeta/Magenta
│   └── periodo1/ … periodo4/
│
├── matematicas6/                 ← Matemáticas 6° · Ámbar/Naranja
│   └── periodo1/ … periodo4/
│
└── geometria6/                   ← Geometría 6° · Cian/Azul
    └── periodo1/ … periodo4/
```

**Total planificado:** 65 páginas HTML  
**Estado actual:** 3 páginas creadas (index + CSS + modelo Cinemática)

---

## 🎨 Sistema de diseño

Todas las páginas usan `css/tema-v2.css` como base. Cada materia tiene su paleta de colores:

| Materia | Color A | Color B | Color C |
|---|---|---|---|
| Física 10° | `#4361ee` | `#3a0ca3` | `#4cc9f0` |
| Física 11° | `#7209b7` | `#560bad` | `#f72585` |
| Matemáticas 6° | `#f77f00` | `#d62828` | `#fcbf49` |
| Geometría 6° | `#0096c7` | `#0077b6` | `#48cae4` |

---

## 📄 Estructura de cada página de tema

1. Barra de progreso de lectura
2. Navbar con breadcrumbs
3. Hero animado con partículas
4. Teoría con pestañas y botón copiar
5. Tarjetas de fórmulas
6. Simulador canvas interactivo
7. Video YouTube (thumbnail click-to-play, sin abrir nueva pestaña)
8. Simulación PhET embebida
9. Tips + tabla de errores comunes
10. Quiz ICFES — 5 preguntas
11. Navegación anterior / siguiente
12. Footer lumcab

---

## 🚀 Cómo publicar en GitHub Pages

```bash
# 1. Inicializar repositorio (si no existe)
git init
git remote add origin https://github.com/lumcab/VirtualLab.git

# 2. Primer commit
git add .
git commit -m "🚀 VirtualLab 3.0 — Lanzamiento inicial"

# 3. Subir a GitHub
git push -u origin main

# 4. En GitHub → Settings → Pages → Branch: main → / (root)
```

---

## 🗺️ Plan de trabajo

Ver `ESTRUCTURA.md` para el mapa completo de 65 páginas y el estado de cada una.

### Fases
| Fase | Contenido | Estado |
|---|---|---|
| Fase 0 | CSS + index principal | ✅ Listo |
| Fase 1 | 15 páginas Física 10° | ⏳ En curso |
| Fase 2 | 13 páginas Física 11° | ⏳ Pendiente |
| Fase 3 | 16 páginas Matemáticas 6° | ⏳ Pendiente |
| Fase 4 | 12 páginas Geometría 6° | ⏳ Pendiente |

---

## ⚙️ Tecnologías

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Canvas API para simuladores
- IntersectionObserver para animaciones de scroll
- PhET Colorado HTML5 simulations (embed iframe)
- YouTube nocookie embed con patrón thumbnail → click → play
- GitHub Pages para hosting gratuito

---

## 🔗 Recursos externos utilizados

| Recurso | URL |
|---|---|
| PhET Simulations | `phet.colorado.edu` |
| YouTube nocookie | `www.youtube-nocookie.com` |
| Favicon | `assets/icons/` (local) |

---

## 📚 Alineación curricular

Contenidos alineados con:
- **DBA** (Derechos Básicos de Aprendizaje) — MEN Colombia
- **Estándares Básicos de Competencias** en Ciencias Naturales y Matemáticas — MEN Colombia
- Preparación para pruebas **ICFES Saber 11°**

---

*VirtualLab 3.0 · lumcab · I.E. Paulo VI · Huila, Colombia · 2026*
