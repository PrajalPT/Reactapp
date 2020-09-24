export const UPDATE_FIELDS = "UPDATE_FIELDS";

export function updateState(target, value){
    return {
        type: UPDATE_FIELDS,
        payload: value,
        target: target
    };
}