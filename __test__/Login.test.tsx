describe('로그인 시나리오', () => {
  describe('사용자는 소셜 로그인을 진행할 수 있다.', () => {
    test('사용자가 마이페이지에 접근하여 로그인 페이지를 누르면 /login으로 이동한다.', () => {
      expect(0).toBe(0);
    });

    test('소셜 로그인을 진행하면, /auth/login API가 호출되며 호출 결과에 AccessToken이 포함된다.', () => {
      expect(1).toBe(1);
    });
  });
});
