import qr from "qr-image"
import inquirer from "inquirer"
import fs from "fs"

inquirer
    .prompt([
        {
            message: "Enter yout URL.",
            name: "URL"
        }
    ])
    .then((answers) => {
        const val = answers.URL;
        var qrimage = qr.image(val, { type: "png" });
        qrimage.pipe(fs.createWriteStream("qr.png"));
        fs.writeFile("qr.txt", val, (erro) => {
            if (erro) throw erro;
            console.log("File saved without error");
        });
    })
    .catch ((error) => {
    if (error.isTtyError) {
        console.log("some error occurs");
    } else {
        throw error;
    }
});