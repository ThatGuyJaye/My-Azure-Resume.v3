# A few things I ran into

- Counter API Explained:

    - lines 5-6 are the "API Call" fetch is telling the application to go and bring back the data we need from the url

    - the variable of count, which is set to thirty (line 4) is going to be assigned to the json response (response.count)

    - line 10 is then telling it to go into the document and find the element that has the element ID of "counter", 
    grab the inner text and set it to count (line 59 in html)

- Error Logging explained:
    - line 11, if there is an error, the catch function will log it to the console(line 12)

- How the function gets called:
    - line 1, When the content is loaded (DOMConentLoaded) it retreives the event (lines 5-18)