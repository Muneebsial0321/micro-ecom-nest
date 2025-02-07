import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: DbService) { }

  findAll(pageNo: number = 0) {
    const skip = pageNo * 20
    const take = 20
    return this.db.user.findMany({ take, skip, orderBy: { createdAt: "asc" } });
  }

  findOne(id: string) {
    return this.db.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        phoneNumber: true,
        profilePic: true,
        provider: true
      }
    })
  }


  remove(id: string) {
    return this.db.user.delete({ where: { id } })
  }
}
