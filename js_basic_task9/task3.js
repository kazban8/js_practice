async function getById(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
}

async function printData() {
    const postData = await getById(5);
    console.log(postData);
}

async function printDataWithUserId() {
    const postData = await getById(8);
    console.log("-------------");
    console.log(postData.body, "\nUser ID - ", postData.id);
}


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'hillel - TASK 9',
        body: 'bar',
        userId: 33,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

printData();
printDataWithUserId();

getById(1)
    .then(body => console.log(body));