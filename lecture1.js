const questions =[
// Question 1
{
    "question": "The speed of sound in tissues is:",
    "options": [
        "A. Roughly 1540 m/s",
        "B. Roughly 1540 km/s",
        "C. Roughly 1540 cm/s",
        "D. Roughly 1540 m/min"
    ],
    "answer": "A. Roughly 1540 m/s",
    "explanation": "The speed of sound in tissue is approximately 1540 m/s, which is a standard value used in medical ultrasound imaging."
},

// Question 2
{
    "question": "The relationship between propagation speed, frequency, and wavelength is given by the formula:",
    "options": [
        "A. Propagation speed = frequency × wavelength",
        "B. Propagation speed = wavelength/frequency",
        "C. Propagation speed = frequency/wavelength",
        "D. Propagation speed = wavelength × period"
    ],
    "answer": "A. Propagation speed = frequency × wavelength",
    "explanation": "The relationship between propagation speed, frequency, and wavelength is given by the formula: propagation speed = frequency × wavelength."
},

// Question 3
{
    "question": "The frame rate increases with:",
    "options": [
        "A. Increasing the depth",
        "B. Reducing sector angle",
        "C. Increasing line density",
        "D. Adding color Doppler to B-mode imaging"
    ],
    "answer": "B. Reducing sector angle",
    "explanation": "Reducing the sector angle decreases the number of scan lines, which increases the frame rate by reducing the time required to complete a frame."
},

// Question 4
{
    "question": "Period is a measure of:",
    "options": [
        "A. Duration of one wavelength",
        "B. Duration of half a wavelength",
        "C. Amplitude of the wave"
    ],
    "answer": "A. Duration of one wavelength",
    "explanation": "Period is the time taken for one cycle or one wavelength to occur, typically measured in microseconds (µs)."
},

// Question 5
{
    "question": "Determination of regurgitant orifice area by the proximal isovelocity surface area (PISA) method is based on:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. Jet momentum analysis"
    ],
    "answer": "A. Law of conservation of mass",
    "explanation": "The PISA method is based on the law of conservation of mass, where the flow rate at the PISA surface and the regurgitant orifice is the same."
},

// Question 6
{
    "question": "In which situation can you not use the simplified Bernoulli equation to derive the pressure gradient?",
    "options": [
        "A. Peak instantaneous gradient across a nonobstructed mitral valve",
        "B. Peak gradient across a severely stenotic aortic valve",
        "C. Mean gradient across a severely stenotic aortic valve",
        "D. Mean gradient across a stenotic tricuspid valve"
    ],
    "answer": "A. Peak instantaneous gradient across a nonobstructed mitral valve",
    "explanation": "The simplified Bernoulli equation is not accurate for low-velocity flows, such as across a nonobstructed mitral valve, where flow acceleration and convective acceleration components are significant."
},

// Question 7
{
    "question": "Which of the following resolutions change with increasing field depth?",
    "options": [
        "A. Axial resolution",
        "B. Lateral resolution"
    ],
    "answer": "B. Lateral resolution",
    "explanation": "Lateral resolution depends on beam width, which increases with depth, leading to a decrease in resolution."
},

// Question 8
{
    "question": "With a fixed-focus transducer with crystal diameter 20 mm and wavelength 2.5 mm, what is the depth of the focus?",
    "options": [
        "A. 40 m",
        "B. 30 mm",
        "C. 40 mm",
        "D. 4 m"
    ],
    "answer": "C. 40 mm",
    "explanation": "The depth of focus is calculated as (crystal diameter)^2 / (wavelength × 4), which in this case is (20 mm)^2 / (2.5 mm × 4) = 40 mm."
},

// Question 9
{
    "question": "A sonographer adjusts the ultrasound machine to double the depth of view from 5 to 10 cm. If sector angle is reduced to keep the frame rate constant, which of the following has changed?",
    "options": [
        "A. Axial resolution",
        "B. Temporal resolution",
        "C. Lateral resolution",
        "D. The wavelength"
    ],
    "answer": "C. Lateral resolution",
    "explanation": "Lateral resolution diminishes with increasing depth due to beam divergence, even if the frame rate is kept constant by reducing the sector angle."
},

// Question 10
{
    "question": "Which of the following properties of a reflected wave is most important in the genesis of a two-dimensional image?",
    "options": [
        "A. Amplitude",
        "B. Period",
        "C. Pulse repetition period",
        "D. Pulse duration"
    ],
    "answer": "A. Amplitude",
    "explanation": "The amplitude or strength of the reflected wave is crucial for generating the two-dimensional image, as it determines the brightness of the pixels."
},

