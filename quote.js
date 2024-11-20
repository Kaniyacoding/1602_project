
//THE CONTAINERS FOR THE TOP 4 INPUT FIELDS
const divApartments = document.getElementById("Number-of-apartments")
const divFloors = document.getElementById("Number-of-floors")
const divOccupancy = document.getElementById("maximum-Occupancy")
const divElevators = document.getElementById("Number-of-Elevators")

//THE CONTAINERS FOR THE BOTTOM 4 INPUT FIELDS
const divelevatorsneededoutput = document.getElementById ("Elevators-Required")
const divtotalcost = document.getElementById ("Total-Cost")
const divInstillationOutput = document.getElementById ("instillation-fees")
const divunitcost = document.getElementById ("CPU")

//BUILDING TYPE RADIO BUTTONS
const Resedentialbutton = document.getElementById('Resedential')
const Commercialbutton = document.getElementById('Commercial')
const Industrialbutton = document.getElementById('Industrial')

//resedential
const floorsinput = document.getElementById("NOFInput")
const apartmentinput = document.getElementById("apartmentsInput")

//Commercial
const Maximumoccupancy = document.getElementById ("MOInput")

//Industrial
const CostPerElevatorOutput = document.getElementById ("NUEInput")

//PRODUCT TIER BUTTONS
const standardPPE = document.getElementById ("standardinput")
const premiumPPE = document.getElementById ("premiuminput")
const exceliumPPE = document.getElementById ("exceliuminput")


//FINAL OUTPUT FIELDS
const elevatorsneededoutput = document.getElementById ("elevatorsrequiredInput")
const totalcost = document.getElementById ("TCInput")
const InstillationOutput = document.getElementById ("instillationInput")
const unitcost = document.getElementById ("CPUInput")


//TURNING OFF THE DISPLAY FOR THE TOP 4 INPUT CONTAINERS
divApartments.style.display = "none"
divFloors.style.display = "none"
divOccupancy.style.display = "none"
divElevators.style.display = "none"

//TURNING OFF THE DISPLAY FOR THE BOTTOM 4 INPUT CONTAINERS
divelevatorsneededoutput.style.display = "none"
divtotalcost.style.display = "none"
divInstillationOutput.style.display = "none"
divunitcost.style.display = "none"

//RESIDENTIAL  COMMERCIAL  INDUSTRIAL BUTTONS
Resedentialbutton.addEventListener("click", () => {

    divApartments.style.display = "block"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "none"
    

    divelevatorsneededoutput.style.display = "block"

    divtotalcost.style.display = "block"

    divInstillationOutput.style.display = "block"

    divunitcost.style.display = "block"
})

//FUNCTIONAL
Commercialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "block"
    
    divElevators.style.display = "none"


    divelevatorsneededoutput.style.display = "block"

    divtotalcost.style.display = "block"

    divInstillationOutput.style.display = "block"

    divunitcost.style.display = "block"
})

//FUNCTIONAL
Industrialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "none"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "block"
 
    
    divelevatorsneededoutput.style.display = "block"

    divtotalcost.style.display = "block"

    divInstillationOutput.style.display = "block"

    divunitcost.style.display = "block"
})


const residentialMath = () => {
    const averageapartments = Math.ceil(apartmentinput.value / floorsinput.value)
    console.log(averageapartments)
    const requiredelevators = Math.ceil(averageapartments/6)
    
    const Elevatorbanks = Math.ceil(floorsinput.value/20)
    
    const elevatorsneeded = Math.ceil(requiredelevators * Elevatorbanks)
   
    console.log(elevatorsneeded)
    
    elevatorsneededoutput.value = elevatorsneeded
}


//CALCULATING COSTS
apartmentinput.addEventListener("input", () => {
    if (apartmentinput.value < 0) {
         return apartmentinput.value = 0; 
    }

    residentialMath()

    if(standardPPE.checked){
        standardMath()
    }
    if(premiumPPE.checked){
        premiumMath()
    }
    if(exceliumPPE.checked){
        exceliumMath()
    }
})

floorsinput.addEventListener("input", () => {
    if (floorsinput.value < 0) {
         return floorsinput.value = 0; 
    }

    if(Commercialbutton.checked){
        commercialMath()
    }else if(Resedentialbutton.checked){
        residentialMath() 
    }
    if(standardPPE.checked){
        standardMath()
    }
    if(premiumPPE.checked){
        premiumMath()
    }
    if(exceliumPPE.checked){
        exceliumMath()
    }
})

