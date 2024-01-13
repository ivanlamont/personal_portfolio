import {useState} from "react";
import { SES } from '@aws-sdk/client-ses';

const ses = new SES({ region: process.env.AWS_SES_REGION });

type ResponseDataType = {
  type: string,
  message: string
}

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseDataType>({ type: '', message: '' });

  const submit = async (url: string, data: any) => {
    setLoading(true);
    const params = {
      Source: data.email,
      Destination: {
        ToAddresses: ['ivanlamont@yahoo.com'],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `Email from Portfolio Web: ${data.type}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: data.comment,
        },
      },
    };
    try {
      await ses.sendEmail(params);
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
