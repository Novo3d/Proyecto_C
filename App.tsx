
import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ImagePlaceholder } from './components/ImagePlaceholder';
import { ProfileData } from './types';

// Declare global variables for CDN libraries by augmenting the Window interface
declare global {
  interface Window {
    html2canvas: (element: HTMLElement, options?: any) => Promise<HTMLCanvasElement>;
    jspdf: {
      jsPDF: new (options?: any) => any;
    };
  }
}

const profileData: ProfileData = {
  name: "Sebastián E. Novoa P.",
  title: "Ingeniero en Computación e Informática | Especialista en Transformación Digital, Industria 4.0 y Data Science",
  contact: {
    phone1: "(56) 964112954",
    phone2: "(56) 963175724", 
    email: "info.novo3d@gmail.com",
    linkedin: "linkedin.com/in/sebanovoa",
    linkedinUrl: "https://www.linkedin.com/in/sebanovoa"
// Este es un comentario de prueba
  },
  professionalSummary: "Ingeniero en Computación e Informática con un fuerte espíritu emprendedor y una pasión por los desafíos tecnológicos. Cuento con experiencia en la creación y liderazgo de equipos de trabajo enfocados en el logro de objetivos, evaluación de proyectos, análisis de datos y la implementación de soluciones innovadoras bajo el marco de la Industria 4.0. Recientemente, he apoyado y prestado soporte en procesos de transformación digital, guiando y acompañando a grandes organizaciones en la adopción de tecnologías de Google Workspace para optimizar sus operaciones y automatizar procesos clave. Busco activamente generar oportunidades y aplicar mis conocimientos para impulsar el crecimiento y la eficiencia.",
  workExperience: [
    {
      role: "Analista Google en COLUN - Externo",
      company: "para Tigabytes, Premier Partner de Google",
      period: "Junio 2024 – Actualidad",
      description: "Responsable del acompañamiento integral como nexo presencial en el proceso de implementación y adopción de las herramientas de Google Workspace para COLUN, facilitando el soporte personalizado para la migración exitosa desde su plataforma heredada (Lotus Notes) y asegurando la continuidad operativa.",
      highlights: [
        "Acompañamiento y Gestión del Cambio: Apoyo importante en la estrategia de transición, colaborando en el plan de gestión del cambio para garantizar una alta tasa de adopción por parte de los usuarios y minimizar la resistencia.",
        "Soporte y Entrenamiento Experto: Desarrollé y ejecuté programas de capacitación personalizados para los diversos equipos de COLUN, resolviendo incidencias técnicas y potenciando el uso avanzado de las herramientas de Google.",
        "Innovación y Automatización: Actué como creador de nuevas ideas, proponiendo y desarrollando soluciones para automatizar proyectos y flujos de trabajo mediante el uso de tecnologías como Google Apps Script, Looker Studio y otras herramientas de la nube, mejorando la eficiencia de los procesos internos y escuchando a los equipos para dar soluciones desde el dolor de cada área."
      ]
    },
    {
      role: "Coordinador de Informática",
      company: "Ilustre Municipalidad de Osorno, Esc. Efraín Campana Silva",
      period: "2019 – Junio 2024",
      description: "Apoyo en la planificación, desarrollo e implementación de proyectos tecnológicos para fortalecer el proceso educativo.",
      highlights: [
        "Uso y manejo de nuevos sistemas de información que mejoraron significativamente la comunicación entre docentes y estudiantes.",
        "Organizar y apoyar iniciativas de alto impacto como ferias de ciencia y tecnología, talleres de robótica y programación para alumnos, aplicando metodologías innovadoras como STEM y ABAP."
      ]
    },
    {
      role: "Asesor de Redes Informáticas (Independiente)",
      company: "Switchtel Chile",
      period: "2023 – Junio 2024",
      description: "Proporcioné asesoría técnica especializada en redes informáticas y en la implementación de servicios de videovigilancia con Inteligencia Artificial.",
      highlights: [
        "Gestioné proyectos de digitalización y automatización de negocios en el marco de la Industria 4.0."
      ]
    },
    {
      role: "Comprador Público - Chilecompra",
      company: "D.A.E.M. Osorno y Escuelas Básicas",
      period: "2009 – 2018",
      description: "Fui responsable de la gestión integral de procesos de compras, licitaciones públicas, contratos de suministros y convenios marco para el DAEM de Osorno y sus escuelas.",
      highlights: [
        "Obtuve la acreditación como supervisor y operador avanzado en la plataforma Chilecompra."
      ]
    },
    {
      role: "Encargado de Cobranzas",
      company: "C.S.G. PentaSecurity S.A.",
      period: "2006 – 2008",
      description: "Gestioné las labores administrativas y operativas del departamento de caja y cobranza de la aseguradora.",
      highlights: []
    }
  ],
  education: [
    {
      degree: "Curso de Data Science",
      institution: "Universidad de Chile",
      period: "Marzo 2024 – Abril 2024"
    },
    {
      degree: "Diplomado en Digitalización y Nuevos Negocios, Industria 4.0",
      institution: "Universidad de la Frontera",
      period: "Marzo 2019 – Diciembre 2019"
    },
    {
      degree: "Ingeniero en Computación e Informática",
      institution: "Instituto Profesional La Araucana",
      period: "2009 – 2012"
    }
  ],
  keySkills: [
    "Liderazgo y Gestión de Equipos: Capacidad para dirigir y motivar equipos multidisciplinarios.",
    "Análisis de Datos y Data Science: Interpretación de datos para la toma de decisiones estratégicas.",
    "Gestión de Proyectos TI: Evaluación, planificación y ejecución de proyectos tecnológicos.",
    "Transformación Digital e Industria 4.0: Implementación de tecnologías para la digitalización y automatización.",
    "Resolución de Problemas: Identificación y solución de problemas de manera eficiente."
  ],
  technologies: "Google Workspace (Admin, Apps Script, Looker Studio), Redes Informáticas, Videovigilancia con IA, Chilecompra, Metodologías STEM y ABAP."
};

