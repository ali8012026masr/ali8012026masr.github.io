import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created and return all projects', () => {
    const all = service.getAllProjects();
    expect(all.length).toBeGreaterThanOrEqual(2);
  });

  it('should find horizon by slug', () => {
    const horizon = service.getProjectBySlug('horizon');
    expect(horizon).toBeDefined();
    expect(horizon?.title).toContain('Horizon');
    expect(horizon?.status).toBe('implemented');
  });

  it('should find mobile projects by slug', () => {
    const tourist = service.getProjectBySlug('horizon-tourist');
    expect(tourist).toBeDefined();
    expect(tourist?.title).toContain('Horizon Tourist');

    const flutter = service.getProjectBySlug('horizon-flutter');
    expect(flutter).toBeDefined();
    expect(flutter?.title).toContain('Flutter');
  });

  it('should find bangla-akinator by slug', () => {
    const akinator = service.getProjectBySlug('bangla-akinator');
    expect(akinator).toBeDefined();
    expect(akinator?.slug).toBe('bangla-akinator');
  });
});
