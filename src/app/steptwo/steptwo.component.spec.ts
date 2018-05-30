import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, Injector, DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { SteptwoComponent } from './steptwo.component';

describe('SteponeComponent', () => {
    let component: SteptwoComponent;
    let fixture: ComponentFixture<SteptwoComponent>;

    setupTestBed({
        imports: [AppModule]
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SteptwoComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct content', () => {
        expect(fixture.nativeElement.querySelector('p').textContent).toBe('Yay done!');
    });

    it('snapshot should pass', () => {
        expect(fixture).toMatchSnapshot();
    });
});
