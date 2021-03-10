// FETCH AND DISPLAY WIKI SEARCH RESULTS


const formElement = document.querySelector('.searchWikipedia')
const inputElement = document.querySelector('.searchInput')

async function submitQuery(event) {
    console.log(event)

    event.preventDefault();
    //grab form input value
    //trim whitespace from form value
    const inputValue = inputElement.value.trim()
    //add to local storage
    addToHistory(inputValue);

    //can choose amount of returned results with = srlimit=5
    //getting around CORS issues = origin=*
    const wikiReturn = await fetch(
        'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=3&srsearch='
        +
        inputValue
    ).then(response => response.json()) 
    console.log(wikiReturn)
        //CALL wikiResults 
    wikiResults(wikiReturn);
}


// form gets submitted

//function DECLARATION

function wikiResults(results) {

    //TODO: search result class -  keep this const!!!!
    const wikiSearchResults = document.querySelector('.searchResults')


    console.log(results)
    wikiSearchResults.innerHTML = ''
    //or removeChild
    results.query.search.forEach(result => {

        const wikiUrl = `https://en.wikipedia.org/?curid=${result.pageid}`

        console.log(results)
        
        
        wikiSearchResults.insertAdjacentHTML(
            'beforeend',
            `<div class='wikiResultItem flex  flex-col'>
                            <h2 class='wikiResultTitle' >
                            <a href='${wikiUrl}' target="_blank">${result.title}<a/>
                            </h2>
                            <a href="${wikiUrl}" class="result-link" target="_blank" rel="noopener">${wikiUrl}</a>
                            <span class="result-snippet">${result.snippet}</span>
                        </div>`
        );



    });
}

formElement.addEventListener('submit', submitQuery)
