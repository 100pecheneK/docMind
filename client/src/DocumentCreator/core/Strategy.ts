import { ICondition, TBlock } from "./@types"

export interface IStategy {
  isTruthy: (block: TBlock) => false | ICondition
}
export type IConditionClass<A> = { new (args: A): ICondition<any> }
export interface IOrStrategy<A> extends IStategy {
  conditionArgs: A[]
  Condition: IConditionClass<A>
}
export class OrStrategy<A> implements IOrStrategy<A> {
  conditionArgs: A[]
  Condition: IConditionClass<A>
  constructor(Condition: IConditionClass<A>, conditionArgs: A[]) {
    this.conditionArgs = conditionArgs
    this.Condition = Condition
  }
  isTruthy(block: TBlock) {
    for (const i in this.conditionArgs) {
      const condition = new this.Condition(this.conditionArgs[i])
      if (condition.isTruthy(block)) {
        return condition
      }
    }
    return false
  }
}
