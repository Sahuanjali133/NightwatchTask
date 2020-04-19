module.exports = {
    'Demo test' : function (browser) {
      var listofelements; 
      browser
      .url('https://www.gmail.com')
      .assert.visible('input[type=email]')
      .setValue('input[type=email]', 'EMAIL')
      .assert.visible('div[id=identifierNext]')
      .click('div[id=identifierNext]')
      .assert.visible('input[type=password]')
      .setValue('input[type=password]', 'PASSWORD')
      .click('div[id=passwordNext]')
      .useXpath() 
      .click("//div[@class='J-J5-Ji J-JN-M-I-Jm']//div[@class='G-asx T-I-J3 J-J5-Ji']")
      .click("//div[@class='J-N']//div[@class='J-N-Jz'][contains(text(),'Unread')]")
      .elements('xpath',"//div[@class='J-N']//div[@class='J-N-Jz'][contains(text(),'Unread')]",function (elements){
        listofelements=elements.value;
        console.log(listofelements);
        })
      
    }
  };