export const AllProductsReducers = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case "GET_PIZZAS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_PIZZAS_SUCCESS":
            return {
                ...state,
                pizzas: action.payload,
                loading: false,

            };
        case "GET_PIZZAS_FAIL":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default: return state
    }

}