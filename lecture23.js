const questions = [
    // Question 441
    {
        "question": "A 45-year-old female was admitted to the hospital with complaints of acute onset of shortness of breath. This still frame shows:",
        "options": [
            "A. Pleural effusion",
            "B. Pericardial effusion",
            "C. Normal heart"
        ],
        "answer": "B. Pericardial effusion",
        "explanation": "This is a short-axis view of the heart. The image shows underfilled cardiac chambers (LV and RV) surrounded by a large pericardial effusion.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_1q.JPG"
    },

    // Question 442
    {
        "question": "The M-mode from the above patient shows:",
        "options": [
            "A. Normal M-mode through the heart",
            "B. Diastolic collapse of the right ventricle",
            "C. Pericardial thickening"
        ],
        "answer": "B. Diastolic collapse of the right ventricle",
        "explanation": "The arrow points to diastolic RV collapse. RV anterior wall is the anterior-most structure. This is suggestive of pericardial tamponade. Also note that in the 2D reference image, the posterior pericardial effusion tracks anterior to the descending aorta. Pleural effusion would track posterior to aorta.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_2q.JPG"
    },

    // Question 443
    {
        "question": "The Doppler across the aortic valve shows:",
        "options": [
            "A. Normal Doppler flow pattern",
            "B. Tamponade",
            "C. Restriction"
        ],
        "answer": "B. Tamponade",
        "explanation": "The Doppler flow pattern across the aortic valve shows marked respirophasic variation (>25%) in flow, which is a sign of ventricular interdependence and tamponade physiology.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_3.JPG"
    },

    // Question 444
    {
        "question": "The Doppler flow across the pulmonary valve is suggestive of:",
        "options": [
            "A. Normal flow pattern",
            "B. Restriction",
            "C. Constriction",
            "D. Tamponade"
        ],
        "answer": "D. Tamponade",
        "explanation": "The flow pattern shows ventricular interdependence. The difference between the inspiratory and expiratory velocities should be more than 40% to be specific for tamponade.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_4.JPG"
    },

    // Question 445
    {
        "question": "The image of IVC from the above patient is suggestive of:",
        "options": [
            "A. Normal RA pressure",
            "B. Low RA pressure",
            "C. Elevated RA pressure"
        ],
        "answer": "C. Elevated RA pressure",
        "explanation": "The dilated IVC is suggestive of high RA pressure. The presence of pericardial effusion, diastolic RV collapse, ventricular dependence, and elevated RA pressure is suggestive of tamponade.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_5q.JPG"
    },

    // Question 446
    {
        "question": "What does the image show?",
        "options": [
            "A. Normal appearance of the LV",
            "B. Catheter in the pleural space",
            "C. Catheter in the pericardial space"
        ],
        "answer": "C. Catheter in the pericardial space",
        "explanation": "This is an apical view, showing a large pericardial effusion and a catheter in the pericardial space. Echoguidance during pericardiocentesis allows selection of the most suitable approach and safe entry into the pericardial space. Apical approach is most suitable in >90% of patients.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_6q.JPG"
    },

    // Question 447
    {
        "question": "Two days later, she complained of shortness of breath: the image shows",
        "options": [
            "A. Pericardial effusion",
            "B. Pleural effusion"
        ],
        "answer": "B. Pleural effusion",
        "explanation": "This is a subcostal image showing a large left pleural effusion.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_7q.JPG"
    },

    // Question 448
    {
        "question": "The arrow points to:",
        "options": [
            "A. Normal appearance of the myocardium",
            "B. Masses in the pericardial space",
            "C. Artifact"
        ],
        "answer": "B. Masses in the pericardial space",
        "explanation": "The image shows recurrence of pericardial effusion. The arrow points to a mass in the pericardial space. The pericardial fluid analysis showed metastasis from breast cancer.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_8q.JPG"
    },

    // Question 449
    {
        "question": "A 23-year-old female presents with complaints of sudden onset of severe shortness of breath. She gives remote history of skin rash. Her labs indicate a eosinophil count of 20%. The most likely diagnosis is:",
        "options": [
            "A. Constitutive pericarditis",
            "B. Eosinophilic myocarditis",
            "C. Giant cell myocarditis"
        ],
        "answer": "B. Eosinophilic myocarditis",
        "explanation": "The presence of reduced systolic function, pericardial effusion, and high eosinophilic count point toward eosinophilic myocarditis. Eosinophilic myocarditis-rare disorder, often discovered post mortem: 0.5% (autopsy series)-20% (explanted hearts). Numerous causes include parasitic, idiopathic, drug hypersensitivity, vasculitis-like Churg-strauss, acute necrotizing-unknown etiology. Cardiac disease can occur in 50% of idiopathic (absolute eosinophilic count 1.5 x 10^9 / L). Myocardial infiltrate, perivascular or interstitial, associated with necrosis is seen. Diagnostic tests include echo, CMR, biopsy, and bone marrow biopsy. Steroids, immunosuppressive therapy, inotropes, and circulatory support are the mainstay of therapy.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_9q.JPG"
    },

    // Question 450
    {
        "question": "A 42-year-old male with a h/o Down’s syndrome was evaluated with an echocardiogram. The image shows:",
        "options": [
            "A. Ventricular septal defect",
            "B. Atrial septal defect",
            "C. Partial AV canal",
            "D. Complete AV canal"
        ],
        "answer": "D. Complete AV canal",
        "explanation": "The image shows a complete AV canal defect. Note the defects in the primum atrial septum, inflow part of ventricular septum, and common AV valve.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_10q.JPG"
    },

    // Question 451
    {
        "question": "A 45-year-old male with end-stage liver disease. A saline contrast injection was performed. The findings are suggestive of:",
        "options": [
            "A. Right-to-left shunt across a PFO",
            "B. Right-to-left shunt suggestive of transpulmonary shunt",
            "C. Left-to-right shunt",
            "D. Cannot be determined"
        ],
        "answer": "B. Right-to-left shunt suggestive of transpulmonary shunt",
        "explanation": "There is a right-to-left shunt as demonstrated in the figure. The saline bubbles appeared on the left side after 13 beats, which is suggestive of transpulmonary shunt. Shunting across an PFO or ASD usually arrives in the left atrium within 4 beats.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_11q.JPG"
    },

    // Question 452
    {
        "question": "What does the arrow show?",
        "options": [
            "A. Flow in the pulmonary artery",
            "B. Flow in the aorta",
            "C. Coronary blood flow",
            "D. Cannot determine"
        ],
        "answer": "C. Coronary blood flow",
        "explanation": "Flow in the left coronary artery seen from parasternal short-axis view.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_12q.JPG"
    },

    // Question 453
    {
        "question": "What does the arrow point to?",
        "options": [
            "A. Vegetation",
            "B. Prosthetic valve",
            "C. Aortic dissection",
            "D. Possibly an artifact but need additional views"
        ],
        "answer": "D. Possibly an artifact but need additional views",
        "explanation": "A short-axis view of the ascending aorta was useful to show that it was an artifact that went through the aortic wall.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_13q.JPG"
    },

    // Question 454
    {
        "question": "This subcostal image shows:",
        "options": [
            "A. Normal liver",
            "B. Normal kidney",
            "C. Cysts in the kidney",
            "D. Cysts in the liver"
        ],
        "answer": "C. Cysts in the kidney",
        "explanation": "These images are obtained from subcostal view. The left panel shows normal liver tissue and a polycystic right kidney. The right panel shows polycystic left kidney.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_14q.JPG"
    },

    // Question 455
    {
        "question": "A 74-year-old male was seen in the emergency room for complaints of severe chest pain. Transthoracic images were suboptimal and a TEE was ordered. The image shows:",
        "options": [
            "A. Pleural effusion",
            "B. Pericardial effusion",
            "C. Rupture of septum",
            "D. Normal heart"
        ],
        "answer": "B. Pericardial effusion",
        "explanation": "Pericardial effusion is seen in this transgastric image. Since the patient is complaining of chest pain, further imaging is warranted to ascertain the cause.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_15q.JPG"
    },

    // Question 456
    {
        "question": "This is a mid esophageal view from the patient in question 455. The most likely diagnosis is:",
        "options": [
            "A. Aortic rupture",
            "B. Dissection",
            "C. Artifact",
            "D. None of the above"
        ],
        "answer": "B. Dissection",
        "explanation": "There is dissection in the aorta with flap on the anterior wall (greater curvature of aorta) of ascending aorta.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_16q.JPG"
    },

    // Question 457
    {
        "question": "The origin of the dissection is from:",
        "options": [
            "A. Above the left coronary cusp",
            "B. Above the right coronary cusp",
            "C. Above the noncoronary cusp",
            "D. None of the above"
        ],
        "answer": "B. Above the right coronary cusp",
        "explanation": "The tear starts in the aorta just above the origin of the right coronary artery.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_17q.JPG"
    },

    // Question 458
    {
        "question": "The best management for this patient (same as above) is:",
        "options": [
            "A. Emergency pericardiocentesis",
            "B. Emergency surgery to replace ascending aorta",
            "C. Medical management",
            "D. None of the above"
        ],
        "answer": "B. Emergency surgery to replace ascending aorta",
        "explanation": "This patient has Stanford Type A dissection. The patient has a pericardial effusion related to the tear in the aorta and is leaking into the pericardial space. The best management is to transfer the patient to the OR emergently. Pericardiocentesis is contraindicated in this situation. One should not attempt to perform coronary angiogram or aortogram.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_18q.JPG"
    },

    // Question 459
    {
        "question": "The structure pointed by the arrow is:",
        "options": [
            "A. Right ventricle",
            "B. Left atrium",
            "C. Right atrial appendage",
            "D. Left ventricle"
        ],
        "answer": "C. Right atrial appendage",
        "explanation": "The arrow points to the right atrial appendage. This is a midesophageal view, with clockwise rotation. There is associated pericardial effusion denoted by number 1.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_19q.JPG"
    },

    // Question 460
    {
        "question": "A 32-year-old female has a history of SLE. She was admitted with complaints of severe shortness of breath. A systolic frame of a four-chamber view is shown. The image shows:",
        "options": [
            "A. Libman Sach’s endocarditis",
            "B. Bacterial endocarditis",
            "C. Post inflammatory changes of the mitral valve",
            "D. Normal mitral valve"
        ],
        "answer": "C. Post inflammatory changes of the mitral valve",
        "explanation": "The systolic frame of the four-chamber view shows an enlarged left atrium. There is a cooptation defect in the mitral valve. The mitral valve shows no evidence of either bacterial or nonbacterial endocarditis. Because the patient has a history of SLE, the mitral valve probably was involved in inflammation which destroyed the valve, leading to a cooptation defect and severe MR.",
        "questionImage": "https://alhadi415.github.io/top600/images/23_20q.JPG"
    }
];