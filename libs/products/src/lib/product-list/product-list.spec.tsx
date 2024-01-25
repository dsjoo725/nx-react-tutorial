import { render } from '@testing-library/react';

import ProductList from './product-list';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct title', () => {
    const { getByText } = render(<ProductList />);
    expect(getByText('Welcome to ProductList!')).toBeTruthy();
  });

  it('should display the emoji', () => {
    const { getByLabelText } = render(<ProductList />);
    expect(getByLabelText('shakehand')).toBeTruthy();
  });
});
