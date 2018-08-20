// import './index.css';

// import createLoading from 'dva-loading';
// import dva from 'dva';

// // 1. Initialize
// const app = dva({
//     initialState: {
//          products: [
//            { name: 'dva', id: 1 },
//            { name: 'antd', id: 2 },
//          ],
//          counter: 0
//        },
// });

// // 2. Plugins
// app.use(createLoading());

// // 3. Model
// app.model(require('./models/products').default);
// app.model(require('./models/counter').default);
// app.model(require('./models/users').default);

// // 4. Router
// app.router(require('./router').default);

// // 5. Start
// app.start('#root');
