import Home from "../pages/home/home"
import AboutUs from "../pages/about-us/about-us"
import ContactUs from "../pages/contact-us/contact-us"
import Login from "../pages/login/login"
import Cart from "../pages/cart/cart"
import SignUp from "../pages/sign-up/sign-up"
import Products from "../pages/products/products"

const dataRoutes = [
    {
        id: 1,
        tag: "Home",
        path: "/",
        pageComponent: Home
    },
    {
        id: 2,
        tag: "About-us",
        path: "/about-us",
        pageComponent: AboutUs
    },
    {
        id: 3,
        tag: "Contact-us",
        path: "/contact-us",
        pageComponent: ContactUs
    },
    {
        id: 4,
        tag: "Login",
        path: "/login",
        pageComponent: Login
    },
    {
        id: 5,
        tag: "Sign-up",
        path: "/sign-up",
        pageComponent: SignUp
    },
    {
        id: 6,
        tag: "Cart",
        path: "/cart",
        pageComponent: Cart
    },
    {
        id: 7,
        tag: "Products",
        path: "/products",
        pageComponent: Products
    }
]

export default dataRoutes