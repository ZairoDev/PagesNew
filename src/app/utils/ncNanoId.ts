// export default function ncNanoId(prefix = "nc_") {
//     return (
//       prefix + Date.now() + "_" + Math.floor(Math.random() * 9999999999)
//     );
//   }
  

export default function ncNanoId(prefix: string = "nc_"): string {
  return (
    prefix + Date.now() + "_" + Math.floor(Math.random() * 9999999999)
  );
}

