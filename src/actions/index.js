export function moviesList() {

    return{
        type:'MOVIES_LIST',
        payload: [
            { id: '1', name: 'Harry Potter' },
            { id: '2', name: 'Avengers' }
        ]
    }

}


export function directorsList() {

    return {
        type: 'DIR_LIST',
        payload: [
            { id: '1', name: 'abc' },
            { id: '2', name: 'cde' }
        ]
    }

}