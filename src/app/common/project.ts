export class Project {
    constructor(
        public id: string,
        public title: string,
        public status: string,
        public dateOfCompletion: Date,
        public description: string,
    ) {}
}