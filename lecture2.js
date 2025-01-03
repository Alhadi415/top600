const questions =[
// Question 21
{
    "question": "Doppler shift is typically in:",
    "options": [
        "A. Ultrasound range",
        "B. Infrasound range",
        "C. Audible range"
    ],
    "answer": "C. Audible range",
    "explanation": "Doppler shift resulting from moving blood is generally audible as it is the difference between the transmitted and returned ultrasound frequency."
},

// Question 22
{
    "question": "Duty factor refers to:",
    "options": [
        "A. Power the transducer can generate",
        "B. Range of frequencies the transducer is capable of",
        "C. Physical properties of the damping material",
        "D. Fraction of time the transducer is emitting ultrasound"
    ],
    "answer": "D. Fraction of time the transducer is emitting ultrasound",
    "explanation": "Duty factor is the ratio of pulse duration to pulse repetition period, indicating the fraction of time the transducer is emitting ultrasound."
},

// Question 23
{
    "question": "Duty factor increases with:",
    "options": [
        "A. Increasing gain",
        "B. Increasing pulse duration",
        "C. Decreasing pulse repetition frequency (PRF)",
        "D. Decreasing dynamic range"
    ],
    "answer": "B. Increasing pulse duration",
    "explanation": "Duty factor increases with increasing pulse duration if the pulse repetition period remains constant."
},

// Question 24
{
    "question": "Which of the following will increase the PRF?",
    "options": [
        "A. Reducing depth",
        "B. Decreasing transducer frequency",
        "C. Reducing sector angle",
        "D. Reducing filter"
    ],
    "answer": "A. Reducing depth",
    "explanation": "Reducing depth decreases the time of flight of ultrasound, allowing for a higher pulse repetition frequency (PRF)."
},

// Question 25
{
    "question": "Persistence will have this effect on the image:",
    "options": [
        "A. Smoothening of a two-dimensional image",
        "B. Better resolution",
        "C. Eliminating artifacts",
        "D. Spuriously reducing wall thickness"
    ],
    "answer": "A. Smoothening of a two-dimensional image",
    "explanation": "Persistence smoothens the image by averaging prior frames, reducing random noise and strengthening the signal."
},

// Question 26
{
    "question": "Aliasing occurs in this type of imaging:",
    "options": [
        "A. Pulsed wave Doppler",
        "B. Continuous wave Doppler",
        "C. None of the above",
        "D. All of the above"
    ],
    "answer": "A. Pulsed wave Doppler",
    "explanation": "Aliasing occurs in pulsed wave Doppler when the Nyquist limit is exceeded, causing the signal to wrap around."
},

// Question 27
{
    "question": "The Nyquist limit at a PRF of 1000 Hz is:",
    "options": [
        "A. 500 Hz",
        "B. 1000 Hz",
        "C. 2000 Hz",
        "D. Cannot calculate"
    ],
    "answer": "A. 500 Hz",
    "explanation": "The Nyquist limit is half the PRF, so for a PRF of 1000 Hz, the Nyquist limit is 500 Hz."
},

// Question 28
{
    "question": "The Nyquist limit can be increased by:",
    "options": [
        "A. Increasing the PRF",
        "B. Reducing the PRF",
        "C. Neither"
    ],
    "answer": "A. Increasing the PRF",
    "explanation": "Increasing the PRF increases the Nyquist limit, as the Nyquist limit is half the PRF."
},

// Question 29
{
    "question": "The Nyquist limit can also be increased by:",
    "options": [
        "A. Increasing transducer frequency",
        "B. Reducing transducer frequency",
        "C. Reducing filter",
        "D. None of the above"
    ],
    "answer": "B. Reducing transducer frequency",
    "explanation": "Reducing transducer frequency increases the aliasing velocity, effectively increasing the Nyquist limit."
},

// Question 30
{
    "question": "Aliasing can be reduced by:",
    "options": [
        "A. Decreasing the depth",
        "B. Increasing the PRF",
        "C. Reducing the transducer frequency",
        "D. Changing to continuous wave Doppler",
        "E. All of the above"
    ],
    "answer": "E. All of the above",
    "explanation": "Aliasing can be reduced by decreasing depth, increasing PRF, reducing transducer frequency, or switching to continuous wave Doppler."
},

// Question 31
{
    "question": "What is the purpose of the depth or time gain compensation process adjusted by the echocardiographer and performed in an ultrasound’s receiver?",
    "options": [
        "A. Corrects for depth attenuation and makes the image uniformly bright",
        "B. Eliminates image artifacts",
        "C. Eliminates aliasing",
        "D. None of the above"
    ],
    "answer": "A. Corrects for depth attenuation and makes the image uniformly bright",
    "explanation": "Time gain compensation adjusts for the loss of ultrasound energy at increasing depths, making the image uniformly bright."
},

// Question 32
{
    "question": "Which of the following increases the Nyquist limit?",
    "options": [
        "A. Increasing the depth",
        "B. Reducing the sample volume depth",
        "C. Increasing the transducer frequency",
        "D. None of the above"
    ],
    "answer": "B. Reducing the sample volume depth",
    "explanation": "Reducing the sample volume depth increases the PRF, which in turn increases the Nyquist limit."
},

// Question 33
{
    "question": "The maximum Doppler shift that can be displayed without aliasing with a PRF of 10 kHz is:",
    "options": [
        "A. 5 kHz",
        "B. 10 kHz",
        "C. Depends on depth",
        "D. Cannot be determined"
    ],
    "answer": "A. 5 kHz",
    "explanation": "The Nyquist limit is half the PRF, so for a PRF of 10 kHz, the maximum Doppler shift without aliasing is 5 kHz."
},

// Question 34
{
    "question": "The PRF is influenced by:",
    "options": [
        "A. Transducer frequency",
        "B. Depth of imaging",
        "C. Both",
        "D. Neither"
    ],
    "answer": "B. Depth of imaging",
    "explanation": "The PRF is influenced by the depth of imaging, as deeper imaging requires more time for the ultrasound to travel, reducing the PRF."
},

// Question 35
{
    "question": "Two identical structures appear on an ultrasound scan. One is real and the other is an artifact, the artifact being deeper than the real structure. What is this artifact called?",
    "options": [
        "A. Shadowing",
        "B. Ghosting",
        "C. Speed error artifact",
        "D. Mirror image"
    ],
    "answer": "D. Mirror image",
    "explanation": "A mirror image artifact occurs when a structure appears deeper than the real structure due to reflection from a strong reflector."
},

// Question 36
{
    "question": "What is influenced by the medium through which sound travels?",
    "options": [
        "A. Wavelength alone",
        "B. Speed alone",
        "C. Both wavelength and speed",
        "D. None of the above"
    ],
    "answer": "C. Both wavelength and speed",
    "explanation": "The speed of sound is determined by the medium, and for a given frequency, the wavelength is also influenced by the medium."
},

// Question 37
{
    "question": "Image quality on an ultrasound scan is dark throughout? What is the first best step to take?",
    "options": [
        "A. Increase output power",
        "B. Increase receiver gain",
        "C. Change to a higher frequency transducer",
        "D. Decrease receiver gain"
    ],
    "answer": "A. Increase output power",
    "explanation": "Increasing output power is the first step to brighten a dark image, as it increases the strength of the transmitted ultrasound."
},

// Question 38
{
    "question": "All of the following will improve temporal resolution except:",
    "options": [
        "A. Decreasing line density",
        "B. Decreasing sector angle",
        "C. Increasing frame rate",
        "D. Multifocusing"
    ],
    "answer": "D. Multifocusing",
    "explanation": "Multifocusing decreases temporal resolution by reducing the frame rate, while the other options improve temporal resolution."
},

// Question 39
{
    "question": "Sound travels faster in a medium with which of the following characteristics?",
    "options": [
        "A. High density, low stiffness",
        "B. Low density, high stiffness",
        "C. High density, high stiffness",
        "D. Low density, low stiffness"
    ],
    "answer": "B. Low density, high stiffness",
    "explanation": "Sound travels faster in a medium with low density and high stiffness, as these properties reduce resistance to sound propagation."
},

// Question 40
{
    "question": "Which of the following is associated with continuous wave Doppler compared to pulsed wave Doppler?",
    "options": [
        "A. Aliasing",
        "B. Range specificity",
        "C. Ability to record higher velocities",
        "D. All of the above"
    ],
    "answer": "C. Ability to record higher velocities",
    "explanation": "Continuous wave Doppler can record higher velocities than pulsed wave Doppler, as it is not limited by the PRF."
}
  ]
