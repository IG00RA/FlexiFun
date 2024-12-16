const BACK_HOST = process.env.NEXT_PUBLIC_BACK_HOST;
const BACK_PORT = process.env.NEXT_PUBLIC_BACK_PORT;

interface FormData {
  message: string;
  name?: string;
  surname?: string;
  quantity?: number;
  messenger?: string;
  phone?: string;
  email?: string;
}

interface SendMessageData {
  type: string;
  bot?: boolean;
  formData: FormData;
}
interface QueryParams {
  [key: string]: string | null | undefined;
  refId?: string | null | undefined;
  sub1?: string | null | undefined;
  sub2?: string | null | undefined;
  sub3?: string | null | undefined;
  sub4?: string | null | undefined;
  sub5?: string | null | undefined;
  sub6?: string | null | undefined;
  sub7?: string | null | undefined;
  sub8?: string | null | undefined;
  fbp?: string | null | undefined;
}

let url = 'Не вказано';
if (typeof window !== 'undefined') {
  url = document.referrer || 'Не вказано';
}

function getParamString(queryParams: QueryParams): string {
  let message = '';

  for (const key in queryParams) {
    if (queryParams[key]) {
      message += `${key} <b>${queryParams[key]}</b>\n`;
    }
  }

  return message;
}

function getQueryParams(): QueryParams {
  const searchParams = new URLSearchParams(window.location.search);
  const params: QueryParams = {};

  params.refId = searchParams.get('ref_id');
  params.sub1 = searchParams.get('sub1');
  params.sub2 = searchParams.get('sub2');
  params.sub3 = searchParams.get('sub3');
  params.sub4 = searchParams.get('sub4');
  params.sub5 = searchParams.get('sub5');
  params.sub6 = searchParams.get('sub6');
  params.sub7 = searchParams.get('sub7');
  params.sub8 = searchParams.get('sub8');
  params.fbp = searchParams.get('fbp');

  return params;
}

export const sendToGoogleScript = async (data: SendMessageData) => {
  const requestData = {
    ...data,
    formData: {
      ...data.formData,
      url,
      ...getQueryParams(),
    },
  };

  try {
    const response = await fetch(
      `http://${BACK_HOST}:${BACK_PORT}/api/send-to-google-script`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to send data to Google Script');
    }
  } catch (error) {
    throw new Error('Error sending data to Google Script: ' + error);
  }
};

export async function sendMessage(sendData: SendMessageData) {
  let botMessage;
  if (sendData.bot) {
    botMessage = '<b>Користувач перейшов в бот:</b>\n';
  } else {
    botMessage = '<b>Користувач відправив форму:</b>\n';
    botMessage += 'Імя: <b>' + sendData.formData.name + '</b>\n';
    botMessage += 'Прізвище: <b>' + sendData.formData.surname + '</b>\n';
    botMessage += 'Кількість: <b>' + sendData.formData.quantity + '</b>\n';
    botMessage += 'Месенджер: <b>' + sendData.formData.name + '</b>\n';
    botMessage += 'Телефон: <b>' + sendData.formData.phone + '</b>\n';
    botMessage += 'Емейл: <b>' + sendData.formData.email + '</b>\n';
  }

  botMessage += 'Url: <b>' + url + '</b>\n';

  const params = getQueryParams();
  botMessage += getParamString(params);

  const message = {
    type: 'flexi',
    formData: botMessage,
  };
  fetch(`http://${BACK_HOST}:${BACK_PORT}/api/send-message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  }).catch(error => {
    throw new Error('Error sending message:', error);
  });
}
