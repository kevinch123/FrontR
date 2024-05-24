import { useEffect,useState } from "react"
import { getAllTasks } from "../api/task.api"
import { TaskCard } from "./TaskCard";

export function TaskList() {
    const[pedidos,setPedidos]=useState([]);
    useEffect(()=>{     
        async function loadTasks(){
            const res = await getAllTasks()
            setPedidos(res.data);
            
        }
        loadTasks();

      },[])
  return (      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {pedidos.map(pedido =>(
            <TaskCard key={pedido.id} pedido={pedido}/>

        ))}
    </div>
  )
}
