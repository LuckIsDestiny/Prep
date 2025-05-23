function solve(N, M) {
return N % M;
}
const N = BigInt(gets().trim());
const M = BigInt(gets().trim());
const result = solve(N, M);
print(result);
