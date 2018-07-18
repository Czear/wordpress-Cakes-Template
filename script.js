// Webpack imports
require('./style.css');

// OnLoad actions
window.onload = function() {
    document.getElementById('newsArticle').innerHTML = newsMessagesArray[0];
    newsPaginationStartingPage.classList += 'active';
    galeryPaginationStartingPage.classList += 'active'
  };

// Event handlelers

    newsPagination.addEventListener("click", (event) => {
        if (event.target.tagName != "FOOTER") {
            setNewsPage(event.target);
        }
    });

    navScrollList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            let targetedSection = event.target.dataset.scrollto;
            let scrollDimension = document.getElementById(targetedSection).offsetTop;

                if (targetedSection.match("offer|localization")) {
                    scrollDimension += 34;
                }

           document.documentElement.scrollTop += scrollDimension;
        }
    });

    offerContent.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            firstChoiceMenu.style.display = 'none';
            secondChoiceMenu.style.display = 'block';
            offer.style.backgroundImage = 'none';
        }
    });

    secondOfferContentContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            console.log(event.target ); // To do
        }
    });

    galeryPagination.addEventListener("click", (event) => {
        if (event.target.tagName != "FOOTER") {
            setGaleryPage(event.target)
        }
    });

    galeryImages.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
            openModal(event.target);
        }
    });

    upperArrow.addEventListener("click", () => {
        LocalizationsList.scrollTop -= 134;
    });

    lowerArrow.addEventListener("click", () => {
        LocalizationsList.scrollTop += 134;
    });

    modalClose.addEventListener("click", () => {
        closeModal();
    });

// Funtions

    function setNewsPage(eventTarget) {
        newsArticle.innerHTML = newsMessagesArray[eventTarget.textContent-1];
        currentNewsPage.classList = '';
        currentNewsPage = eventTarget;
        eventTarget.classList += 'active';
    }

    function setGaleryPage(eventTarget) {
        let galeryElement = galeryImages;
        let chosenPart = eventTarget.textContent - 1;
        galeryElement.scrollLeft = chosenPart * galeryElement.scrollWidth/3;

        currentGaleryPage.classList = '';
        currentGaleryPage = eventTarget;
        eventTarget.classList += 'active';
    }

    function openModal(eventTarget, additonalData = false) /* To do */ {
        let modalElement = modal;
        let targetedImage = eventTarget.cloneNode(false);

        modalContent.appendChild(targetedImage);

        if (additonalData) {
            let modalContentDiv = document.createElement('DIV');
            let heading = document.createElement('H4');
            let cakeDescription = document.createElement('ARTICLE');
        }

        modalElement.style.display = 'block';
    }

    function closeModal() {
        var modalContent = modalContent;
        while (modalContent.firstChild) {
            modalContent.removeChild(modalContent.firstChild);
        }
        modal.style.display = 'none';
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