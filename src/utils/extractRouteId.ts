// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractRouteId(data: any | any[]) {
  console.log("data", data);

  // if array data[index]

  if (Array.isArray(data)) {
    // for (const item of data) {
    //   const parts = item.url.split("/");
    //   const dataIndex = parts[parts.length - 2];
    //   console.log("dataIndex", dataIndex);
    //   return dataIndex;
    // }
    for (let i = 0; i < data.length; i++) {
      const parts = data[i].url.split("/");
      const dataIndex = parts[parts.length - 2];
      console.log("dataIndex", dataIndex);
      return dataIndex;
    }
  }
  const parts = data.url.split("/");
  const dataIndex = parts[parts.length - 2];
  console.log("dataIndex", dataIndex);
  return dataIndex;
}
