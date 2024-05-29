import { User } from '../../domain/User.js';
import { UserRepository } from '../repository/UserRepository.js';

export class RegisterNewUser {
  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async execute(name: string) {
    // instanciar usuário
    const user = User.create(name);
    // salvar usuário no banco de dados
    const success = await this._userRepository.save(user);
    // criar usuário no firebase
  }
}
