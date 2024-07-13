// export default function twFocusClass(hasRing = false) {
//     if (!hasRing) {
//       return "focus:outline-none";
//     }
//     return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
//   }
  

// utils/twFocusClass.ts

export default function twFocusClass(hasRing: boolean = false): string {
  if (!hasRing) {
    return "focus:outline-none";
  }
  return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
}
