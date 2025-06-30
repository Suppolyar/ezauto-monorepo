import { render } from '@testing-library/react';

import EzautoMonorepoMyNewLib from './my-new-lib';

describe('EzautoMonorepoMyNewLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EzautoMonorepoMyNewLib />);
    expect(baseElement).toBeTruthy();
  });
});
