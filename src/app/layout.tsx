import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro Progresa HV - Creador de Hoja de Vida Institucional",
  description: "Plataforma institucional para la creación de hojas de vida para prácticas profesionales de UNIMINUTO.",
  icons: {
    icon: "/Centro%20Progresa%20Letras%20Negras%20Iconos%20Blancos%20(sin%20fondo).png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-blue-950 text-slate-100 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
