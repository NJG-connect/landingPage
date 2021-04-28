export const BASE_URL_AIRTABLE = "https://api.airtable.com/";


const validateEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

// Regex for return  Phone
 const validatePhone = (phone: string) => {
  if (
    /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/.test(
      phone
    )
  ) {
    return true;
  }
  return false;
};

// Regex for return Email or Phone
 const validePhoneOrEmail = (value: string) => {
  if (validateEmail(value)) {
    return "Email";
  } else if (validatePhone(value)) {
    return "Tel";
  }
  return false;
};


const addInfoAirtableForContact = async (data: {
  [value: string]: string | undefined | any;
}): Promise<{ succes: boolean; data: any }> => {
  const { REACT_APP_AIRTABLE_BASE_ID_CONTACT } = process.env;
  let url = `${BASE_URL_AIRTABLE}v0/${REACT_APP_AIRTABLE_BASE_ID_CONTACT}/Contacts`;
  const emailOrTel: false | 'Tel' | 'Email' = validePhoneOrEmail(data.contact)
  let infoEmailOrTel = {}
  if(!!emailOrTel){
    infoEmailOrTel= {
      [emailOrTel as unknown as 'Tel' | 'Email'] : data.contact
    }
  }
  const body = {
    records: [
      {
        fields: {
          Nom: data.name,
          Entreprise: data.society,
          "Email-Tel": data.contact,
          ...infoEmailOrTel
        },
      },
    ],
  };
  return postDataOnAirtable(body, url);
};

const addInfoAirtableForDevis = async (data: {
  [value: string]: string | undefined | any;
}): Promise<{ succes: boolean; data: any }> => {
  const { REACT_APP_AIRTABLE_BASE_ID_CONTACT } = process.env;
  let url = `${BASE_URL_AIRTABLE}v0/${REACT_APP_AIRTABLE_BASE_ID_CONTACT}/Contacts`;
  const body = {
    records: [
      {
        fields: {
          Nom: data.name,
          Entreprise: data.society,
          Email: data.mail,
          Tel: data.tel,
          Budget: data.budget,
          Description: data.moreDescription,
          Support: data.support,
          Deadline: data.deadline || undefined,
          Services: data.type,
          Activités: data.project,
        },
      },
    ],
  };
  return postDataOnAirtable(body, url);
};

const postDataOnAirtable = async (
  body: {
    [value: string]: string | undefined | any;
  },
  url: string
): Promise<{ succes: boolean; data: any }> => {
  const { REACT_APP_AIRTABLE_API_KEY } = process.env;

  let response = { succes: false, data: undefined };
  try {
    const responseFetch = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
      },
      body: body ? JSON.stringify(body) : null,
    });
    const responseJson = await responseFetch.json();
    response = { succes: responseFetch.ok, data: responseJson };
  } catch (error) {
    response = { succes: false, data: undefined };
  }
  return response;
};

export { addInfoAirtableForContact, addInfoAirtableForDevis };
