document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // पेज को रीलोड होने से रोकता है

        // फॉर्म से डेटा कलेक्ट करना
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value || 'Not provided';
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value || 'None';

        // यहाँ अपना WhatsApp नंबर लिखें (देश के कोड के साथ, जैसे भारत के लिए 91 और आगे नंबर)
        const hospitalWhatsAppNumber = "918447750016"; // <--- अपना WhatsApp नंबर यहाँ डालें

        // WhatsApp के लिए मैसेज का फॉर्मेट तैयार करना
        const whatsappMessage = `*New Appointment Request*%0A` +
                                `----------------------------------%0A` +
                                `*Patient Name:* ${fullName}%0A` +
                                `*Phone:* ${phone}%0A` +
                                `*Email:* ${email}%0A` +
                                `*Doctor:* ${doctor}%0A` +
                                `*Date:* ${date}%0A` +
                                `*Symptoms/Reason:* ${message}`;

        // WhatsApp URL जनरेट करना
        const whatsappURL = `https://wa.me/${hospitalWhatsAppNumber}?text=${whatsappMessage}`;

        // यूजर को WhatsApp पर रीडायरेक्ट करना
        window.open(whatsappURL, '_blank');

        // फॉर्म रीसेट करना
        form.reset();
    });
});