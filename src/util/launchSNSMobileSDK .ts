import SNSMobileSDK from '@sumsub/react-native-mobilesdk-module';

// ...

export let launchSNSMobileSDK = () => {
  // From your backend get an access token for the applicant to be verified.
  // The token must be generated with `levelName` and `userId`,
  // where `levelName` is the name of a level configured in your dashboard.
  //
  // The sdk will work in the production or in the sandbox environment
  // depend on which one the `accessToken` has been generated on.
  //
  let accessToken = 'your_access_token';

  let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {
    // this is a token expiration handler, will be called if the provided token is invalid or got expired
    // call your backend to fetch a new access token (this is just an example)
    return fetch('http://example.org/', {
      method: 'GET',
    }).then((resp) => {
      // return a fresh token from here
      return 'new_access_token';
    });
  })
    .withHandlers({
      // Optional callbacks you can use to get notified of the corresponding events
      onStatusChanged: (event: { prevStatus: string; newStatus: string }) => {
        console.log(
          'onStatusChanged: [' +
            event.prevStatus +
            '] => [' +
            event.newStatus +
            ']',
        );
      },
      onLog: (event: { message: string }) => {
        console.log('onLog: [Idensic] ' + event.message);
      },
    })
    .withDebug(true)
    .withLocale('en') // Optional, for cases when you need to override the system locale
    .build();

  snsMobileSDK
    .launch()
    .then((result: string) => {
      console.log('SumSub SDK State: ' + JSON.stringify(result));
    })
    .catch((err: string) => {
      console.log('SumSub SDK Error: ' + JSON.stringify(err));
    });
};

