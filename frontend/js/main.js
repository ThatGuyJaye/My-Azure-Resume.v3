const functionApi = '';

const GetVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()

    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").InnerText = count;
    })
}
    