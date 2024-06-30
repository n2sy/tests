import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('devrait retourner 10 si x est positif', () => {
    const inst = new AppComponent();
    const res = inst.compute(2);
    expect(res).toBe(10);
  });
});
