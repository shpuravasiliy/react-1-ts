type ActionType = {
    type: string
    payload?: {
        [key: string]: string
    }
}
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
            ...state,
                collapsed: !state.collapsed
    };
        default:
            throw new Error('Bad action type');
    }
}