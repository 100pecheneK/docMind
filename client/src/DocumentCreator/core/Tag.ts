export interface ITag {
  value: string
}
export class Tag implements ITag {
  value: string
  constructor(value: string) {
    this.value = value
  }
}
