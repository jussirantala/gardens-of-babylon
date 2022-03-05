export namespace Global {
  export type Garden = {
    Name: string;
    Width: number;
    Length: number;
    Height: number;
    X: number;
    Y: number;
    Z: number;
    Objects?: Garden[];
  }
}

//------------------------------------------------------------------------------

export namespace Store {
  export interface State {
    readonly gardens: Global.Garden[]
  }

  export interface Actions {
    readonly setGardens: 'SET_GARDENS';
  }

  export type ActionType = Actions[keyof Actions];

  export interface Action<P = any> {
    readonly type: ActionType;
    readonly payload: P;
  }
}

//------------------------------------------------------------------------------

export namespace Utility {
  export type Clsx = (...c: (string | boolean | undefined | null)[]) => string;
}