import { HomePage } from './home.po';

describe('Home Page', () => {
  const po = new HomePage();

  beforeEach(() => {
    po.navigate();
  });

  it('should be empty', () => {
    po.assertChildren();
  });
});
