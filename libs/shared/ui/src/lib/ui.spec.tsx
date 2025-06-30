import { render } from '@testing-library/react';

import EzautoMonorepoUi from './ui';

describe('EzautoMonorepoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EzautoMonorepoUi />);
    expect(baseElement).toBeTruthy();
  });
});
