const BASE_URL = 'https://api.emailjs.com/api/v1.0/email/send' ; 

const sendEmail = async (body: {[value:string] : string| undefined| any}, template: 'devis' | 'makingContact')=>{
const {REACT_APP_EMAILSJS_SERVICE_ID, REACT_APP_EMAILSJS_TEMPLATE_ID ,REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILSJS_TEMPLATE_DEVIS_ID} = process.env

 const  data = {
    service_id: REACT_APP_EMAILSJS_SERVICE_ID,
    template_id: template === "makingContact" ? REACT_APP_EMAILSJS_TEMPLATE_ID : REACT_APP_EMAILSJS_TEMPLATE_DEVIS_ID,
    user_id: REACT_APP_EMAILJS_USER_ID,
    template_params: {
      ...body
    }
};

  const responseFetch = await fetch(BASE_URL, {
     method: 'POST',
     headers: {
      'Content-type': 'application/json',
    },
    body: body ? JSON.stringify(data) : null,

  })
  let response = {};
  try {
   const  responseJson = await responseFetch.json();
   response = { succes: true, data: responseJson }
  } catch (error) {
    response = { succes: true, data: undefined }
  }
  return response
}



export default sendEmail;