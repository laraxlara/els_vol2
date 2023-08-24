// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  const {
    name,
    nameContact,
    emailContact,
    emailHero,
    subjectContact,
    phone,
    email,
    date,
    pickUpLocation,
    pickUpLocationHero,
    dropOfLocation,
    dropOfLocationHero,
    messages,
    messageContact,
  } = req.body;
  console.log(name);

  if (req.method !== "POST") {
    return res.status(404).send({ status: "fail", error: "Begone." });
  }

  try {
    // if (!subject || !subject.trim()) {
    //   throw new Error("Please provide a valid name.");
    // }

    // if (!email || !email.trim()) {
    //   throw new Error("Please provide a valid email address.");
    // }

    // if (!message || !message.trim()) {
    //   throw new Error("Please provide a valid email message.");
    // }

    await transporter.sendMail({
      to: "laraxlara97@gmail.com",
      from: `lara@gmail.com`,
      replyTo: `lara@gmail.com`,
      subject: `Executive Limo Service`,
      text: "message",
      html: `
      <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
      <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
        
        </div>
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
          <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
            Executive Limo Service - Form
          </p>
          <div style="font-size: .8rem; margin: 0 30px">
          ${
            name || nameContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Name:</span> ${name} ${nameContact}</p>`
              : "This is the CHECK AVAILABILITY form."
          }
          ${
            phone
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Phone Number:</span> ${phone}</p>`
              : ""
          }
          ${
            email || emailHero || emailContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Email Adress:</span> ${email} ${emailContact} ${emailHero}</p>`
              : ""
          }
          ${
            subjectContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Email Subject:</span> ${subjectContact}</p>`
              : ""
          }
          ${
            date
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Date Of The Ride:</span> ${date}</p>`
              : ""
          }
          ${
            pickUpLocation || pickUpLocationHero
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Pick Up Location:</span> ${pickUpLocation.name} ${pickUpLocationHero}</p>`
              : ""
          }
          ${
            dropOfLocation || dropOfLocationHero
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Drop Of Location:</span> ${dropOfLocation.name} ${dropOfLocationHero}</p>`
              : ""
          }
          ${
            messages || messageContact
              ? `<p><span style="font-weight: bold; font-size: 1rem;">Message:</span> ${messages} ${messageContact}</p>`
              : ""
          }
          </div>
        </div>
      </div>
    </div>
      `,
    });

    res.status(200).send({ status: "done", message: "message has been sent" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: "fail" });
  }
};

export default handler;
