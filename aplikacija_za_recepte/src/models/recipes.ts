export class Recipe {
    public id: Number;
    public title: string;
    public image: string;
    public difficulty: string;
  
    constructor(id: Number, title: string, image: string, difficulty: string) {
      this.id = id;
      this.title = title;
      this.image = image;
      this.difficulty = difficulty;
    }
  }