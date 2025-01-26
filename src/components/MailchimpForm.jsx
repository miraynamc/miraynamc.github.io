import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
const mailchimpURL = `https://gmail.us13.list-manage.com/subscribe/post?u=39a6c9d03429e8c5e41bfbe9b&amp;id=b4381e1c04&amp;f_id=00dd61e1f0`;