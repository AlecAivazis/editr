// the initial state
const initialState = {
    total: [
        {
            name: 'Borat stuffa',
            path: null,
            files: [
                {name: 'azumat.txt', path: null, files: []},
                {name: 'pamela_naked.jpg', path: null, files: []},
                {name: 'Rule 34', path: null, files: [
                    {name: 'wawaweewa', path: null, files: []},
                    {name: 'king of the castle', path: null, files: []},
                ]},
                {name: 'yekshimesh', path: null, files: []}
            ]
        }
    ],
    active: []
}

// this reducer manages the file of files visible to the user
export default (state=initialState, {type, payload}) => {

    return state
}
