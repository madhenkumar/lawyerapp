"use client"
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountries } from 'react-phone-number-input'
import { useState } from 'react'

export function InputForPhone() {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState();
    // If `country` property is not passed
    // then "International" format is used.
    // Otherwise, "National" format is used.
    return (
      <PhoneInput
      withCountryCallingCode
      international ={true}
        country='IN'
        defaultCountry='IN'
        value={value}
        onChange={()=>setValue} />
    )
  }