import { profile } from '../data/resume';

export function downloadVCard() {
  const card = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    'N:S;Anand Bhat;;;',
    `TITLE:${profile.title}`,
    `ORG:${profile.company}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `TEL;TYPE=CELL:${profile.phoneHref.replace('tel:', '')}`,
    `URL:${profile.website}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`,
    `ADR;TYPE=WORK:;;;Bengaluru;Karnataka;;India`,
    'END:VCARD',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([card], { type: 'text/vcard' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Anand_Bhat_S.vcf';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
