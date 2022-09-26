export class SurveyInformationTemplate {
  constructor(name = '', open = true, captcha = false, ipRestriction = false) {
    this.name = name;
    this.open = open;
    this.protection = {
      captcha: captcha,
      ipRestriction: ipRestriction,
    };
  }
}
