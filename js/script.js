function validdateform() {
    const name = document, forms{"contact-form"}{"full-name"}.value;
    const email = document, forms{"contact-form"}{"email"}.value;
    const PhoneNumber = document, forms{"contact-form"}{"phone-number"}.value;
    const messages = document, forms{"contact-form"}{"messages"}.value;

    if (name == "") {
        alert("Nama harus diisi");
        return false;
    }

    if (email == "") {
        alert("Email harus diisi");
        return false;
    }

    if (PhoneNumber == "") {
        alert("Nomor telepon harus diisi");
        return false;
    }

    if (messages == "") {
        alert("pesan harus diisi");
        return false;
    }

    return true;
}