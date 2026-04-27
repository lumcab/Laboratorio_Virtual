# VirtualLab — Estructura y Plan de Trabajo
**Docente:** Luis Miguel Cabrera (lumcab)  
**Institución:** I.E. Paulo VI · Huila, Colombia  
**Año:** 2026 · Diseño v2 aprobado

---

## Convenciones de diseño (NO modificar sin acuerdo)

- **CSS base:** `css/tema-v2.css` — sistema visual aprobado, no reemplazar
- **Tema JS:** `js/theme.js` — toggle oscuro/claro, cargado en `<head>` de todas las páginas
- **Modelo de página de tema:** `fisica10/periodo1/3_cinematica.html`
- **Profundidad 0** (raíz): `href="css/tema-v2.css"` · `src="js/theme.js"`
- **Profundidad 1** (materia): `href="../css/tema-v2.css"` · `src="../js/theme.js"`
- **Profundidad 2** (período/tema): `href="../../css/tema-v2.css"` · `src="../../js/theme.js"`

### Colores por materia
| Materia | --accent-a | --accent-b | --accent-c |
|---|---|---|---|
| Física 10° | `#4361ee` | `#3a0ca3` | `#4cc9f0` |
| Física 11° | `#7209b7` | `#560bad` | `#f72585` |
| Matemáticas 6° | `#f77f00` | `#d62828` | `#fcbf49` |
| Geometría 6° | `#0096c7` | `#0077b6` | `#48cae4` |

### Estructura de cada página de tema
1. `<div id="page-progress">` — barra de progreso de lectura
2. `<nav class="v2-nav">` — navbar con breadcrumbs + logo átomo SVG animado
3. `<section class="v2-hero">` — hero animado con partículas y orbital
4. `<section id="sec-teoria">` — tabs de teoría + botón copiar apuntes
5. `<section id="sec-sim">` — simulador o herramienta interactiva (canvas / JS)
6. `<section id="sec-video">` — video YouTube (thumbnail click-to-play)
7. `<section id="sec-phet">` — simulación PhET embebida (si aplica)
8. `<section id="sec-quiz">` — quiz ICFES 5 preguntas con explicaciones
9. `<footer class="v2-footer">` — pie lumcab

---

## Estado del proyecto

### Infraestructura base
| Archivo | Estado |
|---|---|
| `css/tema-v2.css` | ✅ Completo |
| `js/theme.js` | ✅ Completo |
| `index.html` — Página principal | ✅ Completo |

### Índices de materia
| Archivo | Estado |
|---|---|
| `fisica10/index.html` | ✅ Completo |
| `fisica11/index.html` | ✅ Completo |
| `matematicas6/index.html` | ✅ Completo |
| `geometria6/index.html` | ✅ Completo |

---

### Física 10° — Período 1 · Mecánica básica
| Archivo | Tema | Estado |
|---|---|---|
| `fisica10/periodo1/index.html` | Índice período | ✅ Completo |
| `fisica10/periodo1/1_intro_fisica.html` | Introducción a la física | ✅ Completo |
| `fisica10/periodo1/2_magnitudes_vectores.html` | Magnitudes, unidades y vectores | ✅ Completo |
| `fisica10/periodo1/3_cinematica.html` | Cinemática MRU/MRUV | ✅ Completo · modelo aprobado |

### Física 10° — Período 2 · Fuerzas y energía
| Archivo | Tema | Estado |
|---|---|---|
| `fisica10/periodo2/index.html` | Índice período | ✅ Completo |
| `fisica10/periodo2/1_dinamica_equilibrio.html` | Dinámica y Equilibrio | ✅ Completo |
| `fisica10/periodo2/2_trabajo_energia.html` | Trabajo y energía | ✅ Completo |
| `fisica10/periodo2/3_impulso_gravitacion.html` | Impulso y gravitación | ✅ Completo |

### Física 10° — Período 3 · Mecánica de fluidos
| Archivo | Tema | Estado |
|---|---|---|
| `fisica10/periodo3/index.html` | Índice período | ✅ Completo |
| `fisica10/periodo3/1_hidrostatica.html` | Hidrostática | ✅ Completo |
| `fisica10/periodo3/2_hidrodinamica.html` | Hidrodinámica | ✅ Completo |
| `fisica10/periodo3/3_bernoulli.html` | Ecuación de Bernoulli | ✅ Completo |

### Física 10° — Período 4 · Temperatura y calor
| Archivo | Tema | Estado |
|---|---|---|
| `fisica10/periodo4/index.html` | Índice período | ✅ Completo |
| `fisica10/periodo4/1_temperatura_calor.html` | Temperatura y calor | ✅ Completo |
| `fisica10/periodo4/2_termodinamica.html` | Termodinámica | ✅ Completo |

