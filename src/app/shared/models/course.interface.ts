export interface Course {
    id: number;
    seqNo?:number;
    description?:string;
    longDescription?: string;
}

export interface Lesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}