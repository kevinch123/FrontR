import axios from 'axios';

const pedidoApi = axios.create({
    baseURL: 'embutidosr.azurewebsites.net/pedidos/api/v1/pedidos/'
});

export const getAllTasks = () => {
    return pedidoApi.get('/');
}

export const getPedido = (id) => pedidoApi.get(`/${id}`)

export const createPedido = (pedido) => {
    return pedidoApi.post('/', pedido, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const deletePedido = (id) => {
    return pedidoApi.delete(`/${id}`);
}

export const updatePedido = (id, pedido) => pedidoApi.put(`/${id}/`, pedido);
