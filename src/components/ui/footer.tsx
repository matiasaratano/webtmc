export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-50 border-t">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Taller Municipal de Cerámica de Villa Gesell. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 