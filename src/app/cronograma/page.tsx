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
                  {/* Ejemplo de fila vacía */}
                  <tr>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                  </tr>
                  {/* Agrega más filas según sea necesario */}
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