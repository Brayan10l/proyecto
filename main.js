import cart from './components/cart.js'
import loader from './components/loader.js'
import products from './components/products.js'
import showCart from './components/showCart.js'
import showMenu from './components/showMenu.js'
import getProducts from './helpers/getProducts.js'
/*UI Element*/

/* Ocultar loader*/
loader()

/* Mostrar menu*/
showMenu()

/* Mostrar carrito*/
showCart()

/*End UI Element*/

/* Products */
const { db, printProducts } = products(await getProducts())

/* Carrito */
cart(db, printProducts)
