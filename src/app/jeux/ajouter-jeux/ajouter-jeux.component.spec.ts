import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterJeuxComponent } from './ajouter-jeux.component';

describe('AjouterJeuxComponent', () => {
  let component: AjouterJeuxComponent;
  let fixture: ComponentFixture<AjouterJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterJeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
