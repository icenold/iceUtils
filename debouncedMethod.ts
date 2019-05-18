export class debouncedMethod<T>{
  constructor(method:T, debounceTime:number){
    this._method = method;
    this._debounceTime = debounceTime;
  }
  private _method:T;
  private _timeout:number;
  private _debounceTime:number;
  public invoke:T = ((...args:any[])=>{
    this._timeout && window.clearTimeout(this._timeout);
    this._timeout = window.setTimeout(()=>{
      (this._method as any)(...args);
    },this._debounceTime);
  }) as any;
}