---

### Física 11° — Período 1 · Movimiento y ondas
| Archivo | Tema | Estado |
|---|---|---|
| `fisica11/periodo1/index.html` | Índice período | ✅ Completo |
| `fisica11/periodo1/1_mas.html` | Movimiento armónico simple | ✅ Completo |
| `fisica11/periodo1/2_ondas_sonido.html` | Ondas y sonido | ✅ Completo |
| `fisica11/periodo1/3_sismica.html` | Sísmica y ondas sísmicas | ✅ Completo |

### Física 11° — Período 2 · Óptica
| Archivo | Tema | Estado |
|---|---|---|
| `fisica11/periodo2/index.html` | Índice período | ✅ Completo |
| `fisica11/periodo2/1_optica_naturaleza.html` | Naturaleza de la luz | ✅ Completo |
| `fisica11/periodo2/2_refraccion_instrumentos.html` | Refracción e instrumentos ópticos | ✅ Completo |

### Física 11° — Período 3 · Electricidad
| Archivo | Tema | Estado |
|---|---|---|
| `fisica11/periodo3/index.html` | Índice período | ✅ Completo |
| `fisica11/periodo3/1_electrostatica.html` | Electrostática | ⬜ Pendiente |
| `fisica11/periodo3/2_electrodinamica.html` | Electrodinámica | ⬜ Pendiente |

### Física 11° — Período 4 · Magnetismo
| Archivo | Tema | Estado |
|---|---|---|
| `fisica11/periodo4/index.html` | Índice período | ✅ Completo |
| `fisica11/periodo4/1_magnetismo.html` | Magnetismo | ⬜ Pendiente |
| `fisica11/periodo4/2_electromagnetismo.html` | Electromagnetismo | ⬜ Pendiente |

---

### Matemáticas 6° — Período 1 · Numeración y estadística
| Archivo | Tema | Estado |
|---|---|---|
| `matematicas6/periodo1/index.html` | Índice período | ✅ Completo |
| `matematicas6/periodo1/1_sistemas_numeracion.html` | Sistemas de numeración | ⬜ Pendiente |
| `matematicas6/periodo1/2_ecuaciones_inecuaciones.html` | Ecuaciones e inecuaciones | ⬜ Pendiente |
| `matematicas6/periodo1/3_estadistica_intro.html` | Introducción a la estadística | ⬜ Pendiente |

### Matemáticas 6° — Período 2 · Aritmética
| Archivo | Tema | Estado |
|---|---|---|
| `matematicas6/periodo2/index.html` | Índice período | ✅ Completo |
| `matematicas6/periodo2/1_multiplos_divisores.html` | Múltiplos y divisores | ⬜ Pendiente |
| `matematicas6/periodo2/2_factores_primos.html` | Factores primos | ⬜ Pendiente |
| `matematicas6/periodo2/3_mcm_mcd.html` | MCM y MCD | ⬜ Pendiente |
| `matematicas6/periodo2/4_tablas_graficos.html` | Tablas y gráficos | ⬜ Pendiente |

### Matemáticas 6° — Período 3 · Fracciones y estadística
| Archivo | Tema | Estado |
|---|---|---|
| `matematicas6/periodo3/index.html` | Índice período | ✅ Completo |
| `matematicas6/periodo3/1_fracciones.html` | Fracciones | ⬜ Pendiente |
| `matematicas6/periodo3/2_estadistica_aleatoria.html` | Estadística y aleatoriedad | ⬜ Pendiente |

### Matemáticas 6° — Período 4 · Decimales y probabilidad
| Archivo | Tema | Estado |
|---|---|---|
| `matematicas6/periodo4/index.html` | Índice período | ✅ Completo |
| `matematicas6/periodo4/1_decimales.html` | Números decimales | ⬜ Pendiente |
| `matematicas6/periodo4/2_razones_porcentajes.html` | Razones y porcentajes | ⬜ Pendiente |
| `matematicas6/periodo4/3_probabilidad_conjuntos.html` | Probabilidad y conjuntos | ⬜ Pendiente |

---

### Geometría 6° — Período 1 · Conceptos básicos
| Archivo | Tema | Estado |
|---|---|---|
| `geometria6/periodo1/index.html` | Índice período | ✅ Completo |
| `geometria6/periodo1/1_conceptos_basicos.html` | Conceptos básicos de geometría | ⬜ Pendiente |
| `geometria6/periodo1/2_construccion_rectas.html` | Construcción de rectas | ⬜ Pendiente |

