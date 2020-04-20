module.exports = {
    'Demo test' : function (browser) {
      browser
      .url('https://www.gmail.com')
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'EMAIL')
      .assert.visible('div[id=identifierNext]')
      .click('div[id=identifierNext]')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', 'PASSWORD')
      .click('div[id=passwordNext]')
      .pause(2000)
      .useXpath() 
      .elements('xpath', "//tr[@class='zA zE']", function (elements) {
        console.log("The number of unread emails are : " + elements.value.length);
        })

        .elements('xpath',"//tr[@class='zA zE']",function (elements){
          listofelements=elements.value;
          console.log(listofelements);
        })

        .getText('xpath',"//tr[@class='zA zE']", function(result) {
          console.log('Sender name and subject line : ', result.value);
        })
    }
  };