export abstract class BaseGameClass<T> {
    constructor(public title: string,
        public folderName: string,
        public prefix: string,
        public leadingZeroes: number
    ) {
    }

    abstract gameClasses(): T[];

}
