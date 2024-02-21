import { Course } from "src/app/shared/models/course.interface";

export const COURSES: Course[] = [
    {
        id: 1,
        seqNo: 1,
        description: "first descriptions",
        longDescription: "first long description",
        iconUrl: "",
        uploadedImageUrl: "",
        courseListIcon: "",
        category: "angular",
        lessonsCount: 1
    },
    {
        id: 2,
        seqNo: 2,
        description: "second description",
        longDescription: "second long description",
        iconUrl: "",
        uploadedImageUrl: "",
        courseListIcon: "",
        category: "react",
        lessonsCount: 2
    },
]