// export type PropertyKey = string | number | symbol;
export type PropertyKey = keyof any;

type ExcludeIndexSignatures<T, PropKey = PropertyKey> = {
  [Key in keyof T as PropKey extends Key
    ? never
    : Key extends PropKey
    ? Key
    : never]: T[Key];
};

// Objects with each index signature type
type SampleObjWithStringKey = {
  [indexKey: string]: string | number;
  staticKey: string;
};

type SampleObjWithNumberKey = {
  [numberKey: number]: string | number;
  staticKey: string;
};

type SampleObjWithSymbolKey = {
  [symbolKey: symbol]: string | number;
  staticKey: string;
};

// 🤯 Util types to test util types
type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// 📝 Tests to ensure the custom util type behaves as we expect
type Assertions = [
  Expect<
    Equal<ExcludeIndexSignatures<SampleObjWithStringKey>, { staticKey: string }>
  >,
  Expect<
    Equal<ExcludeIndexSignatures<SampleObjWithNumberKey>, { staticKey: string }>
  >,
  Expect<
    Equal<ExcludeIndexSignatures<SampleObjWithSymbolKey>, { staticKey: string }>
  >
];
