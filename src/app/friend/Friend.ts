export class Friend{
  private _id:number;
  private _enabled:boolean;
  private _userId:number;
  private _followingUserId:number;

  constructor(id: number, enabled: boolean, userId: number, followingUserId: number) {
    this._id = id;
    this._enabled = enabled;
    this._userId = userId;
    this._followingUserId = followingUserId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get followingUserId(): number {
    return this._followingUserId;
  }

  set followingUserId(value: number) {
    this._followingUserId = value;
  }
}
