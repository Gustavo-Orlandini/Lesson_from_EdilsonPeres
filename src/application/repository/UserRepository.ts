import { User } from '../../domain/User.js';

export interface UserRepository {
  save(userParam: User): Promise<boolean>;
}
