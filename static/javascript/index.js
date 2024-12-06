const url='http://localhost:3002'

SaveForm();
async function SaveForm()
{
   const form=document.querySelector('.saveform');
   if(!form)
    return;

   form.onsubmit=async(e)=>
   {
    e.preventDefault();
    const formData=new FormData(e.target);

    const object=Object.fromEntries(formData.entries())
    const response=await fetch(`${url}/add`,{headers:{'Content-Type':'application/json'},method:"POST",body:JSON.stringify(object)});
 
    if(response.ok)
    {
      const data=await response.json();
      if(data.success)
        window.location.href="/";

      return data;
    } 
    console.log("Response is not ok!");
   }
  
}

function Validation()
{
    const name=document.querySelector('.name');
    const address=document.querySelector('.address');
    const email=document.querySelector('.email');
    const phone=document.querySelector('.phone');
    const saveForm=document.querySelector('.saveform');
    const nameError=document.querySelector('.nameerror');
    const addressError=document.querySelector('.addresserror');
    const phoneError=document.querySelector('.phoneerror');
    const emailError=document.querySelector('.emailerror');


    

    saveForm.onsubmit=(e)=>{
      e.preventDefault();

    }
}