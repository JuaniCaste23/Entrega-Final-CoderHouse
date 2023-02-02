interface UserContract {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class User implements UserContract {

  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  constructor(id: number, email: string, first_name: string, last_name: string, avatar: string) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
  }

  get fullName() {
    return this.first_name + ' ' + this.last_name;
  }
}
