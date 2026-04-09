import GlobalStyle from "../components/common/styles/global-style"
import Layout from '../components/common/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '../contexts/CartContext'
import { ToastProvider } from '../contexts/ToastContext'
import MenuProvider from "../contexts/MenuContext"
// data
import dataRoutes from './dataRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <ToastProvider>
            <GlobalStyle />
            <Layout>
              <Routes>
                {dataRoutes.map((item) => {
                  const { id, path, pageComponent: Component } = item;
                  return <Route key={id} path={path} element={<Component />} />
                })}

                <Route path='*' element={<h1>404 - Not found</h1>} />
              </Routes>
            </Layout>
          </ToastProvider>
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  )
}

export default AppRouter