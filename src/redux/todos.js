import { ADD_TODO, REMOVE_TODO, DONE_TODO, SHOW_DONE_TODO, RETURN_DONE_TODO } from "./actionTypes";

const initialState = {
  allIds: window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [],
};

export default function todos(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            // let res = {
            //     ...state,
            //     allIds: [
            //         ...state.allIds,
            //         {
            //             content,
            //             id,
            //             done: false
            //         }
            //     ]
            // }

            let res = [
                ...state.allIds,
                {
                    content,
                    id,
                    done: false
                },
            ]

            let done = res.filter(i => i.done === true)
            let notDone = res.filter(i => i.done !== true)

            let todosStore = {
                ...state,
                allIds: [...notDone, ...done]
            }

            window.localStorage.setItem('todos', JSON.stringify(res))

            return todosStore
        }


        case REMOVE_TODO: {
            let {id} = action.payload
            let res = [...state.allIds].filter(i => i.id !== id)
            window.localStorage.setItem('todos', JSON.stringify(res))

            return {
                allIds: [...res]
            }
        }


        case DONE_TODO: {
            const {id} = action.payload
            let stateAll = [...state.allIds]
            let todoCurent  = stateAll.filter(i => i.id === id)
            todoCurent[0].done = !todoCurent[0].done
            let todoPrev  = [...state.allIds].filter(i => i.id !== id)
            let done = todoPrev.filter(i => i.done === true)
            let notDone = todoPrev.filter(i => i.done !== true)
            let res = todoCurent[0].done === true ?
                [...notDone, ...done, ...todoCurent] :
                [...notDone, ...todoCurent, ...done, ]
            window.localStorage.setItem('todos', JSON.stringify(res))

            return {
                // allIds: [...todoPrev, ...todoCurent
                allIds: res
            }
        }

        case SHOW_DONE_TODO: {
            let dones = state.allIds.filter(i => i.done === true)
            let notDones = state.allIds.filter(i => i.done !== true)
            let res = [...dones, ...notDones]
            window.localStorage.setItem('todos', JSON.stringify(res))
            return {
                allIds: res,
            }
        }

        case RETURN_DONE_TODO: {
            let dones = state.allIds.filter(i => i.done === true)
            let notDones = state.allIds.filter(i => i.done !== true)
            let res = [...notDones, ...dones,]
            window.localStorage.setItem('todos', JSON.stringify(res))
            return {
                allIds: res,
            }
        }

        default:
            return state
    }
}