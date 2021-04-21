class WhiteLabel {
  constructor(initLabel) {
    this.logoUrl = initLabel.logoUrl;
    this.companyName = initLabel.companyName;
    this.certificateUrl = initLabel.certificateUrl;
    this.contacts = initLabel.contacts;
  }

  setNewLogo(newLogoUrl) {
    this.logoUrl = newLogoUrl;
  }

  getNewWhitelabel() {
    return this;
  }
}

const myCompWhiteLabel = new WhiteLabel({
  logoUrl: 'http://placephoto.com/64*64',
  companyName: 'ABCD',
  certificateUrl: 'https://my.certificate.placement',
  contacts: 'City: Habarovsk, street Lenina, 25, stage 3',
});

// console.log(WhiteLabel);
// console.log(myCompWhiteLabel);

const commonItem = {
  sale: 0,
  type: 'unsorted',
};

function SportItem(type) {
  if (type) {
    this.type = type;
  }
}

SportItem.prototype = commonItem;

const bycePC = new SportItem('bycicle');

// console.log(bycePC.type);
// console.log(bycePC.sale);
