const questions = [
    // Question 421
    {
        "question": "This TEE image is diagnostic of:",
        "options": [
            "A. Rheumatic mitral stenosis",
            "B. Mitral regurgitation",
            "C. Prosthetic valve stenosis",
            "D. Calcific mitral stenosis"
        ],
        "answer": "A. Rheumatic mitral stenosis",
        "explanation": "Rheumatic mitral stenosis. The chamber on the top is the left atrium and note the doming of anterior mitral leaflet suggestive of rheumatic mitral stenosis. Note that the PISA is on the left atrial side. This is a native valve without prosthetic valve sewing ring or struts. In degenerative or calcific mitral stenosis, the annulus is heavily calcified and calcium extends centripetally into the valve leaflets without any commissural fusion. Commissural fusion with pliable leaflets are prerequisites for doming.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_1q.JPG"
    },

    // Question 422
    {
        "question": "This transthoracic image is suggestive of:",
        "options": [
            "A. Mitral stenosis",
            "B. Mild mitral regurgitation",
            "C. Severe mitral regurgitation due to flail posterior mitral leaflet",
            "D. Severe mitral regurgitation due to dilated mitral annulus"
        ],
        "answer": "C. Severe mitral regurgitation due to flail posterior mitral leaflet",
        "explanation": "Severe mitral regurgitation due to flail posterior mitral leaflet. The PISA is on the LV side with closed mitral leaflets in systole suggestive of MR rather than MS. The radius of the PISA is 1.3 cm at a Nyquist limit of 48 cm/s, resulting in a peak instantaneous regurgitant flow rate of 500 cc/s, which correlates with severe MR (regurgitant flow rate >200 cc/s = severe MR). MR jet in dilated annulus would be central. A medial wall-hugging jet shown here is consistent with flail posterior mitral leaflet.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_2q.JPG"
    },

    // Question 423
    {
        "question": "The pulmonary vein flow shown here is suggestive of:",
        "options": [
            "A. Severe MR",
            "B. Severe MS",
            "C. Normal left atrial pressure",
            "D. High left atrial pressure"
        ],
        "answer": "D. High left atrial pressure",
        "explanation": "High left atrial pressure. A larger pulmonary vein D-wave with rapid deceleration suggests high LA pressure. D-wave deceleration time of <170 ms is indicative of high LA pressure. This could be significant MR, but systolic flow reversal in the pulmonary vein is a definitive sign of severe MR with large V-wave. In MS, D-wave decelerates slowly paralleling the E-wave deceleration slope.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_3q.JPG"
    },

    // Question 424
    {
        "question": "The mitral flow profile and mitral annular velocity in this patient are consistent with:",
        "options": [
            "A. Symptomatic severe MR due to flail mitral valve in a 24-year-old with normal LV size and function",
            "B. Class III symptoms in a patient with dilated LV and EF of 30%",
            "C. Normal LV function with mild MR and class I symptoms",
            "D. Acute severe AR with LVEDP of 55 mmHg"
        ],
        "answer": "B. Class III symptoms in a patient with dilated LV and EF of 30%",
        "explanation": "Class III symptoms in a patient with dilated LV and EF of 30%. Mitral E/A ratio of 2 and E/Em ratio of 22 are indicative of high LA pressure and likely of class III symptoms. Note that the mitral annular Em velocity is <5 cm/s and S-wave velocity is 3.5 cm/s suggestive of both LV diastolic and systolic dysfunction and these are more consistent with an EF of 30% and functional MR (note MR signal on PW). In acute severe AR with LVEDP of 55 mmHg, there would be premature closure of the mitral valve and absence of mitral A-wave.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_4q.JPG"
    },

    // Question 425
    {
        "question": "The parasternal short axis view shown here is consistent with:",
        "options": [
            "A. Pulmonary hypertension",
            "B. Flail mitral valve",
            "C. Dilated cardiomyopathy",
            "D. None of the above"
        ],
        "answer": "A. Pulmonary hypertension",
        "explanation": "Pulmonary hypertension. Note that this is an endsystolic frame (see the ECG marker). The septum is flattened and LV is D-shaped with a large hypertrophied RV. These are indicative of pulmonary hypertension.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_5q.JPG"
    },

    // Question 426
    {
        "question": "This patient is likely to have:",
        "options": [
            "A. Severe LV dysfunction with low cardiac output state",
            "B. Aortic regurgitation",
            "C. HOCM",
            "D. None of the above"
        ],
        "answer": "A. Severe LV dysfunction with low cardiac output state",
        "explanation": "Severe LV dysfunction with low cardiac output state. Note that the flow is obtained by placing a PW sample in LV outflow tract from the apical view. Note that the V1 is <40 cm/s suggesting low cardiac output. Although the patient is in sinus rhythm, output with every other beat is less indicative of pulsus alternans, which occurs in severe systolic heart failure.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_6q.JPG"
    },

    // Question 427
    {
        "question": "This patient has:",
        "options": [
            "A. LV systolic dyssynchrony",
            "B. LV diastolic dyssynchrony",
            "C. Good LV synchrony",
            "D. None of the above"
        ],
        "answer": "A. LV systolic dyssynchrony",
        "explanation": "LV systolic dyssynchrony. Tissue Doppler or tissue velocity images are shown here. Focal velocity profiles of medial (yellow) and lateral annulus (green) are produced offline by placing samples in these regions. Note that the peak of lateral annulus velocity is about 150 ms after the medial annulus velocity peak suggestive of septolateral mechanical dyssynchrony. A septolateral delay of >65 ms is indicative of LV dyssynchrony. There was good diastolic synchrony as judged by annular E-wave velocity profiles.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_7q.JPG"
    },

    // Question 428
    {
        "question": "The signals shown here are annular:",
        "options": [
            "A. Velocity",
            "B. Displacement",
            "C. Strain",
            "D. Strain rate"
        ],
        "answer": "B. Displacement",
        "explanation": "Displacement. Note that the units are in mm and the signals are towards the apex. Normal mitral annular displacement is 12–17 mm in systole, highest for the lateral annulus and less for the medial annulus. Reduced displacement is indicative of impaired LV long axis function and can occur even in the presence of normal EF and minor axis function.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_8q.JPG"
    },

    // Question 429
    {
        "question": "The signals from septum and LV lateral wall are those of:",
        "options": [
            "A. LV strain",
            "B. Strain rate",
            "C. Velocity",
            "D. None of the above"
        ],
        "answer": "A. LV strain",
        "explanation": "LV strain. Note that the units are in %, which is % shortening compared to original length. Normal myocardial strain is 15–20%, very similar to % sarcomeric shortening during contraction of cardiac muscle cell.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_9q.JPG"
    },

    // Question 430
    {
        "question": "The arrows point to:",
        "options": [
            "A. Coronary sinus branches",
            "B. Coronary artery branches",
            "C. Artifacts produced by tissue motion",
            "D. None of the above"
        ],
        "answer": "A. Coronary sinus branches",
        "explanation": "Coronary sinus branches. These can be obtained from apical 4-chamber view with posterior tilt using preferably power mode on color flow imaging. Blue color indicates flow towards the base and this is indicative of flow in coronary sinus branches. Coronary artery flow would be in opposite direction.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_10q.JPG"
    },

    // Question 431
    {
        "question": "Data shown here permit computation of:",
        "options": [
            "A. LV intraventricular dyssynchrony",
            "B. Interventricular dyssynchrony",
            "C. Atrioventricular dyssynchrony",
            "D. None of the above"
        ],
        "answer": "B. Interventricular dyssynchrony",
        "explanation": "Interventricular dyssynchrony. The time interval between RV and LV ejection derived from respective flows referenced to the QRS complex is called aortopulmonary mechanical delay and is a measure of interventricular synchrony. Normal is <40 ms and a value greater than this is indicative of interventricular dyssynchrony. In this example, aortopulmonary mechanical delay is 137 minus 81 or 56 ms. Measures of LV synchrony are obtained from LV myocardial velocity or strain imaging at a high temporal resolution. Atrioventricular synchrony refers to optimal timing of atrial contraction.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_11q.JPG"
    },

    // Question 432
    {
        "question": "In this TEE image, downward pointing arrow refers to:",
        "options": [
            "A. Aortic valve",
            "B. Vegetation on the aortic valve",
            "C. Aortic subvalvular membrane",
            "D. Aortic dissection"
        ],
        "answer": "C. Aortic subvalvular membrane",
        "explanation": "Aortic subvalvular membrane. This is a classic example of membranous subaortic stenosis. Also note part of this circumferential membrane on the LV side of anterior mitral leaflet. The image also shows the aortic valve (left pointing arrow) and systolic anterior motion of the anterior mitral leaflet (right pointing arrow).",
        "questionImage": "https://alhadi415.github.io/top600/images/22_12q.JPG"
    },

    // Question 433
    {
        "question": "The arrow on this TEE image points to:",
        "options": [
            "A. Coronary artery",
            "B. Aortic valve ring abscess",
            "C. Artifact",
            "D. Coronary sinus"
        ],
        "answer": "A. Coronary artery",
        "explanation": "Coronary artery. This was anomalous circumflex coronary artery originating from RCA with retroaortic course between aorta and left atrium. Note that it is small and perfectly circular unlike an abscess, which tends to have irregular edges and inflammatory thickening or other sequelae around it. One can study the course of the vessel by imaging this structure in different imaging planes. Coronary sinus would be in posterior AV groove.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_13q.JPG"
    },

    // Question 434
    {
        "question": "This patient has:",
        "options": [
            "A. Dilated coronary sinus and dextrocardia",
            "B. Dilated coronary sinus and levocardia",
            "C. Cor triatriatum",
            "D. Aneurysm of circumflex coronary artery"
        ],
        "answer": "A. Dilated coronary sinus and dextrocardia",
        "explanation": "Dilated coronary sinus and dextrocardia. Note opacification of the structure at the AV grove with saline contrast indicating anomalous connection of left or right or entire SVC into coronary sinus (as it is not specified which arm was injected). Also note a pacemaker lead in the coronary sinus. At 49-degree angle, the LVOT is on right side indicating dextrocardia. This view is typically obtained at 120–140 degrees with levocardia – sort of a mirror image.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_14q.JPG"
    },

    // Question 435
    {
        "question": "The arrow points to (DTA = descending thoracic aorta):",
        "options": [
            "A. Aortic aneurysm",
            "B. Inferior vena cava",
            "C. Dilated azygos vein",
            "D. Mirror image artifact"
        ],
        "answer": "C. Dilated azygos vein",
        "explanation": "Dilated azygos vein. This is a typical appearance. This patient had interrupted IVC and IVC drained through azygos vein into superior vena cava. IVC does not relate to thoracic aorta. Mirror image artifact looks like a duplicate image of DTA.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_15q.JPG"
    },

    // Question 436
    {
        "question": "The image shown is indicative of:",
        "options": [
            "A. Large left pleural effusion",
            "B. Cardiac tamponade",
            "C. Congenital absence of pericardium",
            "D. Artifact"
        ],
        "answer": "B. Cardiac tamponade",
        "explanation": "Cardiac tamponade. There is a large pericardial effusion with a swinging heart. Also note electrical alternans in the accompanying ECG. Excessive mobility of the heart is also seen in absent pericardium and this would occur with change in body position and there would not be echo-free space around the heart.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_16q.JPG"
    },

    // Question 437
    {
        "question": "This TEE performed on a patient who presented with acute severe chest pain is indicative of:",
        "options": [
            "A. Type A aortic dissection",
            "B. Type B aortic dissection",
            "C. A mirror image artifact originating from the right pulmonary artery",
            "D. Abnormal structure of the aortic valve"
        ],
        "answer": "A. Type A aortic dissection",
        "explanation": "Type A aortic dissection. This is a typical aortic flap and indicative of Type A aortic dissection involving ascending aorta. Type B dissection involves descending aorta only.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_17q.JPG"
    },

    // Question 438
    {
        "question": "This TEE image is diagnostic of:",
        "options": [
            "A. Aortic dissection with a wire in true lumen",
            "B. Aortic dissection with wire in false lumen",
            "C. Double barrel aorta",
            "D. Aortic stent post endovascular repair"
        ],
        "answer": "B. Aortic dissection with wire in false lumen",
        "explanation": "Aortic dissection with wire in false lumen. This was a patient with acute Type A aortic dissection. The true lumen is rounded and false lumen is outside that and the wire is in the false lumen. TEE was used to guide antegrade cannulation of the aorta but unsuccessful because of a very small, compressed true lumen in the ascending aorta. Hence, aorta had to be cannulated retrogradely.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_18q.JPG"
    },

    // Question 439
    {
        "question": "This m-mode examination is suggestive of:",
        "options": [
            "A. Severe LV systolic failure",
            "B. Hypertrophic cardiomyopathy",
            "C. Large pericardial effusion",
            "D. Cardiac amyloidosis"
        ],
        "answer": "A. Severe LV systolic failure",
        "explanation": "Severe LV systolic failure. Although the LV is not dilated, there is poor wall thickening and poor reduction in LV size with systole. The LV wall is neither thick nor thick and echoreflective as you may see in hypertrophic cardiomyopathy or cardiac amyloid, respectively.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_19q.JPG"
    },

    // Question 440
    {
        "question": "Continuous wave Doppler signal from the tricuspid valve is consistent with:",
        "options": [
            "A. Carcinoid syndrome",
            "B. Severe pulmonary hypertension",
            "C. Constriction",
            "D. None of the above"
        ],
        "answer": "A. Carcinoid syndrome",
        "explanation": "Carcinoid syndrome. Note that the patient has both tricuspid regurgitation and stenosis. This combination is consistent with carcinoid involvement of the tricuspid valve. Mixed TR and TS can also be seen with rheumatic heart disease, FenPhen valvulopathy, post tricuspid repair, or a dysfunctional bioprosthetic tricuspid valve.",
        "questionImage": "https://alhadi415.github.io/top600/images/22_20q.JPG"
    }
];