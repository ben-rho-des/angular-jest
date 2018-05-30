import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, Injector, DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { SteponeComponent } from './stepone.component';

describe('SteponeComponent', () => {
  let component: SteponeComponent;
  let fixture: ComponentFixture<SteponeComponent>;

  setupTestBed({
    imports: [AppModule]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteponeComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshot should pass', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('do some other complete thing and compared snapshot', () => {
    const fakeInput = {name: 'Mr brown fox', type: 'He\'s quick and jumpy'};
    component.model = fakeInput;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
