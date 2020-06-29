// Declare variables

let tableData = data;
let tbody = d3.select("tbody")
let buttonDate = d3.select('#filter-date')
let buttonCity = d3.select('#filter-city')
let buttonState = d3.select('#filter-state')
let buttonCountry = d3.select('#filter-country')
let buttonShape = d3.select('#filter-shape')

// Load data into website

function populate(){
    tableData.forEach(d=>{
        let row = tbody.append('tr')

        Object.values(d).forEach(w=>{
            let cell = row.append('td')
            cell.text(w)
        })

    })
}

window.onload = (populate)

// Listen

buttonDate.on('click',runDate)
buttonCity.on('click',runCity)
buttonState.on('click',runState)
buttonCountry.on('click',runCountry)
buttonShape.on('click',runShape)

// Filter by date function

function runDate(){
    d3.event.preventDefault();
    let input= d3.select('#datetime')
    let inputValue = input.property('value')
    tbody.html('')
    if (inputValue == ''){populate()}
    else { 
        tableData.forEach(d=>{

            if (Object.values(d)[0] == inputValue){

                let row = tbody.append('tr')
                Object.values(d).forEach(w=>{
                    
                    let cell = row.append('td')
                    cell.text(w)
                })
            }
        })
    }
}

// Filter by city function

function runCity(){
    d3.event.preventDefault();
    let input= d3.select('#city')
    let inputValue = input.property('value')
    tbody.html('')
    if (inputValue == ''){populate()}
    else { 
        tableData.forEach(d=>{

            if (Object.values(d)[1] == inputValue){

                let row = tbody.append('tr')
                Object.values(d).forEach(w=>{
                    
                    let cell = row.append('td')
                    cell.text(w)
                })
            }
        })
    }
}

// Filter by state function

function runState(){
    d3.event.preventDefault();
    let input= d3.select('#state')
    let inputValue = input.property('value')
    tbody.html('')
    if (inputValue == ''){populate()}
    else { 
        tableData.forEach(d=>{

            if (Object.values(d)[2] == inputValue){

                let row = tbody.append('tr')
                Object.values(d).forEach(w=>{
                    
                    let cell = row.append('td')
                    cell.text(w)
                })
            }
        })
    }
}

// Filter by country function

function runCountry(){
    d3.event.preventDefault();
    let input= d3.select('#country')
    let inputValue = input.property('value')
    tbody.html('')
    if (inputValue == ''){populate()}
    else { 
        tableData.forEach(d=>{

            if (Object.values(d)[3] == inputValue){

                let row = tbody.append('tr')
                Object.values(d).forEach(w=>{
                    
                    let cell = row.append('td')
                    cell.text(w)
                })
            }
        })
    }
}

// Filter by shape function

function runShape(){
    d3.event.preventDefault();
    let input= d3.select('#shape')
    let inputValue = input.property('value')
    tbody.html('')
    if (inputValue == ''){populate()}
    else { 
        tableData.forEach(d=>{

            if (Object.values(d)[4] == inputValue){

                let row = tbody.append('tr')
                Object.values(d).forEach(w=>{
                    
                    let cell = row.append('td')
                    cell.text(w)
                })
            }
        })
    }
}