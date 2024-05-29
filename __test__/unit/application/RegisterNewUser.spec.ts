import { RegisterNewUser } from '../../../src/application/usecase/RegisterNewUser.js';

describe('RegisterNewUserTests', () => {
  const invalidNames = ['Gustavo1', 'Gustavo@', '', '123456', 'a'];

  it.each(invalidNames)(
    'should do not create user on invalid name',
    (invalidName) => {
      const inMemoryUserRepository = new InMemoryUserRepository();
      const sut = new RegisterNewUser(inMemoryUserRepository);

      const userOrError = sut.execute(invalidName);

      expect(userOrError).toBeInstanceOf(Error);
    }
  );
});
