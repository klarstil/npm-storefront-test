import Vue from '@vue';
import Vuex from '@vuex';
import CounterComponent from './components/counter';
import storeDefinition from './store';

Vue.use(Vuex);

const store = new Vuex.Store(storeDefinition);

const app = new Vue({
    store,
    el: '#app',
    components: {
      Counter: CounterComponent
    },
    data: {
        message: 'Hello Vue!'
    }
});
