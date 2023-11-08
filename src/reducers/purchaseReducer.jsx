export const initialPurchaseData = {
    card: "",
    name: "",
    date: "",
    cvv: "",
}

export function purchaseReducer(state, action) {
    switch(action.type) {
        case "updateInputs":
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            }
        case "resetInputs":
            return initialContacts;
        default: throw new Error('Unknown action type')
    }
}