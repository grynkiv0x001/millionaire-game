import { render } from '@testing-library/react';

import { Button } from '@/shared';

describe('Start page', () => {
  it('Renders Start button', () => {
    const { getByText } = render(<Button>Start</Button>);

    expect(getByText('Start')).toBeInTheDocument();
  });
});
