export const sendToGoogleScript = async (data: any) => {
  const BACK_HOST = process.env.NEXT_PUBLIC_BACK_HOST;
  const BACK_PORT = process.env.NEXT_PUBLIC_BACK_PORT;

  const url = document.referrer || 'Не вказано';

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
