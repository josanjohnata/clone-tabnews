export function sum(args1, args2) {
  if (typeof args1 !== "number" || typeof args2 !== "number") {
    return "Error";
  }

  return args1 + args2;
}
