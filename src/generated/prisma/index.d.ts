
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PaymentAttempt
 * 
 */
export type PaymentAttempt = $Result.DefaultSelection<Prisma.$PaymentAttemptPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>
/**
 * Model ProviderCustomer
 * 
 */
export type ProviderCustomer = $Result.DefaultSelection<Prisma.$ProviderCustomerPayload>
/**
 * Model PreferredPaymentSettings
 * 
 */
export type PreferredPaymentSettings = $Result.DefaultSelection<Prisma.$PreferredPaymentSettingsPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentAttemptStatus: {
  PENDING: 'PENDING',
  AUTHORIZED: 'AUTHORIZED',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentAttemptStatus = (typeof PaymentAttemptStatus)[keyof typeof PaymentAttemptStatus]


export const RefundStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]

}

export type PaymentAttemptStatus = $Enums.PaymentAttemptStatus

export const PaymentAttemptStatus: typeof $Enums.PaymentAttemptStatus

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PaymentAttempts
 * const paymentAttempts = await prisma.paymentAttempt.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PaymentAttempts
   * const paymentAttempts = await prisma.paymentAttempt.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paymentAttempt`: Exposes CRUD operations for the **PaymentAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentAttempts
    * const paymentAttempts = await prisma.paymentAttempt.findMany()
    * ```
    */
  get paymentAttempt(): Prisma.PaymentAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerCustomer`: Exposes CRUD operations for the **ProviderCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderCustomers
    * const providerCustomers = await prisma.providerCustomer.findMany()
    * ```
    */
  get providerCustomer(): Prisma.ProviderCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferredPaymentSettings`: Exposes CRUD operations for the **PreferredPaymentSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreferredPaymentSettings
    * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findMany()
    * ```
    */
  get preferredPaymentSettings(): Prisma.PreferredPaymentSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PaymentAttempt: 'PaymentAttempt',
    Refund: 'Refund',
    ProviderCustomer: 'ProviderCustomer',
    PreferredPaymentSettings: 'PreferredPaymentSettings',
    PaymentMethod: 'PaymentMethod'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paymentAttempt" | "refund" | "providerCustomer" | "preferredPaymentSettings" | "paymentMethod"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentAttempt: {
        payload: Prisma.$PaymentAttemptPayload<ExtArgs>
        fields: Prisma.PaymentAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          findFirst: {
            args: Prisma.PaymentAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          findMany: {
            args: Prisma.PaymentAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>[]
          }
          create: {
            args: Prisma.PaymentAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          createMany: {
            args: Prisma.PaymentAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>[]
          }
          delete: {
            args: Prisma.PaymentAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          update: {
            args: Prisma.PaymentAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          deleteMany: {
            args: Prisma.PaymentAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>[]
          }
          upsert: {
            args: Prisma.PaymentAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentAttemptPayload>
          }
          aggregate: {
            args: Prisma.PaymentAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentAttempt>
          }
          groupBy: {
            args: Prisma.PaymentAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentAttemptCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
      ProviderCustomer: {
        payload: Prisma.$ProviderCustomerPayload<ExtArgs>
        fields: Prisma.ProviderCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          findFirst: {
            args: Prisma.ProviderCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          findMany: {
            args: Prisma.ProviderCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>[]
          }
          create: {
            args: Prisma.ProviderCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          createMany: {
            args: Prisma.ProviderCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>[]
          }
          delete: {
            args: Prisma.ProviderCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          update: {
            args: Prisma.ProviderCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          deleteMany: {
            args: Prisma.ProviderCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>[]
          }
          upsert: {
            args: Prisma.ProviderCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderCustomerPayload>
          }
          aggregate: {
            args: Prisma.ProviderCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderCustomer>
          }
          groupBy: {
            args: Prisma.ProviderCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCustomerCountAggregateOutputType> | number
          }
        }
      }
      PreferredPaymentSettings: {
        payload: Prisma.$PreferredPaymentSettingsPayload<ExtArgs>
        fields: Prisma.PreferredPaymentSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferredPaymentSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferredPaymentSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          findFirst: {
            args: Prisma.PreferredPaymentSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferredPaymentSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          findMany: {
            args: Prisma.PreferredPaymentSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>[]
          }
          create: {
            args: Prisma.PreferredPaymentSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          createMany: {
            args: Prisma.PreferredPaymentSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferredPaymentSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>[]
          }
          delete: {
            args: Prisma.PreferredPaymentSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          update: {
            args: Prisma.PreferredPaymentSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PreferredPaymentSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferredPaymentSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferredPaymentSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PreferredPaymentSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferredPaymentSettingsPayload>
          }
          aggregate: {
            args: Prisma.PreferredPaymentSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferredPaymentSettings>
          }
          groupBy: {
            args: Prisma.PreferredPaymentSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferredPaymentSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferredPaymentSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PreferredPaymentSettingsCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    paymentAttempt?: PaymentAttemptOmit
    refund?: RefundOmit
    providerCustomer?: ProviderCustomerOmit
    preferredPaymentSettings?: PreferredPaymentSettingsOmit
    paymentMethod?: PaymentMethodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PreferredPaymentSettingsCountOutputType
   */

  export type PreferredPaymentSettingsCountOutputType = {
    paymentMethods: number
  }

  export type PreferredPaymentSettingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethods?: boolean | PreferredPaymentSettingsCountOutputTypeCountPaymentMethodsArgs
  }

  // Custom InputTypes
  /**
   * PreferredPaymentSettingsCountOutputType without action
   */
  export type PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettingsCountOutputType
     */
    select?: PreferredPaymentSettingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PreferredPaymentSettingsCountOutputType without action
   */
  export type PreferredPaymentSettingsCountOutputTypeCountPaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentAttempt
   */

  export type AggregatePaymentAttempt = {
    _count: PaymentAttemptCountAggregateOutputType | null
    _min: PaymentAttemptMinAggregateOutputType | null
    _max: PaymentAttemptMaxAggregateOutputType | null
  }

  export type PaymentAttemptMinAggregateOutputType = {
    idempotencyKey: string | null
    orderId: string | null
    status: $Enums.PaymentAttemptStatus | null
    provider: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentAttemptMaxAggregateOutputType = {
    idempotencyKey: string | null
    orderId: string | null
    status: $Enums.PaymentAttemptStatus | null
    provider: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentAttemptCountAggregateOutputType = {
    idempotencyKey: number
    orderId: number
    status: number
    provider: number
    transactionId: number
    responseData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAttemptMinAggregateInputType = {
    idempotencyKey?: true
    orderId?: true
    status?: true
    provider?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentAttemptMaxAggregateInputType = {
    idempotencyKey?: true
    orderId?: true
    status?: true
    provider?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentAttemptCountAggregateInputType = {
    idempotencyKey?: true
    orderId?: true
    status?: true
    provider?: true
    transactionId?: true
    responseData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentAttempt to aggregate.
     */
    where?: PaymentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentAttempts to fetch.
     */
    orderBy?: PaymentAttemptOrderByWithRelationInput | PaymentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentAttempts
    **/
    _count?: true | PaymentAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentAttemptMaxAggregateInputType
  }

  export type GetPaymentAttemptAggregateType<T extends PaymentAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentAttempt[P]>
      : GetScalarType<T[P], AggregatePaymentAttempt[P]>
  }




  export type PaymentAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentAttemptWhereInput
    orderBy?: PaymentAttemptOrderByWithAggregationInput | PaymentAttemptOrderByWithAggregationInput[]
    by: PaymentAttemptScalarFieldEnum[] | PaymentAttemptScalarFieldEnum
    having?: PaymentAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentAttemptCountAggregateInputType | true
    _min?: PaymentAttemptMinAggregateInputType
    _max?: PaymentAttemptMaxAggregateInputType
  }

  export type PaymentAttemptGroupByOutputType = {
    idempotencyKey: string
    orderId: string | null
    status: $Enums.PaymentAttemptStatus
    provider: string
    transactionId: string | null
    responseData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentAttemptCountAggregateOutputType | null
    _min: PaymentAttemptMinAggregateOutputType | null
    _max: PaymentAttemptMaxAggregateOutputType | null
  }

  type GetPaymentAttemptGroupByPayload<T extends PaymentAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentAttemptGroupByOutputType[P]>
        }
      >
    >


  export type PaymentAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idempotencyKey?: boolean
    orderId?: boolean
    status?: boolean
    provider?: boolean
    transactionId?: boolean
    responseData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentAttempt"]>

  export type PaymentAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idempotencyKey?: boolean
    orderId?: boolean
    status?: boolean
    provider?: boolean
    transactionId?: boolean
    responseData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentAttempt"]>

  export type PaymentAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idempotencyKey?: boolean
    orderId?: boolean
    status?: boolean
    provider?: boolean
    transactionId?: boolean
    responseData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentAttempt"]>

  export type PaymentAttemptSelectScalar = {
    idempotencyKey?: boolean
    orderId?: boolean
    status?: boolean
    provider?: boolean
    transactionId?: boolean
    responseData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idempotencyKey" | "orderId" | "status" | "provider" | "transactionId" | "responseData" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentAttempt"]>

  export type $PaymentAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentAttempt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idempotencyKey: string
      orderId: string | null
      status: $Enums.PaymentAttemptStatus
      provider: string
      transactionId: string | null
      responseData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentAttempt"]>
    composites: {}
  }

  type PaymentAttemptGetPayload<S extends boolean | null | undefined | PaymentAttemptDefaultArgs> = $Result.GetResult<Prisma.$PaymentAttemptPayload, S>

  type PaymentAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentAttemptCountAggregateInputType | true
    }

  export interface PaymentAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentAttempt'], meta: { name: 'PaymentAttempt' } }
    /**
     * Find zero or one PaymentAttempt that matches the filter.
     * @param {PaymentAttemptFindUniqueArgs} args - Arguments to find a PaymentAttempt
     * @example
     * // Get one PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentAttemptFindUniqueArgs>(args: SelectSubset<T, PaymentAttemptFindUniqueArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentAttemptFindUniqueOrThrowArgs} args - Arguments to find a PaymentAttempt
     * @example
     * // Get one PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptFindFirstArgs} args - Arguments to find a PaymentAttempt
     * @example
     * // Get one PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentAttemptFindFirstArgs>(args?: SelectSubset<T, PaymentAttemptFindFirstArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptFindFirstOrThrowArgs} args - Arguments to find a PaymentAttempt
     * @example
     * // Get one PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentAttempts
     * const paymentAttempts = await prisma.paymentAttempt.findMany()
     * 
     * // Get first 10 PaymentAttempts
     * const paymentAttempts = await prisma.paymentAttempt.findMany({ take: 10 })
     * 
     * // Only select the `idempotencyKey`
     * const paymentAttemptWithIdempotencyKeyOnly = await prisma.paymentAttempt.findMany({ select: { idempotencyKey: true } })
     * 
     */
    findMany<T extends PaymentAttemptFindManyArgs>(args?: SelectSubset<T, PaymentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentAttempt.
     * @param {PaymentAttemptCreateArgs} args - Arguments to create a PaymentAttempt.
     * @example
     * // Create one PaymentAttempt
     * const PaymentAttempt = await prisma.paymentAttempt.create({
     *   data: {
     *     // ... data to create a PaymentAttempt
     *   }
     * })
     * 
     */
    create<T extends PaymentAttemptCreateArgs>(args: SelectSubset<T, PaymentAttemptCreateArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentAttempts.
     * @param {PaymentAttemptCreateManyArgs} args - Arguments to create many PaymentAttempts.
     * @example
     * // Create many PaymentAttempts
     * const paymentAttempt = await prisma.paymentAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentAttemptCreateManyArgs>(args?: SelectSubset<T, PaymentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentAttempts and returns the data saved in the database.
     * @param {PaymentAttemptCreateManyAndReturnArgs} args - Arguments to create many PaymentAttempts.
     * @example
     * // Create many PaymentAttempts
     * const paymentAttempt = await prisma.paymentAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentAttempts and only return the `idempotencyKey`
     * const paymentAttemptWithIdempotencyKeyOnly = await prisma.paymentAttempt.createManyAndReturn({
     *   select: { idempotencyKey: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentAttempt.
     * @param {PaymentAttemptDeleteArgs} args - Arguments to delete one PaymentAttempt.
     * @example
     * // Delete one PaymentAttempt
     * const PaymentAttempt = await prisma.paymentAttempt.delete({
     *   where: {
     *     // ... filter to delete one PaymentAttempt
     *   }
     * })
     * 
     */
    delete<T extends PaymentAttemptDeleteArgs>(args: SelectSubset<T, PaymentAttemptDeleteArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentAttempt.
     * @param {PaymentAttemptUpdateArgs} args - Arguments to update one PaymentAttempt.
     * @example
     * // Update one PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentAttemptUpdateArgs>(args: SelectSubset<T, PaymentAttemptUpdateArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentAttempts.
     * @param {PaymentAttemptDeleteManyArgs} args - Arguments to filter PaymentAttempts to delete.
     * @example
     * // Delete a few PaymentAttempts
     * const { count } = await prisma.paymentAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentAttemptDeleteManyArgs>(args?: SelectSubset<T, PaymentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentAttempts
     * const paymentAttempt = await prisma.paymentAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentAttemptUpdateManyArgs>(args: SelectSubset<T, PaymentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentAttempts and returns the data updated in the database.
     * @param {PaymentAttemptUpdateManyAndReturnArgs} args - Arguments to update many PaymentAttempts.
     * @example
     * // Update many PaymentAttempts
     * const paymentAttempt = await prisma.paymentAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentAttempts and only return the `idempotencyKey`
     * const paymentAttemptWithIdempotencyKeyOnly = await prisma.paymentAttempt.updateManyAndReturn({
     *   select: { idempotencyKey: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentAttempt.
     * @param {PaymentAttemptUpsertArgs} args - Arguments to update or create a PaymentAttempt.
     * @example
     * // Update or create a PaymentAttempt
     * const paymentAttempt = await prisma.paymentAttempt.upsert({
     *   create: {
     *     // ... data to create a PaymentAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentAttempt we want to update
     *   }
     * })
     */
    upsert<T extends PaymentAttemptUpsertArgs>(args: SelectSubset<T, PaymentAttemptUpsertArgs<ExtArgs>>): Prisma__PaymentAttemptClient<$Result.GetResult<Prisma.$PaymentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptCountArgs} args - Arguments to filter PaymentAttempts to count.
     * @example
     * // Count the number of PaymentAttempts
     * const count = await prisma.paymentAttempt.count({
     *   where: {
     *     // ... the filter for the PaymentAttempts we want to count
     *   }
     * })
    **/
    count<T extends PaymentAttemptCountArgs>(
      args?: Subset<T, PaymentAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAttemptAggregateArgs>(args: Subset<T, PaymentAttemptAggregateArgs>): Prisma.PrismaPromise<GetPaymentAttemptAggregateType<T>>

    /**
     * Group by PaymentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentAttemptGroupByArgs['orderBy'] }
        : { orderBy?: PaymentAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentAttempt model
   */
  readonly fields: PaymentAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentAttempt model
   */
  interface PaymentAttemptFieldRefs {
    readonly idempotencyKey: FieldRef<"PaymentAttempt", 'String'>
    readonly orderId: FieldRef<"PaymentAttempt", 'String'>
    readonly status: FieldRef<"PaymentAttempt", 'PaymentAttemptStatus'>
    readonly provider: FieldRef<"PaymentAttempt", 'String'>
    readonly transactionId: FieldRef<"PaymentAttempt", 'String'>
    readonly responseData: FieldRef<"PaymentAttempt", 'Json'>
    readonly createdAt: FieldRef<"PaymentAttempt", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentAttempt findUnique
   */
  export type PaymentAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter, which PaymentAttempt to fetch.
     */
    where: PaymentAttemptWhereUniqueInput
  }

  /**
   * PaymentAttempt findUniqueOrThrow
   */
  export type PaymentAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter, which PaymentAttempt to fetch.
     */
    where: PaymentAttemptWhereUniqueInput
  }

  /**
   * PaymentAttempt findFirst
   */
  export type PaymentAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter, which PaymentAttempt to fetch.
     */
    where?: PaymentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentAttempts to fetch.
     */
    orderBy?: PaymentAttemptOrderByWithRelationInput | PaymentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentAttempts.
     */
    cursor?: PaymentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentAttempts.
     */
    distinct?: PaymentAttemptScalarFieldEnum | PaymentAttemptScalarFieldEnum[]
  }

  /**
   * PaymentAttempt findFirstOrThrow
   */
  export type PaymentAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter, which PaymentAttempt to fetch.
     */
    where?: PaymentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentAttempts to fetch.
     */
    orderBy?: PaymentAttemptOrderByWithRelationInput | PaymentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentAttempts.
     */
    cursor?: PaymentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentAttempts.
     */
    distinct?: PaymentAttemptScalarFieldEnum | PaymentAttemptScalarFieldEnum[]
  }

  /**
   * PaymentAttempt findMany
   */
  export type PaymentAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter, which PaymentAttempts to fetch.
     */
    where?: PaymentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentAttempts to fetch.
     */
    orderBy?: PaymentAttemptOrderByWithRelationInput | PaymentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentAttempts.
     */
    cursor?: PaymentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentAttempts.
     */
    distinct?: PaymentAttemptScalarFieldEnum | PaymentAttemptScalarFieldEnum[]
  }

  /**
   * PaymentAttempt create
   */
  export type PaymentAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentAttempt.
     */
    data: XOR<PaymentAttemptCreateInput, PaymentAttemptUncheckedCreateInput>
  }

  /**
   * PaymentAttempt createMany
   */
  export type PaymentAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentAttempts.
     */
    data: PaymentAttemptCreateManyInput | PaymentAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentAttempt createManyAndReturn
   */
  export type PaymentAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentAttempts.
     */
    data: PaymentAttemptCreateManyInput | PaymentAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentAttempt update
   */
  export type PaymentAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentAttempt.
     */
    data: XOR<PaymentAttemptUpdateInput, PaymentAttemptUncheckedUpdateInput>
    /**
     * Choose, which PaymentAttempt to update.
     */
    where: PaymentAttemptWhereUniqueInput
  }

  /**
   * PaymentAttempt updateMany
   */
  export type PaymentAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentAttempts.
     */
    data: XOR<PaymentAttemptUpdateManyMutationInput, PaymentAttemptUncheckedUpdateManyInput>
    /**
     * Filter which PaymentAttempts to update
     */
    where?: PaymentAttemptWhereInput
    /**
     * Limit how many PaymentAttempts to update.
     */
    limit?: number
  }

  /**
   * PaymentAttempt updateManyAndReturn
   */
  export type PaymentAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * The data used to update PaymentAttempts.
     */
    data: XOR<PaymentAttemptUpdateManyMutationInput, PaymentAttemptUncheckedUpdateManyInput>
    /**
     * Filter which PaymentAttempts to update
     */
    where?: PaymentAttemptWhereInput
    /**
     * Limit how many PaymentAttempts to update.
     */
    limit?: number
  }

  /**
   * PaymentAttempt upsert
   */
  export type PaymentAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentAttempt to update in case it exists.
     */
    where: PaymentAttemptWhereUniqueInput
    /**
     * In case the PaymentAttempt found by the `where` argument doesn't exist, create a new PaymentAttempt with this data.
     */
    create: XOR<PaymentAttemptCreateInput, PaymentAttemptUncheckedCreateInput>
    /**
     * In case the PaymentAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentAttemptUpdateInput, PaymentAttemptUncheckedUpdateInput>
  }

  /**
   * PaymentAttempt delete
   */
  export type PaymentAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
    /**
     * Filter which PaymentAttempt to delete.
     */
    where: PaymentAttemptWhereUniqueInput
  }

  /**
   * PaymentAttempt deleteMany
   */
  export type PaymentAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentAttempts to delete
     */
    where?: PaymentAttemptWhereInput
    /**
     * Limit how many PaymentAttempts to delete.
     */
    limit?: number
  }

  /**
   * PaymentAttempt without action
   */
  export type PaymentAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentAttempt
     */
    select?: PaymentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentAttempt
     */
    omit?: PaymentAttemptOmit<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundMinAggregateOutputType = {
    refundId: string | null
    orderId: string | null
    paymentAttemptId: string | null
    refundTransactionId: string | null
    amount: Decimal | null
    status: $Enums.RefundStatus | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundMaxAggregateOutputType = {
    refundId: string | null
    orderId: string | null
    paymentAttemptId: string | null
    refundTransactionId: string | null
    amount: Decimal | null
    status: $Enums.RefundStatus | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundCountAggregateOutputType = {
    refundId: number
    orderId: number
    paymentAttemptId: number
    refundTransactionId: number
    amount: number
    status: number
    provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amount?: true
  }

  export type RefundSumAggregateInputType = {
    amount?: true
  }

  export type RefundMinAggregateInputType = {
    refundId?: true
    orderId?: true
    paymentAttemptId?: true
    refundTransactionId?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundMaxAggregateInputType = {
    refundId?: true
    orderId?: true
    paymentAttemptId?: true
    refundTransactionId?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundCountAggregateInputType = {
    refundId?: true
    orderId?: true
    paymentAttemptId?: true
    refundTransactionId?: true
    amount?: true
    status?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    refundId: string
    orderId: string
    paymentAttemptId: string
    refundTransactionId: string
    amount: Decimal
    status: $Enums.RefundStatus
    provider: string
    createdAt: Date
    updatedAt: Date
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refundId?: boolean
    orderId?: boolean
    paymentAttemptId?: boolean
    refundTransactionId?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refundId?: boolean
    orderId?: boolean
    paymentAttemptId?: boolean
    refundTransactionId?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    refundId?: boolean
    orderId?: boolean
    paymentAttemptId?: boolean
    refundTransactionId?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    refundId?: boolean
    orderId?: boolean
    paymentAttemptId?: boolean
    refundTransactionId?: boolean
    amount?: boolean
    status?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"refundId" | "orderId" | "paymentAttemptId" | "refundTransactionId" | "amount" | "status" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["refund"]>

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      refundId: string
      orderId: string
      paymentAttemptId: string
      refundTransactionId: string
      amount: Prisma.Decimal
      status: $Enums.RefundStatus
      provider: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `refundId`
     * const refundWithRefundIdOnly = await prisma.refund.findMany({ select: { refundId: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `refundId`
     * const refundWithRefundIdOnly = await prisma.refund.createManyAndReturn({
     *   select: { refundId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `refundId`
     * const refundWithRefundIdOnly = await prisma.refund.updateManyAndReturn({
     *   select: { refundId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refund model
   */
  interface RefundFieldRefs {
    readonly refundId: FieldRef<"Refund", 'String'>
    readonly orderId: FieldRef<"Refund", 'String'>
    readonly paymentAttemptId: FieldRef<"Refund", 'String'>
    readonly refundTransactionId: FieldRef<"Refund", 'String'>
    readonly amount: FieldRef<"Refund", 'Decimal'>
    readonly status: FieldRef<"Refund", 'RefundStatus'>
    readonly provider: FieldRef<"Refund", 'String'>
    readonly createdAt: FieldRef<"Refund", 'DateTime'>
    readonly updatedAt: FieldRef<"Refund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund updateManyAndReturn
   */
  export type RefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
  }


  /**
   * Model ProviderCustomer
   */

  export type AggregateProviderCustomer = {
    _count: ProviderCustomerCountAggregateOutputType | null
    _min: ProviderCustomerMinAggregateOutputType | null
    _max: ProviderCustomerMaxAggregateOutputType | null
  }

  export type ProviderCustomerMinAggregateOutputType = {
    providerCustomerId: string | null
    customerId: string | null
    provider: string | null
    externalCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCustomerMaxAggregateOutputType = {
    providerCustomerId: string | null
    customerId: string | null
    provider: string | null
    externalCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCustomerCountAggregateOutputType = {
    providerCustomerId: number
    customerId: number
    provider: number
    externalCustomerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderCustomerMinAggregateInputType = {
    providerCustomerId?: true
    customerId?: true
    provider?: true
    externalCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCustomerMaxAggregateInputType = {
    providerCustomerId?: true
    customerId?: true
    provider?: true
    externalCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCustomerCountAggregateInputType = {
    providerCustomerId?: true
    customerId?: true
    provider?: true
    externalCustomerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderCustomer to aggregate.
     */
    where?: ProviderCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderCustomers to fetch.
     */
    orderBy?: ProviderCustomerOrderByWithRelationInput | ProviderCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderCustomers
    **/
    _count?: true | ProviderCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderCustomerMaxAggregateInputType
  }

  export type GetProviderCustomerAggregateType<T extends ProviderCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderCustomer[P]>
      : GetScalarType<T[P], AggregateProviderCustomer[P]>
  }




  export type ProviderCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderCustomerWhereInput
    orderBy?: ProviderCustomerOrderByWithAggregationInput | ProviderCustomerOrderByWithAggregationInput[]
    by: ProviderCustomerScalarFieldEnum[] | ProviderCustomerScalarFieldEnum
    having?: ProviderCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCustomerCountAggregateInputType | true
    _min?: ProviderCustomerMinAggregateInputType
    _max?: ProviderCustomerMaxAggregateInputType
  }

  export type ProviderCustomerGroupByOutputType = {
    providerCustomerId: string
    customerId: string
    provider: string
    externalCustomerId: string
    createdAt: Date
    updatedAt: Date
    _count: ProviderCustomerCountAggregateOutputType | null
    _min: ProviderCustomerMinAggregateOutputType | null
    _max: ProviderCustomerMaxAggregateOutputType | null
  }

  type GetProviderCustomerGroupByPayload<T extends ProviderCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderCustomerGroupByOutputType[P]>
        }
      >
    >


  export type ProviderCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerCustomerId?: boolean
    customerId?: boolean
    provider?: boolean
    externalCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerCustomer"]>

  export type ProviderCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerCustomerId?: boolean
    customerId?: boolean
    provider?: boolean
    externalCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerCustomer"]>

  export type ProviderCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerCustomerId?: boolean
    customerId?: boolean
    provider?: boolean
    externalCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerCustomer"]>

  export type ProviderCustomerSelectScalar = {
    providerCustomerId?: boolean
    customerId?: boolean
    provider?: boolean
    externalCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"providerCustomerId" | "customerId" | "provider" | "externalCustomerId" | "createdAt" | "updatedAt", ExtArgs["result"]["providerCustomer"]>

  export type $ProviderCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderCustomer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      providerCustomerId: string
      customerId: string
      provider: string
      externalCustomerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerCustomer"]>
    composites: {}
  }

  type ProviderCustomerGetPayload<S extends boolean | null | undefined | ProviderCustomerDefaultArgs> = $Result.GetResult<Prisma.$ProviderCustomerPayload, S>

  type ProviderCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCustomerCountAggregateInputType | true
    }

  export interface ProviderCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderCustomer'], meta: { name: 'ProviderCustomer' } }
    /**
     * Find zero or one ProviderCustomer that matches the filter.
     * @param {ProviderCustomerFindUniqueArgs} args - Arguments to find a ProviderCustomer
     * @example
     * // Get one ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderCustomerFindUniqueArgs>(args: SelectSubset<T, ProviderCustomerFindUniqueArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderCustomerFindUniqueOrThrowArgs} args - Arguments to find a ProviderCustomer
     * @example
     * // Get one ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerFindFirstArgs} args - Arguments to find a ProviderCustomer
     * @example
     * // Get one ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderCustomerFindFirstArgs>(args?: SelectSubset<T, ProviderCustomerFindFirstArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerFindFirstOrThrowArgs} args - Arguments to find a ProviderCustomer
     * @example
     * // Get one ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderCustomers
     * const providerCustomers = await prisma.providerCustomer.findMany()
     * 
     * // Get first 10 ProviderCustomers
     * const providerCustomers = await prisma.providerCustomer.findMany({ take: 10 })
     * 
     * // Only select the `providerCustomerId`
     * const providerCustomerWithProviderCustomerIdOnly = await prisma.providerCustomer.findMany({ select: { providerCustomerId: true } })
     * 
     */
    findMany<T extends ProviderCustomerFindManyArgs>(args?: SelectSubset<T, ProviderCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderCustomer.
     * @param {ProviderCustomerCreateArgs} args - Arguments to create a ProviderCustomer.
     * @example
     * // Create one ProviderCustomer
     * const ProviderCustomer = await prisma.providerCustomer.create({
     *   data: {
     *     // ... data to create a ProviderCustomer
     *   }
     * })
     * 
     */
    create<T extends ProviderCustomerCreateArgs>(args: SelectSubset<T, ProviderCustomerCreateArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderCustomers.
     * @param {ProviderCustomerCreateManyArgs} args - Arguments to create many ProviderCustomers.
     * @example
     * // Create many ProviderCustomers
     * const providerCustomer = await prisma.providerCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCustomerCreateManyArgs>(args?: SelectSubset<T, ProviderCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderCustomers and returns the data saved in the database.
     * @param {ProviderCustomerCreateManyAndReturnArgs} args - Arguments to create many ProviderCustomers.
     * @example
     * // Create many ProviderCustomers
     * const providerCustomer = await prisma.providerCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderCustomers and only return the `providerCustomerId`
     * const providerCustomerWithProviderCustomerIdOnly = await prisma.providerCustomer.createManyAndReturn({
     *   select: { providerCustomerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderCustomer.
     * @param {ProviderCustomerDeleteArgs} args - Arguments to delete one ProviderCustomer.
     * @example
     * // Delete one ProviderCustomer
     * const ProviderCustomer = await prisma.providerCustomer.delete({
     *   where: {
     *     // ... filter to delete one ProviderCustomer
     *   }
     * })
     * 
     */
    delete<T extends ProviderCustomerDeleteArgs>(args: SelectSubset<T, ProviderCustomerDeleteArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderCustomer.
     * @param {ProviderCustomerUpdateArgs} args - Arguments to update one ProviderCustomer.
     * @example
     * // Update one ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderCustomerUpdateArgs>(args: SelectSubset<T, ProviderCustomerUpdateArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderCustomers.
     * @param {ProviderCustomerDeleteManyArgs} args - Arguments to filter ProviderCustomers to delete.
     * @example
     * // Delete a few ProviderCustomers
     * const { count } = await prisma.providerCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderCustomerDeleteManyArgs>(args?: SelectSubset<T, ProviderCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderCustomers
     * const providerCustomer = await prisma.providerCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderCustomerUpdateManyArgs>(args: SelectSubset<T, ProviderCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderCustomers and returns the data updated in the database.
     * @param {ProviderCustomerUpdateManyAndReturnArgs} args - Arguments to update many ProviderCustomers.
     * @example
     * // Update many ProviderCustomers
     * const providerCustomer = await prisma.providerCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderCustomers and only return the `providerCustomerId`
     * const providerCustomerWithProviderCustomerIdOnly = await prisma.providerCustomer.updateManyAndReturn({
     *   select: { providerCustomerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderCustomer.
     * @param {ProviderCustomerUpsertArgs} args - Arguments to update or create a ProviderCustomer.
     * @example
     * // Update or create a ProviderCustomer
     * const providerCustomer = await prisma.providerCustomer.upsert({
     *   create: {
     *     // ... data to create a ProviderCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderCustomer we want to update
     *   }
     * })
     */
    upsert<T extends ProviderCustomerUpsertArgs>(args: SelectSubset<T, ProviderCustomerUpsertArgs<ExtArgs>>): Prisma__ProviderCustomerClient<$Result.GetResult<Prisma.$ProviderCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerCountArgs} args - Arguments to filter ProviderCustomers to count.
     * @example
     * // Count the number of ProviderCustomers
     * const count = await prisma.providerCustomer.count({
     *   where: {
     *     // ... the filter for the ProviderCustomers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCustomerCountArgs>(
      args?: Subset<T, ProviderCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderCustomerAggregateArgs>(args: Subset<T, ProviderCustomerAggregateArgs>): Prisma.PrismaPromise<GetProviderCustomerAggregateType<T>>

    /**
     * Group by ProviderCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderCustomerGroupByArgs['orderBy'] }
        : { orderBy?: ProviderCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderCustomer model
   */
  readonly fields: ProviderCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderCustomer model
   */
  interface ProviderCustomerFieldRefs {
    readonly providerCustomerId: FieldRef<"ProviderCustomer", 'String'>
    readonly customerId: FieldRef<"ProviderCustomer", 'String'>
    readonly provider: FieldRef<"ProviderCustomer", 'String'>
    readonly externalCustomerId: FieldRef<"ProviderCustomer", 'String'>
    readonly createdAt: FieldRef<"ProviderCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderCustomer findUnique
   */
  export type ProviderCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter, which ProviderCustomer to fetch.
     */
    where: ProviderCustomerWhereUniqueInput
  }

  /**
   * ProviderCustomer findUniqueOrThrow
   */
  export type ProviderCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter, which ProviderCustomer to fetch.
     */
    where: ProviderCustomerWhereUniqueInput
  }

  /**
   * ProviderCustomer findFirst
   */
  export type ProviderCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter, which ProviderCustomer to fetch.
     */
    where?: ProviderCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderCustomers to fetch.
     */
    orderBy?: ProviderCustomerOrderByWithRelationInput | ProviderCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderCustomers.
     */
    cursor?: ProviderCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderCustomers.
     */
    distinct?: ProviderCustomerScalarFieldEnum | ProviderCustomerScalarFieldEnum[]
  }

  /**
   * ProviderCustomer findFirstOrThrow
   */
  export type ProviderCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter, which ProviderCustomer to fetch.
     */
    where?: ProviderCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderCustomers to fetch.
     */
    orderBy?: ProviderCustomerOrderByWithRelationInput | ProviderCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderCustomers.
     */
    cursor?: ProviderCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderCustomers.
     */
    distinct?: ProviderCustomerScalarFieldEnum | ProviderCustomerScalarFieldEnum[]
  }

  /**
   * ProviderCustomer findMany
   */
  export type ProviderCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter, which ProviderCustomers to fetch.
     */
    where?: ProviderCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderCustomers to fetch.
     */
    orderBy?: ProviderCustomerOrderByWithRelationInput | ProviderCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderCustomers.
     */
    cursor?: ProviderCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderCustomers.
     */
    distinct?: ProviderCustomerScalarFieldEnum | ProviderCustomerScalarFieldEnum[]
  }

  /**
   * ProviderCustomer create
   */
  export type ProviderCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a ProviderCustomer.
     */
    data: XOR<ProviderCustomerCreateInput, ProviderCustomerUncheckedCreateInput>
  }

  /**
   * ProviderCustomer createMany
   */
  export type ProviderCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderCustomers.
     */
    data: ProviderCustomerCreateManyInput | ProviderCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderCustomer createManyAndReturn
   */
  export type ProviderCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderCustomers.
     */
    data: ProviderCustomerCreateManyInput | ProviderCustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderCustomer update
   */
  export type ProviderCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a ProviderCustomer.
     */
    data: XOR<ProviderCustomerUpdateInput, ProviderCustomerUncheckedUpdateInput>
    /**
     * Choose, which ProviderCustomer to update.
     */
    where: ProviderCustomerWhereUniqueInput
  }

  /**
   * ProviderCustomer updateMany
   */
  export type ProviderCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderCustomers.
     */
    data: XOR<ProviderCustomerUpdateManyMutationInput, ProviderCustomerUncheckedUpdateManyInput>
    /**
     * Filter which ProviderCustomers to update
     */
    where?: ProviderCustomerWhereInput
    /**
     * Limit how many ProviderCustomers to update.
     */
    limit?: number
  }

  /**
   * ProviderCustomer updateManyAndReturn
   */
  export type ProviderCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * The data used to update ProviderCustomers.
     */
    data: XOR<ProviderCustomerUpdateManyMutationInput, ProviderCustomerUncheckedUpdateManyInput>
    /**
     * Filter which ProviderCustomers to update
     */
    where?: ProviderCustomerWhereInput
    /**
     * Limit how many ProviderCustomers to update.
     */
    limit?: number
  }

  /**
   * ProviderCustomer upsert
   */
  export type ProviderCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the ProviderCustomer to update in case it exists.
     */
    where: ProviderCustomerWhereUniqueInput
    /**
     * In case the ProviderCustomer found by the `where` argument doesn't exist, create a new ProviderCustomer with this data.
     */
    create: XOR<ProviderCustomerCreateInput, ProviderCustomerUncheckedCreateInput>
    /**
     * In case the ProviderCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderCustomerUpdateInput, ProviderCustomerUncheckedUpdateInput>
  }

  /**
   * ProviderCustomer delete
   */
  export type ProviderCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
    /**
     * Filter which ProviderCustomer to delete.
     */
    where: ProviderCustomerWhereUniqueInput
  }

  /**
   * ProviderCustomer deleteMany
   */
  export type ProviderCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderCustomers to delete
     */
    where?: ProviderCustomerWhereInput
    /**
     * Limit how many ProviderCustomers to delete.
     */
    limit?: number
  }

  /**
   * ProviderCustomer without action
   */
  export type ProviderCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCustomer
     */
    select?: ProviderCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderCustomer
     */
    omit?: ProviderCustomerOmit<ExtArgs> | null
  }


  /**
   * Model PreferredPaymentSettings
   */

  export type AggregatePreferredPaymentSettings = {
    _count: PreferredPaymentSettingsCountAggregateOutputType | null
    _min: PreferredPaymentSettingsMinAggregateOutputType | null
    _max: PreferredPaymentSettingsMaxAggregateOutputType | null
  }

  export type PreferredPaymentSettingsMinAggregateOutputType = {
    preferredPaymentSettingsId: string | null
    customerId: string | null
    paymentMethodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferredPaymentSettingsMaxAggregateOutputType = {
    preferredPaymentSettingsId: string | null
    customerId: string | null
    paymentMethodId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferredPaymentSettingsCountAggregateOutputType = {
    preferredPaymentSettingsId: number
    customerId: number
    paymentMethodId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreferredPaymentSettingsMinAggregateInputType = {
    preferredPaymentSettingsId?: true
    customerId?: true
    paymentMethodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferredPaymentSettingsMaxAggregateInputType = {
    preferredPaymentSettingsId?: true
    customerId?: true
    paymentMethodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferredPaymentSettingsCountAggregateInputType = {
    preferredPaymentSettingsId?: true
    customerId?: true
    paymentMethodId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreferredPaymentSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferredPaymentSettings to aggregate.
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredPaymentSettings to fetch.
     */
    orderBy?: PreferredPaymentSettingsOrderByWithRelationInput | PreferredPaymentSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferredPaymentSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredPaymentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredPaymentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreferredPaymentSettings
    **/
    _count?: true | PreferredPaymentSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferredPaymentSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferredPaymentSettingsMaxAggregateInputType
  }

  export type GetPreferredPaymentSettingsAggregateType<T extends PreferredPaymentSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferredPaymentSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferredPaymentSettings[P]>
      : GetScalarType<T[P], AggregatePreferredPaymentSettings[P]>
  }




  export type PreferredPaymentSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferredPaymentSettingsWhereInput
    orderBy?: PreferredPaymentSettingsOrderByWithAggregationInput | PreferredPaymentSettingsOrderByWithAggregationInput[]
    by: PreferredPaymentSettingsScalarFieldEnum[] | PreferredPaymentSettingsScalarFieldEnum
    having?: PreferredPaymentSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferredPaymentSettingsCountAggregateInputType | true
    _min?: PreferredPaymentSettingsMinAggregateInputType
    _max?: PreferredPaymentSettingsMaxAggregateInputType
  }

  export type PreferredPaymentSettingsGroupByOutputType = {
    preferredPaymentSettingsId: string
    customerId: string
    paymentMethodId: string
    createdAt: Date
    updatedAt: Date
    _count: PreferredPaymentSettingsCountAggregateOutputType | null
    _min: PreferredPaymentSettingsMinAggregateOutputType | null
    _max: PreferredPaymentSettingsMaxAggregateOutputType | null
  }

  type GetPreferredPaymentSettingsGroupByPayload<T extends PreferredPaymentSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferredPaymentSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferredPaymentSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferredPaymentSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PreferredPaymentSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PreferredPaymentSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean
    customerId?: boolean
    paymentMethodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentMethods?: boolean | PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>
    _count?: boolean | PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferredPaymentSettings"]>

  export type PreferredPaymentSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean
    customerId?: boolean
    paymentMethodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["preferredPaymentSettings"]>

  export type PreferredPaymentSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    preferredPaymentSettingsId?: boolean
    customerId?: boolean
    paymentMethodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["preferredPaymentSettings"]>

  export type PreferredPaymentSettingsSelectScalar = {
    preferredPaymentSettingsId?: boolean
    customerId?: boolean
    paymentMethodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreferredPaymentSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"preferredPaymentSettingsId" | "customerId" | "paymentMethodId" | "createdAt" | "updatedAt", ExtArgs["result"]["preferredPaymentSettings"]>
  export type PreferredPaymentSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethods?: boolean | PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>
    _count?: boolean | PreferredPaymentSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PreferredPaymentSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PreferredPaymentSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PreferredPaymentSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreferredPaymentSettings"
    objects: {
      paymentMethods: Prisma.$PaymentMethodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      preferredPaymentSettingsId: string
      customerId: string
      paymentMethodId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["preferredPaymentSettings"]>
    composites: {}
  }

  type PreferredPaymentSettingsGetPayload<S extends boolean | null | undefined | PreferredPaymentSettingsDefaultArgs> = $Result.GetResult<Prisma.$PreferredPaymentSettingsPayload, S>

  type PreferredPaymentSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferredPaymentSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferredPaymentSettingsCountAggregateInputType | true
    }

  export interface PreferredPaymentSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreferredPaymentSettings'], meta: { name: 'PreferredPaymentSettings' } }
    /**
     * Find zero or one PreferredPaymentSettings that matches the filter.
     * @param {PreferredPaymentSettingsFindUniqueArgs} args - Arguments to find a PreferredPaymentSettings
     * @example
     * // Get one PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferredPaymentSettingsFindUniqueArgs>(args: SelectSubset<T, PreferredPaymentSettingsFindUniqueArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreferredPaymentSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferredPaymentSettingsFindUniqueOrThrowArgs} args - Arguments to find a PreferredPaymentSettings
     * @example
     * // Get one PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferredPaymentSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferredPaymentSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferredPaymentSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsFindFirstArgs} args - Arguments to find a PreferredPaymentSettings
     * @example
     * // Get one PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferredPaymentSettingsFindFirstArgs>(args?: SelectSubset<T, PreferredPaymentSettingsFindFirstArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreferredPaymentSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsFindFirstOrThrowArgs} args - Arguments to find a PreferredPaymentSettings
     * @example
     * // Get one PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferredPaymentSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferredPaymentSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreferredPaymentSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findMany()
     * 
     * // Get first 10 PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.findMany({ take: 10 })
     * 
     * // Only select the `preferredPaymentSettingsId`
     * const preferredPaymentSettingsWithPreferredPaymentSettingsIdOnly = await prisma.preferredPaymentSettings.findMany({ select: { preferredPaymentSettingsId: true } })
     * 
     */
    findMany<T extends PreferredPaymentSettingsFindManyArgs>(args?: SelectSubset<T, PreferredPaymentSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsCreateArgs} args - Arguments to create a PreferredPaymentSettings.
     * @example
     * // Create one PreferredPaymentSettings
     * const PreferredPaymentSettings = await prisma.preferredPaymentSettings.create({
     *   data: {
     *     // ... data to create a PreferredPaymentSettings
     *   }
     * })
     * 
     */
    create<T extends PreferredPaymentSettingsCreateArgs>(args: SelectSubset<T, PreferredPaymentSettingsCreateArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsCreateManyArgs} args - Arguments to create many PreferredPaymentSettings.
     * @example
     * // Create many PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferredPaymentSettingsCreateManyArgs>(args?: SelectSubset<T, PreferredPaymentSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreferredPaymentSettings and returns the data saved in the database.
     * @param {PreferredPaymentSettingsCreateManyAndReturnArgs} args - Arguments to create many PreferredPaymentSettings.
     * @example
     * // Create many PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreferredPaymentSettings and only return the `preferredPaymentSettingsId`
     * const preferredPaymentSettingsWithPreferredPaymentSettingsIdOnly = await prisma.preferredPaymentSettings.createManyAndReturn({
     *   select: { preferredPaymentSettingsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferredPaymentSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferredPaymentSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsDeleteArgs} args - Arguments to delete one PreferredPaymentSettings.
     * @example
     * // Delete one PreferredPaymentSettings
     * const PreferredPaymentSettings = await prisma.preferredPaymentSettings.delete({
     *   where: {
     *     // ... filter to delete one PreferredPaymentSettings
     *   }
     * })
     * 
     */
    delete<T extends PreferredPaymentSettingsDeleteArgs>(args: SelectSubset<T, PreferredPaymentSettingsDeleteArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsUpdateArgs} args - Arguments to update one PreferredPaymentSettings.
     * @example
     * // Update one PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferredPaymentSettingsUpdateArgs>(args: SelectSubset<T, PreferredPaymentSettingsUpdateArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsDeleteManyArgs} args - Arguments to filter PreferredPaymentSettings to delete.
     * @example
     * // Delete a few PreferredPaymentSettings
     * const { count } = await prisma.preferredPaymentSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferredPaymentSettingsDeleteManyArgs>(args?: SelectSubset<T, PreferredPaymentSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferredPaymentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferredPaymentSettingsUpdateManyArgs>(args: SelectSubset<T, PreferredPaymentSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreferredPaymentSettings and returns the data updated in the database.
     * @param {PreferredPaymentSettingsUpdateManyAndReturnArgs} args - Arguments to update many PreferredPaymentSettings.
     * @example
     * // Update many PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreferredPaymentSettings and only return the `preferredPaymentSettingsId`
     * const preferredPaymentSettingsWithPreferredPaymentSettingsIdOnly = await prisma.preferredPaymentSettings.updateManyAndReturn({
     *   select: { preferredPaymentSettingsId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferredPaymentSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferredPaymentSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreferredPaymentSettings.
     * @param {PreferredPaymentSettingsUpsertArgs} args - Arguments to update or create a PreferredPaymentSettings.
     * @example
     * // Update or create a PreferredPaymentSettings
     * const preferredPaymentSettings = await prisma.preferredPaymentSettings.upsert({
     *   create: {
     *     // ... data to create a PreferredPaymentSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreferredPaymentSettings we want to update
     *   }
     * })
     */
    upsert<T extends PreferredPaymentSettingsUpsertArgs>(args: SelectSubset<T, PreferredPaymentSettingsUpsertArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreferredPaymentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsCountArgs} args - Arguments to filter PreferredPaymentSettings to count.
     * @example
     * // Count the number of PreferredPaymentSettings
     * const count = await prisma.preferredPaymentSettings.count({
     *   where: {
     *     // ... the filter for the PreferredPaymentSettings we want to count
     *   }
     * })
    **/
    count<T extends PreferredPaymentSettingsCountArgs>(
      args?: Subset<T, PreferredPaymentSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferredPaymentSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreferredPaymentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferredPaymentSettingsAggregateArgs>(args: Subset<T, PreferredPaymentSettingsAggregateArgs>): Prisma.PrismaPromise<GetPreferredPaymentSettingsAggregateType<T>>

    /**
     * Group by PreferredPaymentSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferredPaymentSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferredPaymentSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferredPaymentSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PreferredPaymentSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferredPaymentSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferredPaymentSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreferredPaymentSettings model
   */
  readonly fields: PreferredPaymentSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreferredPaymentSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferredPaymentSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentMethods<T extends PreferredPaymentSettings$paymentMethodsArgs<ExtArgs> = {}>(args?: Subset<T, PreferredPaymentSettings$paymentMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreferredPaymentSettings model
   */
  interface PreferredPaymentSettingsFieldRefs {
    readonly preferredPaymentSettingsId: FieldRef<"PreferredPaymentSettings", 'String'>
    readonly customerId: FieldRef<"PreferredPaymentSettings", 'String'>
    readonly paymentMethodId: FieldRef<"PreferredPaymentSettings", 'String'>
    readonly createdAt: FieldRef<"PreferredPaymentSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"PreferredPaymentSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PreferredPaymentSettings findUnique
   */
  export type PreferredPaymentSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PreferredPaymentSettings to fetch.
     */
    where: PreferredPaymentSettingsWhereUniqueInput
  }

  /**
   * PreferredPaymentSettings findUniqueOrThrow
   */
  export type PreferredPaymentSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PreferredPaymentSettings to fetch.
     */
    where: PreferredPaymentSettingsWhereUniqueInput
  }

  /**
   * PreferredPaymentSettings findFirst
   */
  export type PreferredPaymentSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PreferredPaymentSettings to fetch.
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredPaymentSettings to fetch.
     */
    orderBy?: PreferredPaymentSettingsOrderByWithRelationInput | PreferredPaymentSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferredPaymentSettings.
     */
    cursor?: PreferredPaymentSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredPaymentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredPaymentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferredPaymentSettings.
     */
    distinct?: PreferredPaymentSettingsScalarFieldEnum | PreferredPaymentSettingsScalarFieldEnum[]
  }

  /**
   * PreferredPaymentSettings findFirstOrThrow
   */
  export type PreferredPaymentSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PreferredPaymentSettings to fetch.
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredPaymentSettings to fetch.
     */
    orderBy?: PreferredPaymentSettingsOrderByWithRelationInput | PreferredPaymentSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreferredPaymentSettings.
     */
    cursor?: PreferredPaymentSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredPaymentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredPaymentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferredPaymentSettings.
     */
    distinct?: PreferredPaymentSettingsScalarFieldEnum | PreferredPaymentSettingsScalarFieldEnum[]
  }

  /**
   * PreferredPaymentSettings findMany
   */
  export type PreferredPaymentSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PreferredPaymentSettings to fetch.
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreferredPaymentSettings to fetch.
     */
    orderBy?: PreferredPaymentSettingsOrderByWithRelationInput | PreferredPaymentSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreferredPaymentSettings.
     */
    cursor?: PreferredPaymentSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreferredPaymentSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreferredPaymentSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreferredPaymentSettings.
     */
    distinct?: PreferredPaymentSettingsScalarFieldEnum | PreferredPaymentSettingsScalarFieldEnum[]
  }

  /**
   * PreferredPaymentSettings create
   */
  export type PreferredPaymentSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a PreferredPaymentSettings.
     */
    data: XOR<PreferredPaymentSettingsCreateInput, PreferredPaymentSettingsUncheckedCreateInput>
  }

  /**
   * PreferredPaymentSettings createMany
   */
  export type PreferredPaymentSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreferredPaymentSettings.
     */
    data: PreferredPaymentSettingsCreateManyInput | PreferredPaymentSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferredPaymentSettings createManyAndReturn
   */
  export type PreferredPaymentSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PreferredPaymentSettings.
     */
    data: PreferredPaymentSettingsCreateManyInput | PreferredPaymentSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreferredPaymentSettings update
   */
  export type PreferredPaymentSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a PreferredPaymentSettings.
     */
    data: XOR<PreferredPaymentSettingsUpdateInput, PreferredPaymentSettingsUncheckedUpdateInput>
    /**
     * Choose, which PreferredPaymentSettings to update.
     */
    where: PreferredPaymentSettingsWhereUniqueInput
  }

  /**
   * PreferredPaymentSettings updateMany
   */
  export type PreferredPaymentSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreferredPaymentSettings.
     */
    data: XOR<PreferredPaymentSettingsUpdateManyMutationInput, PreferredPaymentSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PreferredPaymentSettings to update
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * Limit how many PreferredPaymentSettings to update.
     */
    limit?: number
  }

  /**
   * PreferredPaymentSettings updateManyAndReturn
   */
  export type PreferredPaymentSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PreferredPaymentSettings.
     */
    data: XOR<PreferredPaymentSettingsUpdateManyMutationInput, PreferredPaymentSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PreferredPaymentSettings to update
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * Limit how many PreferredPaymentSettings to update.
     */
    limit?: number
  }

  /**
   * PreferredPaymentSettings upsert
   */
  export type PreferredPaymentSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the PreferredPaymentSettings to update in case it exists.
     */
    where: PreferredPaymentSettingsWhereUniqueInput
    /**
     * In case the PreferredPaymentSettings found by the `where` argument doesn't exist, create a new PreferredPaymentSettings with this data.
     */
    create: XOR<PreferredPaymentSettingsCreateInput, PreferredPaymentSettingsUncheckedCreateInput>
    /**
     * In case the PreferredPaymentSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferredPaymentSettingsUpdateInput, PreferredPaymentSettingsUncheckedUpdateInput>
  }

  /**
   * PreferredPaymentSettings delete
   */
  export type PreferredPaymentSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
    /**
     * Filter which PreferredPaymentSettings to delete.
     */
    where: PreferredPaymentSettingsWhereUniqueInput
  }

  /**
   * PreferredPaymentSettings deleteMany
   */
  export type PreferredPaymentSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreferredPaymentSettings to delete
     */
    where?: PreferredPaymentSettingsWhereInput
    /**
     * Limit how many PreferredPaymentSettings to delete.
     */
    limit?: number
  }

  /**
   * PreferredPaymentSettings.paymentMethods
   */
  export type PreferredPaymentSettings$paymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PreferredPaymentSettings without action
   */
  export type PreferredPaymentSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreferredPaymentSettings
     */
    select?: PreferredPaymentSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreferredPaymentSettings
     */
    omit?: PreferredPaymentSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferredPaymentSettingsInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    paymentMethodId: string | null
    paymentMethodName: string | null
    preferredPaymentSettingsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    paymentMethodId: string | null
    paymentMethodName: string | null
    preferredPaymentSettingsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    paymentMethodId: number
    paymentMethodName: number
    paymentMethodData: number
    preferredPaymentSettingsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMethodMinAggregateInputType = {
    paymentMethodId?: true
    paymentMethodName?: true
    preferredPaymentSettingsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    paymentMethodId?: true
    paymentMethodName?: true
    preferredPaymentSettingsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    paymentMethodId?: true
    paymentMethodName?: true
    paymentMethodData?: true
    preferredPaymentSettingsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    paymentMethodId: string
    paymentMethodName: string
    paymentMethodData: JsonValue
    preferredPaymentSettingsId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentMethodId?: boolean
    paymentMethodName?: boolean
    paymentMethodData?: boolean
    preferredPaymentSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentMethodId?: boolean
    paymentMethodName?: boolean
    paymentMethodData?: boolean
    preferredPaymentSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentMethodId?: boolean
    paymentMethodName?: boolean
    paymentMethodData?: boolean
    preferredPaymentSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    paymentMethodId?: boolean
    paymentMethodName?: boolean
    paymentMethodData?: boolean
    preferredPaymentSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"paymentMethodId" | "paymentMethodName" | "paymentMethodData" | "preferredPaymentSettingsId" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredPaymentSettings?: boolean | PreferredPaymentSettingsDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      preferredPaymentSettings: Prisma.$PreferredPaymentSettingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      paymentMethodId: string
      paymentMethodName: string
      paymentMethodData: Prisma.JsonValue
      preferredPaymentSettingsId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `paymentMethodId`
     * const paymentMethodWithPaymentMethodIdOnly = await prisma.paymentMethod.findMany({ select: { paymentMethodId: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `paymentMethodId`
     * const paymentMethodWithPaymentMethodIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { paymentMethodId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `paymentMethodId`
     * const paymentMethodWithPaymentMethodIdOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { paymentMethodId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferredPaymentSettings<T extends PreferredPaymentSettingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreferredPaymentSettingsDefaultArgs<ExtArgs>>): Prisma__PreferredPaymentSettingsClient<$Result.GetResult<Prisma.$PreferredPaymentSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly paymentMethodId: FieldRef<"PaymentMethod", 'String'>
    readonly paymentMethodName: FieldRef<"PaymentMethod", 'String'>
    readonly paymentMethodData: FieldRef<"PaymentMethod", 'Json'>
    readonly preferredPaymentSettingsId: FieldRef<"PaymentMethod", 'String'>
    readonly createdAt: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PaymentAttemptScalarFieldEnum: {
    idempotencyKey: 'idempotencyKey',
    orderId: 'orderId',
    status: 'status',
    provider: 'provider',
    transactionId: 'transactionId',
    responseData: 'responseData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentAttemptScalarFieldEnum = (typeof PaymentAttemptScalarFieldEnum)[keyof typeof PaymentAttemptScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    refundId: 'refundId',
    orderId: 'orderId',
    paymentAttemptId: 'paymentAttemptId',
    refundTransactionId: 'refundTransactionId',
    amount: 'amount',
    status: 'status',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const ProviderCustomerScalarFieldEnum: {
    providerCustomerId: 'providerCustomerId',
    customerId: 'customerId',
    provider: 'provider',
    externalCustomerId: 'externalCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderCustomerScalarFieldEnum = (typeof ProviderCustomerScalarFieldEnum)[keyof typeof ProviderCustomerScalarFieldEnum]


  export const PreferredPaymentSettingsScalarFieldEnum: {
    preferredPaymentSettingsId: 'preferredPaymentSettingsId',
    customerId: 'customerId',
    paymentMethodId: 'paymentMethodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreferredPaymentSettingsScalarFieldEnum = (typeof PreferredPaymentSettingsScalarFieldEnum)[keyof typeof PreferredPaymentSettingsScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    paymentMethodId: 'paymentMethodId',
    paymentMethodName: 'paymentMethodName',
    paymentMethodData: 'paymentMethodData',
    preferredPaymentSettingsId: 'preferredPaymentSettingsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PaymentAttemptStatus'
   */
  export type EnumPaymentAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentAttemptStatus'>
    


  /**
   * Reference to a field of type 'PaymentAttemptStatus[]'
   */
  export type ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentAttemptStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'RefundStatus'
   */
  export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>
    


  /**
   * Reference to a field of type 'RefundStatus[]'
   */
  export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentAttemptWhereInput = {
    AND?: PaymentAttemptWhereInput | PaymentAttemptWhereInput[]
    OR?: PaymentAttemptWhereInput[]
    NOT?: PaymentAttemptWhereInput | PaymentAttemptWhereInput[]
    idempotencyKey?: StringFilter<"PaymentAttempt"> | string
    orderId?: StringNullableFilter<"PaymentAttempt"> | string | null
    status?: EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus
    provider?: StringFilter<"PaymentAttempt"> | string
    transactionId?: StringNullableFilter<"PaymentAttempt"> | string | null
    responseData?: JsonNullableFilter<"PaymentAttempt">
    createdAt?: DateTimeFilter<"PaymentAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentAttempt"> | Date | string
  }

  export type PaymentAttemptOrderByWithRelationInput = {
    idempotencyKey?: SortOrder
    orderId?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    responseData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAttemptWhereUniqueInput = Prisma.AtLeast<{
    idempotencyKey?: string
    AND?: PaymentAttemptWhereInput | PaymentAttemptWhereInput[]
    OR?: PaymentAttemptWhereInput[]
    NOT?: PaymentAttemptWhereInput | PaymentAttemptWhereInput[]
    orderId?: StringNullableFilter<"PaymentAttempt"> | string | null
    status?: EnumPaymentAttemptStatusFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus
    provider?: StringFilter<"PaymentAttempt"> | string
    transactionId?: StringNullableFilter<"PaymentAttempt"> | string | null
    responseData?: JsonNullableFilter<"PaymentAttempt">
    createdAt?: DateTimeFilter<"PaymentAttempt"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentAttempt"> | Date | string
  }, "idempotencyKey">

  export type PaymentAttemptOrderByWithAggregationInput = {
    idempotencyKey?: SortOrder
    orderId?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    responseData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentAttemptCountOrderByAggregateInput
    _max?: PaymentAttemptMaxOrderByAggregateInput
    _min?: PaymentAttemptMinOrderByAggregateInput
  }

  export type PaymentAttemptScalarWhereWithAggregatesInput = {
    AND?: PaymentAttemptScalarWhereWithAggregatesInput | PaymentAttemptScalarWhereWithAggregatesInput[]
    OR?: PaymentAttemptScalarWhereWithAggregatesInput[]
    NOT?: PaymentAttemptScalarWhereWithAggregatesInput | PaymentAttemptScalarWhereWithAggregatesInput[]
    idempotencyKey?: StringWithAggregatesFilter<"PaymentAttempt"> | string
    orderId?: StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null
    status?: EnumPaymentAttemptStatusWithAggregatesFilter<"PaymentAttempt"> | $Enums.PaymentAttemptStatus
    provider?: StringWithAggregatesFilter<"PaymentAttempt"> | string
    transactionId?: StringNullableWithAggregatesFilter<"PaymentAttempt"> | string | null
    responseData?: JsonNullableWithAggregatesFilter<"PaymentAttempt">
    createdAt?: DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentAttempt"> | Date | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    refundId?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    paymentAttemptId?: StringFilter<"Refund"> | string
    refundTransactionId?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus
    provider?: StringFilter<"Refund"> | string
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
  }

  export type RefundOrderByWithRelationInput = {
    refundId?: SortOrder
    orderId?: SortOrder
    paymentAttemptId?: SortOrder
    refundTransactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    refundId?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    orderId?: StringFilter<"Refund"> | string
    paymentAttemptId?: StringFilter<"Refund"> | string
    refundTransactionId?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus
    provider?: StringFilter<"Refund"> | string
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
  }, "refundId">

  export type RefundOrderByWithAggregationInput = {
    refundId?: SortOrder
    orderId?: SortOrder
    paymentAttemptId?: SortOrder
    refundTransactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    refundId?: StringWithAggregatesFilter<"Refund"> | string
    orderId?: StringWithAggregatesFilter<"Refund"> | string
    paymentAttemptId?: StringWithAggregatesFilter<"Refund"> | string
    refundTransactionId?: StringWithAggregatesFilter<"Refund"> | string
    amount?: DecimalWithAggregatesFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusWithAggregatesFilter<"Refund"> | $Enums.RefundStatus
    provider?: StringWithAggregatesFilter<"Refund"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
  }

  export type ProviderCustomerWhereInput = {
    AND?: ProviderCustomerWhereInput | ProviderCustomerWhereInput[]
    OR?: ProviderCustomerWhereInput[]
    NOT?: ProviderCustomerWhereInput | ProviderCustomerWhereInput[]
    providerCustomerId?: StringFilter<"ProviderCustomer"> | string
    customerId?: StringFilter<"ProviderCustomer"> | string
    provider?: StringFilter<"ProviderCustomer"> | string
    externalCustomerId?: StringFilter<"ProviderCustomer"> | string
    createdAt?: DateTimeFilter<"ProviderCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderCustomer"> | Date | string
  }

  export type ProviderCustomerOrderByWithRelationInput = {
    providerCustomerId?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    externalCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderCustomerWhereUniqueInput = Prisma.AtLeast<{
    providerCustomerId?: string
    customerId_provider?: ProviderCustomerCustomerIdProviderCompoundUniqueInput
    AND?: ProviderCustomerWhereInput | ProviderCustomerWhereInput[]
    OR?: ProviderCustomerWhereInput[]
    NOT?: ProviderCustomerWhereInput | ProviderCustomerWhereInput[]
    customerId?: StringFilter<"ProviderCustomer"> | string
    provider?: StringFilter<"ProviderCustomer"> | string
    externalCustomerId?: StringFilter<"ProviderCustomer"> | string
    createdAt?: DateTimeFilter<"ProviderCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderCustomer"> | Date | string
  }, "providerCustomerId" | "customerId_provider">

  export type ProviderCustomerOrderByWithAggregationInput = {
    providerCustomerId?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    externalCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCustomerCountOrderByAggregateInput
    _max?: ProviderCustomerMaxOrderByAggregateInput
    _min?: ProviderCustomerMinOrderByAggregateInput
  }

  export type ProviderCustomerScalarWhereWithAggregatesInput = {
    AND?: ProviderCustomerScalarWhereWithAggregatesInput | ProviderCustomerScalarWhereWithAggregatesInput[]
    OR?: ProviderCustomerScalarWhereWithAggregatesInput[]
    NOT?: ProviderCustomerScalarWhereWithAggregatesInput | ProviderCustomerScalarWhereWithAggregatesInput[]
    providerCustomerId?: StringWithAggregatesFilter<"ProviderCustomer"> | string
    customerId?: StringWithAggregatesFilter<"ProviderCustomer"> | string
    provider?: StringWithAggregatesFilter<"ProviderCustomer"> | string
    externalCustomerId?: StringWithAggregatesFilter<"ProviderCustomer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProviderCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderCustomer"> | Date | string
  }

  export type PreferredPaymentSettingsWhereInput = {
    AND?: PreferredPaymentSettingsWhereInput | PreferredPaymentSettingsWhereInput[]
    OR?: PreferredPaymentSettingsWhereInput[]
    NOT?: PreferredPaymentSettingsWhereInput | PreferredPaymentSettingsWhereInput[]
    preferredPaymentSettingsId?: StringFilter<"PreferredPaymentSettings"> | string
    customerId?: StringFilter<"PreferredPaymentSettings"> | string
    paymentMethodId?: StringFilter<"PreferredPaymentSettings"> | string
    createdAt?: DateTimeFilter<"PreferredPaymentSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PreferredPaymentSettings"> | Date | string
    paymentMethods?: PaymentMethodListRelationFilter
  }

  export type PreferredPaymentSettingsOrderByWithRelationInput = {
    preferredPaymentSettingsId?: SortOrder
    customerId?: SortOrder
    paymentMethodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
  }

  export type PreferredPaymentSettingsWhereUniqueInput = Prisma.AtLeast<{
    preferredPaymentSettingsId?: string
    customerId?: string
    AND?: PreferredPaymentSettingsWhereInput | PreferredPaymentSettingsWhereInput[]
    OR?: PreferredPaymentSettingsWhereInput[]
    NOT?: PreferredPaymentSettingsWhereInput | PreferredPaymentSettingsWhereInput[]
    paymentMethodId?: StringFilter<"PreferredPaymentSettings"> | string
    createdAt?: DateTimeFilter<"PreferredPaymentSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PreferredPaymentSettings"> | Date | string
    paymentMethods?: PaymentMethodListRelationFilter
  }, "preferredPaymentSettingsId" | "customerId">

  export type PreferredPaymentSettingsOrderByWithAggregationInput = {
    preferredPaymentSettingsId?: SortOrder
    customerId?: SortOrder
    paymentMethodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreferredPaymentSettingsCountOrderByAggregateInput
    _max?: PreferredPaymentSettingsMaxOrderByAggregateInput
    _min?: PreferredPaymentSettingsMinOrderByAggregateInput
  }

  export type PreferredPaymentSettingsScalarWhereWithAggregatesInput = {
    AND?: PreferredPaymentSettingsScalarWhereWithAggregatesInput | PreferredPaymentSettingsScalarWhereWithAggregatesInput[]
    OR?: PreferredPaymentSettingsScalarWhereWithAggregatesInput[]
    NOT?: PreferredPaymentSettingsScalarWhereWithAggregatesInput | PreferredPaymentSettingsScalarWhereWithAggregatesInput[]
    preferredPaymentSettingsId?: StringWithAggregatesFilter<"PreferredPaymentSettings"> | string
    customerId?: StringWithAggregatesFilter<"PreferredPaymentSettings"> | string
    paymentMethodId?: StringWithAggregatesFilter<"PreferredPaymentSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PreferredPaymentSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PreferredPaymentSettings"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    paymentMethodId?: StringFilter<"PaymentMethod"> | string
    paymentMethodName?: StringFilter<"PaymentMethod"> | string
    paymentMethodData?: JsonFilter<"PaymentMethod">
    preferredPaymentSettingsId?: StringFilter<"PaymentMethod"> | string
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    preferredPaymentSettings?: XOR<PreferredPaymentSettingsScalarRelationFilter, PreferredPaymentSettingsWhereInput>
  }

  export type PaymentMethodOrderByWithRelationInput = {
    paymentMethodId?: SortOrder
    paymentMethodName?: SortOrder
    paymentMethodData?: SortOrder
    preferredPaymentSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredPaymentSettings?: PreferredPaymentSettingsOrderByWithRelationInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    paymentMethodId?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    paymentMethodName?: StringFilter<"PaymentMethod"> | string
    paymentMethodData?: JsonFilter<"PaymentMethod">
    preferredPaymentSettingsId?: StringFilter<"PaymentMethod"> | string
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    preferredPaymentSettings?: XOR<PreferredPaymentSettingsScalarRelationFilter, PreferredPaymentSettingsWhereInput>
  }, "paymentMethodId">

  export type PaymentMethodOrderByWithAggregationInput = {
    paymentMethodId?: SortOrder
    paymentMethodName?: SortOrder
    paymentMethodData?: SortOrder
    preferredPaymentSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    paymentMethodId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    paymentMethodName?: StringWithAggregatesFilter<"PaymentMethod"> | string
    paymentMethodData?: JsonWithAggregatesFilter<"PaymentMethod">
    preferredPaymentSettingsId?: StringWithAggregatesFilter<"PaymentMethod"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type PaymentAttemptCreateInput = {
    idempotencyKey: string
    orderId?: string | null
    status: $Enums.PaymentAttemptStatus
    provider: string
    transactionId?: string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentAttemptUncheckedCreateInput = {
    idempotencyKey: string
    orderId?: string | null
    status: $Enums.PaymentAttemptStatus
    provider: string
    transactionId?: string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentAttemptUpdateInput = {
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus
    provider?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentAttemptUncheckedUpdateInput = {
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus
    provider?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentAttemptCreateManyInput = {
    idempotencyKey: string
    orderId?: string | null
    status: $Enums.PaymentAttemptStatus
    provider: string
    transactionId?: string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentAttemptUpdateManyMutationInput = {
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus
    provider?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentAttemptUncheckedUpdateManyInput = {
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentAttemptStatusFieldUpdateOperationsInput | $Enums.PaymentAttemptStatus
    provider?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    responseData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateInput = {
    refundId?: string
    orderId: string
    paymentAttemptId: string
    refundTransactionId: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.RefundStatus
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUncheckedCreateInput = {
    refundId?: string
    orderId: string
    paymentAttemptId: string
    refundTransactionId: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.RefundStatus
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateInput = {
    refundId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentAttemptId?: StringFieldUpdateOperationsInput | string
    refundTransactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateInput = {
    refundId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentAttemptId?: StringFieldUpdateOperationsInput | string
    refundTransactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateManyInput = {
    refundId?: string
    orderId: string
    paymentAttemptId: string
    refundTransactionId: string
    amount: Decimal | DecimalJsLike | number | string
    status: $Enums.RefundStatus
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateManyMutationInput = {
    refundId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentAttemptId?: StringFieldUpdateOperationsInput | string
    refundTransactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyInput = {
    refundId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentAttemptId?: StringFieldUpdateOperationsInput | string
    refundTransactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCustomerCreateInput = {
    providerCustomerId?: string
    customerId: string
    provider: string
    externalCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCustomerUncheckedCreateInput = {
    providerCustomerId?: string
    customerId: string
    provider: string
    externalCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCustomerUpdateInput = {
    providerCustomerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    externalCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCustomerUncheckedUpdateInput = {
    providerCustomerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    externalCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCustomerCreateManyInput = {
    providerCustomerId?: string
    customerId: string
    provider: string
    externalCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCustomerUpdateManyMutationInput = {
    providerCustomerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    externalCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCustomerUncheckedUpdateManyInput = {
    providerCustomerId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    externalCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredPaymentSettingsCreateInput = {
    preferredPaymentSettingsId?: string
    customerId: string
    paymentMethodId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethods?: PaymentMethodCreateNestedManyWithoutPreferredPaymentSettingsInput
  }

  export type PreferredPaymentSettingsUncheckedCreateInput = {
    preferredPaymentSettingsId?: string
    customerId: string
    paymentMethodId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutPreferredPaymentSettingsInput
  }

  export type PreferredPaymentSettingsUpdateInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethods?: PaymentMethodUpdateManyWithoutPreferredPaymentSettingsNestedInput
  }

  export type PreferredPaymentSettingsUncheckedUpdateInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsNestedInput
  }

  export type PreferredPaymentSettingsCreateManyInput = {
    preferredPaymentSettingsId?: string
    customerId: string
    paymentMethodId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferredPaymentSettingsUpdateManyMutationInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredPaymentSettingsUncheckedUpdateManyInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredPaymentSettings: PreferredPaymentSettingsCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    preferredPaymentSettingsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredPaymentSettings?: PreferredPaymentSettingsUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    preferredPaymentSettingsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPaymentAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAttemptStatus | EnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel> | $Enums.PaymentAttemptStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentAttemptCountOrderByAggregateInput = {
    idempotencyKey?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    transactionId?: SortOrder
    responseData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAttemptMaxOrderByAggregateInput = {
    idempotencyKey?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAttemptMinOrderByAggregateInput = {
    idempotencyKey?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPaymentAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAttemptStatus | EnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentAttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type RefundCountOrderByAggregateInput = {
    refundId?: SortOrder
    orderId?: SortOrder
    paymentAttemptId?: SortOrder
    refundTransactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    refundId?: SortOrder
    orderId?: SortOrder
    paymentAttemptId?: SortOrder
    refundTransactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    refundId?: SortOrder
    orderId?: SortOrder
    paymentAttemptId?: SortOrder
    refundTransactionId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }

  export type ProviderCustomerCustomerIdProviderCompoundUniqueInput = {
    customerId: string
    provider: string
  }

  export type ProviderCustomerCountOrderByAggregateInput = {
    providerCustomerId?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    externalCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderCustomerMaxOrderByAggregateInput = {
    providerCustomerId?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    externalCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderCustomerMinOrderByAggregateInput = {
    providerCustomerId?: SortOrder
    customerId?: SortOrder
    provider?: SortOrder
    externalCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreferredPaymentSettingsCountOrderByAggregateInput = {
    preferredPaymentSettingsId?: SortOrder
    customerId?: SortOrder
    paymentMethodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferredPaymentSettingsMaxOrderByAggregateInput = {
    preferredPaymentSettingsId?: SortOrder
    customerId?: SortOrder
    paymentMethodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferredPaymentSettingsMinOrderByAggregateInput = {
    preferredPaymentSettingsId?: SortOrder
    customerId?: SortOrder
    paymentMethodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PreferredPaymentSettingsScalarRelationFilter = {
    is?: PreferredPaymentSettingsWhereInput
    isNot?: PreferredPaymentSettingsWhereInput
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    paymentMethodName?: SortOrder
    paymentMethodData?: SortOrder
    preferredPaymentSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    paymentMethodName?: SortOrder
    preferredPaymentSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    paymentMethodName?: SortOrder
    preferredPaymentSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPaymentAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentAttemptStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus
  }

  export type PaymentMethodCreateNestedManyWithoutPreferredPaymentSettingsInput = {
    create?: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[]
    createMany?: PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutPreferredPaymentSettingsInput = {
    create?: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[]
    createMany?: PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type PaymentMethodUpdateManyWithoutPreferredPaymentSettingsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput | PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput[]
    createMany?: PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput | PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput | PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput> | PaymentMethodCreateWithoutPreferredPaymentSettingsInput[] | PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput | PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput | PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput[]
    createMany?: PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput | PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput | PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type PreferredPaymentSettingsCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput
    connect?: PreferredPaymentSettingsWhereUniqueInput
  }

  export type PreferredPaymentSettingsUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput
    upsert?: PreferredPaymentSettingsUpsertWithoutPaymentMethodsInput
    connect?: PreferredPaymentSettingsWhereUniqueInput
    update?: XOR<XOR<PreferredPaymentSettingsUpdateToOneWithWhereWithoutPaymentMethodsInput, PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput>, PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPaymentAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAttemptStatus | EnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel> | $Enums.PaymentAttemptStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAttemptStatus | EnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentAttemptStatus[] | ListEnumPaymentAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentAttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentAttemptStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentMethodCreateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutPreferredPaymentSettingsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput>
  }

  export type PaymentMethodCreateManyPreferredPaymentSettingsInputEnvelope = {
    data: PaymentMethodCreateManyPreferredPaymentSettingsInput | PaymentMethodCreateManyPreferredPaymentSettingsInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutPreferredPaymentSettingsInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput>
    create: XOR<PaymentMethodCreateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedCreateWithoutPreferredPaymentSettingsInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutPreferredPaymentSettingsInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutPreferredPaymentSettingsInput, PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutPreferredPaymentSettingsInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    paymentMethodId?: StringFilter<"PaymentMethod"> | string
    paymentMethodName?: StringFilter<"PaymentMethod"> | string
    paymentMethodData?: JsonFilter<"PaymentMethod">
    preferredPaymentSettingsId?: StringFilter<"PaymentMethod"> | string
    createdAt?: DateTimeFilter<"PaymentMethod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentMethod"> | Date | string
  }

  export type PreferredPaymentSettingsCreateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: string
    customerId: string
    paymentMethodId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: string
    customerId: string
    paymentMethodId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferredPaymentSettingsCreateOrConnectWithoutPaymentMethodsInput = {
    where: PreferredPaymentSettingsWhereUniqueInput
    create: XOR<PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type PreferredPaymentSettingsUpsertWithoutPaymentMethodsInput = {
    update: XOR<PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<PreferredPaymentSettingsCreateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedCreateWithoutPaymentMethodsInput>
    where?: PreferredPaymentSettingsWhereInput
  }

  export type PreferredPaymentSettingsUpdateToOneWithWhereWithoutPaymentMethodsInput = {
    where?: PreferredPaymentSettingsWhereInput
    data: XOR<PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput, PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type PreferredPaymentSettingsUpdateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferredPaymentSettingsUncheckedUpdateWithoutPaymentMethodsInput = {
    preferredPaymentSettingsId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyPreferredPaymentSettingsInput = {
    paymentMethodId?: string
    paymentMethodName: string
    paymentMethodData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentMethodUpdateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyWithoutPreferredPaymentSettingsInput = {
    paymentMethodId?: StringFieldUpdateOperationsInput | string
    paymentMethodName?: StringFieldUpdateOperationsInput | string
    paymentMethodData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}