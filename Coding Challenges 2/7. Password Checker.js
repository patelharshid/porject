class User {
    constructor(username, password) 
    {
      this.username = username;
      this._password = password;
    }
    get password() 
    {
        return this._password.replace(/./g, '*');
    }
    
      set password(Password) 
      {
        if (Password.length >= 8 &&/[0-9]/.test(Password) &&/[A-Z]/.test(Password)) 
        {
          this.password = Password;
        } 
        else
        {
          console.error('Invalid password!');
        }
      }
}
const user = new User('john_doe', 'password123');
console.log(user.password);