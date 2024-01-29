export function dataToSelect({ data, label, value, filter }) {
  let dataReturn = [];
  filter = filter || [];
  
  data.map((v) => {
    if(!filter.includes(v[value])) {
      dataReturn.push({ label: v[label], value: v[value] });
    }
  });

  return dataReturn;
}