import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialLoginComponent } from './social-login.component';

describe('SocialLoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SocialLoginComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SocialLoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-google-signin'`, () => {
    const fixture = TestBed.createComponent(SocialLoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-google-signin');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SocialLoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-google-signin app is running!');
  });
});
