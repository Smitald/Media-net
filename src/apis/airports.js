export const getAirports = () => {
  return new Promise(resolve => {
    fetch('data.json', {
     
      }).then(res => res.json())
      .then(data => resolve(data));
  });
}