const App: React.FC = () => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4E03AQHQEktoc9EsMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711674967642?e=1755129600&v=beta&t=JuEt2HYsCaSDPA0zEiZOub1WB7f_riKxb29zd6GirqA";
  const profileAltText = "Foto de Perfil de Sebastián Novoa";
  
  const projectUFROImageUrl = "https://media.licdn.com/dms/image/v2/D4E2DAQEraONOAfP9oQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1685376690621?e=1750190400&v=beta&t=6ymOj6c2CaUlUk1gALKsbiixe0MDAnfQpZd32Zwv3NA";
  const projectUFROImageAltText = "Clases en UFRO Con profesores de excelencia";
  const projectUFROCaption = "Finalización diplomado Negocios digitales e industria 4.0 con el Profesor britanico Erkko Autio en la UFRO";

  const projectColunImageUrl = "https://media.licdn.com/dms/image/v2/D4E22AQGNwcjQsgFpjw/feedshare-shrink_2048_1536/B4EZZi3q_xGYAs-/0/1745415484329?e=1752710400&v=beta&t=Yl7gkLiIpINDipXlUxKPhVun8A_z-NPkI_BWJWS-29E";
  const projectColunImageAltText = "Google Day COLUN";
  const projectColunCaption = "Google Day primera exposición sobre el impacto de Google en COLUN en este proceso de transformación digital finalización estapa de \"Implementación\"";
  
  const projectCorfoImageUrl = "https://media.licdn.com/dms/image/sync/v2/C4D27AQFvzkluCM7xyA/articleshare-shrink_480/articleshare-shrink_480/0/1711674707846?e=1750190400&v=beta&t=CJU7fgsMqeCfEwSN6cuyItdROVQWn7fsX1DZGvvu09M";
  const projectCorfoImageAltText = "Etapa emprendedora Proyecto ganador CORFO";
  const projectCorfoCaption = "Encargado de Gerencia I + D + i en el área de salud proyecto ganado en CORFO";

  const handleDownloadPdf = async () => {
    const loader = document.getElementById('pdf-loader');
    const downloadButton = document.getElementById('download-pdf-button');

    if (loader) loader.style.display = 'inline-block';
    if (downloadButton) (downloadButton as HTMLButtonElement).disabled = true;

    const input = document.getElementById('portfolio-content');
    if (!input) {
      console.error("Element with ID 'portfolio-content' not found.");
      if (loader) loader.style.display = 'none';
      if (downloadButton) (downloadButton as HTMLButtonElement).disabled = false;
      alert("Error: No se encontró el contenido del portafolio.");
      return;
    }

    if (typeof window.html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        console.error("html2canvas or jspdf is not defined. Check CDN links and browser console.");
        alert("Error: Botón no habilitado por este momento.");
        if (loader) loader.style.display = 'none';
        if (downloadButton) (downloadButton as HTMLButtonElement).disabled = false;
        return;
    }
    
    try {
      const canvas = await window.html2canvas(input, {
        scale: 2,
        useCORS: true,
        logging: false, 
        height: input.scrollHeight, 
        windowHeight: input.scrollHeight 
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new window.jspdf.jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: true,
        compress: true 
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfPageWidth = pdf.internal.pageSize.getWidth();
      const pdfPageHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; 
      const effectivePdfWidth = pdfPageWidth - 2 * margin;
      const effectivePdfHeight = pdfPageHeight - 2 * margin;

      const imgScaledWidth = effectivePdfWidth;
      const imgScaledHeight = (imgProps.height * imgScaledWidth) / imgProps.width;

      let positionOnImage = 0; 
      let pageCount = 0;

      while (positionOnImage < imgProps.height) { 
        if (pageCount > 0) {
          pdf.addPage();
        }
        
        const sourceImageY = positionOnImage;
        const sourceImageHeightForPage = Math.min(
          imgProps.height - sourceImageY, 
          (effectivePdfHeight / imgScaledHeight) * imgProps.height 
        );

        if (sourceImageHeightForPage <= 0) break;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = imgProps.width;
        tempCanvas.height = sourceImageHeightForPage;
        const ctx = tempCanvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(canvas, 0, sourceImageY, imgProps.width, sourceImageHeightForPage, 0, 0, imgProps.width, sourceImageHeightForPage);
          const pageImgData = tempCanvas.toDataURL('image/png', 1.0);
          
          const sliceScaledHeight = (tempCanvas.height * effectivePdfWidth) / tempCanvas.width;
          pdf.addImage(pageImgData, 'PNG', margin, margin, effectivePdfWidth, sliceScaledHeight);
        }
        
        positionOnImage += sourceImageHeightForPage;
        pageCount++;
      }
      pdf.save('Sebastian_Novoa_Portfolio.pdf');

    } catch (error) {
      console.error("Error generating PDF: ", error);
      alert("Aplicación no habilitada en este momento");
    } finally {
      if (loader) loader.style.display = 'none';
      if (downloadButton) (downloadButton as HTMLButtonElement).disabled = false;
    }
  };

  return (
    <div id="portfolio-content" className="container mx-auto p-4 md:p-8 max-w-4xl bg-white shadow-xl rounded-lg my-8">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="md:mr-8 mb-4 md:mb-0">
          <img 
            src={profileImageUrl} 
            alt={profileAltText} 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-200 shadow-sm" 
          />
        </div>
        <Header 
          name={profileData.name}
          title={profileData.title}
          contact={profileData.contact}
        />
      </div>

      <Section title="Resumen Profesional" initiallyOpen>
        <p className="text-slate-700 leading-relaxed">{profileData.professionalSummary}</p>
      </Section>

      <Section title="Experiencia Laboral">
        {profileData.workExperience.map((job, index) => (
          <div key={index} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-semibold text-sky-700">{job.role}</h3>
            <p className="text-md font-medium text-slate-600">{job.company}</p>
            <p className="text-sm text-slate-500 mb-2">{job.period}</p>
            <p className="text-slate-700 mb-2 leading-relaxed">{job.description}</p>
            {job.highlights.length > 0 && (
              <>
                <h4 className="font-semibold text-slate-700 mt-2 mb-1">Hitos Destacados:</h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
            {job.company.includes("COLUN") && job.role.includes("Analista Google") && ( 
                <div className="mt-4">
                     <ImagePlaceholder altText={`Imagen de proyecto para ${job.role} en ${job.company}`} className="w-full h-48 rounded-md" />
                </div>
            )}
          </div>
        ))}
      </Section>

      <Section title="Educación y Certificaciones">
        {profileData.education.map((edu, index) => (
          <div key={index} className="mb-4 pb-4 border-b border-slate-200 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-semibold text-sky-700">{edu.degree}</h3>
            <p className="text-md font-medium text-slate-600">{edu.institution}</p>
            <p className="text-sm text-slate-500">{edu.period}</p>
          </div>
        ))}
      </Section>

      <Section title="Habilidades Clave y Tecnologías">
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4 pl-4">
          {profileData.keySkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h4 className="font-semibold text-slate-700 mt-4 mb-1">Tecnologías:</h4>
        <p className="text-slate-700 leading-relaxed">{profileData.technologies}</p>
      </Section>
      
      <Section title="Galería de Proyectos">
        <p className="text-slate-600 mb-4">Aquí se presentan algunas imágenes de la trayectoria profesional.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <img 
                src={projectColunImageUrl} 
                alt={projectColunImageAltText} 
                className="w-full h-48 rounded-md object-cover shadow-md" 
              />
              <p className="text-xs text-slate-600 mt-2 text-center">{projectColunCaption}</p>
            </div>
            <div>
              <img 
                src={projectUFROImageUrl} 
                alt={projectUFROImageAltText} 
                className="w-full h-48 rounded-md object-cover shadow-md" 
              />
              <p className="text-xs text-slate-600 mt-2 text-center">{projectUFROCaption}</p>
            </div>
            <div>
              <img 
                src={projectCorfoImageUrl} 
                alt={projectCorfoImageAltText} 
                className="w-full h-48 rounded-md object-cover shadow-md" 
              />
              <p className="text-xs text-slate-600 mt-2 text-center">{projectCorfoCaption}</p>
            </div>
        </div>
      </Section>

      <footer className="text-center mt-12 py-6 border-t border-slate-200">
        <button
          id="download-pdf-button"
          onClick={handleDownloadPdf}
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200 mb-2 disabled:opacity-50"
          aria-label="Descargar Portafolio en PDF"
        >
          Descargar PDF
        </button>
        <span id="pdf-loader" style={{ display: 'none', marginLeft: '10px' }} className="text-sm text-slate-600 align-middle">
          <i className="fas fa-spinner fa-spin mr-1"></i>Generando...
        </span>
        <p className="text-xs text-slate-500 mt-2">
          (Asegúrese de expandir todas las secciones deseadas antes de descargar para la mejor calidad del PDF, esta opción no se cuenta habilitada por ahora.)
        </p>
        <p className="text-sm text-slate-500 mt-4">
          Portafolio de {profileData.name} | Generado con React, Tailwind CSS y Github
        </p>
      </footer>
    </div>
  );
};

export default App;
