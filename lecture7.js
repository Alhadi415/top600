const questions =[
    // Question 121
    {
        "question": "Bicuspid aortic valve may be associated with:",
        "options": [
            "A. Coronary anomalies",
            "B. Coarctation of the aorta",
            "C. Atrial septal defect",
            "D. None of the above"
        ],
        "answer": "B. Coarctation of the aorta",
        "explanation": "Bicuspid valve is associated with coarctation of the aorta. Bicuspid aortic valve occurs in 1–2% of the population. In these people, aortic coarctation is rare, but 25% of patients with coarctation have a bicuspid aortic valve."
    },

    // Question 122
    {
        "question": "A dilated coronary sinus could be seen in all of the following conditions except:",
        "options": [
            "A. Right atrial hypertension",
            "B. Persistent left superior vena cava",
            "C. Coronary A–V fistula",
            "D. Unroofed coronary sinus",
            "E. Azygos continuity of inferior vena cava"
        ],
        "answer": "E. Azygos continuity of inferior vena cava",
        "explanation": "Coronary sinus can be dilated due to increased pressure or flow. There is an increased flow in the coronary sinus in the left superior vena cava, which drains into the coronary sinus, coronary A–V fistula due to increased shunt, and unroofed coronary sinus due to increased flow from the left atrium (LA) to coronary sinus. Right atrial hypertension causes increased pressure, which will lead to dilated coronary sinus."
    },

    // Question 123
    {
        "question": "Atrial septal defect (ASD) of sinus venosus type is most commonly associated with:",
        "options": [
            "A. Anomalous drainage of right upper pulmonary vein into the right atrium",
            "B. Anomalous drainage of left upper pulmonary vein into the right atrium",
            "C. Persistent left upper superior vena cava",
            "D. Coronary artery anomalies"
        ],
        "answer": "A. Anomalous drainage of right upper pulmonary vein into the right atrium",
        "explanation": "ASD of sinus venosus type is most commonly associated with anomalous drainage of the right upper pulmonary vein into the right atrium."
    },

    // Question 124
    {
        "question": "Ostium primum ASD is most commonly associated with:",
        "options": [
            "A. Cleft in anterior mitral leaflet",
            "B. Cleft in septal leaflet of the tricuspid valve",
            "C. Patent ductus arteriosus",
            "D. Aortic stenosis"
        ],
        "answer": "A. Cleft in anterior mitral leaflet",
        "explanation": "Ostium primum ASD is most commonly associated with a cleft anterior mitral leaflet. This is a form of endocardial cushion defect or partial AV canal defect."
    },

    // Question 125
    {
        "question": "Dilatation of the pulmonary artery is seen in all of the following conditions except:",
        "options": [
            "A. Atrial septal defect",
            "B. Valvular pulmonary stenosis",
            "C. Infundibular pulmonary stenosis",
            "D. Pulmonary hypertension"
        ],
        "answer": "C. Infundibular pulmonary stenosis",
        "explanation": "Infundibular pulmonary stenosis is not associated with dilatation of the pulmonary artery. Poststenotic dilatation is seen only in valvular pulmonary stenosis and not in subvalvular pulmonary stenosis. In ASD the pulmonary artery dilates due to increased flow and pulmonary hypertension dilatation is due to increased pressure. Idiopathic dilatation of the pulmonary artery can also occur. Marfan syndrome is a cause of pulmonary artery dilatation as well."
    },

    // Question 126
    {
        "question": "Risk of aortic dissection is increased in the following conditions except:",
        "options": [
            "A. Marfan’s syndrome",
            "B. Bicuspid aortic valve",
            "C. Pregnancy",
            "D. Mitral stenosis"
        ],
        "answer": "D. Mitral stenosis",
        "explanation": "All conditions except mitral stenosis have weakened media predisposing to dissection. Hypertension can also increase the risk for dissection. There is aortopathy in Marfan syndrome and bicuspid aortic valve. Progesterone in pregnancy loosens connective tissue and may result in aortic as well as coronary dissection."
    },

    // Question 127
    {
        "question": "A 52-year-old patient with a 31 mm St. Jude mitral valve has severe shortness of breath. Left ventricular function and aortic valve are normal. The disk motion of the prosthetic valve is normal. Analysis of transmitral flow with continuous wave Doppler revealed an E-wave velocity of 2.6 m/s, A-wave velocity of 0.6 m/s, E-wave pressure half-time of 40 ms, diastolic mean gradient of 6 mmHg at a heart rate of 60/min, and isovolumic relaxation time (IVRT) of 30 ms. This patient is likely to have:",
        "options": [
            "A. Mitral regurgitation",
            "B. Pannus growth into the prosthetic valve",
            "C. Prosthetic valve thrombosis",
            "D. Normal prosthetic valve function"
        ],
        "answer": "A. Mitral regurgitation",
        "explanation": "Normal IVRT is 70–100 ms, and pressure half-time is 65–80 ms for a prosthetic mitral valve. With a normal cardiac output, the mean gradient would be 3–4 mmHg at a heart rate of 60/min. Shortened IVRT, short pressure half-time, and high E/A ratio indicate high LA pressure. A stenotic prosthetic valve would have caused increase in pressure half-time and an increase in mean gradient far more than 6 mmHg at a heart rate of 60/min. A mildly increased gradient despite a shortened pressure half-time indicates increased transvalvular flow suggestive of mitral regurgitation, which may be difficult to visualize from a transthoracic echo. Hence, a transesophageal echocardiogram (TEE) would be warranted. High LA pressure without an increase in flow would result in shortened IVRT and pressure half-time without an increase in the gradient. A good example of this is superadded restrictive cardiomyopathy."
    },

    // Question 128
    {
        "question": "In a person with suspected paravalvular (mechanical) mitral regurgitation, the following transducer position has the best chance of revealing the mitral regurgitation jet:",
        "options": [
            "A. Parasternal long axis view",
            "B. Apical four-chamber",
            "C. Apical two-chamber",
            "D. Apical long axis"
        ],
        "answer": "A. Parasternal long axis view",
        "explanation": "Shadowing in the left atrium is least with a parasternal long axis view; however, TEE is the best technique to evaluate for paravalvular mitral leaks."
    },

    // Question 129
    {
        "question": "A patient with a bileaflet mechanical aortic valve has shortness of breath on exertion. An echocardiogram revealed normal left ventricular systolic function and mitral valve function. The left ventricular outflow tract (LVOT) dimension was 2.2 cm, LVOT (V1) velocity was 1.5 m/s, and aortic transvalvular velocity (V2) was 4.5 m/s, with no aortic regurgitation. Measurements obtained 2 years earlier when the patient was asymptomatic were LVOT diameter 2.2 cm, V1 0.9 m/s, and V2 2.7 m/s. Likely cause of this patient’s shortness of breath is:",
        "options": [
            "A. Prosthetic valve stenosis",
            "B. Patient–prosthesis mismatch",
            "C. High cardiac output state, patient may be anemic",
            "D. None of the above"
        ],
        "answer": "C. High cardiac output state, patient may be anemic",
        "explanation": "An unchanged V1 / V2 ratio compared to prior echo confirms the absence of prosthetic valve stenosis. An elevated V1 indicates elevated cardiac output and the transvalvular gradient is flow dependent. Anemia is a common problem secondary to blood loss due to anticoagulation and less commonly due to mechanical hemolysis. Patient prosthesis mismatch occurs when the valve is too small for the cardiac output needs of the patient. The effective aortic orifice area in this patient is about 1.3 cm². There is no change in the intrinsic valvular function in this patient."
    },

    // Question 130
    {
        "question": "A patient with a mechanical prosthetic mitral valve has gastrointestinal bleeding and the following measurements were obtained: diastolic mean gradient 11 mmHg, peak gradient 16 mmHg, pressure half-time 65 ms, heart rate 114/min. This increased gradient is likely to be:",
        "options": [
            "A. Likely normal",
            "B. Likely abnormal",
            "C. Cannot comment"
        ],
        "answer": "A. Likely normal",
        "explanation": "The measurements are normal. Pressure half-time of 65 ms indicates normal valve function. Mean gradient is appropriately increased due to tachycardia (which shortens the diastolic filling period), anemia, and possibly high cardiac output. Prosthetic valves are intrinsically mildly stenotic."
    },

    // Question 131
    {
        "question": "The following measurements were obtained in a patient with mitral regurgitation: proximal isovelocity surface area (PISA) radius 1 cm at a Nyquist limit of 50 cm/s, peak mitral regurgitation velocity 5 m/s, and mitral regurgitation signal time velocity integral 100 cm. The regurgitant volume is:",
        "options": [
            "A. 63 cc/beat",
            "B. 31 cc/beat",
            "C. 63 cc/s",
            "D. 63%"
        ],
        "answer": "A. 63 cc/beat",
        "explanation": "Effective regurgitant orifice area is given by the formula 2πr² × Nyquist limit/MR velocity, that is, 2 × 3.14 × 1 × 1 × 50/500 cm/s = 0.628 cm². Regurgitant volume is effective regurgitant orifice area (in cm²) × TVI (in cm). In this patient, it is 0.628 × 100 = 62.8 cc. This is per beat and not per second."
    },

    // Question 132
    {
        "question": "Distribution of leaflet thickening and calcification in rheumatic mitral stenosis is:",
        "options": [
            "A. More at the tip",
            "B. More at the base",
            "C. Uniform throughout the leaflets"
        ],
        "answer": "A. More at the tip",
        "explanation": "In rheumatic mitral stenosis, leaflet thickening and calcification are more pronounced at the tip of the leaflets."
    },

    // Question 133
    {
        "question": "Leaflet calcification in degenerative mitral stenosis is:",
        "options": [
            "A. More at the tip",
            "B. More at the base",
            "C. Uniform throughout the leaflets"
        ],
        "answer": "B. More at the base",
        "explanation": "Calcification extends from the annulus, that is, in a centripetal fashion compared to rheumatic, which is centrifugal."
    },

    // Question 134
    {
        "question": "The predominant mechanism of chronic ischemic mitral regurgitation is:",
        "options": [
            "A. Restriction of mitral leaflet closure",
            "B. Papillary muscle dysfunction",
            "C. Ruptured chordae tendinae",
            "D. Ruptured papillary muscle"
        ],
        "answer": "A. Restriction of mitral leaflet closure",
        "explanation": "Restriction, tethering, and tenting refer to the phenomenon of incomplete systolic closure due to apical traction on the mitral leaflets due to outward displacement of the papillary muscles. This causes tenting of the leaflets, and the coaptation point is displaced apically. This is not due to contractile failure of the papillary muscles (papillary muscle dysfunction). Papillary muscle rupture causes acute MR, leading to pulmonary edema and hemodynamic compromise. Tenting is far more common than papillary muscle rupture."
    },

    // Question 135
    {
        "question": "In a person with chronic ischemic mitral regurgitation (MR) due to old inferior myocardial infarction (MI) and an ejection fraction of 50%, the location of the MR jet would be:",
        "options": [
            "A. Medial commissure",
            "B. Lateral commissure",
            "C. Central"
        ],
        "answer": "A. Medial commissure",
        "explanation": "Owing to displacement of the posteromedial papillary muscle, there is tethering of medial portions of both leaflet (P3 and A3) segments causing a medial commissural jet. When the left ventricle (LV) is uniformly dilated, the jet could be central in origin."
    },

    // Question 136
    {
        "question": "In the above patient, the jet direction would be:",
        "options": [
            "A. Posterior",
            "B. Anterior",
            "C. Central"
        ],
        "answer": "B. Anterior",
        "explanation": "As there is greater tenting of P3 than A3, the jet is directed posteriorly. There may also be some tenting of P2."
    },

    // Question 137
    {
        "question": "In a patient with old anteroseptal MI with an ejection fraction of 28%, an ischemic MR jet is likely to be:",
        "options": [
            "A. Central",
            "B. Lateral wall hugging",
            "C. Medial wall hugging"
        ],
        "answer": "A. Central",
        "explanation": "In an anterior MI, there is generally remodeling of the noninfarcted segments as well, causing dilatation of the whole LV cavity. This is reflected by a low ejection fraction. This causes displacement of both papillary muscles and tenting of all segments of both leaflets, giving rise to central MR, although exceptions may occur. MR in dilated cardiomyopathy occurs because of a similar mechanism."
    },

    // Question 138
    {
        "question": "Mitral regurgitation in aortic stenosis is related to which of these factors:",
        "options": [
            "A. Degree of mitral annular calcification",
            "B. Severity of aortic stenosis",
            "C. An increase in LV end systolic dimension",
            "D. Degree of aortic leaflet calcification"
        ],
        "answer": "C. An increase in LV end systolic dimension",
        "explanation": "The mechanism of MR is functional and is related to LV dilation and leaflet tethering. Aortic leaflet calcification, mitral annular calcification, and severity of aortic stenosis contribute very little in the genesis of MR. A higher driving pressure in more severe degrees of aortic stenosis may increase the regurgitant volume and the jet area but will not cause MR in the absence of a defect in the mitral coaptation mechanism."
    },

    // Question 139
    {
        "question": "Left atrial myxoma may be differentiated from a left atrial thrombus by all of the following characteristics except:",
        "options": [
            "A. Enhancement with transpulmonary contrast agent",
            "B. Presence of blood vessels on color flow imaging",
            "C. Attachment to the atrial septum",
            "D. Similar mass in the left ventricle (LV) with normal LV function."
        ],
        "answer": "C. Attachment to the atrial septum",
        "explanation": "Myxomas are vascular; blood vessels may be seen on color flow imaging and enhanced mildly with transpulmonary contrast agent. Although left atrial thrombus is most commonly seen in the appendage, it may be attached to the atrial septum or may traverse through a patent foramen ovale from the right side (paradoxical embolism). The presence of a mass in the LV in the face of normal LV function makes a thrombus unlikely and points to a familial myxoma syndrome (Carney’s syndrome)."
    },

    // Question 140
    {
        "question": "The most common location of a left atrial thrombus is:",
        "options": [
            "A. Left atrial appendage",
            "B. Body",
            "C. Atrial septum",
            "D. Atrial roof"
        ],
        "answer": "A. Left atrial appendage",
        "explanation": "This generally occurs in the presence of atrial fibrillation or flutter. The probability is increased by the presence of mitral stenosis, heart failure, low ejection fraction, large left atrium, and left atrial spontaneous echo contrast."
    }
]
