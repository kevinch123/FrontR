import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createPedido, deletePedido, updatePedido, getPedido } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPedido() {
      if (params.id) {
        const res = await getPedido(params.id);
        setValue('titulo', res.data.titulo);
        setValue('descripcion', res.data.descripcion);
      }
    }
    loadPedido();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updatePedido(params.id, data);
      toast.success('pedido Actualizada')

    } else {
      await createPedido(data);
      toast.success('pedido guardado')
    }
    navigate("/pedidos");
  });

  return (
    <div className='max-w-xl mx-auto '>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("titulo", { required: true })}
          className='bg-zinc-300 p-3 rounded-lg block w-full mb-3'
        />
        {errors.titulo && <span>Campo requerido</span>}
        <textarea
          placeholder="Descripcion"
          {...register("descripcion", { required: true })}
          className='bg-zinc-300 p-3 rounded-lg block w-full mb-3'

        ></textarea>
        {errors.descripcion && <span>Campo requerido</span>}
        
        <button 
        className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        >Save</button>
      </form>
      {params.id && (
        <button 
        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
        onClick={async () => {
          const accepted = window.confirm('¿Estás seguro de eliminar este pedido?');
          if (accepted) {
            await deletePedido(params.id);
            toast.success('pedido eliminado')

            navigate('/pedidos');
          }
        }}>Delete</button>
      )}
    </div>
  );
}
