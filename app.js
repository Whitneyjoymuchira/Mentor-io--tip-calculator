let billInput=document.querySelector('#cash-bill')
let percentages=document.querySelectorAll('.percentages')
let tip=document.getElementById('total-amount')
let totalPerPerson=document.querySelector('#total-person')

function calculateTips(){
billInput.addEventListener('change', ()=>{
    let bill=billInput.value


    percentages.forEach((percent)=>{
        percent.addEventListener('click',()=>{
            let rate=percent.innerHTML
        
            let number=parseInt(rate)
                    let tipped=bill*number/100
                    console.log(tipped)

                    tip.value=tipped.toFixed(2)
                    

                })
        })
        
  

    })
 

}
calculateTips()

