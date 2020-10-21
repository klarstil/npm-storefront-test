import { INCREMENT, DECREMENT } from "../store";

export default {
    name: 'Counter',
    template: `
       <div class="counter">
            <div class="counter__display">{{ currentCount }}</div>
            <button @click="onDecrement" class="counter__button">Decrement</button>
            <button @click="onIncrement" class="counter__button">Increment</button>
       </div>
    `,

    computed: {
        currentCount() {
            return this.$store.state.count;
        }
    },

    methods: {
        onDecrement() {
            this.$store.commit(DECREMENT);
        },
        onIncrement() {
            this.$store.commit(INCREMENT);
        }
    }
};
