declare module SimpleSchemaModule {
  interface SimpleSchemaDefinition {
    [attribute: string]: {[props: string]: any}
  }
  export interface SimpleSchema {
    new(definition: SimpleSchemaDefinition): SimpleSchema;
    extendOptions(options: {[options: string]: any}): void;
    validate(object:any):void;
  }

}

declare module 'meteor/aldeed:simple-schema' {
  export var SimpleSchema:{
    new(definition: SimpleSchemaModule.SimpleSchemaDefinition):SimpleSchemaModule.SimpleSchema;
    RegEx: {
      Url: RegExp,
      Email: RegExp
    }
  };
}