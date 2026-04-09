import { createContext, useState, useRef, useEffect, useCallback, useContext } from "react"
import { useLocation } from "react-router-dom";

const MenuContext = createContext(null);

const MenuProvider = ({ children }) => {
    // estados
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        if (isDrawerOpen) {
            setIsMenuOpen(false)
        }
    }, [isDrawerOpen])

    // cerrar menú con escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isDrawerOpen) setIsDrawerOpen(false)
                else if (isMenuOpen) setIsMenuOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isMenuOpen, isDrawerOpen])

    // bloquear scroll si el drawer está abierto
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
    }, [isMenuOpen])

    // abrir/cerrar menunav y drawer
    const toggleMenu = useCallback((e) => {
        if (e && e.stopPropagation) e.stopPropagation()
        setIsMenuOpen((prev) => !prev)
    }, [])

    const openDrawer = useCallback((e) => {
        if (e && e.stopPropagation) e.stopPropagation()
        setIsDrawerOpen(true)
    }, [])

    const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

    return (
        <MenuContext.Provider value={{
            isMenuOpen,
            isDrawerOpen,
            location,
            navRef,
            setIsMenuOpen,
            toggleMenu,
            openDrawer,
            closeDrawer
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};