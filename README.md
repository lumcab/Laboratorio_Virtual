🔬 Laboratorio Virtual - I.E. Paulo VI

Plataforma web interactiva diseñada para el aprendizaje práctico de Matemáticas y Física en la Institución Educativa Paulo VI. Este proyecto ofrece herramientas visuales, simuladores y juegos educativos para estudiantes de grados 6°, 10° y 11°, facilitando la comprensión de conceptos abstractos mediante la tecnología.
📋 Tabla de Contenidos

    Descripción General

    Módulos Disponibles

        Matemáticas (Grado 6°)

        Física (Grado 10°)

        Física (Grado 11°)

    Tecnologías Utilizadas

    Estructura del Proyecto

    Instalación y Uso

    Autor

📖 Descripción General

El Laboratorio Virtual nace como una iniciativa del PRAE y el área de Ciencias Naturales para integrar las TIC en el aula. El objetivo es proporcionar a los estudiantes un entorno seguro y accesible donde puedan experimentar con:

    Conversiones de unidades y sistemas numéricos.

    Visualización de fenómenos físicos (ondas).

    Geometría interactiva.

El proyecto está optimizado para funcionar directamente en el navegador sin necesidad de instalaciones complejas ni bases de datos, lo que facilita su despliegue en las salas de sistemas del colegio o en los dispositivos personales de los estudiantes.
🚀 Módulos Disponibles
Matemáticas (Grado 6°)

    📐 Geometría Básica (geometria.html):

        Visualización interactiva de rectas paralelas, perpendiculares y secantes.

        Uso de Canvas HTML5 para renderizar gráficos dinámicos.

        Explicaciones teóricas integradas.

    🏛️ Sistemas Numéricos Antiguos (sistemas.html):

        Herramientas para aprender y practicar números Romanos y Mayas.

        Minijuegos de construcción de números romanos.

        Representación visual de glifos mayas (puntos, barras, caracoles).

    💻 Sistema Binario (binario.html):

        Calculadora de edad en binario.

        Juego interactivo de conversión decimal-binario con interruptores (switches) visuales.

        Sistema de puntaje y retroalimentación inmediata (confeti).

Física (Grado 10°)

    📏 Magnitudes y Conversiones (magnitudes.html):

        Conversor de unidades en tiempo real.

        Herramienta de notación científica automática.

        Teoría sobre magnitudes fundamentales y derivadas.

Física (Grado 11°)

    🌊 Ondas y Sonido (ondas.html):

        Calculadora de la ecuación de onda (v=λ⋅f).

        Permite despejar variables automáticamente (Velocidad, Frecuencia, Longitud de onda).

        Interfaz estilo "Cyberpunk/Tech" para mayor atractivo visual.

🛠 Tecnologías Utilizadas

El proyecto utiliza un stack tecnológico ligero y moderno ("Vanilla Stack"), ideal para enseñanza web:

    HTML5 Semántico: Estructura base de las páginas.

    Tailwind CSS (v3.4): Framework de estilos utilitario (cargado vía CDN) para un diseño rápido, responsivo y moderno.

    JavaScript (ES6+): Lógica del lado del cliente para interactividad, cálculos y manipulación del DOM.

    FontAwesome: Iconografía para interfaces de usuario intuitivas.

    Google Fonts: Tipografías seleccionadas para cada temática (ej. Cinzel para romanos, Orbitron para física, Fredoka para juegos).

📂 Estructura del Proyecto
Plaintext

Laboratorio_Virtual/
│
├── index.html          # Dashboard principal / Menú de navegación
├── geometria.html      # Módulo de Geometría (6°)
├── sistemas.html       # Módulo de Sistemas Numéricos (6°)
├── binario.html        # Módulo de Sistema Binario (6°)
├── magnitudes.html     # Módulo de Física Mecánica (10°)
├── ondas.html          # Módulo de Ondas (11°)
│
└── README.md           # Documentación del proyecto

💻 Instalación y Uso

Al ser un sitio estático, no requiere servidor backend (Node.js, Python, PHP, etc.).

    Descargar: Clona este repositorio o descarga la carpeta .zip.
    Bash

    git clone https://github.com/tu-usuario/Laboratorio_Virtual.git

    Ejecutar:

        Navega a la carpeta del proyecto.

        Haz doble clic en el archivo index.html.

        El laboratorio se abrirá en tu navegador web predeterminado.

    Requisito: Se necesita conexión a internet la primera vez para cargar las librerías de Tailwind CSS y las fuentes (CDN), a menos que se descarguen localmente.

👨‍🏫 Autor

Desarrollado por lumcab para la I.E. Paulo VI (Huila, Colombia).

    Áreas: Ciencias Naturales, Física y Matemáticas.

    Proyecto: Apoyo tecnológico transversal y PRAE.

Hecho con ❤️ y código para la educación.
