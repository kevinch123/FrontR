import { useNavigate } from "react-router-dom";

export function TaskCard({ pedido }) {
    const navigate= useNavigate()
    return (
        <div className="bg-zinc-300 p-3 hover:bg-zinc-700"
        
            onClick={()=>{
                navigate(`/pedidos/${pedido.id}`)

            }}
        >
            <h1 className="font-bold uppercase ">{pedido.titulo}</h1>
            <p className="text-slate-800">{pedido.descripcion}</p>
            <hr></hr>
        </div>
    );
}
