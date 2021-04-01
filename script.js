'use strict'








const steamDeals = async function() {
  try{
    const resp =  await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15') 
  const deals = await resp.json()
  console.log(deals)
   const [top1,top2,top3] = deals;
  console.log(top1,top2,top3)


  } catch(err) {
      console.log(err)
  }
  
}
steamDeals()

