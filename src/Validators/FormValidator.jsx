/* eslint-disable no-case-declarations */
import PasswordValidator from "password-validator";

var schema = new PasswordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase(1)                              // Must have uppercase letter
.has().lowercase(1)                              // Must have lowercase letter
.has().digits(1)                                 // Must have at least 1 digit
.has().symbols(1)                                // Must have at least 1 symbol
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


function FormValidator(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
        case "username":
        case "icon":
            if (!value || value.length === 0)
                return name + "feild is mandatory"
            else if (value.length < 3 || value.length > 200)
                return name + "feild length must be 3-200 characters"
            else
                return ""

         case "email":
            if (!value || value.length === 0)
                return name + "feild is mandatory"
            else if (value.length < 13 || value.length > 200)
                return name + "feild length must be 13-200 characters"
            else
                return ""
        //case "password":
//if (!value || value.length === 0)
             //   return name + "feild is mandatory"
            //else if (!(schema.validate(value)))
               // return (schema.validate(value, {deatils:true} )).map(x=>x.message).join()
           // else
               // return ""

           case "password":
  if (!value || value.length === 0)
    return "Password field is mandatory"

  const errors = schema.validate(value, { list: true })

  if (errors.length > 0) {
    let messages = []

    if (errors.includes("min"))
      messages.push("Password must be at least 8 characters")

    if (errors.includes("uppercase"))
      messages.push("Password must contain at least 1 uppercase letter")

    if (errors.includes("lowercase"))
      messages.push("Password must contain at least 1 lowercase letter")

    if (errors.includes("digits"))
      messages.push("Password must contain at least 1 digit")

    if (errors.includes("symbols"))
      messages.push("Password must contain at least 1 special character")

    return messages.join(", ")
  }

  return ""

            
            
        case "phone":
            if (!value || value.length === 0)
                return name + "feild is mandatory"
            else if (value.length < 10 || value.length > 10)
                return name + "feild length must be 10"
            else if(!(value.startsWith("6")||value.startsWith("7")||value.startsWith("8")||value.startsWith("9")))
                return name + "Must Start With 6,7,8 or 9 "
            else
                return ""    

        case "ShortDescription":
        case "Answer":
            if (!value || value.length === 0)
                return name + "feild is mandatory"
            else if (value.length < 50)
                return name + "feild length must be upto 30 characters"
            else
                return ""
        case "Question":
            if (!value || value.length === 0)
                return name + "feild is mandatory"
            else
                return ""
        default:
            return ""
    }
}

export default FormValidator