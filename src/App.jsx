import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'
import {Toaster} from 'react-hot-toast'
import Produc from './components/Produc'



const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/pedidos" />} />
          <Route path="/pedidos" element={<TaskPage />} />
          <Route path="/pedidos-create" element={<TaskFormPage />} />
          <Route path="/pedidos/:id" element={<TaskFormPage />} />
          <Route path="/products" element={<Produc />} /> {/* Añadir la nueva ruta */}
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;