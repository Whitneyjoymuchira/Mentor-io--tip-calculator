let billInput=document.querySelector('#cash-bill')
let percentages=document.querySelectorAll('.percentages')
let tip=document.getElementById('total-amount')
let totalPerPerson=document.querySelector('#total-person')
const persons=document.getElementById('people')


function calculateTips(){
billInput.addEventListener('change', ()=>{
    let bill=Number(billInput.value)
   // let person=Number(persons.value)
//console.log(person)
console.log(bill)

persons.addEventListener('change', ()=>{
    let people=Number(persons.value)
    console.log(people)
 })

    percentages.forEach((percent)=>{
        percent.addEventListener('click',()=>{
            let rate=percent.innerHTML
        
            let number=parseInt(rate)
                    let tipped=bill*number/100
                    console.log(tipped)
                    

                    tip.value=tipped.toFixed(2)
                    

                   //calculating total of tips+ bill
             function sum(){
            total=Number(tipped+bill)
            console.log(total)

            //finding each cost
             

             }

             
             sum()
              
                })
                
        })
    })

   

}
calculateTips()

