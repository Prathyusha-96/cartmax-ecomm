import { toast } from "react-toastify";
import { addToCartService } from "../../services";

const addToCartHandler = async (product, cartDispatch, token) => {
    if (token) {
        try {
            const response = await addToCartService(product, token);
            if (response.status === 201) {
                cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart })
            toast.info("Product is added to cart")
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            toast.error(error.response.data.error[0])
        }
    } 
}

export { addToCartHandler }