
import axios from "axios"
export const AllproductsAction = () => async (dispatch) => {

    dispatch({ type: "GET_PIZZAS_REQUEST" })
    try {
        const { data } = await axios.get("/api/products")
        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: data })

        // console.log(data)
    } catch (error) {
        dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
}
