type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };

declare var emitUIInteraction: any;
declare var SuperMap: any;
declare var viewer: any;

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
