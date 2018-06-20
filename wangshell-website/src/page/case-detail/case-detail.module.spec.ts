import { CaseDetailModule } from './case-detail.module';

describe('CaseDetailModule', () => {
  let caseDetailModule: CaseDetailModule;

  beforeEach(() => {
    caseDetailModule = new CaseDetailModule();
  });

  it('should create an instance', () => {
    expect(caseDetailModule).toBeTruthy();
  });
});
