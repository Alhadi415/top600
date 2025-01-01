const questions =[

// Question 181
    {
        "question": "Compared to timing of mitral E-wave peak, mitral annular Em peak is:",
        "options": [
            "A. Earlier",
            "B. Later",
            "C. Simultaneous",
            "D. No relationship"
        ],
        "answer": "A. Earlier",
        "explanation": "The Em peak precedes the mitral E peak. This early LV lengthening is due to a combination of LV recoil and relaxation, which generates the mitral E wave. In patients with abnormal LV relaxation, the Em peak may follow the E-wave peak."
    },

// Question 182
{
    "question": "Post-ejection left ventricular (LV) shortening may be found in all of the following conditions except:",
    "options": [
        "A. Hypertensive heart disease",
        "B. Ischemic cardiomyopathy",
        "C. Cardiac syndrome X",
        "D. Mitral stenosis"
    ],
    "answer": "D. Mitral stenosis",
    "explanation": "Post-ejection LV shortening is the phenomenon of continued myocardial segmental contraction even after the end of ejection. This asynchrony of the ending of LV contraction may result in impaired LV pressure decay or relaxation and hence impaired LV filling."
},

// Question 183
{
    "question": "Compared to the epicardial, endocardial radial velocities are:",
    "options": [
        "A. Higher",
        "B. Lower",
        "C. Similar",
        "D. Variable"
    ],
    "answer": "A. Higher",
    "explanation": "This results in a myocardial velocity gradient. A transmural myocardial velocity gradient is a better index of contractile function compared to endocardial myocardial velocities alone. The myocardial velocity gradient is obtained as (endocardial velocity – epicardial velocity)/left ventricular wall thickness and reflects the rate of LV wall thickening."
},

// Question 184
{
    "question": "The following myocardial velocities were obtained from the posterior wall by color Doppler tissue imaging: peak systolic epicardial velocity \(2 \, \text{cm/s}\), peak systolic endocardial velocity \(16 \, \text{cm/s}\), systolic LV wall thickness \(1.4 \, \text{cm}\), early diastolic epicardial velocity \(3 \, \text{cm/s}\), endocardial velocity \(18 \, \text{cm/s}\), and diastolic wall thickness \(1 \, \text{cm}\). The systolic transmural velocity gradient in this patient is:",
    "options": [
        "A. \(10/\text{s}\)",
        "B. \(14 \, \text{cm/s}\)",
        "C. \(19.6 \, \text{cm/s}\)",
        "D. \(19.6/\text{s}\)"
    ],
    "answer": "A. \(10/\text{s}\)",
    "explanation": "Systolic myocardial velocity gradient = \( (16 - 2)/1.4 = 10/s \)."
},

// Question 185
{
    "question": "For the patient in question 184, diastolic myocardial velocity gradient for the posterior wall is:",
    "options": [
        "A. 15/s",
        "B. 1.5/s",
        "C. 18/s",
        "D. 18 cm/s"
    ],
    "answer": "A. 15/s",
    "explanation": "Diastolic myocardial velocity gradient = \( (18 - 3)/1 = 15/s \)."
},

// Question 186
{
    "question": "In a person with cardiomyopathy, the following Doppler measurements were obtained: Q wave to aortic flow 140 ms, Q wave to pulmonary flow 70 ms, Q to medial mitral annular Sm wave 70 ms, Q to anterior mitral annular Sm wave 85 ms, Q to lateral Sm wave 140 ms, and Q to posterior wall Sm wave 130 ms. Interventricular asynchrony in this patient is:",
    "options": [
        "A. 70 ms",
        "B. 140 ms",
        "C. 85 ms",
        "D. 50 ms"
    ],
    "answer": "A. 70 ms",
    "explanation": "Interventricular asynchrony is the difference between the time difference in the onset of mechanical systolies of right and left ventricles, generally measured as the time difference in right ventricular (RV) and LV ejection from the corresponding flows at pulmonary and aortic valves. In this patient, the electromechanical delay for the RV was 70 ms and for the LV was 140 ms. The difference is 70 ms, which corresponds to interventricular asynchrony or dyssynchrony."
},

// Question 187
{
    "question": "In the patient in question 186, LV intraventricular asynchrony is:",
    "options": [
        "A. 70 ms",
        "B. 140 ms",
        "C. 85 ms",
        "D. 130 ms"
    ],
    "answer": "A. 70 ms",
    "explanation": "The largest difference between electromechanical delays in the LV is a measure of intraventricular mechanical asynchrony. In this patient \( 140 - 70 = 70 \) ms corresponds to intraventricular asynchrony. Greater than 65 ms is a good predictor for response in terms of reverse remodeling and symptom improvement. As the peak velocities are easier to identify, most of the investigators currently use time to peak velocity rather than time to onset."
},

// Question 188
{
    "question": "Stroke risk in a patient with patent foramen ovale (PFO) is influenced by:",
    "options": [
        "A. Size of PFO",
        "B. Atrial septal aneurysm",
        "C. History of prior stroke or transient ischemic attack",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "Risk of stroke is higher in those with a large PFO, associated with an aneurysmal fossa ovalis, large right to left shunt on saline contrast, and prior embolic events."
},

// Question 189
{
    "question": "Atrial septal aneurysm may be associated with:",
    "options": [
        "A. Patent foramen ovale",
        "B. Atrial arrythmias",
        "C. Increased stroke risk",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "Atrial septal aneurysm may be associated with patent foramen ovale, atrial arrhythmias, and increased stroke risk."
},

// Question 190
{
    "question": "Observational data on percutaneous PFO closure indicate that the benefit is greater with:",
    "options": [
        "A. Larger PFO",
        "B. Complete PFO closure",
        "C. Greater number of previous strokes",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "Randomized trials have not been concordant with observational data. The NOMAS (Di Tuillo et al, J Am Coll Cardiol. 2007;49(7):797–802) and SPARC (Meissner et al, J Am Coll Cardiol. 2006;47(2):440–5) studies which looked at the occurrence of first stroke in patients found a modest but statistically insignificant association between the baseline presence of PFO and first stroke on follow-up."
},

// Question 191
{
    "question": "All of the following are probable causes of mitral stenosis except:",
    "options": [
        "A. Rheumatic fever",
        "B. Excessive calcification of the mitral annulus",
        "C. Phen-fen valvulopathy",
        "D. Ischemic heart disease"
    ],
    "answer": "D. Ischemic heart disease",
    "explanation": "Ischemic heart disease causes mitral regurgitation but is not a cause of mitral stenosis. All the others can cause mitral stenosis."
},

// Question 192
{
    "question": "Bicuspid aortic valve may be associated with the following except:",
    "options": [
        "A. Aortic root disease",
        "B. Coarctation of the aorta",
        "C. Aortic stenosis or regurgitation",
        "D. Ventricular septal defect"
    ],
    "answer": "D. Ventricular septal defect",
    "explanation": "Ventricular septal defect does not occur as an association with bicuspid aortic valve. Bicuspid aortic disease has autosomal dominant with incomplete penetrance. There are two main theories to explain the aortopathy: 1) hemodynamic theory and 2) genetic theory. The most BAV form involving fusion of right and left cusps has been linked to aortic root enlargement and asymmetric pattern of dilatation of the ascending aorta. Fusion of right and noncoronary cusps leads to ascending aortic dilatation often upto the transverse arch without root involvement."
},

// Question 193
{
    "question": "Common cause of aortic stenosis in a 50-year-old individual is:",
    "options": [
        "A. Calcific",
        "B. Bicuspid aortic valve",
        "C. Unicuspid aortic valve",
        "D. Rheumatic heart disease"
    ],
    "answer": "B. Bicuspid aortic valve",
    "explanation": "The most common cause of aortic stenosis in a 50-year-old individual is bicuspid aortic valve. Calcific aortic stenosis occurs in individuals older than 70 years. Unicuspid aortic valve occurs in infancy. Rheumatic heart disease occurs in children aged 5–15 years, mostly in developing countries."
},

// Question 194
{
    "question": "Heart failure with normal ejection fraction can occur in the following except:",
    "options": [
        "A. Hypertrophic cardiomyopathy",
        "B. Cardiac amyloid",
        "C. Restrictive cardiomyopathy",
        "D. Dilated cardiomyopathy"
    ],
    "answer": "D. Dilated cardiomyopathy",
    "explanation": "Dilated cardiomyopathy is associated with systolic heart failure. All the others are associated with heart failure and a normal ejection fraction, due to abnormal diastolic mechanics."
},

// Question 195
{
    "question": "Basic components of a partial AV canal defect include all except:",
    "options": [
        "A. Inlet ventricular septal defect",
        "B. Septum primum atrial septal defect",
        "C. Cleft mitral valve",
        "D. Widened anteroseptal tricuspid commissure and cleft in septal tricuspid leaflet"
    ],
    "answer": "A. Inlet ventricular septal defect",
    "explanation": "When inlet VSD is present along with the other defects, it constitutes complete AV canal defect. Without the presence of inlet VSD, the other three findings constitute a partial AV canal defect. In partial AV canal defect, mitral and tricuspid annuli are separate."
},

// Question 196
{
    "question": "Signs of acute aortic regurgitation include:",
    "options": [
        "A. Premature mitral valve closure",
        "B. Hyperdynamic LV function",
        "C. Normal left ventricle size",
        "D. All of the above",
        "E. None of the above"
    ],
    "answer": "D. All of the above",
    "explanation": "In acute AR, there is no LV dilatation. Hence, in acute AR an increase in LVEDP results in premature closure of the mitral valve."
},

// Question 197
{
    "question": "The following are indicative of severe mitral regurgitation except:",
    "options": [
        "A. Systolic flow reversal in the pulmonary veins",
        "B. Regurgitant fraction of >60%",
        "C. Effective regurgitant orifice area of ≥0.4 cm\(^2\)",
        "D. Vena contracta diameter of ≥3 mm"
    ],
    "answer": "D. Vena contracta diameter of ≥3 mm",
    "explanation": "A vena contracta width of ≥0.7 cm is suggestive of severe mitral regurgitation. Rest of the choices are indicative of severe MR."
},

// Question 198
{
    "question": "The following are signs of chronic severe aortic regurgitation except:",
    "options": [
        "A. Regurgitant fraction ≥60%",
        "B. Regurgitant volume of ≥60 cc",
        "C. Effective regurgitation orifice area ≥0.2 cm\(^2\)",
        "D. Vena contracta width ≥0.6 cm"
    ],
    "answer": "C. Effective regurgitation orifice area ≥0.2 cm\(^2\)",
    "explanation": "Effective orifice area in chronic severe aortic regurgitation is ≥0.3 cm\(^2\). All the other findings are suggestive of severe aortic regurgitation."
},

// Question 199
{
    "question": "Prosthetic valve gradients are increased in following conditions except:",
    "options": [
        "A. Anemia",
        "B. Febrile state",
        "C. LV diastolic dysfunction",
        "D. Hyperthyroidism"
    ],
    "answer": "C. LV diastolic dysfunction",
    "explanation": "All the other states except LV diastolic dysfunction can cause an increase in prosthetic valve gradients due to increased stroke volume."
},

// Question 200
{
    "question": "What is the velocity of circumferential fiber shortening (VCF) in a patient with the following measurements: LV end diastolic dimension 50 mm, end systolic dimension 33 mm, LV ejection time 300 ms.",
    "options": [
        "A. 1.1",
        "B. 0.9",
        "C. 34",
        "D. Cannot be calculated"
    ],
    "answer": "A. 1.1",
    "explanation": "VCF = fractional shortening/ejection time in seconds. Fractional shortening is a measure of degree of shortening of endocardial circumference. In this patient, fractional shortening = (50 – 33)/50 = 0.34. Thus, VCF is 0.34/0.3 = 1.1 circumferences/s."
}
  ]
