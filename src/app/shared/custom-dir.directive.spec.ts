import { CustomDirDirective } from './custom-dir.directive';

describe('CustomDirDirective', () => {
  
  it('should create an instance', () => {
    const directive = new CustomDirDirective();
    expect(directive).toBeTruthy();
  });

  it('should return weak if value 5 is passed', () => {
    const directive = new CustomDirDirective();
    expect(directive.transform(5)).toEqual("weak")
  } );

  it('should return medium if value 15 is passed', () => {
    const directive = new CustomDirDirective();
    expect(directive.transform(15)).toEqual("medium")
  } );

  it('should return strong if value 25 is passed', () => {
    const directive = new CustomDirDirective();
    expect(directive.transform(25)).toEqual("strong")
  } )
});
