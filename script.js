// Webpack imports
require('./style.css');

// Define helper handlerers
currentNewsPage = document.getElementById('newsPaginationStartingPage');
currentGaleryPage = document.getElementById('galeryPaginationStartingPage');

// OnLoad actions
window.onload = function() {
    document.getElementById('newsArticle').innerHTML = newsMessagesArray[0];
    currentNewsPage.classList += 'active';
    currentGaleryPage.classList += 'active'
  };

// Event handlelers

    document.getElementById('newsPagination').addEventListener("click", (event) => {
        if (event.target.tagName != "FOOTER") {
            setNewsPage(event.target);
        }
    });

    document.getElementById('galeryPagination').addEventListener("click", (event) => {
        if (event.target.tagName != "FOOTER") {
            setGaleryPage(event.target)
        }
    });

    document.getElementById('galeryImages').addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            openModal(event.target);
        }
    });

    document.getElementById("upperArrow").addEventListener("click", () => {
        document.getElementById('LocalizationsList').scrollTop -= 134;
    });

    document.getElementById('lowerArrow').addEventListener("click", () => {
        document.getElementById('LocalizationsList').scrollTop += 134;
    });

    document.getElementById('modalClose').addEventListener("click", () => {
        closeModal();
    });

    document.getElementById('offerContent').addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            document.getElementById('firstChoiceMenu').style.display = 'none';
            document.getElementById('secondChoiceMenu').style.display = 'block';
            document.getElementById('offer').style.backgroundImage = 'none';
        }
    });

    document.getElementById('secondOfferContentContainer').addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            console.log(event.target);
        }
    });
// Funtions

    function setNewsPage(eventTarget) {
        document.getElementById('newsArticle').innerHTML = newsMessagesArray[eventTarget.textContent-1];
        currentNewsPage.classList = '';
        currentNewsPage = eventTarget;
        eventTarget.classList += 'active';
    }

    function setGaleryPage(eventTarget) {
        let galeryElement = document.getElementById('galeryImages');
        let chosenPart = eventTarget.textContent - 1;
        galeryElement.scrollLeft = chosenPart * galeryElement.scrollWidth/3;

        currentGaleryPage.classList = '';
        currentGaleryPage = eventTarget;
        eventTarget.classList += 'active';
    }

    function openModal(eventTarget, additonalData = false, ) {
        let modalElement = document.getElementById('modal')
        let targetedImage = eventTarget.cloneNode(false);

        document.getElementById('modalContent').appendChild(targetedImage);

        if (additonalData) {
            let modalContentDiv = document.createElement('DIV');
            let heading = document.createElement('H4');
            let cakeDescription = document.createElement('ARTICLE');
        }

        modalElement.style.display = 'block';
    }

    function closeModal() {
        var modalContent = document.getElementById("modalContent");
        while (modalContent.firstChild) {
            modalContent.removeChild(modalContent.firstChild);
        }
        document.getElementById('modal').style.display = 'none';
    }

// Fake messages from data base
newsMessagesArray = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed ut placerat mi, laoreet laoreet justo. Morbi sem augue, 
    fermentum at efficitur commodo, sollicitudin ac augue.Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit.`,

    `Pellentesque rhoncus eu orci a pulvinar. Nullam dictum id lectus eu auctor. Maecenas et
    tincidunt neque. Nullam quis consectetur libero, commodo ultricies sapien. Donec nec leo at 
    eros luctus laoreet eu in lacus. `,

    `Duis tellus mi, interdum id imperdiet vel, consequat eget lorem. Donec sit amet nisl fringilla,
    aliquet ex in, maximus dui. Aliquam vitae neque erat. In mattis diam vel congue volutpat.`
]