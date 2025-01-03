const questions =[
// Question 341
{
    "question": "This continuous wave Doppler signal is indicative of:",
    "options": [
        "A. Acute severe aortic regurgitation (AR)",
        "B. Chronic compensated AR",
        "C. Severe aortic stenosis (AS)",
        "D. Severe mixed mitral valve disease"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_1q.JPG",
    "answer": "A. Acute severe AR",
    "explanation": "There is a rapid deceleration of the AR velocity profile indicating rapidly diminishing aorto-left ventricular pressure gradient, which is typically seen in acute severe AR, mostly due to rapid rise in LV diastolic pressure, due to regurgitation in a noncompliant nonconditioned left ventricle. It is also possible to get this in a chronic severe AR, with severe vasodilatation, which would cause a low aortic diastolic pressure, but this scenario is less frequent. The systolic signal is early peaking, with a velocity of only 2 m/s, with severe AR indicating the absence of any significant AS. The onset of the systolic signal after the isovolumic contraction period indicates its origin at the semilunar valve as opposed to origin at the A–V valve. This systolic velocity is too low for MR unless the continuous wave signal is malaligned to the MR jet direction; this is unlikely as the signal is not bidirectional and the diastolic velocity is too high for MS."
},

// Question 342
{
    "question": "This transexophageal echocardiogram (TEE) image is suggestive of:",
    "options": [
        "A. Severe AR",
        "B. Hypertrophic obstructive cardiomyopathy (HOCM)",
        "C. Subaortic membranous aortic stenosis",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_2q.JPG" ,
    "answer": "A. Severe AR",
    "explanation": "This diastolic frame is indicated by the open mitral valve, and the left ventricular outflow tract (LVOT) is completely filled with turbulent flow typical of wide-open aortic regurgitation. Note that this is not a systolic frame to indicate subvalvular aortic stenosis."
},

// Question 343
{
    "question": "This pulse wave Doppler flow signal in the descending thoracic aorta on a TEE is indicative of:",
    "options": [
        "A. Coarctation of the aorta",
        "B. Middle aortic syndrome",
        "C. Severe AR",
        "D. HOCM"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_3q.JPG",
    "answer": "C. Severe AR",
    "explanation": "A prominent holodiastolic flow reversal suggesting retrograde flow in the aorta is seen. This flow would also cause Duroziez’s murmur by physical exam due to the turbulence produced by partial occlusion by the finger, which would produce a diastolic murmur in the proximal femoral artery. Coarctation and middle aortic syndrome diminish pulsatility in the distal aortic flow and the flow becomes continuous due to flow through collaterals. Although HOCM can produce midsystolic closure of the aortic valve, it does not produce any flow disturbance in the distal aorta."
},

// Question 344
{
    "question": "What procedure did this patient undergo?",
    "options": [
        "A. Mitral valve replacement",
        "B. Atrial septal defect (ASD) closure with an Amplatzer device",
        "C. Patent foramen ovale (PFO) closure with cardioscal device",
        "D. Closure of ASD with a pericardial patch"
    ], "questionImage": "https://alhadi415.github.io/top600/images/18_4q.JPG" ,
    "answer": "B. ASD closure with Amplatzer",
    "explanation": "This is a typical appearance of an Amplatzer device. Both the left and right atrial disks are seen, sandwiching the atrial septum. The role of TEE during ASD closure includes sizing of the defect, with and without balloon inflation, examination of adequacy of rims, ruling out anomalous pulmonary venous connections, guiding deployment and ascertaining post deployment lack of impingement into SVC, right upper pulmonary vein, IVC and the mitral valve, in addition to excluding any residual ASD. Small flow through the device is normal until it becomes endothelialized."
},

// Question 345
{
    "question": "This patient is likely to have:",
    "options": [
        "A. Systolic murmur accentuated by Valsalva maneuver",
        "B. Early peaking systolic murmur",
        "C. Early diastolic murmur heard in sitting position at end expiration",
        "D. A middiastolic murmur best heard with the bell in left lateral position"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_5q.JPG",
    "answer": "A. Systolic murmur accentuated by Valsalva’s maneuver",
    "explanation": "This is a midsystolic frame showing systolic anterior motion (SAM) of the anterior mitral leaflet. As SAM increases in late systole, the gradient will be maximal in end systole, causing a late peaking systolic murmur. Both the gradient and murmur are increased by Valsalva’s maneuver through a diminution of LV volume, causing an increase in SAM. Early diastolic murmur heard in the sitting position at end expiration is typical of aortic regurgitation. A middiastolic murmur best heard with the bell in the left lateral position is typical of mitral stenosis."
},

// Question 346
{
    "question": "This signal shown here is likely to be caused by:",
    "options": [
        "A. HOCM",
        "B. Critical valvular aortic stenosis",
        "C. Acute mitral regurgitation (MR)",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_6q.JPG" ,
    "answer": "A. HOCM",
    "explanation": "This late peaking dagger-shaped signal is typical of SAM caused by HOCM. This occurs due to the dynamic LVOT obstruction increases through systole. Critical valvular AS is unlikely as in this case the velocity is likely to be higher (unless cardiac output is very low) and the signal contour would be more rounded. Acute MR gives rise to an early peaking signal with a rapid deceleration because of a large left atrial V-wave, the so-called V-wave cut-off sign. In LV cavity obliteration, this signal will be much later peaking, with a gradient only in the very late part of systole when there is very little blood left in the distal LV cavity."
},

// Question 347
{
    "question": "The image shown here is suggestive of:",
    "options": [
        "A. Bioprosthetic tricuspid valve",
        "B. Carcinoid valvulopathy of the tricuspid valve",
        "C. Tricuspid annuloplasty ring",
        "D. Large tricuspid vegetation"
    ], "questionImage": "https://alhadi415.github.io/top600/images/18_7q.JPG",
    "answer": "A. Bioprosthetic tricuspid valve",
    "explanation": "This patient has Hancock porcine bioprosthetic tricuspid valve. The struts of the bioprosthetic valve are well seen. An annuloplasty ring would be seen as a small rounded structure in cross-section at the tricuspid annulus only."
},

// Question 348
{
    "question": "This 65-year-old patient with MR is likely to have:",
    "options": [
        "A. An opening snap",
        "B. Third heart sound",
        "C. Fourth heart sound",
        "D. Summation gallop"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_8q.JPG" ,
    "answer": "B. Third heart sound",
    "explanation": "The mitral inflow is suggestive of high left atrial pressure. The mitral E/A ratio is >2 and deceleration time is 60 ms, indicating very high left atrial pressure. The calculated E-wave deceleration calculated from the E-wave amplitude and its time (velocity/time) is about 20 m/s². A rate of deceleration of >8–9 m/s² is likely to result in S3. Age is relevant, as such a filling pattern in young children is normal because they have extremely efficient LV relaxation, which would result in physiological S3. S4 results from a prominent atrial-filling wave in a stiff ventricle, and in a summation gallop the E- and A-waves are fused. This patient has no mitral stenosis and hence opening snap is unlikely."
},

// Question 349
{
    "question": "The CW Doppler signal is consistent with:",
    "options": [
        "A. Critical AS",
        "B. Severe MR",
        "C. Maladie de Roger",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_9q.JPG",
    "answer": "B. Severe MR",
    "explanation": "The temporal continuity of the systolic signal with the inflow signal suggests its origin at the mitral valve. The AS signal would occupy only the ejection period, being separated from the mitral inflow signal by isovolumic contraction and relaxation periods. A small ventricular septal defect (VSD) may result in a holosystolic signal but generally has a presystolic component associated with left atrial systole, and generally this flow is directed toward the transducer from most of the imaging windows."
},

// Question 350
{
    "question": "This tricuspid regurgitation (TR) signal was obtained from TEE. The clinically estimated right atrial (RA) pressure in this patient was 20 mmHg and there is no pulmonary stenosis. The pulmonary artery (PA) systolic pressure in this patient would be:",
    "options": [
        "A. 30 mmHg",
        "B. 50 mmHg",
        "C. 80 mmHg",
        "D. Cannot be calculated"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_50q.JPG",
    "answer": "C. 80 mmHg",
    "explanation": "The TR velocity is 4 m/s, yielding an RV–RA systolic gradient of 64 mmHg. With an RA pressure of 20 mmHg, the RV systolic pressure would be about 80 mmHg, which would be the same as the PA systolic pressure in the absence of significant pulmonic stenosis."
},

// Question 351
{
    "question": "This patient is likely to have:",
    "options": [
        "A. Acute severe AR",
        "B. Mild AR",
        "C. Mitral stenosis",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_51q.JPG" ,
    "answer": "A. Acute severe AR",
    "explanation": "This late diastolic frame shows diastolic mitral regurgitation. There is also aortic regurgitation by color. The mitral valve is closed prematurely. This combination of findings is consistent with acute severe aortic regurgitation. A smaller AR jet in late diastole was because of late diastolic equilibration of aortic and left ventricular pressures. Diastolic MR results from the receipt of AR volume in an LV with high operating end diastolic stiffness."
},

// Question 352
{
    "question": "This transmittal flow is obtained from the esophageal transducer location from a patient with Staphylococcus aureus bacteremia and acute hemodynamic decompensation. Patient is in sinus rhythm. The most likely cause of his decompensation is:",
    "options": [
        "A. Acute MR",
        "B. Acute AR",
        "C. Rupture of the ventricular septum",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_52q.JPG",
    "answer": "B. Acute AR",
    "explanation": "The Doppler flow suggests premature closure of the mitral valve with lack of A-wave despite being in sinus rhythm. This is pathognomonic of acute AR causing rapidly rising LV diastolic pressure due to failure to accommodate a large acute volume overload. In acute AR, the left atrium would still be contracting but would be unable to eject against an acute increase in afterload. Pulmonary vein flow profile in this patient would show a prominent AR wave and the tricuspid inflow would still have the A-wave. Acute MR and VSD would not eliminate the A-wave unless the patient had a recent episode of atrial fibrillation and the atrium is stunned."
},

// Question 353
{
    "question": "The cause of this patient's multiple bilateral lung abscesses is:",
    "options": [
        "A. Vegetation in superior vena cava (SVC)",
        "B. Tricuspid endocarditis",
        "C. Probable immune deficiency; no vegetation seen on image shown",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_53q.JPG",
    "answer": "A. Vegetation in superior vena cava",
    "explanation": "The image shows large vegetation protruding into the right atrium. This was catheter related causing Staphylococcus bacteremia. Imaging the whole length of the SVC, right atrial endocardium, and the Eustachian valve is extremely important in patients with central catheters or PICC lines with fever or suspected bacteremia."
},

// Question 354
{
    "question": "The cause of heart failure in this 30-year-old man is likely to be:",
    "options": [
        "A. Noncompaction of the left ventricle (LV)",
        "B. Hemochromatosis",
        "C. Cardiac amyloid",
        "D. Hypertrophic cardiomyopathy"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_54q.JPG",
    "answer": "A. Noncompaction of the left ventricle",
    "explanation": "The inferolateral wall of the LV in this patient is heavily trabeculated; noncompacted (trabeculated) to compacted wall thickness ratio is more than 2:1. This is highly indicative of noncompaction of LV myocardium, which is a developmental disorder causing congestive heart failure. In the other three conditions, the LV myocardium would be thicker, either due to infiltration or increased myocardial mass."
},

// Question 355
{
    "question": "The structure indicated by the arrow is:",
    "options": [
        "A. Inferior vena cava (IVC)–RA junction",
        "B. Superior vena cava",
        "C. Anomalously draining right upper pulmonary vein",
        "D. Atrial septal defect"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_55q.JPG",
    "answer": "A. Inferior vena cava–right atrium junction",
    "explanation": "Part of proximal IVC is seen with entry of saline contrast, in the longitudinal plane from a TEE. With this orientation, caudal structures are seen on the left and cephalad structures are seen on the right. This patient has a prominent Eustachian valve, and in a patient with a prominent Eustachian valve, in a low esophageal view, where left atrium is not seen, this junction may be mistaken for an atrial septal defect. This patient was referred from an outside facility with that mistaken diagnosis from a TEE."
},

// Question 356
{
    "question": "The MR flow rate in this patient (PISA radius of 0.9 cm, aliasing velocity of 38 cm/s) is approximately:",
    "options": [
        "A. 200 cc/s",
        "B. 200 cc/min",
        "C. 100 cc/min",
        "D. 100 cc/s"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_56q.JPG" ,
    "answer": "A. 200 cc/s",
    "explanation": "The regurgitant flow rate equals 2πr² × Nyquist limit. Here, the proximal isovelocity surface area (PISA) radius is 0.9 cm and the Nyquist limit is 38 cm/s. Regurgitant flow rate = 6.28 × 0.9 × 0.9 × 38 = 200 cc/s."
},

// Question 357
{
    "question": "The patient shown is likely to have:",
    "options": [
        "A. An early diastolic murmur",
        "B. Late peaking systolic ejection murmur with absence of A2 component of S2",
        "C. Late peaking systolic murmur increased by Valsalva's maneuver and normal A2",
        "D. Middiastolic murmur"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_57q.JPG",
    "answer": "C. Late peaking systolic murmur increased by Valsalva's maneuver and normal A2",
    "explanation": "This patient clearly has systolic anterior motion of the anterior mitral leaflet causing LVOT obstruction. As the SAM increases in late systole, the gradient velocity and turbulence are more in late systole, causing a late peaking late systolic murmur. SAM is increased by LV volume reduction and vasodilatation. A2 is preserved in these patients in contrast to patients with severe aortic stenosis, who may also have late peaking systolic murmur."
},

// Question 358
{
    "question": "The most likely diagnosis in this patient is:",
    "options": [
        "A. HOCM",
        "B. Severe aortic stenosis",
        "C. Mitral valve prolapse",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_58q.JPG",
    "answer": "A. HOCM",
    "explanation": "This patient has HOCM with dynamic LVOT obstruction caused by SAM, which causes a late peaking systolic gradient, increased by Valsalva’s maneuver and amyl nitrate inhalation. The gradient would also be increased by positive inotropic agents and vasodilators and decreased by an increase in afterload, with vasoconstrictors or handgrip. In addition to HOCM, SAM can occur in volume-depleted states with small LV cavity and also after surgical mitral valve repair in patients with long anterior and posterior leaflets, especially if a small annuloplasty ring is used."
},

// Question 359
{
    "question": "This patient is likely to have:",
    "options": [
        "A. Apical HOCM",
        "B. Hypertensive heart disease",
        "C. Endomyocardial fibrosis",
        "D. None of the above"
    ],  "questionImage": "https://alhadi415.github.io/top600/images/18_59q.JPG" ,
    "answer": "A. Apical HOCM",
    "explanation": "This patient has disproportionately thickened LV apical myocardium typical of apical HOCM. This results in a spade-shaped LV cavity in diastole. These patients also have giant T-wave inversions in their chest leads. In hypertensive heart disease, LV hypotension is more uniformly distributed. Endomyocardial fibrosis causes apical obliteration due to endocardial thickening rather than myocardial thickening."
},

// Question 360
{
    "question": "The appearance of the atrial septum in this patient is due to:",
    "options": [
        "A. ASD repair with a pericardial patch",
        "B. ASD closure device",
        "C. PFO closure device",
        "D. None of the above"
    ],"questionImage": "https://alhadi415.github.io/top600/images/18_60q.JPG" ,
    "answer": "C. PFO closure device",
    "explanation": "The image shows two parallel disks sandwiching the upper atrial septum. The right atrial disk is larger than the left atrial disk. This is suggestive of an Amplatzer PFO closure device. In an ASD closure device, the left atrial disk is larger than the right atrial disk. Patch repair of the septum will not show the triple-layer morphology as seen here."
}
]