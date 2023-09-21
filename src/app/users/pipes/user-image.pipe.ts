import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/swagger/models';

@Pipe({
    name: 'userImage'
})
export class UserImagePipe implements PipeTransform {

    transform(user: User): string {
        if (!user.id) return "https://img.icons8.com/ios/50/flag--v1.png";
        return `https://robohash.org/${user.id || 0}`;
    }

}
