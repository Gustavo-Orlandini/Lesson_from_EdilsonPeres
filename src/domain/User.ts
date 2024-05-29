export class User {
  private constructor(public readonly name: string) {}

  static create(name: string): User | Error {
    if (name.match(/[0-9]/)) {
      return new Error('Invalid name!');
    }

    return new User(name);
  }
}
