const questions =[
// Question 61
{
    "question": "Volumetric flow rate decreases with an increase in:",
    "options": [
        "A. Pressure difference",
        "B. Vessel radius",
        "C. Vessel length",
        "D. Blood viscosity",
        "E. Vessel length and blood viscosity"
    ],
    "answer": "E. Vessel length and blood viscosity",
    "explanation": "Volumetric flow rate decreases with an increase in vessel length and blood viscosity, as described by the equation: Volume flow rate = (pressure difference × π × diameter⁴) / (128 × length × viscosity)."
},

// Question 62
{
    "question": "Which of the following on a color Doppler display is represented in real time?",
    "options": [
        "A. Gray-scale anatomy",
        "B. Flow direction",
        "C. Doppler spectrum",
        "D. Gray-scale anatomy and flow direction",
        "E. All of the above"
    ],
    "answer": "D. Gray-scale anatomy and flow direction",
    "explanation": "Both gray-scale anatomy and flow direction are displayed in real time on a color Doppler display."
},

// Question 63
{
    "question": "Approximately how many pulses are required to obtain one line of color Doppler information?",
    "options": [
        "A. 1",
        "B. 100",
        "C. 10",
        "D. 10 000"
    ],
    "answer": "C. 10",
    "explanation": "About 10 pulse packets are needed for each scan line of color Doppler to obtain precise information, as opposed to only one pulse packet for a B-mode scan line."
},

// Question 64
{
    "question": "Multiple focuses are not used in color Doppler imaging because:",
    "options": [
        "A. It would not improve the image",
        "B. Doppler transducers cannot focus",
        "C. Frame rates would be too low",
        "D. None of the above"
    ],
    "answer": "C. Frame rates would be too low",
    "explanation": "Using multiple focuses in color Doppler imaging would significantly reduce the frame rate, making it impractical."
},

// Question 65
{
    "question": "Widening the color box on the display will ______ the frame rate.",
    "options": [
        "A. Increase",
        "B. No change",
        "C. Decrease",
        "D. Cannot be determined"
    ],
    "answer": "C. Decrease",
    "explanation": "Widening the color box reduces the frame rate by increasing the number of scan lines per box."
},

// Question 66
{
    "question": "The simplified Bernoulli equation is inapplicable under the following circumstances:",
    "options": [
        "A. Serial stenotic lesions",
        "B. Long, tubular lesions",
        "C. Both",
        "D. None of the above"
    ],
    "answer": "C. Both",
    "explanation": "The simplified Bernoulli equation is not applicable for serial stenotic lesions or long, tubular lesions due to incomplete pressure recovery and the predominance of viscous forces, respectively."
},

// Question 67
{
    "question": "The Bernoulli equation is an example of:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. None of the above"
    ],
    "answer": "B. Law of conservation of energy",
    "explanation": "The Bernoulli equation describes the relationship between different types of energies (potential, kinetic, and viscous forces) along a flow stream."
},

// Question 68
{
    "question": "The continuity equation is an example of:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. None of the above"
    ],
    "answer": "A. Law of conservation of mass",
    "explanation": "The continuity equation is based on the principle that mass cannot be destroyed, so flow rates at different locations in a flow stream are the same at a given point in time."
},

// Question 69
{
    "question": "Effective regurgitant orifice area by the proximal isovelocity surface area (PISA) method is an example of:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. None of the above"
    ],
    "answer": "A. Law of conservation of mass",
    "explanation": "The PISA method is based on the law of conservation of mass, where the flow rate at the PISA surface is the same as the flow rate at the vena contracta."
},

// Question 70
{
    "question": "Doppler calculation of aortic valve area is an example of:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. None of the above"
    ],
    "answer": "A. Law of conservation of mass",
    "explanation": "The Doppler calculation of aortic valve area is based on the principle that the flow rate at the left ventricular outflow tract (LVOT) is the same as the flow rate at the aortic valve vena contracta."
},

// Question 71
{
    "question": "Calculation of right ventricular systolic pressure from the tricuspid regurgitation velocity signal is an example of:",
    "options": [
        "A. Law of conservation of mass",
        "B. Law of conservation of energy",
        "C. Law of conservation of momentum",
        "D. None of the above"
    ],
    "answer": "B. Law of conservation of energy",
    "explanation": "The calculation of right ventricular systolic pressure from the tricuspid regurgitation velocity signal is based on the simplified Bernoulli equation, which is an example of the law of conservation of energy."
},

