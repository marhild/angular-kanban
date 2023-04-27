export class Project {
    constructor(
        public id: number,
        public title: string,
        public status: string,
        public dateOfCompletion: Date,
        public description: string,
    ) {}
}