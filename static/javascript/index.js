const url='http://localhost:3002'

SaveForm();
async function SaveForm()
{
   const formData=new FormData();
   const response=await fetch(`${url}/save`,{method:"POST",body:formData});

   if(response.ok)
   {
     const data=await response.json();
     return data;
   } 
   console.log("Response is not ok!");
}