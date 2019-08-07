
const initState = {
    currentScale:'c',
    currentTheme: 'light',
    error: ''
}

const settingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_SCALE':
            {
                let scale = state.currentScale === 'f' ? 'c' : 'f';
                return {
                    ...state,
                    currentScale: scale
                }
            }
        case 'TOGGLE_THEME':
            {
                let theme = state.currentTheme === 'light' ? 'dark' : 'light';
                return {
                    ...state,
                    currentTheme: theme
                }
            }
        default:
            return state;
    }
}

export default settingReducer