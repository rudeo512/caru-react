export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export function addPhone(phone) {
    return {
        type: ADD,
        data: phone
    };
}

export function updatePhone(phone) {
    return {
        type: UPDATE,
        data: phone
    };
}

export function deletePhone(id) {
    return {
        type: DELETE,
        data: id
    };
}
