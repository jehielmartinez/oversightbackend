const sgMail = require('@sendgrid/mail')
const sendGridAPI = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPI)

const sendMagicLink = (email, community, passcode) => {
    sgMail.send({
        to: email,
        from: 'jehielmartinez@gmail.com',
        subject: `Invitacion a communidad ${community}`,
        html: `
        <h2>Te han invitado a formar parte de la comunidad: ${community}</h2>
        <a href="https://www.oversight.hn?passcode=${passcode}">Claro que si!   </a>
        `
    })
}

const sendRegistration = (email, community, passcode) => {
    sgMail.send({
        to: email,
        from: 'jehielmartinez@gmail.com',
        subject: `Invitacion a comunidad ${community}`,
        html: `
        <h2>Te han invitado a formar parte de la comunidad: ${community}</h2>
        <a href="https://www.oversight.hn?passcode=${passcode}">Registrarse</a>
        `
    })
}

module.exports = {
    sendMagicLink,
    sendRegistration
}