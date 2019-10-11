export interface ITodo {
    Id: number;
    Title: String;
    CreationDate: Date;
    DueDate?: Date;
    Backlog: boolean;
    Working: boolean;
    Complete: boolean;
}
