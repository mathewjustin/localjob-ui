// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {

   return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


export function fetchlocaljobsapi(payload:object) {
  console.log(payload)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
};
return Promise.resolve(fetch('http://localhost:8080/add-numbers', requestOptions))
}