export class DogFactsType {
    message: URL|null
    status: string

    constructor (url?: string) {
        this.message = url ? new URL(url) : null;
        this.status = '';
    }
}