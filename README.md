<div align="center">

# 🔬 Laboratorio Virtual | I.E. Paulo VI

![Estado](https://img.shields.io/badge/Estado-Activo-success?style=for-the-badge&logo=statuspage)
![Versión](https://img.shields.io/badge/Versión-1.1.0-blue?style=for-the-badge&logo=git)
![Licencia](https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge&logo=open-source-initiative)
![Tech](https://img.shields.io/badge/Tech-HTML5_|_Tailwind-38bdf8?style=for-the-badge&logo=tailwindcss)

**Plataforma interactiva para la enseñanza de Matemáticas y Física mediante simulaciones y juegos.**

[Ver Demo (GitHub Pages)]() · [Reportar un Bug]() · [Solicitar Función]()

</div>

---

## 📋 Descripción

El **Laboratorio Virtual** es una suite de herramientas educativas web desarrollada para los estudiantes de la **Institución Educativa Paulo VI**. Este proyecto busca modernizar el aprendizaje en el aula mediante la gamificación y la visualización interactiva de conceptos abstractos.

El sistema es **ligero, modular y no requiere instalación**, diseñado específicamente para funcionar en equipos con recursos limitados o directamente en los dispositivos móviles de los estudiantes.

## 🚀 Módulos Académicos

### 📐 Matemáticas (Grado 6°)
Herramientas visuales para geometría, historia de los números y lógica computacional.

| Módulo | Archivo | Descripción | Características Clave |
| :--- | :--- | :--- | :--- |
| **Sistemas y Binario** | `matematicas6.html` | **(NUEVO)** Suite unificada de sistemas numéricos. | • **Historia:** Números Romanos y Mayas<br>• **Lógica:** Juego de interruptores binarios<br>• **Utilidad:** Calculadora de edad en binario<br>• Sistema de puntajes y recompensas |
| **Geometría Básica** | `geometria.html` | Visualizador de relaciones entre rectas. | • Renderizado en Canvas API<br>• Detección de paralelas, perpendiculares y secantes<br>• Interfaz táctil amigable |

### ⚛️ Física (Grados 10° y 11°)
Simuladores para fenómenos físicos y cálculo de variables.

| Módulo | Archivo | Descripción | Características Clave |
| :--- | :--- | :--- | :--- |
| **Magnitudes (10°)** | `magnitudes.html` | Herramienta de conversión y notación. | • Notación científica automática ($A \times 10^n$)<br>• Conversión de unidades fundamentales<br>• Diseño "Glassmorphism" |
| **Ondas y Sonido (11°)** | `ondas.html` | Calculadora de ecuaciones de onda. | • Despeje automático de fórmula ($v = \lambda \cdot f$)<br>• Interfaz estilo "Cyberpunk"<br>• Validación física de datos |

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack **"Vanilla"** (sin frameworks pesados) para garantizar la máxima compatibilidad y facilidad de edición.

* **Estructura:** HTML5 Semántico.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (vía CDN) para un diseño rápido y responsivo.
* **Lógica:** JavaScript (ES6+) nativo.
* **Iconografía:** [FontAwesome 6](https://fontawesome.com/).
* **Tipografías:** Google Fonts (*Cinzel, Fredoka, Orbitron, Share Tech Mono*).

## 📂 Estructura del Proyecto

```text
Laboratorio_Virtual/
│
├── index.html          # 🏠 Dashboard principal y menú de navegación
├── geometria.html      # 📐 Módulo de Geometría (6°)
├── matematicas6.html   # 🔢 Módulo Unificado: Sistemas Numéricos y Binario (6°)
├── magnitudes.html     # 📏 Conversor de Física Mecánica (10°)
├── ondas.html          # 🌊 Calculadora de Ondas (11°)
├── LICENSE             # ⚖️ Archivo de Licencia MIT
└── README.md           # 📄 Documentación del proyecto