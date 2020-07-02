import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createdPersistedState()],
    state: {
        memos: [
            { id: 1, body: 'サンプルのメモです'}
        ]
    },
    mutations: {
        save(state, memo) {
            // 新しいIDを割り振る
            var max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;

            state.memos.push(memo);
        },
        update(state, data) {
            let x = state.memos.find(memo => memo.id == data.id);
            x.body = data.body;
        },
        remove(state, id) {
            for (var i=0; i<state.memos.length; i++) {
                if (state.memos[i].id == id) {
                    state.memos.splice(i, 1);
                }
            }
        }
    }
})