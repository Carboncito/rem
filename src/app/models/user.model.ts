export class User {
  name: string;
  imageUrl?: string;

  constructor(name: string, imageUrl?: string) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
