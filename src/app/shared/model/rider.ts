export class Rider {
  private _name: string;
  private _nation: string;
  private _points: number;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nation(): string {
    return this._nation;
  }

  set nation(value: string) {
    this._nation = value;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }
}
