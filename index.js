const submitData= (name, email) => {
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, body:
      JSON.stringify({name, email})

  }
  return fetch('http://localhost:3000/users', obj).then(resp => resp.json())
  .then(function(obj) {
    console.log(obj.id)
    let node = document.createElement("p")
    let textnode = document.createTextNode(obj.id)
    node.appendChild(textnode)


    const newId = document.querySelector('body');
    newId.appendChild(node);
  })
  .catch(error => {
    const errorMessage = error.message;
    let node = document.createElement('p');
    let textNode = document.createTextNode(errorMessage);
    node.appendChild(textNode);
    const newErrorMessage = document.querySelector('section#error');
    newErrorMessage.appendChild(node)
  })
}
submitData('hdjb', 'nahnekbdjvn');