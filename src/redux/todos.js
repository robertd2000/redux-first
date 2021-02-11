import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initialState = {
  allIds: [],
};

export default function todos(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [
                    ...state.allIds,
                    {
                        content,
                        id
                    }
                ]
            }

        case REMOVE_TODO:
            let idi = action.payload.id
            let res = [...state.allIds].filter(i => i.id !== idi)
            return {
                allIds: [...res]
            }

        default:
            return state
    }
}