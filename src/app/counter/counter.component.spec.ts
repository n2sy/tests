import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterService } from '../services/counter.service';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [CounterService],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it("Le compteur s'affiche et est initialisé à 5", () => {
    const element = fixture.debugElement.query(By.css('#count'));
    fixture.detectChanges();
    expect(element.nativeElement.innerHTML).toBe('5');
  });

  it('Le compteur est bien incrémenté', () => {
    const element = fixture.debugElement.query(By.css('#increment-btn'));
    element.triggerEventHandler('click');
    fixture.detectChanges();
    expect(document.querySelector('#count').textContent).toBe('6');
  });

  it('Reset du compteur', () => {
    let randomValue = 123;
    const element = fixture.debugElement.query(By.css('#reset-input'));
    //element.nativeElement.value = randomValue;
    const btn = fixture.debugElement.query(By.css('#reset-btn'));
    btn.triggerEventHandler('click');
    fixture.detectChanges();
    expect(document.querySelector('#count').textContent).toBe(
      String(randomValue)
    );
  });

  it('Recupérer le data avec succès après un appel synchrone', fakeAsync(() => {
    let counterSer = TestBed.inject(CounterService);
    spyOn(counterSer, 'getData').and.returnValue(
      Promise.resolve('Data valide')
    );
    fixture.detectChanges();
    tick(); // attendre que le traitement asynchrone se termine
    expect(component.data).toBe('Data valide');
  }));

  it('Affiche une erreur aprés un appel asynchrone', fakeAsync(() => {
    let countSer = TestBed.inject(CounterService);
    spyOn(countSer, 'getData').and.returnValue(
      Promise.reject(new Error('Nombre superieur à 10'))
    );
    fixture.detectChanges();
    tick(); // On va attendre sagement que le traitement asynchrone se termine
    expect(component.data).toBe('Error: Nombre superieur à 10');
  }));
});
