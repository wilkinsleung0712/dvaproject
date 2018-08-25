import * as productsService from '../services/products';

export default {
    namespace: 'products', //表示在全局 state 上的 key
    state: [], //是初始值，在这里是空数组
    reducers: {
       //等同于 redux 里的 reducer，接收 action，同步更新 state
        'delete'(state, {payload:id}) {
            return {...state, products:state.products.filter(item=>item.id!==id)};
        },
      // Reducers 的本质是修改 model 的 state
        save(state, { payload:products}) {
            return { ...state, products};
        },
    },
    effects: {
        *fetch({ payload: {}}, {call, put}) {
            const {products} = yield call(productsService.fetch);
            yield put({type: 'save', payload:products})

        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
              if (pathname === '/products') {
                dispatch({ 
                    type: 'fetch', 
                    payload: {}
                });
              }
            });
          },
    }
}