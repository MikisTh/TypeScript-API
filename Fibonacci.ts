const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

fibonacci(); /

type _Fib<NUM extends any[]> = NUM['length'] extends 1 | 0
  ? NUM
  : Add<_Fib<Minus1<NUM>>, _Fib<Minus2<NUM>>>;

type Fib<N extends number> = _Fib<ArrayOfSize<N>>['length'];


type F1 = Fib<1>; // 1
type F2 = Fib<2>; // 1
type F3 = Fib<3>; // 2
type F4 = Fib<4>; // 3
type F5 = Fib<5>; // 5
type F6 = Fib<6>; // 8
type F7 = Fib<7>; // 13
type F8 = Fib<8>; // 21
type F9 = Fib<9>; // 34
type F20 = Fib<20>; // 6765
type F30 = Fib<30>; // Error, recursion too deep
