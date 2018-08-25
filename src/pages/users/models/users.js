import * as usersService from '../services/users';

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        page: null
    },
    reducers: {
        // Reducers 的本质是修改 model 的 state
        save(state, { payload: { data: list, total, page } }) {
            return { ...state, list, total, page };
        },
    },
    effects: {
        // 而 Effects 主要是 控制数据流程  ，所以最终往往我们在 Effects 中会调用 Reducers。
        *fetch({ payload: { page = 1 } }, { call, put }) {
            const {data} = yield call(usersService.fetch, { page }); 
            yield put({type: 'save', payload: {data, page, total: 10}})
        },
        *remove({payload: id}, {call, put, select}) {
            yield call(usersService.remove, id);
            const page = yield select(state => state.users.page);
            yield put({
                type: 'fetch', 
                payload: { page } 
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
              if (pathname === '/users') {
                dispatch({ 
                    type: 'fetch', 
                    payload: query
                });
              }
            });
          },
    }
}