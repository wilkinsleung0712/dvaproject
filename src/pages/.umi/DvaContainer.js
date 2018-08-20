import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'counter', ...(require('/Users/wilkinsliang/private/dvaproject/src/pages/count/models/counter.js').default) });
app.model({ namespace: 'example', ...(require('/Users/wilkinsliang/private/dvaproject/src/pages/example/models/example.js').default) });
app.model({ namespace: 'products', ...(require('/Users/wilkinsliang/private/dvaproject/src/pages/products/models/products.js').default) });
app.model({ namespace: 'users', ...(require('/Users/wilkinsliang/private/dvaproject/src/pages/users/models/users.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
