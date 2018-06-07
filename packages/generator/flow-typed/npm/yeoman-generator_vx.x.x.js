// flow-typed signature: 3d2c80af016afea597623472b7e31981
// flow-typed version: <<STUB>>/yeoman-generator_v2.0.5

/**
 * This is an autogenerated libdef stub for:
 *
 *   'yeoman-generator'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'yeoman-generator' {
  // A is a phantom type that ties an event instance...
  declare class Event<A> {};
  // ...to its handler
  type Handler<A> = (a: A, ...rest: Array<void>) => void;

  declare class EventEmitter {
    on<A, F: Handler<A>>(event: Event<A>, handler: F): void;
    emit<A>(event: Event<A>, a: A): void;
  };

  declare class Storage {
    constructor(name: string, fs: any, configPath: string): Storage;
    _store: Object,
    _persist(val: string): void;
    save(): void;
    get(key: string): void;
    getAll(): Object;
    set(key: string, val: any): void;
    delete(key: string): void;
    defaults(defaults: Object): string;
  };

  declare class Generator extends EventEmitter {
    constructor(args: Object, options: Object): Generator;
    prompt(questions: string[]): string[];
    option(name: string, config: Object): Generator;
    argument(name: string, config: Object): Generator;
    parseOptions(): void;
    checkRequiredArgs(): void;
    run(cb: Function): void;
    composeWith(modulePath: string, options: Object): Generator;
    rootGeneratorName(): string;
    rootGeneratorVersion(): string;
    _getStorage(): Storage;
    _getGlobalStorage(): Storage;
    destinationRoot(rootPath: string): string;
    sourceRoot(rootPath: string): string;
    templatePath(): string;
    destinationPath(): string;
    determineAppname(): string;
    registerTransformStream(streams: any): Generator;
    _writeFiles(done: Function): void;
  }

  declare module.exports: Generator;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'yeoman-generator/lib/actions/help' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/actions/install' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/actions/spawn-command' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/actions/user' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/index' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/util/binary-diff' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/util/conflicter' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/util/deprecate' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/util/prompt-suggestion' {
  declare module.exports: any;
}

declare module 'yeoman-generator/lib/util/storage' {
  declare module.exports: any;
}

// Filename aliases
declare module 'yeoman-generator/lib/actions/help.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/actions/help'>;
}
declare module 'yeoman-generator/lib/actions/install.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/actions/install'>;
}
declare module 'yeoman-generator/lib/actions/spawn-command.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/actions/spawn-command'>;
}
declare module 'yeoman-generator/lib/actions/user.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/actions/user'>;
}
declare module 'yeoman-generator/lib/index.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/index'>;
}
declare module 'yeoman-generator/lib/util/binary-diff.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/util/binary-diff'>;
}
declare module 'yeoman-generator/lib/util/conflicter.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/util/conflicter'>;
}
declare module 'yeoman-generator/lib/util/deprecate.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/util/deprecate'>;
}
declare module 'yeoman-generator/lib/util/prompt-suggestion.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/util/prompt-suggestion'>;
}
declare module 'yeoman-generator/lib/util/storage.js' {
  declare module.exports: $Exports<'yeoman-generator/lib/util/storage'>;
}