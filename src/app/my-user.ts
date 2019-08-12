export class MyUser {

  constructor(
    public email: string, // V
    public password: string,
    public name?: string,
    public phoneNumber?: string // V
  ) {  }

}
