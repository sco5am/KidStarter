import decode from 'jwt-decode';

class AuthService {
  constructor() {
    this.tokenKey = 'id_token';
  }

  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  login(idToken) {
    localStorage.setItem(this.tokenKey, idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    window.location.assign('/');
  }
}

export default new AuthService();
