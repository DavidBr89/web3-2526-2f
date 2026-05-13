
import {query, param, body} from "express-validator";


export const loginValidator = [
    body("email").exists().withMessage("Email is verplicht").isEmail().withMessage("Geen geldig email adres").normalizeEmail(),
    body("password").exists().withMessage("Wachtwoord is verplicht").notEmpty().withMessage("Wachtwoord mag niet leeg zijn")
]