import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should cycle through system -> dark -> light -> system', () => {
    service.setPreference('system');
    expect(service.preference()).toBe('system');

    service.cycleTheme();
    expect(service.preference()).toBe('dark');

    service.cycleTheme();
    expect(service.preference()).toBe('light');

    service.cycleTheme();
    expect(service.preference()).toBe('system');
  });

  it('should compute effectiveTheme as light or dark', () => {
    service.setPreference('light');
    expect(service.effectiveTheme()).toBe('light');

    service.setPreference('dark');
    expect(service.effectiveTheme()).toBe('dark');
  });
});
