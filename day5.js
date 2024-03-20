const userList = document.querySelector('.languages-list');
const text = document.querySelector('.Text');
const content = document.querySelector('.content');
userList.innerHTML = "<li>JavaScript</li><li>python</li><li>php</li><li>Ruby</li>";//using the innerHTML is can open doors to cross-site scripting
text.innerText = "<li>JavaScript</li> <li>python</li><li>php</li><li>Ruby</li>";
content.textContent = "<li>JavaScript</li><li>python</li><li>php</li><li>Ruby</li>";
// On this example we can see the use case of innerHTML , innerText and textContent propertises of DOM in javascript
//where innerHTML = recognizes the HTML tags and formats the content according
//innerText and textContent = innerText ignores the HTML tags and prints thme on screen as part of text

//cross site scripting example on innerHTMl

// let usercomment =' <img src="" oneerror="alert("malicious script executed!")">this is my comment!</img>';
userList.innerHTML = usercomment;
const Message = document.querySelector('.messages');
Message.innerText="used multiple selector using dom";
console.log(Message);