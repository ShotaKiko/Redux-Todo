export const NEW_TASK = 'NEW_TASK'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export function addTask (task){
    return{
        type: NEW_TASK,
        payload: task
    };
};

export function toggleCompleted (index){
    return{
        type: TOGGLE_COMPLETE,
        payload: index
    }
}