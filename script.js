
window.onload = function() {
    document.getElementById('newsArticle').innerHTML = newsMessagesArray[1];
  };


newsMessagesArray = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed ut placerat mi, laoreet laoreet justo. Morbi sem augue, 
    fermentum at efficitur commodo, sollicitudin ac augue.Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed ut placerat mi, laoreet laoreet justo`,

    `Pellentesque rhoncus eu orci a pulvinar. Nullam dictum id lectus eu auctor. Maecenas et
    tincidunt neque. Nullam quis consectetur libero, commodo ultricies sapien. Donec nec leo at 
    eros luctus laoreet eu in lacus. Curabitur sit amet diam dui. Maecenas vel auctor ipsum. `,

    `Duis tellus mi, interdum id imperdiet vel, consequat eget lorem. Donec sit amet nisl fringilla,
    aliquet ex in, maximus dui. Aliquam vitae neque erat. In mattis diam vel congue volutpat. Integer 
    velit nisl, semper id mollis in, rhoncus sit amet justo. Quisque et augue velit.Integer 
    velit nisl, semper id mollis in, rhoncus sit amet justo. Quisque et augue velit. `
]

document.getElementById('newsPagination').addEventListener("click", (event) => {
    if (event.target.tagName != "FOOTER") {
        document.getElementById('newsArticle').innerHTML = newsMessagesArray[event.target.textContent-1];
    }
});