Maximumoccupancy.addEventListener("input", () => {
    if (Maximumoccupancy.value < 0) {
         return Maximumoccupancy.value = 0; 
    }
    commercialMath()
    if(standardPPE.checked){
        standardMath()
    }
    if(premiumPPE.checked){
        premiumMath()
    }
    if(exceliumPPE.checked){
        exceliumMath()
    }
})


const commercialMath = () => {
    
    const totaloccupants = Maximumoccupancy.value * floorsinput.value
    
    const requiredelevators = totaloccupants/200
    
    const Elevatorbanks = Math.ceil(floorsinput.value/10)
    
    const elevatorsneeded = Math.ceil(requiredelevators * Elevatorbanks + Elevatorbanks)
    
    console.log(elevatorsneeded)
    
    elevatorsneededoutput.value = elevatorsneeded
}

//FUNCTIONAL
Maximumoccupancy.addEventListener("input", () => {
    if (Maximumoccupancy.value < 0) {
        return Maximumoccupancy.value = 0; 
   }
    
    commercialMath()
})



    
//Industrial

const industrialelevators = document.getElementById ("NUEInput")

industrialelevators.addEventListener("input", () => {

    elevatorsneededoutput.value = industrialelevators.value
    if(standardPPE.checked){
        standardMath()
    }
    if(premiumPPE.checked){
        premiumMath()
    }
    if(exceliumPPE.checked){
        exceliumMath()
    }

})


function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
}).format(amount);
}

//STANDARD  PREMIUM  EXCELIUM BUTTONS
const exceliumMath = () => {
    const unitcostperelevator = 15000
    const InstillationCost = 0.20

    //Elevators required
const elevatorsrequired = elevatorsneededoutput.value

const formattedUnitCost = formatCurrency(unitcostperelevator)
//declaring the unit cost, pre instillation cost, and instillation fee container 
unitcost.value = formattedUnitCost

const preinstillationcost = unitcostperelevator * elevatorsrequired

const instillationfeecontainer = preinstillationcost * InstillationCost

const formattedInstillationFee = formatCurrency(instillationfeecontainer)
//instillation fees

InstillationOutput.value = formattedInstillationFee

//final cost
const finalcost = (preinstillationcost + instillationfeecontainer)

//multiplying the total cost by the final cost

const formattedCurrency = formatCurrency(finalcost)

 totalcost.value = formattedCurrency
}

const premiumMath = () => {
    const unitcostperelevator = 12000
        const InstillationCost = 0.15

        //Elevators required
    const elevatorsrequired = elevatorsneededoutput.value

    const formattedUnitCost = formatCurrency(unitcostperelevator)
       //declaring the unit cost, pre instillation cost, and instillation fee container 
    unitcost.value = formattedUnitCost

    const preinstillationcost = unitcostperelevator * elevatorsrequired

    const instillationfeecontainer = preinstillationcost * InstillationCost

    const formattedInstillationFee = formatCurrency(instillationfeecontainer)
    //instillation fees
    InstillationOutput.value = formattedInstillationFee

    //final cost
    const finalcost = (preinstillationcost + instillationfeecontainer)
    
    //multiplying the total cost by the final cost

    const formattedCurrency = formatCurrency(finalcost)

     totalcost.value = formattedCurrency
}
const standardMath = () => {
    const unitcostperelevator = 8000
    const InstillationCost = 0.10

    //Elevators required
    const elevatorsrequired = elevatorsneededoutput.value

    const formattedUnitCost = formatCurrency(unitcostperelevator)

    //declaring the unit cost, pre instillation cost, and instillation fee container  
    unitcost.value = formattedUnitCost

    const preinstillationcost = unitcostperelevator * elevatorsrequired

    const instillationfeecontainer = preinstillationcost * InstillationCost

    const formattedInstillationFee = formatCurrency(instillationfeecontainer)
    
    //instillation fees
    InstillationOutput.value = formattedInstillationFee 

    //final cost
    const finalcost = (preinstillationcost + instillationfeecontainer)
    
    //multiplying the total cost by the final cost
    

    const formattedCurrency = formatCurrency(finalcost)

    totalcost.value = formattedCurrency
}

standardPPE.addEventListener("click", () => {
    standardMath()
})



    

    premiumPPE.addEventListener("click", () => {
     premiumMath()
    })
    

    
    exceliumPPE.addEventListener("click", () => {
    exceliumMath()
})