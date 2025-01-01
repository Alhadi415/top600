const questions =[
    // Question 101
    {
        "question": "An intraoperative transesophageal echocardiogram (TEE) revealed mitral regurgitation with the following measurements: regurgitant jet area 4 cm², PISA radius 0.8 cm at a Nyquist limit of 50 cm/s at a heart rate of 82 beats/min, and arterial blood pressure 80/40 mmHg. This represents:",
        "options": [
            "A. Mild mitral regurgitation (MR)",
            "B. Moderate MR",
            "C. Severe MR"
        ],
        "answer": "C. Severe MR",
        "explanation": "The measurements indicate severe mitral regurgitation due to the large regurgitant jet area and PISA radius at the given Nyquist limit and heart rate."
    },

    // Question 102
    {
        "question": "For the patient in the above question, if the systolic blood pressure is increased to 145 mmHg, assuming that the effective orifice area is unchanged, then the:",
        "options": [
            "A. MR jet size will double",
            "B. MR jet size will not change",
            "C. MR jet size will more than double"
        ],
        "answer": "C. MR jet size will more than double",
        "explanation": "Increasing the systolic blood pressure will increase the driving pressure for the regurgitant jet, leading to a more than doubling of the jet size."
    },

    // Question 103
    {
        "question": "For a given regurgitant volume, all of the following result in a reduction in the jet size except:",
        "options": [
            "A. Fast heart rate",
            "B. Doubling the sector angle",
            "C. Increasing the imaging depth",
            "D. Increasing the blood pressure"
        ],
        "answer": "D. Increasing the blood pressure",
        "explanation": "Increasing the blood pressure increases the driving pressure for the regurgitant jet, which would increase the jet size rather than reduce it."
    },

    // Question 104
    {
        "question": "In a patient with severe MR, all of the following factors increase its hemodynamic impact except:",
        "options": [
            "A. Mitral stenosis",
            "B. Left ventricular hypertrophy",
            "C. Compliant left atrium",
            "D. Concomitant aortic regurgitation"
        ],
        "answer": "C. Compliant left atrium",
        "explanation": "A compliant left atrium can accommodate the regurgitant volume better, reducing the hemodynamic impact of severe MR."
    },

    // Question 105
    {
        "question": "In a patient undergoing aortic valve replacement (AVR) for aortic stenosis, there was evidence of moderate MR on a preoperative transthoracic echocardiogram. After the AVR, the next step to be taken is:",
        "options": [
            "A. Replace the mitral valve",
            "B. Leave the mitral valve alone",
            "C. Assess for MR with intraoperative TEE, and decide if repair or replacement is needed",
            "D. None of the above"
        ],
        "answer": "C. Assess for MR with intraoperative TEE, and decide if repair or replacement is needed",
        "explanation": "It is important to reassess the MR after AVR to determine if further intervention on the mitral valve is necessary."
    },

    // Question 106
    {
        "question": "A patient with old inferior wall myocardial infarction (MI) has severe MR with a posterolaterally directed jet in the left atrium. The most likely cause of MR in this patient is:",
        "options": [
            "A. Flail posterior leaflet",
            "B. Dilated mitral annulus",
            "C. Tented or apically tethered posterior mitral leaflet",
            "D. Tented or apically tethered anterior mitral leaflet"
        ],
        "answer": "C. Tented or apically tethered posterior mitral leaflet",
        "explanation": "An old inferior wall MI can lead to tethering or tenting of the posterior mitral leaflet, causing severe MR."
    },

    // Question 107
    {
        "question": "Presence of severe aortic regurgitation (AR) in a patient with mitral stenosis is likely to do the following to the calculated mitral valve area by the pressure half-time method:",
        "options": [
            "A. Overestimate the valve area",
            "B. Underestimate the valve area",
            "C. No effect"
        ],
        "answer": "A. Overestimate the valve area",
        "explanation": "Severe AR can lead to an overestimation of the mitral valve area by the pressure half-time method due to the increased flow across the mitral valve."
    },

    // Question 108
    {
        "question": "Presence of atrial septal defect (ASD) in a patient with mitral stenosis is likely to do the following to the calculated mitral valve area by the pressure half-time method:",
        "options": [
            "A. Overestimate the valve area",
            "B. Underestimate the valve area",
            "C. No change"
        ],
        "answer": "A. Overestimate the valve area",
        "explanation": "An ASD can lead to an overestimation of the mitral valve area by the pressure half-time method due to the shunting of blood."
    },

    // Question 109
    {
        "question": "In a patient with mitral stenosis, the following diastolic flow measurements were obtained: maximal radius of proximal isovelocity surface area (PISA) 0.8 cm at an aliasing velocity of 50 cm/s, inlet angle 120 degrees, peak inflow velocity 2 m/s. The mitral valve area is:",
        "options": [
            "A. 0.7 cm²",
            "B. 1 cm²",
            "C. 1.2 cm²",
            "D. 1.5 cm²"
        ],
        "answer": "B. 1 cm²",
        "explanation": "The mitral valve area can be calculated using the PISA method with the given measurements."
    },

    // Question 110
    {
        "question": "A patient with mitral stenosis without any MR or AR has a stroke volume of 70 cc/beat, a transmitral flow integral of 50 cm, and the mitral valve area is:",
        "options": [
            "A. 0.7",
            "B. 1",
            "C. 1.4",
            "D. None of the above"
        ],
        "answer": "B. 1",
        "explanation": "The mitral valve area can be calculated using the stroke volume and transmitral flow integral."
    },

    // Question 111
    {
        "question": "A patient with MR has a transaortic flow of 70 cc/beat by the left ventricular outflow tract (LVOT) method and a transmitral flow of 112 cc/beat by the mitral annular method. The time velocity integral (TVI) of the MR signal by continuous wave Doppler is 60 cm. The effective regurgitant orifice (ERO) area of this patient is:",
        "options": [
            "A. 1.5 cm²",
            "B. 0.7 cm²",
            "C. 0.4 cm²",
            "D. 0.2 cm²"
        ],
        "answer": "B. 0.7 cm²",
        "explanation": "The ERO area can be calculated using the regurgitant flow rate and the TVI of the MR signal."
    },

    // Question 112
    {
        "question": "For a patient with MR and AR, the following measurements were obtained using echo Doppler: flow across the pulmonary valve 75 cc/beat, flow across the mitral valve 120 cc/beat, flow across the aortic valve 90 cc/beat, TVI of MR signal 90 cm, TVI of AR signal 75 cm. The following statement is accurate in this patient:",
        "options": [
            "A. MR ERO is 0.5 cm² and AR ERO is 0.2 cm²",
            "B. MR ERO is 1.3 cm² and AR ERO is 1.2 cm²",
            "C. Cannot be calculated"
        ],
        "answer": "A. MR ERO is 0.5 cm² and AR ERO is 0.2 cm²",
        "explanation": "The ERO areas for MR and AR can be calculated using the given flow measurements and TVI values."
    },

    // Question 113
    {
        "question": "In a patient with isolated AR, the following measurements were obtained: transmitral flow 80 cc/beat, flow across aortic valve 140 cc/beat, TVI of AR signal 100 cm. The AR in this patient is:",
        "options": [
            "A. Mild",
            "B. Moderate",
            "C. Severe",
            "D. Cannot be determined"
        ],
        "answer": "C. Severe",
        "explanation": "The regurgitant volume and TVI indicate severe AR."
    },

    // Question 114
    {
        "question": "A patient with dilated cardiomyopathy has an end diastolic pulmonary regurgitation (PR) velocity of 2 m/s and the estimated right atrial pressure is 10 mmHg. The following statement is true about this patient:",
        "options": [
            "A. Pulmonary artery (PA) pressure is normal",
            "B. Has mild or moderate pulmonary hypertension",
            "C. Has severe pulmonary hypertension",
            "D. Cannot estimate pulmonary pressure"
        ],
        "answer": "B. Has mild or moderate pulmonary hypertension",
        "explanation": "The PR velocity and estimated right atrial pressure suggest mild to moderate pulmonary hypertension."
    },

    // Question 115
    {
        "question": "If the patient in question 114 had valvular pulmonary stenosis (PS) with a peak gradient of 36 mmHg, the estimated PA end diastolic pressure would be:",
        "options": [
            "A. 16 mmHg",
            "B. 26 mmHg",
            "C. 36 mmHg",
            "D. 62 mmHg"
        ],
        "answer": "B. 26 mmHg",
        "explanation": "The PA end diastolic pressure can be estimated using the PR velocity and the peak gradient of PS."
    },

    // Question 116
    {
        "question": "If the patient in question 114 has tricuspid stenosis with a mean diastolic gradient of 8 mmHg across the tricuspid valve, the PA diastolic pressure would be:",
        "options": [
            "A. 26 mmHg",
            "B. 34 mmHg",
            "C. 18 mmHg",
            "D. Cannot be estimated"
        ],
        "answer": "B. 34 mmHg",
        "explanation": "The PA diastolic pressure can be estimated using the PR velocity and the mean diastolic gradient across the tricuspid valve."
    },

    // Question 117
    {
        "question": "In a patient with valvular PS with right PA branch stenosis, the following measurements were obtained: tricuspid regurgitation (TR) velocity 4 m/s, right atrial (RA) pressure 6 mmHg, systolic velocity across the pulmonary valve 2.5 m/s, velocity across the discrete branch stenosis 2.5 m/s. The systolic pressure in the right pulmonary branch distal to the stenosis is likely to be:",
        "options": [
            "A. 20 mmHg",
            "B. 5 mmHg",
            "C. 70 mmHg",
            "D. Cannot be estimated"
        ],
        "answer": "A. 20 mmHg",
        "explanation": "The systolic pressure in the right pulmonary branch can be estimated using the TR velocity and the velocities across the pulmonary valve and branch stenosis."
    },

    // Question 118
    {
        "question": "A 20-year-old patient with a large ventricular septal defect (VSD) underwent PA banding in childhood and was lost to follow-up. A recent echocardiogram revealed the following: peak systolic velocity across the VSD 3 m/s, TR velocity 5 m/s, estimated RA pressure 10 mmHg, cuff blood pressure in the right arm 146/70 mmHg, peak flow velocity across the pulmonary band 4.7 m/s. The following statement is true:",
        "options": [
            "A. This patient has normal PA pressure",
            "B. The patient has severe pulmonary hypertension",
            "C. The patient has features of left ventricular (LV) failure",
            "D. PA pressure cannot be determined"
        ],
        "answer": "B. The patient has severe pulmonary hypertension",
        "explanation": "The TR velocity and peak flow velocity across the pulmonary band indicate severe pulmonary hypertension."
    },

    // Question 119
    {
        "question": "The patient has an LVOT velocity of 1 m/s, TVI of 25 cm, LVOT diameter of 2 cm, aortic transvalvular velocity of 1.5 m/s, heart rate of 70 beats/min, and the cardiac output in this patient is:",
        "options": [
            "A. 5.5 L",
            "B. 4.5 L",
            "C. 6.3 L",
            "D. Cannot be determined based on the given data"
        ],
        "answer": "B. 4.5 L",
        "explanation": "The cardiac output can be calculated using the LVOT velocity, TVI, and heart rate."
    },

    // Question 120
    {
        "question": "A patient with aortic stenosis has an LVOT diameter of 2 cm, LVOT velocity (V1) of 2.5 m/s, transaortic valve velocity (V2) of 5 m/s, and two-dimensional examination showed moderate systolic anterior motion of the mitral leaflet. Valvular aortic stenosis in this patient is:",
        "options": [
            "A. Mild",
            "B. Moderate",
            "C. Severe",
            "D. Cannot be calculated based on the given data"
        ],
        "answer": "C. Severe",
        "explanation": "The LVOT and transaortic valve velocities indicate severe aortic stenosis."
    }
]
