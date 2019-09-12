


export const addItem = (item) => {

    return { type: 'ADD_ITEM', payload: item }
}

export const deleteItem = (id) => {
    console.log('it is working', id)
    return { type: 'DELETE_ITEM', payload: id }
}