const divApartments = document.getElementById("Number-of-apartments")

const divFloors = document.getElementById("Number-of-floors")

const divOccupancy = document.getElementById("maximum-Occupancy")

const divElevators = document.getElementById("Number-of-Elevators")


divApartments.style.display = "none"

divFloors.style.display = "none"

divOccupancy.style.display = "none"

divElevators.style.display = "none"


const Resedentialbutton = document.getElementById('Resedential')

const Commercialbutton = document.getElementById('Commercial')

const Industrialbutton = document.getElementById('Industrial')


Resedentialbutton.addEventListener("click", () => {

    divApartments.style.display = "block"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "none"

})

Commercialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "block"
    
    divOccupancy.style.display = "block"
    
    divElevators.style.display = "none"

})

Industrialbutton.addEventListener("click", () => {

    divApartments.style.display = "none"

    divFloors.style.display = "none"
    
    divOccupancy.style.display = "none"
    
    divElevators.style.display = "block"

})


//resedential
const floorsinput = document.getElementById("NOFInput")
const apartmentinput = document.getElementById("apartmentsInput")

const totalcost = document.getElementById ("TCInput")
const instillationfee = document.getElementById ("instillationInput")
const elevatorsneededoutput = document.getElementById ("elevatorsrequiredInput")
const costperunit = document.getElementById ("CPUInput")

apartmentinput.addEventListener("input", () => {
console.log("hello")

    const averageapartments = apartmentinput.value / floorsinput.value
    console.log(averageapartments)
    const requiredelevators = averageapartments/6
    
    const Elevatorbanks = Math.ceil(floorsinput.value/20)
    
    const elevatorsneeded = requiredelevators * Elevatorbanks
   
    console.log(elevatorsneeded)
    
    elevatorsneededoutput.value = elevatorsneeded
})

//Commercial
const Maximumoccupancy = document.getElementById ("MOInput")


Maximumoccupancy.addEventListener("input", () => {
    console.log("hello")
    
        const totaloccupants = Maximumoccupancy.value * floorsinput.value
        
        const requiredelevators = totaloccupants/200
        
        const Elevatorbanks = Math.ceil(floorsinput.value/10)
        
        const elevatorsneeded = Math.ceil(requiredelevators * Elevatorbanks + Elevatorbanks)
       
        console.log(elevatorsneeded)
        
        requiredelevators = elevatorsneeded
    })



    
    //Industrial

    const industrialelevators = document.getElementById ("NUEInput")
    
    industrialelevators.addEventListener("input", () => {

        elevatorsneededoutput.value = industrialelevators.value


    })


    const standardPPE = document.getElementById ("standardinput")
    const CostPerElevatorOutput = document.getElementById ("cost-output")
    const InstillationOutput = document.getElementById ("instillationInput")


    standardPPE.addEventListener("click", () => {
        //The number of elevators
        //unit cost
        //instillation fees


        const unitcost = 8000
        const instillationfee = 0.10

        //Elevators required
        
        //cost per elevator
        CostPerElevatorOutput.value = unitcost
        //instillation fees
        InstillationOutput.value = instillationfee * elevatorsneededoutput.value
        //the number of elevators required multiplied by the instillation fee.
        
        //final cost
        totalcost.value = elevatorsneededoutput.value * unitcost + InstillationOutput.value
        //multiplying the number of elevators by the unit cost and added the instillation fee.
        elevatorsneededoutput.value * unitcost + InstillationOutput.value

    })



    const premiumPPE = document.getElementById ("premiuminput")

    premiumPPE.addEventListener("click", () => {
        //The number of elevators
        //unit cost
        //instillation fees


        const unitcost = 12000
        const instillationfee = 0.15

        //Elevators required
        
        //cost per elevator
        CostPerElevatorOutput.value = unitcost
        //instillation fees
        InstillationOutput.value = instillationfee * elevatorsneededoutput.value
        //the number of elevators required multiplied by the instillation fee.
        
        //final cost
        totalcost.value = elevatorsneededoutput.value * unitcost + InstillationOutput.value
        //multiplying the number of elevators by the unit cost and added the instillation fee.
        elevatorsneededoutput.value * unitcost + InstillationOutput.value

    })

    const exceliumPPE = document.getElementById ("exceliuminput")

    exceliumPPE.addEventListener("click", () => {
        //The number of elevators
        //unit cost
        //instillation fees


        const unitcost = 15000
        const instillationfee = 0.20

        //Elevators required
        
        //cost per elevator
        CostPerElevatorOutput.value = unitcost
        //instillation fees
        InstillationOutput.value = instillationfee * elevatorsneededoutput.value
        //the number of elevators required multiplied by the instillation fee.
        
        //final cost
        totalcost.value = elevatorsneededoutput.value * unitcost + InstillationOutput.value
        //multiplying the number of elevators by the unit cost and added the instillation fee.
        elevatorsneededoutput.value * unitcost + InstillationOutput.value

    })