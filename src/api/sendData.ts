const BACK_HOST = process.env.NEXT_PUBLIC_BACK_HOST;
const BACK_PORT = process.env.NEXT_PUBLIC_BACK_PORT;

let url = 'Не вказано';
if (typeof window !== 'undefined') {
  url = document.referrer || 'Не вказано';
}

function getParamString(queryParams: any) {
  let message = '';

  for (let key in queryParams) {
    message += queryParams?.[key] ? `${key} <b>${queryParams[key]}</b>\n` : '';
  }

  return message;
}

interface QueryParams {
  refId?: string | null;
  sub1?: string | null;
  sub2?: string | null;
  sub3?: string | null;
  sub4?: string | null;
  sub5?: string | null;
  sub6?: string | null;
  sub7?: string | null;
  sub8?: string | null;
  fbp?: string | null;
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

export const sendToGoogleScript = async (data: any) => {
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
    throw new Error('Error sending data to Google Script');
  }
};

export async function sendMessage(sendData: any) {
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
