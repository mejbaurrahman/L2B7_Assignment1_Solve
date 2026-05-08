# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

# How do Generics help create reusable and strictly typed code?

Generics allow us to write reusable functions, classes, and components that work with different types of data while keeping TypeScript's type safety.

Instead of writing separate code for each type, we can write one flexible version.

---

# Example Without Generics

```ts
function getFirst(arr: string[]): string {
  return arr[0];
}
```

This function only works with string arrays.

To work with numbers, we would need another function.

```ts
function getFirstNumber(arr: number[]): number {
  return arr[0];
}
```

This creates duplicate code.

---

# Example With Generics

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

Now the same function works with any type.

```ts
getFirst<string>(["a", "b", "c"]);
getFirst<number>([1, 2, 3]);
```

---

# How does it stay strictly typed?

TypeScript automatically understands the type being used.

Example:

```ts
const value = getFirst([1, 2, 3]);

value.toUpperCase(); // Error
```

Here, `value` is a number, so TypeScript prevents using a string method.

This keeps the code type-safe while still being reusable.

---

# Benefits of Generics

- Reduce duplicate code
- Create reusable functions and components
- Keep strong type safety
- Make code easier to maintain
