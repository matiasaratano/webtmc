import { Footer } from '@/components/ui/footer';

export default function CronogramaPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Cronograma</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Numero</th>
                    <th className="px-4 py-2 border">Docente</th>
                    <th className="px-4 py-2 border">Nombre</th>
                    <th className="px-4 py-2 border">VT</th>
                    <th className="px-4 py-2 border">SM</th>
                    <th className="px-4 py-2 border">ST</th>
                    <th className="px-4 py-2 border">DM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-2 border">1</td><td className="px-4 py-2 border">Marcela Dottario</td><td className="px-4 py-2 border">Construcción de horno de ladrillo de tiro invertido</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">2</td><td className="px-4 py-2 border">Magda Serna</td><td className="px-4 py-2 border">El trencadis de gaudi en el bosque geselino</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">3</td><td className="px-4 py-2 border">Maxi Leis</td><td className="px-4 py-2 border">Modelado de figura humana con modelo vivo desde una mirada anatomica</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">4</td><td className="px-4 py-2 border">Adrian Gonzalez</td><td className="px-4 py-2 border">Raku</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">5</td><td className="px-4 py-2 border">Vivi Gendre</td><td className="px-4 py-2 border">Quimica y poetica de la materia</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">6A</td><td className="px-4 py-2 border">Gloria Rod</td><td className="px-4 py-2 border">Experiencia serigrafica sobre objeto ceramico crudo</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">6B</td><td className="px-4 py-2 border">Gloria Rod</td><td className="px-4 py-2 border">Experiencia serigrafica sobre objeto ceramico crudo</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">6C</td><td className="px-4 py-2 border">Gloria Rod</td><td className="px-4 py-2 border">Experiencia serigrafica sobre objeto ceramico crudo</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">6D</td><td className="px-4 py-2 border">Gloria Rod</td><td className="px-4 py-2 border">Experiencia serigrafica sobre objeto ceramico crudo</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">7A</td><td className="px-4 py-2 border">Myrtha Sirna</td><td className="px-4 py-2 border">El principio del esmalte sobre metal</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">7B</td><td className="px-4 py-2 border">Myrtha Sirna</td><td className="px-4 py-2 border">El principio del esmalte sobre metal</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">8</td><td className="px-4 py-2 border">Caciopea</td><td className="px-4 py-2 border">Clínica de obra: procesos y reflexiones sobre el hacer artístico cerámico</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">9A</td><td className="px-4 py-2 border">Daisy Rocio Linares Chanamé</td><td className="px-4 py-2 border">Iniciación a la moldería cerámica</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">9B</td><td className="px-4 py-2 border">Daisy Rocio Linares Chanamé</td><td className="px-4 py-2 border">Iniciación a la moldería cerámica</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">10</td><td className="px-4 py-2 border">Vero Horak</td><td className="px-4 py-2 border">Articulados</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">11</td><td className="px-4 py-2 border">Maria Cheung</td><td className="px-4 py-2 border">Charla – Una Experiencia Personal del Proceso Creativo</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">12</td><td className="px-4 py-2 border">Laura Ospina - Laura Henao Monsalve</td><td className="px-4 py-2 border">Ceramica sonora inspirada en el arte prehispanico</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">13A</td><td className="px-4 py-2 border">Claudia Camborus</td><td className="px-4 py-2 border">Pensar el hacer, habitar el grupo</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">13B</td><td className="px-4 py-2 border">Claudia Camborus</td><td className="px-4 py-2 border">Pensar el hacer, habitar el grupo</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">14A</td><td className="px-4 py-2 border">Mariano Mungo</td><td className="px-4 py-2 border">Taller intensivo de escultura en torno alfarero</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">14B</td><td className="px-4 py-2 border">Mariano Mungo</td><td className="px-4 py-2 border">Taller intensivo de escultura en torno alfarero</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">15A</td><td className="px-4 py-2 border">Eliana Oliva</td><td className="px-4 py-2 border">La cuerda seca y sus posibilidades</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">15B</td><td className="px-4 py-2 border">Eliana Oliva</td><td className="px-4 py-2 border">La cuerda seca y sus posibilidades</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">16</td><td className="px-4 py-2 border">Karina del Savio</td><td className="px-4 py-2 border">Los lustres de oro sobre el vidrio</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">17</td><td className="px-4 py-2 border">Juanjo Izaguirre</td><td className="px-4 py-2 border">Recuperación de la escultura ´Adolescencia” del Maestro Vicente Puig</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">18</td><td className="px-4 py-2 border">Antonio Paez</td><td className="px-4 py-2 border">Esmaltes cerámicos del pasado</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">19</td><td className="px-4 py-2 border">Karina Neu</td><td className="px-4 py-2 border">Tiffany</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">20</td><td className="px-4 py-2 border">Eduardo Naveira</td><td className="px-4 py-2 border">Cerámica, Vidrio y Caídas Libres Controladas</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">21</td><td className="px-4 py-2 border">Silvia Materyn</td><td className="px-4 py-2 border">Fileteando Juntos</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">22</td><td className="px-4 py-2 border">Escuela del vidrio Berazategui</td><td className="px-4 py-2 border">Reciclado de botellas</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">23</td><td className="px-4 py-2 border">Cuini Chiappero</td><td className="px-4 py-2 border">Dulce fuego</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td></tr>
                  <tr><td className="px-4 py-2 border">25</td><td className="px-4 py-2 border">Laura Rivolta</td><td className="px-4 py-2 border">Vitrofusión</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">26</td><td className="px-4 py-2 border">Ariel Menitti</td><td className="px-4 py-2 border">Grisalla</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">27</td><td className="px-4 py-2 border">Farina Ruiz, Maria Paula</td><td className="px-4 py-2 border">Pintura Medieval para vitrales</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border">X</td></tr>
                  <tr><td className="px-4 py-2 border">28</td><td className="px-4 py-2 border">Karina del Savio</td><td className="px-4 py-2 border">Charla sobre el vidrio</td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border"></td><td className="px-4 py-2 border">X</td><td className="px-4 py-2 border"></td></tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 