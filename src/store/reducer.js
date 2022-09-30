let initialState = {
    lang: 'en-US',
    favs: []
}

export default function languagereducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_Language':
            return {
                ...state,
                lang: action.payload
            }
        case 'SET_Fav':
            let pos=state.favs.findIndex(
                (movie)=>movie.id==action.payload.id         
                )
            if(pos===-1){
                state.favs.push(action.payload)

            }           
            return state
        default:
            return state;
    }

}