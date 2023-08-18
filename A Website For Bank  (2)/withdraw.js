document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawAmount =document.getElementById("withdraw")
    const withdrawAmountString =withdrawAmount.value  
    const withdrawAmountNumber =parseFloat(withdrawAmountString)
 

   ///step-------------------222222222222222222222222222222222222222222222222222222222222222222222222222222222 add
   const withdraw=document.getElementById('total-withdraw')
   const withdrawString= withdraw.innerText
   

   const withdrawNumber =parseFloat(withdrawString)

  //////////////step---------33333333333333333333333333333333333333333333addddddddddddddddddddddddddddddddddddd///////////////
  const total= withdrawAmountNumber + withdrawNumber

  withdraw.innerText =total 

  //////////////step------------------444444444444444444444444444444444444444444 sub(kom)////////////////////////////////////////
  const totalBalance=document.getElementById('Total Balance')
  const totalBalanceString =totalBalance.innerText
  const totalBalanceNumber=parseFloat(totalBalanceString)

  const sub = totalBalanceNumber - withdrawAmountNumber

  totalBalance.innerText=sub





    
})