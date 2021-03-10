const query = 'online_media_type';
fetch(`https://api.si.edu/openaccess/api/v1.0/terms/${query}?&api_key=7vBdFGKepK5x26swaVx7qzLBLuMCFGG9lPoXQokI`)
    .then((response) => {
    return response.json();
})
    .then((jsonObject) => {
    console.log(jsonObject.response)
});

localStorage// FETCH AND DISPLAY SMITHSONIAN SEARCH RESULTS


const formEl = document.querySelector('.searchSmithsonian')
const inputEl = document.querySelector('.searchInput')

async function submitQuery(event) {
    console.log(event)

    event.preventDefault();
    //grab form input value
    //trim whitespace from form value
    const inputValue = inputEl.value.trim()
    //can choose amount of returned results with = srlimit=5
    //getting around CORS issues = origin=*
    const smithReturn = await fetch(
        'https://api.si.edu/openaccess/api/v1.0/search?rows=50&q='
        +
        inputValue +
        '&api_key=7vBdFGKepK5x26swaVx7qzLBLuMCFGG9lPoXQokI'

    ).then(response => response.json()) 
    console.log(smithReturn);
        //CALL smithResults 
    smithResults(smithReturn.response);
}


// form gets submitted

//function DECLARATION

//have to use the "thumbnail" for the image element.
//need to MAP the Arrays to get the image results of any search


function smithResults(response) {

    const smithSearchResults = document.querySelector('.searchResultsSmith')
    //needs to clear the innerHTML here, not in wiki.js.
    smithSearchResults.innerHTML= '';

    const imageResults= response.rows.map(image =>
    //if no image return undefined
        image.content.descriptiveNonRepeating.online_media?.media[0].content)
        
        console.log(imageResults);
        //.map the array again to make an array of image elements
        const imageEls= imageResults.map( result => {
            if(result === undefined) return result
            
            const image= document.createElement('img')
            image.setAttribute("src", result)
            //add padding to the images, and max width and height
            image.classList.add('p-8','w-full')
            return image
            
        });
//for-loop through imageEls array to append the results to the page
        for(let item of imageEls) {
            if (item !== undefined) {
                smithSearchResults.appendChild(item);
                console.log(item);
            }
        }
}
        


formEl.addEventListener('submit', submitQuery)