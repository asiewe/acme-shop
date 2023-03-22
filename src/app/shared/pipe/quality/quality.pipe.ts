import { Pipe, PipeTransform } from "@angular/core";

export enum Quality {
    BAD = 'Bad',
    GOOD = 'Good',
    EXCELLENT = 'Excellent',
    UNKNOW = 'Unknow'
}

@Pipe({ name: 'quality' })
export class QualityPipe implements PipeTransform {
    transform(value: number, ...args: any[]): string {

        if (typeof value !== 'number') {
            return Quality.UNKNOW
        }

        if (value <= 1.5) {
            return Quality.BAD
        }
        if (value <= 3) {
            return Quality.GOOD
        }
        return Quality.EXCELLENT

    }
}