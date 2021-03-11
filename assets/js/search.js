function getFilledForm(){

    

    let filledFormValue = document.getElementById('mainSearchInput').value
    
    
    localStorage.setItem("textValue", filledFormValue)

}



let mainButton = document.getElementById('mainPageButton')


mainButton?.addEventListener('click', function(event){

    event.preventDefault()
    getFilledForm();
    console.log(mainButton)
    window.location.replace('./results.html');
    mainSetResult();
})

// function mainSetResult(){
    
//     localStorage.getItem("textValue", resultPageInput)

    
// }
//fetch both api's 
async function fetchResultMain(){
    let resultPageInput = document.getElementById('resultInputContainer').value

    const wikiReturn = await fetch(
    'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=3&srsearch='
    +
    localStorage.getItem("textValue", resultPageInput)
    ).then(response => response.json()) 
    console.log(wikiReturn)
    //CALL wikiResults 
    wikiResults(wikiReturn);


    const smithReturn = await fetch(
        'https://api.si.edu/openaccess/api/v1.0/search?rows=50&q='
        +
        localStorage.getItem("textValue", resultPageInput)+
        '&api_key=7vBdFGKepK5x26swaVx7qzLBLuMCFGG9lPoXQokI'

    ).then(response => response.json()) 
    console.log(smithReturn);
        //CALL smithResults 
    smithResults(smithReturn.response);

    }
    fetchResultMain()