### Geometría 6° — Período 2 · Ángulos
| Archivo | Tema | Estado |
|---|---|---|
| `geometria6/periodo2/index.html` | Índice período | ✅ Completo |
| `geometria6/periodo2/1_angulos_conceptos.html` | Conceptos y clasificación de ángulos | ⬜ Pendiente |
| `geometria6/periodo2/2_construccion_angulos.html` | Construcción de ángulos | ⬜ Pendiente |

### Geometría 6° — Período 3 · Plano cartesiano y polígonos
| Archivo | Tema | Estado |
|---|---|---|
| `geometria6/periodo3/index.html` | Índice período | ✅ Completo |
| `geometria6/periodo3/1_plano_cartesiano.html` | Plano cartesiano | ⬜ Pendiente |
| `geometria6/periodo3/2_poligonos.html` | Polígonos | ⬜ Pendiente |

### Geometría 6° — Período 4 · Transformaciones geométricas
| Archivo | Tema | Estado |
|---|---|---|
| `geometria6/periodo4/index.html` | Índice período | ✅ Completo |
| `geometria6/periodo4/1_transformaciones_intro.html` | Transformaciones geométricas | ⬜ Pendiente |
| `geometria6/periodo4/2_transformaciones_lineales.html` | Semejanza y escala | ⬜ Pendiente |

---

## Resumen de avance

| Materia | Completadas | Total temas | Progreso |
|---|---|---|---|
| Infraestructura | 7 | 7 | 100% |
| Física 10° | 11 | 11 | 100% |
| Física 11° | 3 | 9 | 33% |
| Matemáticas 6° | 0 | 12 | 0% |
| Geometría 6° | 0 | 8 | 0% |
| **Total** | **21** | **47** | **45%** |

---

## Videos de YouTube por tema

| Materia | Tema | Video ID | Estado |
|---|---|---|---|
| Física 10° | Introducción a la física | `itQgerXdwWw` | ✅ Verificado |
| Física 10° | Magnitudes y vectores | `UdY3UitGre4` | ✅ Verificado |
| Física 10° | Cinemática MRU/MRUV | `yn8iJVmpu_E` | ✅ Verificado |
| Física 10° | Dinámica y equilibrio | `iqqI9oluBIw` | ✅ Verificado |
| Física 10° | Trabajo y energía | `1Bc9wH6lk74` | ✅ Verificado |
| Física 10° | Impulso y gravitación | `B3Xs4XpR3vU` | ✅ Verificado |
| Física 10° | Hidrostática | `f7FL-1vsw3M` | ✅ Verificado |
| Física 10° | Hidrodinámica | `hHEd6rfc6xg` | ✅ Verificado |
| Física 10° | Ecuación de Bernoulli | `t0dOLZXkpV4` | ✅ Verificado |
| Física 10° | Temperatura y calor | `RDOnnSdB7n8` | ✅ Verificado |
| Física 10° | Termodinámica | `Z6JGLOWXkg4` | ✅ Verificado |
| Física 11° | Movimiento armónico simple | `Np9r--W-Kgg` | ✅ Verificado |
| Física 11° | Ondas y sonido | `_D7zaQN-M6Y` | ✅ Verificado |
| Física 11° | Sísmica y ondas sísmicas | `5PKXzvkEQJg` | ✅ Verificado |

> **Nota:** Todos los videos son grabaciones del propio docente (canal lumcab). Nunca reemplazar IDs existentes. Miniatura: `hqdefault.jpg` con fallback `mqdefault.jpg`.

---

## Simulaciones PhET por tema

| Tema | URL embed |
|---|---|
| Cinemática / Proyectil | `phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_es.html` |
| Fuerzas y movimiento | `phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html` |
| Energía | `phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_es.html` |
| Presión y fluidos | `phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html` |
| Ondas y sonido | `phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_es.html` |
| Electricidad | `phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_es.html` |
| Magnetismo | `phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_es.html` |
| Fracciones | `phet.colorado.edu/sims/html/fractions-intro/latest/fractions-intro_es.html` |
| Geometría / Área | `phet.colorado.edu/sims/html/area-builder/latest/area-builder_es.html` |

---

## Cómo retomar trabajo en una nueva sesión

1. Abrir este archivo `ESTRUCTURA.md`
2. Identificar la siguiente fila con estado ⬜ Pendiente
3. Leer el modelo: `fisica10/periodo1/3_cinematica.html`
4. Crear la página siguiendo exactamente la misma estructura y colores de la materia
5. Marcar la fila como ✅ Completo en este archivo

---

*VirtualLab 2026 · lumcab · I.E. Paulo VI · Huila, Colombia*
