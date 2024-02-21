import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Course } from './models/course.interface';
import { HttpErrorResponse } from '@angular/common/http';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CoursesService ]
    });
    service = TestBed.inject(CoursesService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all courses', () => {
    service.findAllCourses().subscribe( courses => {
      expect(courses).toBeTruthy();
    })

    const req = httpController.expectOne(`/api/courses`);
    expect(req.request.method).toEqual("GET");

    req.flush({ courses: { value: true } })
  } )

  it('should retrieve the course with id 5', () => {
    service.findCourseById(5).subscribe( courses => {
      expect(courses).toBeTruthy();
      expect(courses.id).toBe(5);
    })

    const req = httpController.expectOne(`/api/courses/${5}`);
    expect(req.request.method).toEqual("GET");

    req.flush({ id: 5 })
  } )

  it('should save course data', () => {
    const change: Partial<Course> = { id: 4, description: "Some data" }
    service.saveCourse(4, change).subscribe( course => {
      expect(course.id).toBe(4);
    } )

    const req = httpController.expectOne(`/api/courses/${4}`);
    expect(req.request.method).toEqual("PUT");

    expect(req.request.body.description).toBe(change.description);

    req.flush({
      ...{id: 4, description: ""},
      ...change
    })

  })

  it('should gave an error if test fails during save courses', () => {
    const change: Partial<Course> = { id: 3, description: "Some data" };
    service.saveCourse(3, change).subscribe({ 
      next: () => fail("saving failed"), 
      error: (err: HttpErrorResponse) => expect(err.status).toBeInstanceOf(Number)
      })
    const req = httpController.expectOne(`/api/courses/${3}`)
    expect(req.request.method).toEqual("PUT");
    req.flush(false, { status: 400, statusText: "Bad req" })
  } )

  it('should find a list of lessons', () => {
    service.findLessons(2).subscribe( lesson => {
      expect(lesson).toBeTruthy()
    } )

    const req = httpController.expectOne(req => req.url === '/api/lessons' )

    expect(req.request.params.get('courseId')).toBe("2")
    expect(req.request.params.get('filter')).toBe("")
    expect(req.request.params.get('sortOrder')).toBe("asc")
    expect(req.request.params.get('pageNumber')).toEqual("0")
    expect(req.request.params.get('pageSize')).toEqual("3")

    req.flush({ id: 2 })
  } )

  afterEach( () => {
    httpController.verify()
  } )

});
