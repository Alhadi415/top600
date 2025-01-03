const questions =[
// Question 41
{
    "question": "As transducer frequency increases, backscatter strength:",
    "options": [
        "A. Decreases",
        "B. Increases",
        "C. Does not change",
        "D. Refracts"
    ],
    "answer": "B. Increases",
    "explanation": "Higher frequency is associated with shorter wavelengths, which are more readily reflected, increasing backscatter strength."
},

// Question 42
{
    "question": "If an echo arrives 39 µs after a pulse has been emitted, at what depth should the reflecting object be on the scan line?",
    "options": [
        "A. 3 cm",
        "B. 6 cm",
        "C. 1 cm",
        "D. None of the above"
    ],
    "answer": "A. 3 cm",
    "explanation": "Ultrasound takes 6.5 µs to travel 1 cm in tissues. Therefore, 39 µs corresponds to a depth of 3 cm."
},

// Question 43
{
    "question": "The Doppler shift produced by an object moving at a speed of 1 m/s toward the transducer emitting ultrasound at 2 MHz would be:",
    "options": [
        "A. 2.6 kHz",
        "B. 1.3 kHz",
        "C. 1 MHz",
        "D. 200 Hz"
    ],
    "answer": "A. 2.6 kHz",
    "explanation": "The Doppler shift (Fd) is calculated using the formula: Fd = (2 × F0 × V × cosθ) / C, where F0 is the emitted frequency, V is the velocity, and C is the speed of sound. For 2 MHz and 1 m/s, Fd = 2.6 kHz."
},

// Question 44
{
    "question": "In the above example, the reflected ultrasound will have a frequency of:",
    "options": [
        "A. 2 002 600 Hz",
        "B. 1 998 700 Hz",
        "C. 1 000 000 Hz",
        "D. 2 MHz"
    ],
    "answer": "A. 2 002 600 Hz",
    "explanation": "The reflected ultrasound frequency is the sum of the emitted frequency (2 MHz) and the Doppler shift (2.6 kHz), resulting in 2,002,600 Hz."
},

// Question 45
{
    "question": "Reflected ultrasound from an object moving away from the sound source will have a frequency:",
    "options": [
        "A. Higher than original sound",
        "B. Lower than the original sound",
        "C. Same as the original sound",
        "D. Variable, depending on source of sound and velocity of the moving object"
    ],
    "answer": "B. Lower than the original sound",
    "explanation": "When an object moves away from the sound source, the reflected ultrasound frequency is lower due to a negative Doppler shift."
},

// Question 46
{
    "question": "Reflected ultrasound from an object moving perpendicular to the sound source will have a frequency:",
    "options": [
        "A. Higher than original sound",
        "B. Lower than the original sound",
        "C. Same as the original sound",
        "D. Variable, depending on source of sound and velocity of the moving object"
    ],
    "answer": "C. Same as the original sound",
    "explanation": "When the object moves perpendicular to the sound source, the Doppler shift is zero, so the reflected frequency remains the same as the original sound."
},

// Question 47
{
    "question": "Doppler shift frequency is independent of:",
    "options": [
        "A. Operating frequency",
        "B. Doppler angle",
        "C. Propagation speed",
        "D. Amplitude"
    ],
    "answer": "D. Amplitude",
    "explanation": "The Doppler shift frequency depends on the operating frequency, Doppler angle, and propagation speed, but not on the amplitude of the signal."
},

// Question 48
{
    "question": "On a continuous wave Doppler display, amplitude is represented by:",
    "options": [
        "A. Brightness of the signal",
        "B. Vertical extent of the signal",
        "C. Width of the signal",
        "D. None of the above"
    ],
    "answer": "A. Brightness of the signal",
    "explanation": "In continuous wave Doppler, the amplitude of the signal is represented by the brightness of the signal on the display."
},

// Question 49
{
    "question": "Doppler signals from the myocardium, compared with those from the blood pool, display:",
    "options": [
        "A. Lower velocity",
        "B. Greater amplitude",
        "C. Both of the above",
        "D. None of the above"
    ],
    "answer": "C. Both of the above",
    "explanation": "Myocardial signals have lower velocities and greater amplitude compared to blood pool signals."
},

// Question 50
{
    "question": "Doing which of the following modifications to the Doppler processing will allow myocardial velocities to be recorded selectively compared with blood pool velocities?",
    "options": [
        "A. A band pass filter that allows low velocities",
        "B. A band pass filter that allows high amplitude signals",
        "C. Both",
        "D. Neither"
    ],
    "answer": "C. Both",
    "explanation": "Filtering for low velocities and high amplitude signals allows selective recording of myocardial velocities, as myocardium produces lower velocity and higher amplitude signals compared to the blood pool."
},

// Question 51
{
    "question": "If the propagation speed is 1.6 mm/µs and the pulse round trip time is 5 µs, the distance to the reflector is:",
    "options": [
        "A. 8 mm",
        "B. 4 mm",
        "C. 10 mm",
        "D. Cannot be determined"
    ],
    "answer": "B. 4 mm",
    "explanation": "The distance to the reflector is calculated as half the product of propagation speed and round trip time: 0.5 × 1.6 mm/µs × 5 µs = 4 mm."
},

// Question 52
{
    "question": "How long after a pulse is sent out by a transducer does an echo from an object at a depth of 5 cm return?",
    "options": [
        "A. 13 µs",
        "B. 65 µs",
        "C. 5 µs",
        "D. Cannot be determined"
    ],
    "answer": "B. 65 µs",
    "explanation": "The round trip travel time for 1 cm is 13 µs, so for 5 cm, the travel time is 13 µs × 5 = 65 µs."
},

// Question 53
{
    "question": "For soft tissues, the attenuation coefficient at 3 MHz is:",
    "options": [
        "A. 1 dB/cm",
        "B. 6 dB/cm",
        "C. 1.5 dB/cm",
        "D. 3 dB/cm"
    ],
    "answer": "C. 1.5 dB/cm",
    "explanation": "The attenuation coefficient in soft tissue is approximately 0.5 dB/cm per MHz, so for 3 MHz, it is 1.5 dB/cm."
},

// Question 54
{
    "question": "If the density of a medium is 1000 kg/m³ and the propagation speed is 1540 m/s, the impedance is:",
    "options": [
        "A. 1 540 000 rayls",
        "B. 770 000 rayls",
        "C. 3 080 000 rayls",
        "D. Cannot be determined"
    ],
    "answer": "A. 1 540 000 rayls",
    "explanation": "Impedance is calculated as the product of density and propagation speed: 1000 kg/m³ × 1540 m/s = 1,540,000 rayls."
},

// Question 55
{
    "question": "If the propagation speed through medium 2 is greater than the propagation speed through medium 1, the transmission angle will be ______ the incidence angle.",
    "options": [
        "A. Lesser",
        "B. Greater",
        "C. Equal to",
        "D. Cannot be determined"
    ],
    "answer": "B. Greater",
    "explanation": "When the propagation speed in medium 2 is greater than in medium 1, the transmission angle will be greater than the incidence angle."
},

// Question 56
{
    "question": "If amplitude is doubled, intensity is:",
    "options": [
        "A. Halved",
        "B. Quadrupled",
        "C. Remains the same",
        "D. Tripled"
    ],
    "answer": "B. Quadrupled",
    "explanation": "Intensity is proportional to the square of the amplitude, so doubling the amplitude quadruples the intensity."
},

// Question 57
{
    "question": "If both power and area are doubled, intensity is:",
    "options": [
        "A. Doubled",
        "B. Unchanged",
        "C. Halved",
        "D. Tripled"
    ],
    "answer": "B. Unchanged",
    "explanation": "Intensity is power divided by area. If both power and area are doubled, the intensity remains unchanged."
},

// Question 58
{
    "question": "Flow resistance in a vessel depends on:",
    "options": [
        "A. Vessel length",
        "B. Vessel radius",
        "C. Blood viscosity",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "Flow resistance depends on vessel length, vessel radius, and blood viscosity, as described by the equation: Resistance = (8 × length × viscosity) / (π × radius⁴)."
},

// Question 59
{
    "question": "Flow resistance decreases with an increase in:",
    "options": [
        "A. Vessel length",
        "B. Vessel radius",
        "C. Blood viscosity",
        "D. None of the above"
    ],
    "answer": "B. Vessel radius",
    "explanation": "Flow resistance decreases with an increase in vessel radius, as resistance is inversely proportional to the fourth power of the radius."
},

// Question 60
{
    "question": "Flow resistance depends most strongly on:",
    "options": [
        "A. Vessel length",
        "B. Vessel radius",
        "C. Blood viscosity",
        "D. All of the above"
    ],
    "answer": "B. Vessel radius",
    "explanation": "Flow resistance is most strongly dependent on vessel radius, as it is inversely proportional to the fourth power of the radius."
}
  ]
