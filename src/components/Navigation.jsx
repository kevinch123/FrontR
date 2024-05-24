import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/pedidos">
        <h1 className="font-bold text-3xl mb-4">Pedidos Embutidos Cielo</h1>
      </Link>

      <div className="space-x-4">
        <Link to="/pedidos-create" className="bg-indigo-500 px-3 py-2 rounded-lg text-white">
          Crear Pedido
        </Link>

        <Link to="/products" className="bg-green-500 px-3 py-2 rounded-lg text-white">
          Ver Productos
        </Link>
      </div>
    </div>
  );
}
