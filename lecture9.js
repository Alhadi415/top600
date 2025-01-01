const questions =[
    // Question 161
    {
        "question": "Diagnostic sensitivity of stress echocardiography is higher with:",
        "options": [
            "A. One-vessel disease",
            "B. Two-vessel disease",
            "C. Three-vessel disease",
            "D. Sensitivity is not affected by number of vessels involved"
        ],
        "answer": "C. Three-vessel disease",
        "explanation": "It is about 50% for one-vessel disease and 80% for three-vessel disease."
    },

    // Question 162
    {
        "question": "False-positive rate for stress echocardiography is high for which group of patients:",
        "options": [
            "A. Low probability of coronary artery disease (CAD)",
            "B. Intermediate probability of CAD",
            "C. High probability of CAD",
            "D. Independent of CAD"
        ],
        "answer": "A. Low probability of coronary artery disease (CAD)",
        "explanation": "On the basis of Baye’s theorem, the diagnostic accuracy is highest for intermediate probability, and in patients with extremely low probability most of the tests will be false positive, yielding a low positive predictive value. Positive predictive value (PPV) is the proportion of patients with positive tests who truly have disease. In other words, PPV = TP/(TP + FP)."
    },

    // Question 163
    {
        "question": "Negative predictive value of stress echo is lowest in this group of patients:",
        "options": [
            "A. Low probability of CAD",
            "B. Intermediate probability of CAD",
            "C. High probability of CAD",
            "D. Independent of CAD"
        ],
        "answer": "C. High probability of CAD",
        "explanation": "Testing this group of patients is likely to yield a high proportion of patients with a false-negative test, hence lowering the negative predictive value (NPV). In other words, NPV = TN/TN + FN."
    },

    // Question 164
    {
        "question": "False-positive wall motion abnormalities are most commonly seen in which of the following myocardial segments?",
        "options": [
            "A. Posterior basal wall",
            "B. Anterior septum",
            "C. Lateral wall",
            "D. Apex"
        ],
        "answer": "A. Posterior basal wall",
        "explanation": "Wall motion abnormality in the posterior basal wall is most difficult to analyze due to a range of normalcy, proximity to valvular plane, and the apical displacement of the wall during systole, which results in imaging of different parts of the inferior wall during systole and diastole in the short axis view. False positivity during stress echocardiography is in the range of 40–50% for this wall."
    },

    // Question 165
    {
        "question": "The most common normal response of left ventricular (LV) end systolic size during exercise is:",
        "options": [
            "A. Reduction",
            "B. Increase",
            "C. Variable response",
            "D. No change"
        ],
        "answer": "A. Reduction",
        "explanation": "Reduction due to a combination of reduced systemic vascular resistance (SVR) and increased LV contractility. In some women, left ventricular end systolic volume may not diminish with stress and this is normal."
    },

    // Question 166
    {
        "question": "An increase in LV end systolic volume during stress may occur in all of the situations except:",
        "options": [
            "A. Multivessel CAD",
            "B. Left main CAD",
            "C. Hypertensive blood pressure response",
            "D. Left ventricular hypertrophy"
        ],
        "answer": "D. Left ventricular hypertrophy",
        "explanation": "This is the equivalent of transient ischemic dilatation of the LV on stress nuclear perfusion imaging."
    },

    // Question 167
    {
        "question": "A 53-year-old patient is undergoing dobutamine stress echocardiography (DSE). At 20 μg dose, the blood pressure drops from 140/80 mmHg to 80/50 mmHg associated with severe nausea, and the heart rate dropped from 110/min to 60/min. The most likely cause of this response is:",
        "options": [
            "A. Left ventricular cavity obliteration causing a vagal response",
            "B. Severe ischemic response due to multivessel CAD",
            "C. 2:1 A–V block produced by ischemia in right coronary artery territory",
            "D. None of the above"
        ],
        "answer": "A. Left ventricular cavity obliteration causing a vagal response",
        "explanation": "This is typical of a vasovagal response that is preceded by a hyperdynamic response, which triggers this. This may be exaggerated by volume depletion and may potentially be prevented by volume loading. When a hyperdynamic response with cavity obliteration is seen, instead of increasing the dobutamine dose, atropine should be administered to increase the heart rate. This will help to avert a vagal response. Drop in SVR is universal during DSE and may not be fully compensated by cardiac output increase. Systolic anterior movement of anterior mitral leaflet can occur during DSE, especially in patients with LV hypotension who develop a hyperdynamic response, but LV outflow tract obstruction is rarely responsible for hypotension. Hypotension in such patients, when it occurs, is generally due to a vagal response produced by the hyperdynamic LV stimulating the vagal C type of fibers in the LV wall."
    },

    // Question 168
    {
        "question": "What proportion of normal patients undergoing DSE may have a drop in their blood pressure:",
        "options": [
            "A. Zero",
            "B. 20%",
            "C. 50%",
            "D. 89%"
        ],
        "answer": "B. 20%",
        "explanation": "Drop in blood pressure during DSE does not have the same clinical significance as in a regular exercise stress test. This is because normal cardiac output increase during DSE is only 50–80%, which is far less than exercise. Dobutamine causes peripheral vasodilatation."
    },

    // Question 169
    {
        "question": "All of the following factors affect pulmonary vein A-wave amplitude except:",
        "options": [
            "A. LV end diastolic stiffness",
            "B. Left atrial function",
            "C. Pulmonary vein diameter",
            "D. Heart rate",
            "E. Pulmonary artery pressure"
        ],
        "answer": "E. Pulmonary artery pressure",
        "explanation": "The pulmonary vein A-wave amplitude is increased in the presence of a stiff LV and reduced in left atrial mechanical failure. The pulmonary A-wave may disappear with heart rates in excess of 100/min, where flow may be entirely antegrade, and atrial contraction may produce a transient deceleration pulmonary flow without reversal. As velocity depends upon flow volume and cross-sectional area, a dilated pulmonary vein is likely to reduce the A-wave velocity, and a collapsed vein in a dry patient can result in a giant A wave."
    },

    // Question 170
    {
        "question": "The pulmonary vein S-wave may be less prominent than the D-wave in the following situations except:",
        "options": [
            "A. Young children",
            "B. Moderate to severe mitral regurgitation",
            "C. Atrial fibrillation",
            "D. Elevated left atrial (LA) pressure",
            "E. Abnormal LV relaxation with normal left atrial (LA) pressure"
        ],
        "answer": "E. Abnormal LV relaxation with normal left atrial (LA) pressure",
        "explanation": "Young children have very efficient LV relaxation properties, resulting in rapid early filling (mitral E wave) paralleled by an increase in D-wave that might have rapid deceleration as well. As S1 is due to atrial relaxation, atrial fibrillation results in reduced S-wave amplitude. Systolic left atrial filling from mitral regurgitation will impede pulmonary vein flow in systole. High LA pressure renders the LA less compliant due to rightward shift of its pressure–volume curve and hence will impede atrial systolic filling, as LA is a closed chamber receiving only pulmonary venous flow during systole. Abnormal LV relaxation reduces E- and D-wave amplitudes, resulting in an increase in S-wave amplitude in the absence of elevated LA pressure."
    },

    // Question 171
    {
        "question": "Normal pulmonary vein A-wave duration compared with mitral A-wave duration is:",
        "options": [
            "A. Less",
            "B. More",
            "C. Same",
            "D. Variable"
        ],
        "answer": "A. Less",
        "explanation": "Increased pulmonary A-wave duration compared with mitral A-wave duration indicates high LV end diastolic pressure. Delta duration of more than 30 ms is very suggestive of high LV end diastolic pressure."
    },

    // Question 172
    {
        "question": "Normal pulmonary vein D-wave deceleration in an adult is:",
        "options": [
            "A. 50–100 ms",
            "B. 100–170 ms",
            "C. 170–260 ms",
            "D. Highly variable"
        ],
        "answer": "C. 170–260 ms",
        "explanation": "Reduced D-wave deceleration time indicates high LA pressure very similar to mitral E-wave deceleration time."
    },

    // Question 173
    {
        "question": "Increased pulmonary vein D-wave deceleration time may be encountered in:",
        "options": [
            "A. Mitral stenosis",
            "B. Mitral regurgitation",
            "C. High LA pressure",
            "D. Pulmonary valve stenosis"
        ],
        "answer": "A. Mitral stenosis",
        "explanation": "The D-wave deceleration time parallels mitral E-wave deceleration time, and the slope is flatter in mitral stenosis. It may also be prolonged in patients with prosthetic mitral valves and abnormal LV relaxation. The deceleration time is reduced with high left atrial pressure. Pulmonary valve stenosis has no known effect on this slope."
    },

    // Question 174
    {
        "question": "Normal mitral E-wave propagation velocity by color M mode inside the LV is:",
        "options": [
            "A. 10–30 cm/s",
            "B. 30–50 cm/s",
            "C. Greater than 50 cm/s",
            "D. Greater than 500 cm/s"
        ],
        "answer": "C. Greater than 50 cm/s",
        "explanation": "Normal mitral E-wave propagation velocity by color M mode inside the LV is greater than 50 cm/s."
    },

    // Question 175
    {
        "question": "A reduced mitral E-wave propagation velocity indicates:",
        "options": [
            "A. High LA pressure",
            "B. Increased tau",
            "C. Reduced tau",
            "D. Increased modulus LV chamber stiffness"
        ],
        "answer": "B. Increased tau",
        "explanation": "Slower propagation indicates abnormal LV relaxation, and this is reflected by increased tau by invasive measurement. Modulus of chamber stiffness is a measure of LV diastolic stiffness, which comes into play in late diastole."
    },

    // Question 176
    {
        "question": "A reduced A-wave transit time to the LV outflow tract is indicative of:",
        "options": [
            "A. Low negative dp/dt",
            "B. Increased tau",
            "C. Reduced tau",
            "D. Increased modulus of LV chamber stiffness"
        ],
        "answer": "D. Increased modulus of LV chamber stiffness",
        "explanation": "The A-wave propagation is an end diastolic phenomenon and its propagation velocity is increased with increased LV end diastolic stiffness. Increased propagation velocity results in a shorter transit time. The modulus of chamber stiffness is a measure of operative LV stiffness."
    },

    // Question 177
    {
        "question": "Rate of acceleration of the early portion of the aortic regurgitation (AR) signal is determined by:",
        "options": [
            "A. LV negative dp/dt",
            "B. LV positive dp/dt",
            "C. LV end diastolic pressure",
            "D. Aortic end diastolic pressure"
        ],
        "answer": "A. LV negative dp/dt",
        "explanation": "Assuming a constant aortic pressure during this short time, rate of acceleration is principally determined by LV pressure decay after aortic valve closure during the LV isovolumic relaxation period. For example, at the 1 m/s point the aortic-LV pressure gradient is 4 mmHg and at 2.5 m/s it is 25 mmHg. Assuming a constant aortic pressure, the drop in LV pressure between these two points is 25 - 4 = 21 mmHg. The rate of LV pressure drop would be 21/time taken for AR signal to increase from 1 m/s to 2.5 m/s. For example, if this time interval is 20 ms (0.02 s) the average negative LV dp/dt would be 21/0.02 = 1050 mmHg/s."
    },

    // Question 178
    {
        "question": "Rapidly decelerating terminal portion of the AR signal is mainly influenced by:",
        "options": [
            "A. LV negative dp/dt",
            "B. LV positive dp/dt",
            "C. LV end diastolic pressure",
            "D. Aortic end diastolic pressure"
        ],
        "answer": "B. LV positive dp/dt",
        "explanation": "This rapidly decelerating terminal portion of AR occurs during the isovolumic contraction period and the LV positive dp/dt may be calculated with similar assumptions as for the LV negative dp/dt between 2.5 m/s and 1 m/s points of the AR signal."
    },

    // Question 179
    {
        "question": "A patient has mild mitral regurgitation and the time taken for mitral regurgitation velocity to drop from 3 m/s velocity to 1 m/s on continuous wave Doppler examination was 40 ms. The average rate of LV pressure decay in this patient is:",
        "options": [
            "A. 3600 mmHg/s",
            "B. 1280 mm/s",
            "C. 800 mm/s",
            "D. 400 mm/s"
        ],
        "answer": "C. 800 mm/s",
        "explanation": "The LV negative dp/dt = 36 - 4/0.04 = 800 mmHg/s. This again assumes a constant LA pressure during this portion of LV isovolumic contraction time. This non-invasive measure has been validated against invasively derived negative dp/dt by high-fidelity LV pressure recordings."
    },

    // Question 180
    {
        "question": "By tissue velocity imaging, the mitral annular Sm wave is produced by:",
        "options": [
            "A. Annular descent during systole",
            "B. Annular ascent during systole",
            "C. Atrial contraction",
            "D. LV relaxation"
        ],
        "answer": "A. Annular descent during systole",
        "explanation": "Annular descent produced by LV long axis shortening causes a positive systolic deflection recorded from the apical view."
    }
]
