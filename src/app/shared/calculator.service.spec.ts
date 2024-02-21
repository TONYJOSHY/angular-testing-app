import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let logger: LoggerService;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ["log"])
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: logger }
      ]
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = service.add(3,2);
    expect(result).toBe(5)
    expect(logger.log).toHaveBeenCalledTimes(1)
  })

  it('should substract two numbers', () => {
    const result = service.subtract(3,1);
    expect(result).toBe(2);
    expect(logger.log).toHaveBeenCalledTimes(1)
  })


});
