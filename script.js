// inputTicketQuantity function
function inputTicketQuantity(ticket,ticketIncrease){
    const ticketCategory = document.getElementById(ticket + 'Input')
    const ticketCategoryInput = parseInt(ticketCategory.value)
    
    let ticketCategoryNewValue = ticketCategoryInput
    if(ticketIncrease == true){
        ticketCategoryNewValue = ticketCategoryInput + 1
    }
    if(ticketIncrease == false && ticketCategoryNewValue > 0){
        ticketCategoryNewValue = ticketCategoryInput - 1
    }

    ticketCategory.value = ticketCategoryNewValue
    
    // ticket fare calculate function call
    ticketFareCalculate()
}

// ticket fare calculate function
function ticketFareCalculate(){
    const firstClass = document.getElementById('firstClassInput') // collect value from id = 'firstClassInput'
    const firstClassInput = parseInt(firstClass.value)

    const economyClass = document.getElementById('economyClassInput') // collect value from id = 'economyClassInput'
    const economyClassInput = parseInt(economyClass.value)

    let subtotalFare = 0
    subtotalFare = firstClassInput * 150 + economyClassInput * 100  // got subtotalFare
    document.getElementById('ticketSubtotalFare').innerText = subtotalFare 

    const tenPercentageVat = (subtotalFare / 100) * 10 // got ticketFareVat
    document.getElementById('ticketFareVat').innerText = tenPercentageVat

    let totalFareOfTicket = 0
    totalFareOfTicket = subtotalFare + tenPercentageVat // got totalFareOfTicket
    document.getElementById('totalTicketFare').innerText = totalFareOfTicket
}

// bookNow function for bookNow button to showing success Message
function bookNow(){
    const mainContent = document.getElementById('mainContainer') 
    mainContent.style.display = 'none' //main container display none ( disable )

    const confirmMessage = document.getElementById('confirmMessage')
    confirmMessage.style.display = 'block' //confirmMessage display block ( enable )

    const fromLocation = document.getElementById('fromLocation').value 
    document.getElementById('fromDestination').innerText = fromLocation // show fromLocation

    const toLocation = document.getElementById('toLocation').value 
    document.getElementById('toDestination').innerText = toLocation // show toLocation

    const departureDate = document.getElementById('departureDate').value 
    document.getElementById('departure').innerText = departureDate  // show departureDate

    const returnDate = document.getElementById('returnDate').value 
    document.getElementById('return').innerText = returnDate  // show returnDate

    const firstClassTotalTicket = document.getElementById('firstClassInput').value 
    const firstClassTotalQuantity = parseInt(firstClassTotalTicket)
    document.getElementById('firstClass').innerText = firstClassTotalTicket // show only firstClass 
    
    const economyClassTotalTicket = document.getElementById('economyClassInput').value
    const economyClassTotalQuantity = parseInt(economyClassTotalTicket)
    document.getElementById('economyClass').innerText = economyClassTotalTicket //show only economyClass 

    document.getElementById('totalTicket').innerText = firstClassTotalQuantity + economyClassTotalQuantity // show totalTicket quantity

    const subtotalFare = document.getElementById('ticketSubtotalFare').innerText
    document.getElementById('subtotalTicketFare').innerText = subtotalFare // show ticket subtotalFare 

    const ticketFareVat = document.getElementById('ticketFareVat').innerText
    document.getElementById('ticketVat').innerText = ticketFareVat // show ticket Fare Vat 
    
    const totalTicketFare = document.getElementById('totalTicketFare').innerText
    document.getElementById('totalFare').innerText = totalTicketFare // show ticket total fare 
}






