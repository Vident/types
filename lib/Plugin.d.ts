export interface Plugin {
  name: string;
  new();
  init(app: ExpressApp, params: PluginParams)
}

type ExpressApp = any;


export interface PluginParams {
  [key: string]: string
}
