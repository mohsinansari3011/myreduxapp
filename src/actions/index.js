export function moviesList() {

    return{
        type:'MOVIES_LIST',
        payload: [
            { id: '11', name: 'Harry Potter' },
            { id: '12', name: 'Avengers' }
        ]
    }

}


export function directorsList() {

    return {
        type: 'DIR_LIST',
        payload: [
            { id: '11', name: 'abc' },
            { id: '12', name: 'cde' }
        ]
    }

}