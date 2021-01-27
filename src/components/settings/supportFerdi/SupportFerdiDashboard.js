import React, { Component } from 'react';
import { defineMessages, FormattedHTMLMessage, intlShape } from 'react-intl';
import { remote } from 'electron';
import InfoBar from '../../ui/InfoBar';

const { BrowserWindow } = remote;

const messages = defineMessages({
  headline: {
    id: 'settings.supportFerdi.headline',
    defaultMessage: '!!!About Duct',
  },
  title: {
    id: 'settings.supportFerdi.title',
    defaultMessage: '!!!Do you like Duct?',
  },
  aboutIntro: {
    id: 'settings.supportFerdi.aboutIntro',
    defaultMessage: '!!!<p>Duct is a messaging app for WhatsApp, Slack, Telegram, HipChat, Hangouts and many more.</p>',
  },
  textListContributors: {
    id: 'settings.supportFerdi.textListContributors',
    defaultMessage: '!!!Full list of contributor',
  },
  textListContributorsHere: {
    id: 'settings.supportFerdi.textListContributorsHere',
    defaultMessage: '!!!here',
  },
  textVolunteers: {
    id: 'settings.supportFerdi.textVolunteers',
    defaultMessage: '!!!The development of Duct is done by volunteers. People who use Duct like you. They maintain, fix, and improve Duct in their spare time.',
  },
  textSupportWelcome: {
    id: 'settings.supportFerdi.textSupportWelcome',
    defaultMessage: '!!!Support is always welcome. You can find a list of the help we need',
  },
  textSupportWelcomeHere: {
    id: 'settings.supportFerdi.textSupportWelcomeHere',
    defaultMessage: '!!!here',
  },
  textExpenses: {
    id: 'settings.supportFerdi.textExpenses',
    defaultMessage: '!!!While volunteers do most of the work, we still need to pay for servers and certificates. As a community, we are fully transparent on funds we collect and spend - see our',
  },
  textOpenCollective: {
    id: 'settings.supportFerdi.textOpenCollective',
    defaultMessage: '!!!Open Collective',
  },
  textDonation: {
    id: 'settings.supportFerdi.textDonation',
    defaultMessage: '!!!If you feel like supporting Duct development with a donation, you can do so on both,',
  },
  textDonationAnd: {
    id: 'settings.supportFerdi.textDonationAnd',
    defaultMessage: '!!!and',
  },
  textGitHubSponsors: {
    id: 'settings.supportFerdi.textGitHubSponsors',
    defaultMessage: '!!!GitHub Sponsors',
  },
  openSurvey: {
    id: 'settings.supportFerdi.openSurvey',
    defaultMessage: '!!!Open Survey',
  },
  bannerText: {
    id: 'settings.supportFerdi.bannerText',
    defaultMessage: '!!!Do you want to help us improve Duct?',
  },
});

class SupportFerdiDashboard extends Component {
  static contextTypes = {
    intl: intlShape,
  };

  openSurveyWindow() {
    let win = new BrowserWindow({ width: 670, height: 400 });
    win.on('closed', () => {
      win = null;
    });

    // win.loadURL('https://rp28.typeform.com/to/E3phJT');
    win.loadURL('https://forms.gle/WbwmDoEL2VLt33NL8');
  }

  render() {
    const { intl } = this.context;

    return (
      <div className="settings__main">
        <div className="settings__header">
          <span className="settings__header-item">
            {intl.formatMessage(messages.headline)}
          </span>
        </div>
        <div className="settings__body">
          <h1>{intl.formatMessage(messages.title)}</h1>
          <div>
            <FormattedHTMLMessage {...messages.aboutIntro} />
            <br />
            <br />
          </div>
        </div>
        <InfoBar
          sticky
          type="primary"
          ctaLabel={intl.formatMessage(messages.openSurvey)}
          onClick={this.openSurveyWindow}
        >
          {intl.formatMessage(messages.bannerText)}
        </InfoBar>
      </div>
    );
  }
}

export default SupportFerdiDashboard;
