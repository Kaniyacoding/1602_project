
//THE CONTAINERS FOR THE TOP 4 INPUT FIELDS
const divApartments = document.getElementById("Number-of-apartments")
const divFloors = document.getElementById("Number-of-floors")
const divOccupancy = document.getElementById("maximum-Occupancy")
const divElevators = document.getElementById("Number-of-Elevators")

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



//RESIDENTIAL  COMMERCIAL  INDUSTRIAL BUTTONS
Resedentialbutton.addEventListener("click", () => {

    divApartments.style.display = "block"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "none"

})

//FUNCTIONAL
Commercialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "block"
    
    divElevators.style.display = "none"

})

//FUNCTIONAL
Industrialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "none"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "block"

})



//CALCULATING COSTS
apartmentinput.addEventListener("input", () => {
    console.log("hello")

    const averageapartments = Math.ceil(apartmentinput.value / floorsinput.value)
    console.log(averageapartments)
    const requiredelevators = Math.ceil(averageapartments/6)
    
    const Elevatorbanks = Math.ceil(floorsinput.value/20)
    
    const elevatorsneeded = Math.ceil(requiredelevators * Elevatorbanks)
   
    console.log(elevatorsneeded)
    
    elevatorsneededoutput.value = elevatorsneeded
})


//FUNCTIONAL
Maximumoccupancy.addEventListener("input", () => {
    console.log("hello")
    
    const totaloccupants = Maximumoccupancy.value * floorsinput.value
    
    const requiredelevators = totaloccupants/200
    
    const Elevatorbanks = Math.ceil(floorsinput.value/10)
    
    const elevatorsneeded = Math.ceil(requiredelevators * Elevatorbanks + Elevatorbanks)
    
    console.log(elevatorsneeded)
    
    elevatorsneededoutput.value = elevatorsneeded
})



    
//Industrial

const industrialelevators = document.getElementById ("NUEInput")

industrialelevators.addEventListener("input", () => {

    elevatorsneededoutput.value = industrialelevators.value


})


    

//STANDARD  PREMIUM  EXCELIUM BUTTONS

standardPPE.addEventListener("click", () => {
    //unit cost
   //instillation cost


    const unitcostperelevator = 8000
    const InstillationCost = 0.10

    //Elevators required
    const elevatorsrequired = elevatorsneededoutput.value

    //declaring the unit cost, pre instillation cost, and instillation fee container  
    unitcost.value = unitcostperelevator

    const preinstillationcost = unitcostperelevator * elevatorsrequired

    const instillationfeecontainer = preinstillationcost * InstillationCost
    
    //instillation fees
    InstillationOutput.value = instillationfeecontainer

    //final cost
    const finalcost = (preinstillationcost + instillationfeecontainer)
    
    //multiplying the total cost by the final cost

     totalcost.value = finalcost

})



    

    premiumPPE.addEventListener("click", () => {
        //unit cost
        //instillation cost


        const unitcostperelevator = 12000
        const InstillationCost = 0.15

        //Elevators required
    const elevatorsrequired = elevatorsneededoutput.value

       //declaring the unit cost, pre instillation cost, and instillation fee container 
    unitcost.value = unitcostperelevator

    const preinstillationcost = unitcostperelevator * elevatorsrequired

    const instillationfeecontainer = preinstillationcost * InstillationCost

    //instillation fees
    InstillationOutput.value = instillationfeecontainer

    //final cost
    const finalcost = (preinstillationcost + instillationfeecontainer)
    
    //multiplying the total cost by the final cost

     totalcost.value = finalcost
    })
    

    
    exceliumPPE.addEventListener("click", () => {
        //unit cost
        //instillation cost


        const unitcostperelevator = 15000
        const InstillationCost = 0.20

        //Elevators required
    const elevatorsrequired = elevatorsneededoutput.value

    //declaring the unit cost, pre instillation cost, and instillation fee container 
    unitcost.value = unitcostperelevator

    const preinstillationcost = unitcostperelevator * elevatorsrequired

    const instillationfeecontainer = preinstillationcost * InstillationCost

    //instillation fees
    InstillationOutput.value = instillationfeecontainer
    
    //final cost
    const finalcost = (preinstillationcost + instillationfeecontainer)
    
    //multiplying the total cost by the final cost

     totalcost.value = finalcost

    })