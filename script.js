//console.log(emojiList);

let searchField = document.getElementById("searchInput");

let emojiContainer = document.getElementById("emoji_Container");

let searchButton=document.getElementById("searchButton");
let reset=document.getElementById("reset");

function displayEmoji(emojiList) {
    emojiContainer.innerHTML="";

    emojiList.forEach((e) => {
    let new_row = document.createElement("tr");
    
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description.innerText = e.description;
    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);
    new_row.style.borderBottom="1px solid #979191";
    new_row.style.padding="20px";

    
    emojiContainer.appendChild(new_row);
    
    //console.log(new_row);
  });
  
}

function filteredData(e) {
  let value = e.target.value;

  let filteredEmojee =emojiList.filter((e) => {
    if (e.description.indexOf(value) != -1) {
      return true;
    }
  });
  //console.log(e.target.value);
  displayEmoji(filteredEmojee);
}
window.onload = () => displayEmoji(emojiList);
searchField.addEventListener("keyup", filteredData);

searchButton.addEventListener("click",function(e){
 e.preventDefault();
});

reset.addEventListener("click",function(){
searchField.value="";
});
//window.addEventListener("load",displayEmoji);
