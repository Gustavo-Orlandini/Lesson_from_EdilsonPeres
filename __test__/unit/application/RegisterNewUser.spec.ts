describe('RegisterNewUserTests', () => {
    const invalidNames = ['Gustavo1', 'Gustavo@', '', '123456', 'a']

    it.each(invalidNames)('should do not create user on invalid name', (invalidName) => {
        const inMemoryRepository = new InMemoryRepository();
        const sut = new RegisterNewUser(inMemoryRepository);

        const userOrError = sut.execute(invalidName);

        expect(userOrError).toBeInstanceOf(Error);
    });
});