import axios from 'axios';


const maxRedirection = 10;


const checkWebsiteStatus = async ( websiteUrl : string ) => {
    try {
  
          const response = await axios({
              method: 'get',
              url: websiteUrl,
              maxRedirects: maxRedirection,
          });
          
          //console.log('website running');
          return null;
      
      } catch (error) {
          
          if (axios.isAxiosError(error)) {
              
              if (error.request) {
      
                  console.log(error);
                  return null;
                  
              } else {
                  
                  interface downResponceObjectType {
                      websiteUrl: string,
                      status: null | Number,
                      statusText: null | String,
                      errorCode: null | String,
                      errorMessage: null | String,
                  }
              
                  const downResponceObject : downResponceObjectType = {
                      websiteUrl,
                      status: null,
                      statusText : null,
                      errorCode: null ,
                      errorMessage: null,
                  }
      
                  if (error.response) {
      
                      downResponceObject['status'] = error.response.status;
                      downResponceObject['statusText'] = error.response.statusText;
                      
                  } else {
                      
                      downResponceObject['errorCode'] = error.code || null;
                      downResponceObject['errorCode'] = error.message || null;
      
                  }
      
                  return downResponceObject;
      
              }
              
          } else {
      
              console.log(error);
              return null;
            
          }
      }
};

export default checkWebsiteStatus;