// Question 72
{
    "question": "Color flow jet area of mitral regurgitation depends upon:",
    "options": [
        "A. Amount of regurgitation alone",
        "B. Driving pressure and the regurgitant volume",
        "C. Presence of aortic regurgitation",
        "D. Degree of mitral stenosis"
    ],
    "answer": "B. Driving pressure and the regurgitant volume",
    "explanation": "The color flow jet area of mitral regurgitation depends on both the driving pressure and the regurgitant volume, as the jet area is proportional to the kinetic energy imparted to the jet."
},

// Question 73
{
    "question": "Factors influencing mitral regurgitation jet volume also include:",
    "options": [
        "A. Proximity of left atrial wall",
        "B. Heart rate",
        "C. Gain setting",
        "D. Filter setting",
        "E. Left atrial size",
        "F. All of the above"
    ],
    "answer": "F. All of the above",
    "explanation": "All of the listed factors (proximity of left atrial wall, heart rate, gain setting, filter setting, and left atrial size) can influence the mitral regurgitation jet volume."
},

// Question 74
{
    "question": "Amount of mitral regurgitation depends upon:",
    "options": [
        "A. Regurgitant orifice size",
        "B. Driving pressure",
        "C. Duration of systole",
        "D. All of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "The amount of mitral regurgitation depends on the regurgitant orifice size, driving pressure, and the duration of systole."
},

// Question 75
{
    "question": "Hemodynamic impact of a given volumetric severity of mitral regurgitation (MR) is increased by:",
    "options": [
        "A. Nondilated left atrium",
        "B. Left ventricular hypertrophy",
        "C. Presence of concomitant aortic regurgitation",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "The hemodynamic impact of mitral regurgitation is increased by a nondilated left atrium, left ventricular hypertrophy, and the presence of concomitant aortic regurgitation."
},

// Question 76
{
    "question": "Which feature is consistent with severe mitral regurgitation:",
    "options": [
        "A. Jet size to left atrial area ratio of 0.5",
        "B. The PISA radius of 1.2 cm at an aliasing velocity of 50 cm/s",
        "C. Effective regurgitant orifice area of 0.7 cm²",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "All of the listed features (jet size to left atrial area ratio of 0.5, PISA radius of 1.2 cm at an aliasing velocity of 50 cm/s, and effective regurgitant orifice area of 0.7 cm²) are consistent with severe mitral regurgitation."
},

// Question 77
{
    "question": "When using a fixed-focus probe, this parameter cannot be changed by the sonographer:",
    "options": [
        "A. Pulse repetition period",
        "B. Pulse repetition frequency",
        "C. Amplitude",
        "D. Wavelength"
    ],
    "answer": "D. Wavelength",
    "explanation": "The wavelength cannot be changed by the sonographer when using a fixed-focus probe, as it is determined by the transducer frequency and the propagation speed in the medium."
},

// Question 78
{
    "question": "The following signal was obtained from the apical view in a 45-year-old man with a systolic murmur. What is the most likely origin of this signal?",
    "options": [
        "A. Mitral valve prolapse with late systolic MR",
        "B. Rheumatic MR",
        "C. Hyperdynamic left ventricle with cavity obliteration",
        "D. Subaortic membrane"
    ],"questionImage": "https://alhadi415.github.io/top600/images/4_78q.JPG" ,
    "answer": "C. Hyperdynamic left ventricle with cavity obliteration",
    "explanation": "The signal suggests a diminishing flow area in late systole, which is characteristic of a hyperdynamic left ventricle with cavity obliteration."
},

// Question 79
{
    "question": "Continuous wave signal from the apical view. The image is suggestive of:",
    "options": [
        "A. Moderate aortic stenosis",
        "B. Severe aortic stenosis",
        "C. Mitral regurgitation",
        "D. Prosthetic aortic valve obstruction"
    ],"questionImage": "https://alhadi415.github.io/top600/images/4_79q.JPG",
    "answer": "D. Prosthetic aortic valve obstruction",
    "explanation": "The signal shows a mid-peaking systolic velocity of 4.5 m/s, corresponding to a peak gradient of 80 mmHg, which is suggestive of prosthetic aortic valve obstruction."
},

// Question 80
{
    "question": "The signal obtained from the right parasternal view is suggestive of:",
    "options": [
        "A. Severe MR",
        "B. Severe aortic stenosis",
        "C. Severe aortic regurgitation",
        "D. Severe pulmonary stenosis"
    ],"questionImage": "https://alhadi415.github.io/top600/images/4_80q.JPG",
    "answer": "B. Severe aortic stenosis",
    "explanation": "The signal is directed to the right shoulder and occupies the ejection phase, which is typical of severe aortic stenosis."
}
]