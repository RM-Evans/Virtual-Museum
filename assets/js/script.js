
 $.getJSON(".json", function (data) {

    var arrItems = [];      // The array to store JSON items.use val or url idk dosent really make sense
    $.each(data, function (index, value) {
        arrItems.push(value);       // Push values in the array.
    });

    // Create a <div> element dynamically.

    var divContainer = $('<div')

    }

    // Add JSON data to the div as image.
    for (var i = 0; i < arrItems.length; i++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if (j === 2) {      // The last JSON column has image urls.

                // Create an <img> element to show the images.
                var img = document.createElement('img');        
                img.src = arrItems[i].Image;   // The image source from JSON array.
                tabCell.appendChild(img);
            }
            else
                tabCell.innerHTML = arrItems[i][col[j]];
        }
    }

    // Finally, add the newly created <table> with data to a container.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
});
});
    
    // Create an <img> element to show the images.
        var img = $('<img id="dynamic">');      
        img.attr('src', arrItems[i].Image;   // The image source from JSON array.
        tabCell.appendChild(img);