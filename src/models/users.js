import * as usersService from '../services/users';

export default {
    namespace: 'users',
    state: {
        list: [],
        total: 0
    },
    reducers: {
        // Reducers 的本质是修改 model 的 state
        save(state, { payload: { data: list, total } }) {
            return { ...state, list, total };
        },
    },
    effects: {
        // 而 Effects 主要是 控制数据流程  ，所以最终往往我们在 Effects 中会调用 Reducers。
        *fetch({ payload: {page} = 1}, { call, put}) {
            const {data, headers} = yield call(usersService.fetch, { page });
            console.log('data', data)
            yield put({type: 'save', payload: {data, total: 10}})
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
              if (pathname === '/demo/users') {
                dispatch({ type: 'fetch', payload: query });
              }
            });
          },
    }
}