
import entreprise from './entreprise.png';
import personAdd from './personAdd.png';
import call from './call.png';
import callGrey from './callGrey.png';
import web from './web.png';
import mail from './mail.png';
import sendmail from './sendmail.png';
import linkedin from './linkedin.png';

const contactImage ={
  entreprise,
  personAdd,
  call,
  callGrey,
  web,
  mail,
  sendmail,
  linkedin,
};

export type contactImageType =
 | 'entreprise'
 | 'personAdd'
 | 'call'
 | 'callGrey'
 | 'web'
 | 'mail'
 | 'linkedin'
 | 'sendmail';


export default contactImage;