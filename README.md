<div align="center">

# 🔬 Laboratorio Virtual | I.E. Paulo VI

![Estado](https://img.shields.io/badge/Estado-Activo-success?style=for-the-badge&logo=statuspage)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue?style=for-the-badge&logo=git)
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
Herramientas visuales para geometría y lógica matemática.

| Módulo | Archivo | Descripción | Características Clave |
| :--- | :--- | :--- | :--- |
| **Geometría Básica** | `geometria.html` | Visualizador de relaciones entre rectas. | • Renderizado en Canvas API<br>• Detección de paralelas, perpendiculares y secantes<br>• Interfaz táctil amigable |
| **Sistemas Antiguos** | `sistemas.html` | Conversor y juego de historia matemática. | • Soporte para números Romanos y Mayas<br>• Validador de lógica en tiempo real<br>• Estética histórica inmersiva |
| **Lógica Binaria** | `binario.html` | Introducción al pensamiento computacional. | • Juego de "switches" (encendido/apagado)<br>• Calculadora de edad en binario<br>• Sistema de recompensas (Confeti) |

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
* **Tipografías:** Google Fonts (*Orbitron, Fredoka, Cinzel, Exo 2*).

## 📂 Estructura del Proyecto

```text
Laboratorio_Virtual/
├── index.html          # 🏠 Dashboard principal y menú de navegación
├── binario.html        # 🎮 Juego de sistema binario
├── geometria.html      # 📐 Visualizador de rectas
├── magnitudes.html     # 📏 Conversor de física mecánica
├── ondas.html          # 🌊 Calculadora de ondas
├── sistemas.html       # 🏛️ Juego de números romanos/mayas
└── README.md           # 📄 Documentación del proyecto