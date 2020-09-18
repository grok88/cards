export type ActionsType = any;
export type InitialStateType = typeof initialState;

const initialState = {}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}