/////step----------------------------111111111111111111111111111111111111111111111111111111111111111111111111111111/////////////////add
document.getElementById('Deposit-btn').addEventListener('click',function(){
   const depositFirst=document.getElementById('Deposit');
   const depositAmount=depositFirst.value ;
  const finalDeposit=parseFloat(depositAmount)

  depositFirst.value=""
////step--------------------------222222222222222222222222222222222222222222222222222222222222222222222222222222222/////////////////sum deposit
   const amount =document.getElementById('deposit-total')
    const previousAmount=amount.innerText
    const amountNumber =parseFloat(previousAmount)

    const total=finalDeposit+amountNumber

    amount.innerText=total
  

////step--------------3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333//////////////total balance
const balance =document.getElementById('Total Balance')
const totalBalance =balance.innerText
const totalBalanceNumber=parseFloat(totalBalance)
balance.innerText =totalBalanceNumber+finalDeposit

 
/////////step---------------------------444444444444444444444444444444444444444444444444444444444444444444444444444444///////////withdraw




})