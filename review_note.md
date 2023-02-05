# Review comments

- Prettier로 통일. JS의 indentation은 기본 2 spaces.
- Joi를 함수 scope에서 빼서 생성
- loader 분리 => mongoDBLoader.js, passportLoader.js
- authRouter 생성, login, logout, verify등의 기능을 해당 Router로 처리해주기
- user API path에서 동사 빼주기