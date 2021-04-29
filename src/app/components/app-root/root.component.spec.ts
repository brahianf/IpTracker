import { TestBed } from '@angular/core/testing';
import { AppRoot } from './root.component';

describe('AppRoot', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppRoot
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iptracker'`, () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('iptracker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppRoot);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('iptracker app is running!');
  });
});
