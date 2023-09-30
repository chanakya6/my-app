import React from 'react';
import './fooditems.css';

function Recipe() {
  return (
    <div style={{ margin:"auto",marginTop:"20px" }} id='foodbody'>
    
    <div className='preparation' style={{display:"flex"}} >
      <div style={{flex:"1"}}>
      
        <img src='https://curlytales.com/wp-content/uploads/2020/07/Biryani-1.jpg' alt='biryani'
        width={"500px"}
        height={"300px"} />
        </div>
    <div style={{flex:"1"}}>
    <h1>Ingredients:</h1>
    <p>
    750 g Chicken chopped to bite sized pieces <br></br>
3 Onions finely sliced <br></br>
1 tbsp Cashewnut Paste <br></br>
4 Tomatoes large, pureed <br></br>
2 cup Basmati Rice soaked for 10 minutes <br></br>
1 tbsp Ghee 20g <br></br>
2 tsp Ginger Garlic Paste <br></br>
1 tbsp Poppy Seeds coarsely powdered <br></br>
10 Saffron Strands soaked in 2 tbsp milk <br></br>
6 tbsp Oil 60-65 ml <br></br>
1 cup Fried Onions – 1 cup to garnish <br></br>
Salt as per taste <br></br>
</p>
    </div>
      <div  style={{flex:"1"}}>
      <h1>For the marinade:</h1>
      <p>
      2 cup Curd beaten<br></br>
1 tbsp Coriander Leaves chopped<br></br>
2 tsp Red Chilli Powder<br></br>
2 tsp Garam Masala Powder<br></br>
1/2 tsp Turmeric Powder<br></br>
1 1/2 tsp Salt<br></br>
      </p>

      </div>
      </div>
      <div style={{marginleftt:"50px"}}>
        <center><h1>How to make Chicken Biryani</h1></center>
        <p style={{marginleftt:"50px"}}>
        Mix all the marinade ingredients and rub all over the chicken pieces.
Keep aside for 30 minutes. <br></br>
To get the best flavours, leave it to marinate overnight.
Heat oil in a pan over medium flame.<br></br>
Add the ginger garlic paste and onions.<br></br>
Saute well for 3 to 4 minutes or until onions turn light golden brown.<br></br>
Add the cashewnut paste, tomato puree and poppy seeds.<br></br>
Stir well and simmer for a minute or two.<br></br>
Add the marinated chicken pieces and cover the pan with a lid.<br></br>
Reduce flame to low and cook till the chicken is tender.
<br></br> Turn off flame once it is fully cooked.<br></br>
Drain the rice and rinse well.<br></br>
Pressure cook till 3/4ths done and remove. Alternatively, cook it in a deep vessel using the boiling method and drain excess water after it’s cooked.
Place a chapati or dosa tawa on a low flame.<br></br>
Put a large, deep pan over this to cook the biryani dum-style.<br></br>
Spread a layer of rice at the bottom of the pan followed by a layer of the chicken gravy.<br></br>
Repeat until all the rice and chicken have been used up, finishing up with a layer of rice on top.
Sprinkle the saffron strands with the milk and ghee on top.<br></br>
Cover the pan with a tight fitting lid* and cook for 30-45 minutes. Ensure there is no escaping of steam.
Remove when the rice is cooked and chicken pieces are tender.<br></br>
Gently fluff up the rice using a fork.<br></br>
Garnish with the fried onions.<br></br>
Serve hot with onion raita.<br></br>
        </p>

      </div>
      </div>

  );
}

export default  Recipe;