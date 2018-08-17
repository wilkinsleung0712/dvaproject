export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        'plus'(state) {
            console.log('plus')
            return state + 1;
        },
        'minus'(state) {
            console.log('minus')
            if(state <= 1) {
                return 0;
            }
            return state - 1;
        }
    }
}