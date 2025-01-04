const questions = [
    // Question 401
    {
        "question": "This patient is likely to have:",
        "options": [
            "A. Mitral valve prolapse",
            "B. Elevated left ventricular end-diastolic pressure",
            "C. Hypertrophic obstructive cardiomyopathy",
            "D. Severe aortic regurgitation"
        ],
        "answer": "C. Hypertrophic obstructive cardiomyopathy",
        "explanation": "Note the systolic anterior motion (SAM) of the anterior mitral leaflet starting in midsystole. SAM narrows the LV outflow tract in a dynamic manner producing LV outflow obstruction and gradient. Elevated left ventricular end-diastolic pressure is not an unreasonable response as deceleration of mitral A-wave is slow, although not a classical B hump. Mitral valve prolapse results in late systolic sagging of mitral valve not anterior motion. Severe AR with a posteriorly directed jet on to anterior mitral leaflet results in diastolic fluttering.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_10.JPG"
    },

    // Question 402
    {
        "question": "The mitral valve motion in this patient suggests:",
        "options": [
            "A. Atrial fibrillation",
            "B. Elevated left ventricular end-diastolic pressure",
            "C. Mitral valve prolapse",
            "D. Severe aortic regurgitation"
        ],
        "answer": "B. Elevated left ventricular end-diastolic pressure",
        "explanation": "Note the prominent B hump after the A point of mitral valve motion. In atrial fibrillation, there is loss of A-wave. Also see explanation for question 401.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_1q.JPG"
    },

    // Question 403
    {
        "question": "The aortic valve m-mode is suggestive of:",
        "options": [
            "A. Aortic stenosis",
            "B. Hypertrophic obstructive cardiomyopathy",
            "C. Congestive heart failure",
            "D. Hypertension"
        ],
        "answer": "C. Congestive heart failure",
        "explanation": "This is typical of pulsus alternans, which occurs in severe systolic heart failure. Note that there is reduced opening and duration of opening of the aortic valve with every other beat, and this results from reduced stroke volume with every other beat. Also note that in this instance, pulsus alternans was triggered by a premature ventricular complex. In aortic stenosis, there is leaflet thickening and reduced opening of the aortic valve. Hypertension does not produce any characteristic changes in aortic valve motion.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_2q.JPG"
    },

    // Question 404
    {
        "question": "Flow in abdominal aorta in this patient is indicative of:",
        "options": [
            "A. Systolic heart failure",
            "B. Severe coarctation of aorta",
            "C. Severe aortic regurgitation",
            "D. Large patent ductus arteriosis"
        ],
        "answer": "A. Systolic heart failure",
        "explanation": "This is consistent with pulsus alternans. Please see explanation for 403. In severe aortic coarctation, collateral-dependent flow will produce continuous flow without pulsatility. In severe aortic regurgitation and large PDA, run off of flow from aorta into LV and pulmonary artery, respectively, during diastole produces diastolic retrograde flow.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_3q.JPG"
    },

    // Question 405
    {
        "question": "The continuous wave Doppler signal is suggestive of:",
        "options": [
            "A. Severe mixed aortic valve disease",
            "B. Mixed pulmonary valve disease",
            "C. Mixed mitral valve disease",
            "D. Mitral and aortic regurgitation"
        ],
        "answer": "A. Severe mixed aortic valve disease",
        "explanation": "The systolic signal starts several milliseconds after the onset of QRS complex suggestive of origin at aortic or pulmonary valve, that is, flow during the ejection phase. Flow at atrioventricular valves due to regurgitation starts earlier during isovolumic contraction period and extends into isovolumic relaxation period too and hence will overlap aortic regurgitation signal, which occupies both these isovolumic phases as well. The systolic and diastolic signals are continuous with each other suggesting origin at the same valve. Mid-peaking systolic signal of >4 m/s is suggestive of severe aortic stenosis. High diastolic velocity is also not compatible with mitral stenosis. Severe pulmonary stenosis is generally incompatible with severe pulmonary hypertension – hence, severe PS and PR are not possible as high velocity PR signal occurs only with severe pulmonary hypertension.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_4q.JPG"
    },

    // Question 406
    {
        "question": "This patient is likely to have:",
        "options": [
            "A. Mild aortic regurgitation",
            "B. Mitral stenosis with high LA pressure",
            "C. Acute severe aortic regurgitation",
            "D. Severe mitral regurgitation"
        ],
        "answer": "B. Mitral stenosis with high LA pressure",
        "explanation": "The diastolic signal (1) is that of mitral stenosis and this patient is in sinus rhythm as there is an A-wave. The peak diastolic gradient is about 30 mmHg and mean gradient is 18 mmHg at a heart rate of 76 bpm, and this is indicative of severe mitral stenosis. The arrow points to IVRT, which was 30 ms indicating high LA pressure or large left atrial 'V' wave. (2) indicates partial MR velocity as it is contiguous with ending of MS signal and (3) indicates LV outflow and the gap between that and mitral inflow, which is indicated by the arrow in IVRT.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_5q.JPG"
    },

    // Question 407
    {
        "question": "This patient has mitral stenosis with:",
        "options": [
            "A. High LA pressure",
            "B. Hyperdynamic LV",
            "C. Severe LV systolic dysfunction",
            "D. Mitral regurgitation"
        ],
        "answer": "B. Hyperdynamic LV",
        "explanation": "Systolic signal denoted by '1' is not MR, but due to LV cavity obliteration as it is late peaking and hence indicates a hyperdynamic LV. It also occurs during ejection phase unlike MR signal. IVRT indicated by the arrow is 110 ms (time between small marks is 200 ms and two vertical lines is 1 s) and this indicates normal LA pressure. IVRT is the Doppler equivalent of auscultatory A2–OS interval, that is, interval between aortic component of second heart sound and opening snap in mitral stenosis. Short A2–OS interval indicates severe mitral stenosis.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_6q.JPG"
    },

    // Question 408
    {
        "question": "The continuous wave Doppler signal is suggestive of:",
        "options": [
            "A. Mild mitral stenosis",
            "B. Severe mitral stenosis",
            "C. Mild aortic regurgitation",
            "D. Severe aortic regurgitation"
        ],
        "answer": "D. Severe aortic regurgitation",
        "explanation": "The velocity is too high for mitral stenosis as such a high transmitral gradient is not compatible with life. Rapid deceleration of AR signal indicates rapidly diminishing aortic to LV diastolic gradient as diastole progresses. This may occur either due to rapidly dropping aortic pressure or increasing LV diastolic pressure. These occur in severe or acute severe AR, respectively. In severe mitral stenosis, the signal decelerates slowly.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_7q.JPG"
    },

    // Question 409
    {
        "question": "The continuous wave Doppler signal is suggestive of:",
        "options": [
            "A. Severe aortic regurgitation",
            "B. Mitral stenosis",
            "C. Pulmonary hypertension",
            "D. Severe pulmonary regurgitation"
        ],
        "answer": "D. Severe pulmonary regurgitation",
        "explanation": "Signal #2 is early diastolic following an ejection flow #1 suggestive of origin at a semilunar valve. The arrow points to forward flow across the semilunar valve with atrial systole and this can occur only at the pulmonary valve with normal PA pressure. If the PA pressure is high, atrial systole cannot generate a forward flow even when there is late diastolic equilibration of pressures between PA, RV, and RA. For the same reason, you do not get forward flow across aortic valve in severe AR as aortic diastolic pressure is too high, and high LV diastolic pressure may cause premature closure of the mitral valve. The diastolic flow is of low velocity and ends in middiastole indicating severe PR with normal PA pressure.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_8q.JPG"
    },

    // Question 410
    {
        "question": "This patient has:",
        "options": [
            "A. Severe mitral regurgitation",
            "B. Severe aortic regurgitation",
            "C. Acute severe mitral regurgitation",
            "D. Severe tricuspid regurgitation"
        ],
        "answer": "C. Acute severe mitral regurgitation",
        "explanation": "This is a classic 'V' wave cut off sign of mitral regurgitation with rapid deceleration of the MR signal due to a large left atrial 'V' wave resulting in rapid reduction in the pressure gradient between LV and LA in late systole. This occurs typically in acute severe MR as in papillary muscle rupture or flail mitral valve. It is not an aortic stenosis signal as it starts with QRS and continues into mitral inflow indicating origin at mitral valve. VSD flow does not have diastolic flow in the opposite direction.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_9q.JPG"
    },

    // Question 411
    {
        "question": "This patient has:",
        "options": [
            "A. Hypertrophic obstructive cardiomyopathy",
            "B. Mitral valve prolapse",
            "C. Severe valvular aortic stenosis",
            "D. Intraventricular obstruction"
        ],
        "answer": "A. Hypertrophic obstructive cardiomyopathy",
        "explanation": "This is a typical dagger-shaped CW signal which typically occurs in hypertrophic obstructive cardiomyopathy (HOCM). This is because of the fact that the obstruction in HOCM is dynamic due to systolic anterior motion (SAM) of the mitral valve and the obstruction is maximum in late systole at the height of SAM-septal contact. This results in the highest gradient in late systole. In mitral valve prolapse, although MR is more in late systole, the LV–LA pressure gradient is highest in midsystole. In severe valvular AS, the signal could be late peaking, but there would be a gap between mitral flow and valvular AS signal (the gap due to LV isovolumic contraction period). In intraventricular obstructions as in HOCM, the signal of dynamic LVOT obstruction is continuous with mitral inflow.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_11q.JPG"
    },

    // Question 412
    {
        "question": "This CW signal in a 22-year-old woman with a history of heart surgery during infancy is indicative of:",
        "options": [
            "A. Severe aortic stenosis",
            "B. Severe pulmonary stenosis",
            "C. Severe pulmonary stenosis and regurgitation",
            "D. Severe pulmonary hypertension"
        ],
        "answer": "C. Severe pulmonary stenosis and regurgitation",
        "explanation": "This patient in fact had a bovine jugular nonvalved conduit between RV and PA for pulmonary attesia in a foreign country during infancy and presented with shortness of breath and edema. As the conduit has become too small for her body size and flow requirements, it was functionally stenotic resulting in a very high systolic gradient. The longer arrow points to the PR signal. The PR is severe and also it rapidly decelerates with equilibration of pressures between PA and RV. Shorter arrow indicates forward flow with right atrial systole, this indicates normal PA pressure.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_12q.JPG"
    },

    // Question 413
    {
        "question": "This patient has:",
        "options": [
            "A. Severe pulmonary stenosis",
            "B. Normal pulmonary artery pressure",
            "C. Both are true",
            "D. Neither is true"
        ],
        "answer": "C. Both are true",
        "explanation": "This patient severe PS, the peak systolic gradient is closer to 90 mmHg. It is not an AS or MR signal as there is forward flow with atrial systole (arrow) and this also indicates normal PA pressure. Low PR velocity, seen here, also confirms normal PA diastolic pressure.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_13q.JPG"
    },

    // Question 414
    {
        "question": "The signal indicated by the arrow is produced by:",
        "options": [
            "A. Pulmonary valvular stenosis",
            "B. Dynamic subvalvular PS on top of valvular PS",
            "C. Mitral regurgitation",
            "D. VSD"
        ],
        "answer": "B. Dynamic subvalvular PS on top of valvular PS",
        "explanation": "The late peaking signal was due to muscular dynamic subvalvular PS on top of valvular PS shown by the signal, which is being measured on the first beat. In such a patient, one has to volume-load and pretreat the patient with a beta blocker before balloon valvuloplasty of the pulmonary valve to prevent a 'suicide right ventricle.' The latter may occur due to an excessively hyperdynamic RV following relief of RV afterload by balloon valvuloplasty.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_14q.JPG"
    },

    // Question 415
    {
        "question": "This signal was obtained from:",
        "options": [
            "A. Apical window",
            "B. Parasternal window",
            "C. Suprasternal window",
            "D. Subcostal window"
        ],
        "answer": "C. Suprasternal window",
        "explanation": "This is a classic flow because of severe coarctation of the aorta with systolic and diastolic components. The signals are negative or flow is going away from the transducer. This signal is obtained from the suprasternal window.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_15q.JPG"
    },

    // Question 416
    {
        "question": "This patient has:",
        "options": [
            "A. Pulmonary artery branch stenosis",
            "B. Pulmonary regurgitation",
            "C. Patent ductus arteriosus",
            "D. None of the above"
        ],
        "answer": "C. Patent ductus arteriosus",
        "explanation": "This is a typical PDA flow obtained from parastenal short axis basal view with clockwise rotation of the probe to show PA and branches. #1 indicates dilated main PA and #2 arch/descending aortic junction from which flow is occurring into PA. Note that this is a diastolic frame (see marker on ECG) and flow is into MPA; hence not left pulmonary artery branch stenosis.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_16q.JPG"
    },

    // Question 417
    {
        "question": "This CW signal is indicative of:",
        "options": [
            "A. Severe aortic regurgitation",
            "B. Patent ductus arteriosus",
            "C. Coarctation of the aorta",
            "D. ASD flow"
        ],
        "answer": "B. Patent ductus arteriosus",
        "explanation": "This is a typical PDA flow from parasternal view with flow from aorta to PA. It is continuous. Note this is a transthoracic image and it is difficult to obtain coarctation flow from below on TTE to yield a positive signal. This may be possible on TEE. AR signal will be diastolic only.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_17q.JPG"
    },

    // Question 418
    {
        "question": "The flow obtained on TEE from descending thoracic aorta is indicative of:",
        "options": [
            "A. Aortic coactation",
            "B. PDA",
            "C. Normal flow in intercostal artery",
            "D. Severe aortic regurgitation"
        ],
        "answer": "A. Aortic coactation",
        "explanation": "Note that the flow is into the aortic lumen throughout the cardiac cycle indicative of retrograde flow in the intercostal artery. This occurs in collateral-dependent distal perfusion as it occurs in severe aortic coarctation. This patient had interrupted aorta. In severe AR, holodiastolic retrograde flow occurs in the aortic lumen.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_18q.JPG"
    },

    // Question 419
    {
        "question": "Flow from this subcostal view is indicative of:",
        "options": [
            "A. Large ASD",
            "B. Severe mitral regurgitation",
            "C. Mitral stenosis",
            "D. Tricuspid stenosis"
        ],
        "answer": "B. Severe mitral regurgitation",
        "explanation": "This flow is across the foramen ovale due to excessive stretching produced by high atrial pressures. The flow is from LA to RA and note that the highest velocity is in late systole indicative of a large left atrial 'V' wave, which occurs in severe MR. In large ASD, flow will be nonrestrictive across the defect resulting in very low or transient pressure gradients.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_19q.JPG"
    },

    // Question 420
    {
        "question": "This was a recording of flow across the pulmonary valve using pulsed wave Doppler in a patient with severe dyspnea. Likely diagnosis is:",
        "options": [
            "A. Pulmonary hypertension",
            "B. Pulmonary stenosis",
            "C. Pulmonary regurgitation",
            "D. Large atrial septal defect"
        ],
        "answer": "A. Pulmonary hypertension",
        "explanation": "This is a typical 'flying W sign' associated with pulmonary hypertension. Midsystolic deceleration occurs because of rapidly returning reflected pressure waves secondary to a stiffer PA that occurs when it operates under high pressure. There is no PR signal and no CW signal to assess if there is a gradient across the pulmonary valve. The velocity of the signal is under 1 m/s indicating normal amount of pulmonary artery flow and this inconsistent with a large ASD. Large ASD is associated with increased pulmonary artery flow.",
        "questionImage": "https://alhadi415.github.io/top600/images/21_20q.JPG"
    }
];