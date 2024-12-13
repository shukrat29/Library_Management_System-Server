export const userActivationUrlEmailTemplate = ({ email, name, url }) => {
  return {
    from: `"Local library👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Action Required- Activate your new account", // Subject line
    text: `Hellow ${name} follow the link to activate your account. url`, // plain text body
    html: `
    <p>Hello ${name}</p>
   <br />
<br />
<p>Your account has been created. Click the button below to activate your account</p>
<br />
<br />
<a href = ${url}>
<button styles="background: gray">Activate Now</button>
</a>
<br />
<br />

Regards,
    
    `, // html body
  };
};
