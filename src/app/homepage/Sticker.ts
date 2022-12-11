export class Sticker{

  private _id:number;
  private _enabled:boolean;
  private _stickerName:string;
  private _imageUrl:string;
  private _stickerPackageId:number;
  private _userName:string;


  constructor(id: number, enabled: boolean, stickerName: string, imageUrl: string, stickerPackageId: number, userName:string) {
    this._id = id;
    this._enabled = enabled;
    this._stickerName = stickerName;
    this._imageUrl = imageUrl;
    this._stickerPackageId = stickerPackageId;
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

  get stickerName(): string {
    return this._stickerName;
  }

  set stickerName(value: string) {
    this._stickerName = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get stickerPackageId(): number {
    return this._stickerPackageId;
  }

  set stickerPackageId(value: number) {
    this._stickerPackageId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }
}
