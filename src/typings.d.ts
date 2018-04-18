/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare interface Personality {
  name: string;
  url: string;
  context: string;
}