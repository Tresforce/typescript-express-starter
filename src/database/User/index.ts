import { Column, Entity } from 'typeorm';
import BaseEntity from '../base';

@Entity()
class User extends BaseEntity {
  @Column()
  public firstName!: string;

  @Column()
  public lastName!: string;

  @Column()
  public lastSignOn!: Date;

  @Column()
  public isActive!: boolean;

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
