# 🚀 Curso Completo de Desarrollo Web Moderno

Un curso interactivo y progresivo de desarrollo web desde cero hasta nivel experto, construido con **Astro**, **React** y **Tailwind CSS**.

## ✨ Características

- **13 Módulos Progresivos**: Desde fundamentos hasta conceptos expertos
- **50+ Ejercicios Prácticos**: Aprende haciendo
- **Demostraciones Interactivas**: Flexbox, CSS Grid, y más
- **CodeBlock Especializado**: Muestra código sin ejecutarlo
- **Tema Oscuro/Claro**: Cambio suave entre modos
- **100% Responsive**: Optimizado para todos los dispositivos
- **Arquitectura de Islas**: Carga solo JavaScript necesario
- **TypeScript**: Tipado en todo el proyecto

## 📚 Estructura del Curso

### 🌱 Fundamentos
1. **Fundamentos de Programación** - Conceptos básicos, DOM, APIs
2. **HTML desde Cero** - Estructura, semántica, formularios
3. **CSS + Responsive** - Flexbox, Grid, animaciones
4. **JavaScript Básico-Intermedio** - Eventos, DOM, Async/Await

### 🚀 Intermedio
5. **JavaScript Avanzado** - Closures, Event Loop, patrones
6. **Astro 0→Experto** - El framework principal del curso
7. **React Islands** - Integración de React en Astro
8. **TypeScript** - Tipado estático en tus proyectos

### 🏆 Avanzado
9. **Performance y SEO** - Core Web Vitals, optimización
10. **Metodologías Profesionales** - Arquitectura, Git workflow
11. **Ejercicios Prácticos** - Proyectos guiados por módulo
12. **Proyecto Final** - Portfolio premium completo
13. **Recursos y Carrera** - Herramientas, portfolios, tips

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** v5.16.4 - Framework principal
- **[React](https://react.dev/)** 18+ - Componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Lucide Icons](https://lucide.dev/)** - Iconos modernos

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>

# Entrar al directorio
cd AstroClaseUXnicorp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Compilar para producción
npm run preview      # Vista previa de build

# Utilidades
npm run astro        # CLI de Astro
```

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── CodeBlock.tsx        # Mostrar código
│   │   ├── FlexboxDemo.tsx      # Demo interactivo
│   │   ├── GridDemo.tsx         # Demo interactivo
│   │   ├── Navbar.astro         # Navegación
│   │   ├── Sidebar.astro        # Menú lateral
│   │   ├── Footer.astro         # Pie de página
│   │   └── ThemeToggle.tsx      # Toggle dark/light
│   ├── layouts/         # Plantillas de página
│   │   ├── BaseLayout.astro     # Layout base
│   │   └── CourseLayout.astro   # Layout del curso
│   ├── pages/           # Rutas del sitio
│   │   ├── index.astro          # Página principal
│   │   ├── ejercicios.astro     # Hub de ejercicios
│   │   ├── recursos.astro       # Recursos externos
│   │   ├── proyecto-final.astro # Proyecto final
│   │   └── curso/               # Módulos del curso
│   │       ├── fundamentos.astro
│   │       ├── html.astro
│   │       ├── css.astro
│   │       ├── javascript.astro
│   │       ├── javascript-avanzado.astro
│   │       ├── astro.astro
│   │       ├── react-islands.astro
│   │       ├── typescript.astro
│   │       ├── performance.astro
│   │       └── metodologias.astro
│   └── styles/          # Estilos globales
│       └── global.css
├── astro.config.mjs     # Config de Astro
├── tailwind.config.js   # Config de Tailwind
└── tsconfig.json        # Config de TypeScript
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🎨 Componentes Destacados

### CodeBlock
Componente especializado para mostrar código sin ejecutarlo:

```tsx
<CodeBlock 
  code={`const ejemplo = "Hola Mundo";`}
  language="javascript"
  filename="ejemplo.js"
  client:load
/>
```

**Características:**
- Syntax highlighting
- Números de línea
- Botón copiar
- Badge de lenguaje
- Sin ejecución de código

### FlexboxDemo & GridDemo
Demos interactivos para aprender CSS:

```tsx
<FlexboxDemo client:visible />
<GridDemo client:visible />
```

**Características:**
- Controles en tiempo real
- Preview visual
- Código CSS generado
- Responsive

## 🌙 Tema Oscuro

El proyecto incluye un sistema completo de temas:

- **Variables CSS** para colores consistentes
- **localStorage** para persistencia
- **Transiciones suaves** entre temas
- **Respeta preferencias del sistema**

## 🚀 Deployment en Vercel

### Deploy Rápido

1. Push a GitHub
2. Importa en [Vercel](https://vercel.com)
3. Vercel detecta Astro automáticamente
4. Deploy ✅

### Variables de Entorno

Si usas APIs o servicios externos, configura en Vercel:

```env
PUBLIC_API_URL=https://api.ejemplo.com
```

## 📈 Próximos Pasos

El proyecto está **completamente funcional** con:
- ✅ 4 módulos completos y detallados
- ✅ 1 módulo experto de Astro (el más importante)
- ✅ 5 módulos con estructura base para expandir
- ✅ Sistema de ejercicios prácticos
- ✅ Guía de proyecto final
- ✅ Recursos y consejos profesionales

### Para Expandir:

1. **Contenido Adicional**: Ampliar módulos 5, 7, 8, 9, 10 con más ejemplos
2. **Cheatsheets Descargables**: PDFs para cada módulo
3. **Más Demos Interactivos**: Event loop visualizer, TypeScript playground
4. **Blog/MDX**: Integrar Content Collections para artículos
5. **Gamificación**: Sistema de progreso y badges

## 🎓 Filosofía del Curso

Este curso está diseñado para:

- **Aprender haciendo**: Cada concepto tiene ejemplos prácticos
- **Progresión natural**: Desde cero hasta experto sin saltos
- **Tecnología moderna**: Enfoque en herramientas actuales del mercado
- **Código limpio**: Mejores prácticas desde el inicio
- **Proyectos reales**: Ejercicios que construyes y publicas

## 🤝 Contribuir

¿Ideas para mejorar el curso? ¡Contribuye!

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/MejoraCurso`)
3. Commit cambios (`git commit -m 'Agrega nuevo módulo'`)
4. Push a la rama (`git push origin feature/MejoraCurso`)
5. Abre un Pull Request

## 📝 Licencia

Proyecto educativo para **UXnicorp**. 

## 💬 Soporte

¿Preguntas o sugerencias?

- Abre un Issue en GitHub
- Contacta al equipo de UXnicorp

---

**Construido con ❤️ usando Astro + React + Tailwind CSS**

*De cero a experto, un módulo a la vez* 🚀
