const initialState = {
    count: 0,
    productList: []
}

export function updateGenral(state = initialState, action) {
    if (action.type === "ADDPRODUCTS") {
        state.productList.push(action.payload)
        return {
            productList: state.productList,
            count: state.count + 1
        }
    }
    if (action.type === "REMOVEPRODUCTS") {
        state.productList =  state.productList.filter( (item) => item !== action.payload)
        // state.productList.push(action.payload)
        return {
            productList: state.productList,
            count: state.count - 1
        }
    }

    return state
}