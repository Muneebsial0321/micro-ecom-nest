import { Injectable } from '@nestjs/common';


@Injectable()
export class MailsService {
  create(createMailDto: any) {
    console.log({ createMailDto })
    return 'This action adds a new mail';

  }}
