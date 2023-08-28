type ExcludeIndexSignatures_<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};
type ExcludeIndexSignatures<T> = Pick<T, keyof ExcludeIndexSignatures_<T>>;

type SampleObj = {
  [indexKey: string]: string | number;
  staticKey: string;
};

type StaticKeyOnlyObj = ExcludeIndexSignatures<SampleObj>;

type K = StaticKeyOnlyObj["staticKey"];
