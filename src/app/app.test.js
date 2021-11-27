import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from 'app/app';
import store from 'app/store'

test('renders tabs', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('Login')).toBeInTheDocument();
});
