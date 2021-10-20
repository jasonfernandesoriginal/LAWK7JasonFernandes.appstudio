/*
btnSubmit.onclick = function() {
    name = inptName.value
    address = inptAddress.value
    city = inptCity.value
    state = inptState.value
    zip = inptZipcode.value
    query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zip + "')"
    alert(query)

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblAdd.value = "You have added the customer!"
        else
            lblAdd.value = "There was a problem with adding the customer to the database."
    } else
        lblAdd.value = "Error: " + req.status
}

displayCustomers.onclick = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`the results are \n ${results}`)
        if (results.length == 0)
            lblAdd.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            lblAdd.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblAdd.value = "Error code: " + req.status
}
*/
