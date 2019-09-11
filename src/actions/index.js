export const ADD_ITEM = 'ADD_ITEM';


export const addItem = (item) => {
    console.log('it is working', item)
    return { type: ADD_ITEM, payload: item }
}