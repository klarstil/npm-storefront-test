export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export default {
    state: {
        count: 0
    },

    mutations: {
        [INCREMENT](state) {
            state.count = state.count + 1;
        },
        [DECREMENT](state) {
            state.count = state.count - 1;
        }
    }
};
