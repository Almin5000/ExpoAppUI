const validCredentials = {
  email: 'test@gmail.com',
  password: 'abc123',
};

export const authenticate = (email: string, password: string) => {
  if (email === validCredentials.email && password === validCredentials.password) {
    return { success: true };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
};
