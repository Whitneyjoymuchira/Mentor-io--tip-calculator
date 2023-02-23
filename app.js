let billInput=document.querySelector('#cash-bill')
let percentages=document.querySelectorAll('.percentages')
let tip=document.getElementById('total-amount')
let totalPerPerson=document.querySelector('#total-person')
const persons=document.getElementById('people')
let button=document.querySelector('#reset-button')
const inputs=document.querySelectorAll('input')
const custom=document.getElementById('customize')


function calculateTips(){
//customize button
custom.addEventListener('click', ()=>{
   const input=document.createElement('input')
   input.type="text"
console.log(input)


billInput.addEventListener('change', ()=>{
    let bill=Number(billInput.value)
   // let person=Number(persons.value)
//console.log(person)
console.log(bill)

persons.addEventListener('change', ()=>{
    let people=Number(persons.value)
    console.log(people)


    percentages.forEach((percent)=>{
        percent.addEventListener('click',()=>{
            let rate=percent.innerHTML
        
            let number=parseInt(rate)
                    let tipped=bill*number/100
                    console.log(tipped)
                    

                    tip.value=tipped.toFixed(2)
                    

                   //calculating total of tips+ bill
             function sum(){
           let total=Number(tipped+bill)
            console.log(total)

            //finding each cost
             function individualCost(){
             let cost=parseInt(total / people)
             totalPerPerson.value=cost.toFixed(2)

            console.log(cost)
            //reset button
            button.addEventListener('click', ()=>{
                inputs.forEach((input)=>{
                    input.value=''


                    
                })
                
            })

             }
             individualCost()
            }
        
             sum()
            })
            
                })
                
        })
    })

})

}
calculateTips()

