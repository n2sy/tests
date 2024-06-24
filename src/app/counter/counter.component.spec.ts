import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';
import { CounterService } from '../services/counter.service';

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

  it('Le compteur saffiche et initialise à 0', () => {
    const element = fixture.debugElement.query(By.css('#count'));
    fixture.detectChanges();
    expect(element.nativeElement.innerHTML).toBe('0');
  });

  it('Le compteur est bien incremente', () => {
    const element = fixture.debugElement.query(By.css('#increment-btn'));
    element.triggerEventHandler('click');
    fixture.detectChanges();
    expect(document.querySelector('#count').textContent).toBe('1');
  });

  it('Reset du compteur', () => {
    const randomValue = 123;
    const element = fixture.debugElement.query(By.css('#reset-input'));
    element.nativeElement.value = randomValue;
    const element2 = fixture.debugElement.query(By.css('#reset-btn'));
    element2.triggerEventHandler('click');
    fixture.detectChanges();
    expect(document.querySelector('#count').textContent).toBe(
      String(randomValue)
    );
  });

  // it('Recuperer le data avec succès aprés un appel asynchrone', fakeAsync(() => {
  //   let countSer = TestBed.inject(CounterService);
  //   spyOn(countSer, 'getData').and.returnValue(Promise.resolve('Data valide'));
  //   fixture.detectChanges();
  //   tick(); // On va attendre sagement que le traitement asynchrone se termine
  //   expect(component.data).toBe('Data valide');
  // }));

  // it('Affiche une erreur aprés un appel asynchrone', fakeAsync(() => {
  //   let countSer = TestBed.inject(CounterService);
  //   spyOn(countSer, 'getData').and.returnValue(
  //     Promise.reject(new Error('Nombre superieur à 10'))
  //   );
  //   fixture.detectChanges();
  //   tick(); // On va attendre sagement que le traitement asynchrone se termine
  //   expect(component.data).toBe('Error: Nombre superieur à 10');
  // }));
});
