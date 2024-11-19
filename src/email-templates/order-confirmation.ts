// This is example of email template for order confirmation
// HTML is generated using react email
// https://react.email/

export const orderConfirmationTemplate = (data: Record<string, unknown>) => {
  // This is a simple example of an email template
  // You can use any template engine you like
  // Put data into the template to make it dynamic
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link rel="preload" as="image" href="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-logo.png" />
    <link rel="preload" as="image" href="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-user.png" />
    <link rel="preload" as="image" href="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-arrow.png" />
    <link rel="preload" as="image" href="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-team.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" /><!--$-->
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Join Alan on Vercel<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
  </div>

  <body style="background-color:rgb(255,255,255);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;padding-left:0.5rem;padding-right:0.5rem">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-radius:0.25rem;margin-top:40px;margin-bottom:40px;margin-left:auto;margin-right:auto;padding:20px;max-width:465px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:32px">
              <tbody>
                <tr>
                  <td><img alt="Vercel" height="37" src="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-logo.png" style="margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none" width="40" /></td>
                </tr>
              </tbody>
            </table>
            <h1 style="color:rgb(0,0,0);font-size:24px;font-weight:400;text-align:center;padding:0px;margin-top:30px;margin-bottom:30px;margin-left:0px;margin-right:0px">Join <strong>Enigma</strong> on <strong>Vercel</strong></h1>
            <p style="color:rgb(0,0,0);font-size:14px;line-height:24px;margin:16px 0">Hello <!-- -->alanturing<!-- -->,</p>
            <p style="color:rgb(0,0,0);font-size:14px;line-height:24px;margin:16px 0"><strong>Alan</strong> (<a href="mailto:alan.turing@example.com" style="color:rgb(37,99,235);text-decoration-line:none" target="_blank">alan.turing@example.com</a>) has invited you to the <strong>Enigma</strong> team on<!-- --> <strong>Vercel</strong>.</p>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td align="right" data-id="__react-email-column"><img height="64" src="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-user.png" style="border-radius:9999px;display:block;outline:none;border:none;text-decoration:none" width="64" /></td>
                          <td align="center" data-id="__react-email-column"><img alt="invited you to" height="9" src="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-arrow.png" style="display:block;outline:none;border:none;text-decoration:none" width="12" /></td>
                          <td align="left" data-id="__react-email-column"><img height="64" src="https://react-email-demo-bymyam2i5-resend.vercel.app/static/vercel-team.png" style="border-radius:9999px;display:block;outline:none;border:none;text-decoration:none" width="64" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center;margin-top:32px;margin-bottom:32px">
              <tbody>
                <tr>
                  <td><a href="https://vercel.com/teams/invite/foo" style="background-color:rgb(0,0,0);border-radius:0.25rem;color:rgb(255,255,255);font-size:12px;font-weight:600;text-decoration-line:none;text-align:center;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;padding:12px 20px 12px 20px" target="_blank"><span><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:18" hidden>&#8202;&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Join the team</span><span><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span></a></td>
                </tr>
              </tbody>
            </table>
            <p style="color:rgb(0,0,0);font-size:14px;line-height:24px;margin:16px 0">or copy and paste this URL into your browser:<!-- --> <a href="https://vercel.com/teams/invite/foo" style="color:rgb(37,99,235);text-decoration-line:none" target="_blank">https://vercel.com/teams/invite/foo</a></p>
            <hr style="border-width:1px;border-style:solid;border-color:rgb(234,234,234);margin-top:26px;margin-bottom:26px;margin-left:0px;margin-right:0px;width:100%;border:none;border-top:1px solid #eaeaea" />
            <p style="color:rgb(102,102,102);font-size:12px;line-height:24px;margin:16px 0">This invitation was intended for<!-- --> <span style="color:rgb(0,0,0)">alanturing</span>. This invite was sent from <span style="color:rgb(0,0,0)">204.13.186.218</span> <!-- -->located in<!-- --> <span style="color:rgb(0,0,0)">São Paulo, Brazil</span>. If you were not expecting this invitation, you can ignore this email. If you are concerned about your account&#x27;s safety, please reply to this email to get in touch with us.</p>
          </td>
        </tr>
      </tbody>
    </table><!--/$-->
  </body>
</html>
  `;
};
