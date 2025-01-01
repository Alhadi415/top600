const questions =[
    // Question 81
    {
        "question": "The Doppler signal is consistent with:",
        "options": [
            "A. Severe aortic regurgitation and moderate aortic stenosis",
            "B. Severe mitral stenosis",
            "C. Acute severe mitral regurgitation",
            "D. Ventricular septal defect"
        ],  "questionImage": "https://alhadi415.github.io/top600/images/81q.jpg",

        "answer": "C. Acute severe mitral regurgitation",
        "explanation": "The image shows the classical 'V wave cut-off' sign. The rapid deceleration of the MR velocity profile following the peak velocity is due to a rapidly diminishing left ventricular to left atrial (LV-LA) pressure gradient secondary to a large V wave in the left atrium that is a feature of severe MR, especially when it occurs acutely."
    },

    // Question 82
    {
        "question": "Pulse duration is affected by:",
        "options": [
            "A. Source of ultrasound",
            "B. Transmission medium",
            "C. Both",
            "D. Neither"
        ],
        "answer": "A. Source of ultrasound",
        "explanation": "Speed of ultrasound transmission does not affect pulse duration but affects wavelength. Pulse duration is determined by the transducer setting."
    },

    // Question 83
    {
        "question": "The pulse repetition frequency (PRF) is affected by:",
        "options": [
            "A. Source of ultrasound",
            "B. Transmission medium",
            "C. Both",
            "D. Neither"
        ],
        "answer": "A. Source of ultrasound",
        "explanation": "PRF is also a function of source of ultrasound and is not affected by medium of transmission. Speed of ultrasound transmission affects only lengths not the durations or frequency."
    },

    // Question 84
    {
        "question": "What happens to the PRF when imaging depth is increased?",
        "options": [
            "A. Increases",
            "B. Decreases",
            "C. Does not change",
            "D. Effect is variable"
        ],
        "answer": "B. Decreases",
        "explanation": "It decreases because of an increase in time of flight. PRF = 77 000/ depth in cm."
    },

    // Question 85
    {
        "question": "By increasing the PRF, the axial resolution:",
        "options": [
            "A. Increases",
            "B. Decreases",
            "C. Does not change"
        ],
        "answer": "C. Does not change",
        "explanation": "The PRF does not affect axial resolution. Axial resolution is determined by spatial pulse length, which is mainly determined by wavelength (i.e., ultrasound frequency) and number of cycles in the pulse as transmission speed in biological systems is fairly fixed."
    },

    // Question 86
    {
        "question": "Imaging at depth affects:",
        "options": [
            "A. Axial resolution",
            "B. Lateral resolution",
            "C. Neither",
            "D. Both"
        ],
        "answer": "B. Lateral resolution",
        "explanation": "Lateral resolution drops because of beam divergence and widening. Axial resolution is unaffected by depth but is affected by wavelength (in frequency) and number of cycles in a pulse, which together make up spatial pulse length."
    },

    // Question 87
    {
        "question": "Reducing the transducer footprint will affect:",
        "options": [
            "A. Lateral resolution",
            "B. Temporal resolution",
            "C. Axial resolution",
            "D. None of the above"
        ],
        "answer": "A. Lateral resolution",
        "explanation": "It will affect beam width and hence the lateral resolution."
    },

    // Question 88
    {
        "question": "Increasing the transmit power will:",
        "options": [
            "A. Decrease sensitivity",
            "B. Increase lateral resolution",
            "C. Increase penetration",
            "D. None of the above"
        ],
        "answer": "C. Increase penetration",
        "explanation": "Penetration increases due to more power. The sensitivity increases but lateral resolution decreases due to increasing beam width."
    },

    // Question 89
    {
        "question": "Acoustic impedance equals (rays):",
        "options": [
            "A. Density in kg/m³ × speed of sound in m/s",
            "B. Density in kg/m³ × transducer frequency in MHz",
            "C. Depth in meters × transducer frequency in MHz",
            "D. None of the above"
        ],
        "answer": "A. Density in kg/m³ × speed of sound in m/s",
        "explanation": "Acoustic impedance in rayls = density (kg/m³) × speed of ultrasound (m/s). Average soft tissue impedance is 1 630 000 rayls."
    },

    // Question 90
    {
        "question": "Reflection of sound at an interface is affected by:",
        "options": [
            "A. Specific acoustic impedance",
            "B. Transducer frequency",
            "C. Depth",
            "D. None of the above"
        ],
        "answer": "A. Specific acoustic impedance",
        "explanation": "Reflection of sound at an interface is primarily affected by the specific acoustic impedance of the materials at the interface."
    },

    // Question 91
    {
        "question": "The most common cause of coronary sinus dilatation is:",
        "options": [
            "A. Heart failure",
            "B. Persistent left superior vena cava",
            "C. Atrial septal defect",
            "D. None of the above"
        ],
        "answer": "A. Heart failure",
        "explanation": "Heart failure is the common cause of dilatation of the coronary sinus. Although persistent left superior vena cava (SVC) causes dilatation of the coronary sinus, it occurs infrequently. In the absence of heart failure, persistent left SVC is the most common cause of enlarged coronary sinus. Dilatation can occur either due to increased flow in the coronary sinus or due to increased right atrial pressure. The other causes include coronary arteriovenous fistula and unroofing of the coronary sinus. Unroofed coronary sinus results in a left to right shunt, a variant of atrial septal defect."
    },

    // Question 92
    {
        "question": "The following data were obtained from a 72-year-old man with a calcified aortic valve: left ventricular outflow tract (LVOT) velocity (V1) 0.8 m/s, transaortic velocity (V2) 4 m/s, LVOT diameter 2 cm. The calculated aortic valve area (AVA) is:",
        "options": [
            "A. 0.4 cm²",
            "B. 0.6 cm²",
            "C. 0.8 cm²",
            "D. 1 cm²"
        ],
        "answer": "B. 0.6 cm²",
        "explanation": "The valve area can be calculated with the continuity equation. A1 V1 (LVOT area × LVOT velocity) = A2 V2 (aortic valve area × aortic velocity). A2 = A1 V1 / V2. A1 = πr² (r = LVOT diameter/2) = 3.14 × 1 × 1 = 3.14 cm². A2 = 3.14 × 0.8 / 4 = 0.6 cm²."
    },

    // Question 93
    {
        "question": "The continuity equation is an example of:",
        "options": [
            "A. Law of conservation of mass",
            "B. Law of conservation of energy",
            "C. Law of conservation of momentum",
            "D. None of the above"
        ],
        "answer": "A. Law of conservation of mass",
        "explanation": "States that mass cannot be destroyed and hence flow rates at different locations in a flow stream are the same at a given point in time."
    },

    // Question 94
    {
        "question": "The most practical value for the development of perfluorocarbon bubbles was to improve:",
        "options": [
            "A. Contrast on the right side",
            "B. Stable passage through the transpulmonary bed to improve contrast on the left side",
            "C. Improve contrast visualization in the hepatic bed",
            "D. None of the above"
        ],
        "answer": "B. Stable passage through the transpulmonary bed to improve contrast on the left side",
        "explanation": "The development of perflorocarbon bubbles increased stable passage through the pulmonary bed, so that contrast visualization was better on the left side."
    },

    // Question 95
    {
        "question": "In a patient with mixed aortic valve disease, the AVA by the Gorlin equation using Fick cardiac output is likely to be:",
        "options": [
            "A. Less than by the continuity equation",
            "B. More than by the continuity equation",
            "C. The same by both methods"
        ],
        "answer": "A. Less than by the continuity equation",
        "explanation": "The cardiac output by the Fick method is less than the transaortic flow, which is Fick cardiac output + regurgitant volume. Hence the calculation of AVA by Gorlin will underestimate AVA compared to AVA by the continuity equation. Gorlin equation will overestimate aortic stenosis severity."
    },

    // Question 96
    {
        "question": "In a patient with mixed aortic valve disease, the AVA by the Gorlin equation using angiographic cardiac output is likely to be:",
        "options": [
            "A. Less than by the continuity equation",
            "B. More than by the continuity equation",
            "C. The same by both methods"
        ],
        "answer": "C. The same by both methods",
        "explanation": "Angiographic and Doppler cardiac output would be equal."
    },

    // Question 97
    {
        "question": "The following measurements were obtained from a mitral regurgitant jet: radius of proximal isovelocity surface area = 1 cm, aliasing velocity = 40 cm/s. The peak regurgitant flow rate equals:",
        "options": [
            "A. 251 cc/s",
            "B. 251 cc/min",
            "C. 125 cc/min",
            "D. 125 cc/s"
        ],
        "answer": "A. 251 cc/s",
        "explanation": "The regurgitant flow rate is calculated by the formula 2πr² × aliasing velocity. This formula assumes a hemispherical geometry. Hence it is vital to optimize the aliasing velocity to maximize the hemisphere of the PISA in all dimensions. Using the formula, peak flow rate = 2πr² = 2 × 3.14 × 1 × 1 × 40 = 251.2 cc/s."
    },

    // Question 98
    {
        "question": "In the patient above, the systemic blood pressure is 120/80 mmHg in the absence of aortic stenosis and the left atrial pressure is 20 mmHg. The effective mitral regurgitant orifice area would be:",
        "options": [
            "A. 0.7 cm²",
            "B. 0.5 cm²",
            "C. 1 cm²",
            "D. Cannot be calculated"
        ],
        "answer": "B. 0.5 cm²",
        "explanation": "The LA–LV pressure gradient is 100 mmHg, which corresponds to a peak mitral regurgitant velocity of 5 m/s or 500 cm/s. The ERO area is given by the formula 2πr² × aliasing velocity (peak flow rate)/MR velocity. In this patient, peak flow rate = 251 cc/s and ERO is 251/500 = 0.5 cm²."
    },

    // Question 99
    {
        "question": "This effective regurgitant orifice (ERO) area of 0.5 cm² represents:",
        "options": [
            "A. Mild mitral regurgitation (MR)",
            "B. Moderate MR",
            "C. Severe MR",
            "D. Severity cannot be detected"
        ],
        "answer": "C. Severe MR",
        "explanation": "This patient has severe MR. The ERO is a fairly stable measure of quantitating MR as it represents the defect in the mitral valve co-aptation mechanism and is independent of loading conditions. ERO < 0.2 is mild, 0.2–0.4 is moderate, and ≥ 0.4 cm² is severe MR."
    },

    // Question 100
    {
        "question": "If the patient in question 99 had a blood pressure of 220/90 mmHg with similar proximal isovelocity surface area (PISA) measurements, the ERO area would:",
        "options": [
            "A. Remain unchanged",
            "B. Be more",
            "C. Be less"
        ],
        "answer": "C. Be less",
        "explanation": "Since the blood pressure is now elevated, the LV–LA pressure gradient is 200 mmHg, giving rise to an MR jet of 7 m/s. The ERO now is 251/700 = 0.3 cm². If the ERO were unchanged, the peak flow rate would be increased because of higher driving pressure and the PISA radius would be increased."
    }
]
