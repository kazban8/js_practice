async function getById(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
}
async function printData() {
    const postData = await getById(1)
    console.log("-------------")
    console.log(postData.body, "\nUser ID - ", postData.id);
}

async function printData1() {
    const postData1 = await getById(5)
    console.log(postData1);
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'hillel - TASK 9',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
  .then((json) => console.log(json));

printData();
printData1();


getById(1)
    .then(body => console.log(body));

