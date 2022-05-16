let chatbox = document.getElementById("chat");
document.getElementById("btn-chat").addEventListener('click', getChat);

function getChat(e) {
  fetch('chatbox.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.forEach((item) => {
      let section = 
      `
         <div class="chat">
           <h2>${item.name}</h2>
         </div>  
      `;
      chatbox.innerHTML += section;
    })
  })
  .catch((err) => console.log(`Error: ${err}`));
}