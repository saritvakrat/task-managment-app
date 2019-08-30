import { PipeTransform, BadRequestException, ValidationPipe } from '@nestjs/common';
import { TaskStatus } from '../tasks-status.enum';

/**
 * @export
 * @class TaskStatusValidationPipe
 * @implements {PipeTransform}
 */
export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ];

    /**
     * @param {*} value
     * @returns
     * @memberof TaskStatusValidationPipe
     */
    transform(value: any) {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status`)
        }

        return value;
    }
    /**
     * @private
     * @param {*} status
     * @returns
     * @memberof TaskStatusValidationPipe
     */
    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}