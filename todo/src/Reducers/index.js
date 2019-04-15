import { NEW_TASK, TOGGLE_COMPLETE } from '../Actions'

const initialState = {
    list: []
}

export const listReducer = (state = initialState, action) => {
    switch(action.type){
         case NEW_TASK:
         const newTask = {
             name: action.payload,
             beenCompleted: false
         };
         return {
             ...state,
             list: [...state.list, newTask]
         };

         case TOGGLE_COMPLETE:
            return{
                ...state,
                list: state.list.map((item, index) =>
                  action.payload === index
                    ? { ...item, beenCompleted: !item.beenCompleted }
                    : item
                )
            } 
        default:
            return state;
    }
}