// Question 11
{
    "question": "Increasing depth will change all of the following except:",
    "options": [
        "A. Pulse duration",
        "B. Pulse repetition period",
        "C. Pulse repetition frequency",
        "D. Duty factor"
    ],
    "answer": "A. Pulse duration",
    "explanation": "Pulse duration is a characteristic of the pulse and does not change with depth, whereas pulse repetition period, frequency, and duty factor are affected by depth."
},

// Question 12
{
    "question": "The two-dimensional images are produced because of this phenomenon when the ultrasound reaches the tissue:",
    "options": [
        "A. Refraction",
        "B. Backscatter",
        "C. Specular reflection",
        "D. Transmission"
    ],
    "answer": "B. Backscatter",
    "explanation": "Backscatter or diffuse reflection is the primary phenomenon that produces the two-dimensional images in ultrasound, as it allows the reflected waves to return to the transducer from various angles."
},

// Question 13
{
    "question": "Attenuation of ultrasound as it travels through tissue is higher at:",
    "options": [
        "A. Greater depth",
        "B. Lower transducer frequency",
        "C. Blood rather than soft tissue like muscle",
        "D. Bone more than air"
    ],
    "answer": "A. Greater depth",
    "explanation": "Attenuation increases with greater depth as the ultrasound wave travels through more tissue, leading to energy loss due to absorption and scattering."
},

// Question 14
{
    "question": "The half-intensity depth is a measure of:",
    "options": [
        "A. Ultrasound attenuation in tissue",
        "B. Half the wall thickness in mm",
        "C. Coating on the surface of the transducer",
        "D. Half the ultrasound beam width"
    ],
    "answer": "A. Ultrasound attenuation in tissue",
    "explanation": "The half-intensity depth measures the depth at which the ultrasound energy is reduced by half due to attenuation in the tissue."
},

// Question 15
{
    "question": "What is the highest pulse repetition frequency (PRF) of a 3 MHz pulsed wave transducer imaging at a depth of 7 cm?",
    "options": [
        "A. 21 000 Hz",
        "B. 2 333 Hz",
        "C. 11 000 Hz",
        "D. 2.1 million Hz"
    ],
    "answer": "C. 11 000 Hz",
    "explanation": "The PRF is calculated as 154,000 cm/s divided by the total travel distance (14 cm for 7 cm depth), resulting in a PRF of 11,000 Hz."
},

// Question 16
{
    "question": "Examples of continuous wave imaging include:",
    "options": [
        "A. Two-dimensional image",
        "B. Volumetric scanner-acquired LV image",
        "C. Color flow imaging",
        "D. Nominaging Doppler probe (Pedoff)"
    ],
    "answer": "D. Nominaging Doppler probe (Pedoff)",
    "explanation": "The Pedoff probe is an example of continuous wave Doppler imaging, which is used for velocity recording without generating a two-dimensional image."
},

// Question 17
{
    "question": "Which of the following manipulations will increase the frame rate?",
    "options": [
        "A. Increase depth",
        "B. Increase transmit frequency",
        "C. Decrease sector angle",
        "D. Increase transmit power"
    ],
    "answer": "C. Decrease sector angle",
    "explanation": "Decreasing the sector angle reduces the number of scan lines, which increases the frame rate by reducing the time required to complete a frame."
},

// Question 18
{
    "question": "The lateral resolution increases with:",
    "options": [
        "A. Decreasing transducer diameter",
        "B. Reducing power",
        "C. Beam focusing",
        "D. Reducing transmit frequency"
    ],
    "answer": "C. Beam focusing",
    "explanation": "Beam focusing improves lateral resolution by narrowing the ultrasound beam, which enhances the ability to distinguish between closely spaced structures."
},

// Question 19
{
    "question": "Axial resolution can be improved by which of the following manipulations?",
    "options": [
        "A. Reduce beam diameter",
        "B. Beam focusing",
        "C. Reduce gain",
        "D. Increase transmit frequency"
    ],
    "answer": "D. Increase transmit frequency",
    "explanation": "Increasing the transmit frequency reduces the wavelength and spatial pulse length, which improves axial resolution."
},

// Question 20
{
    "question": "Type of sound used in medical imaging is:",
    "options": [
        "A. Ultrasound",
        "B. Infrasound",
        "C. Audible sound"
    ],
    "answer": "A. Ultrasound",
    "explanation": "Ultrasound, with frequencies typically ranging from 2 to 30 MHz, is used in medical imaging for its ability to penetrate tissues and provide detailed images."
}
]
