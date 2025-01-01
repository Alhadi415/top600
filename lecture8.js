const questions =[
    // Question 141
    {
        "question": "The most common benign tumor in the heart is:",
        "options": [
            "A. Left atrial myxoma",
            "B. Papillary fibroelastoma",
            "C. Lamble’s excrescences",
            "D. Fibroma"
        ],
        "answer": "B. Papillary fibroelastoma",
        "explanation": "Papillary fibroelastoma is the most common benign tumor seen in the heart, followed by myxoma. Lamble’s excrescences are not tumors; they are fibrinous strands mostly found on the aortic valve."
    },

    // Question 142
    {
        "question": "The most common metastatic malignant tumor of the heart is:",
        "options": [
            "A. Melanoma",
            "B. Lung cancer",
            "C. Breast cancer",
            "D. Renal cancer"
        ],
        "answer": "B. Lung cancer",
        "explanation": "The most common metastatic malignancy of the heart is lung, breast cancer. Melanoma has the potential to metastasize to myocardium but is not the commonest to metastasize to the heart. Primary malignant tumors of the heart are rare, but myxoma followed by rhabdomyoma are the commonest. Of the malignant type, sarcomas are the commonest to affect the heart. Metastatic tumors are about 100 times as common compared with primary malignant tumors of the heart. About 50% of melanomas metastasize. Primary cardiac lymphoma is very rare and is typically of non-Hodgkin’s type. It typically only involves the heart and pericardium with very minimal extracardiac involvement. It accounts for only 1% of primary cardiac tumors and 0.5% of the extranodal lymphomas. In immunocompetent hosts, it is usually a diffuse B-cell lymphoma and in immunosuppressed hosts, small noneleaved or immunoblastic are more common. The right atrium and right ventricle are the two most common sites involved."
    },

    // Question 143
    {
        "question": "In a person with flail P2 segment of the posterior mitral leaflet (PML), the mitral regurgitation (MR) jet is likely to be:",
        "options": [
            "A. Posterior wall hugging",
            "B. Anterior wall hugging",
            "C. Central",
            "D. Cannot comment"
        ],
        "answer": "B. Anterior wall hugging",
        "explanation": "The jet is away from the flail segment in contrast to a tethered segment."
    },

    // Question 144
    {
        "question": "In a person with flail A2 segment of the anterior mitral leaflet (AML), the MR jet is likely to be:",
        "options": [
            "A. Posterior wall hugging",
            "B. Anterior wall hugging",
            "C. Central",
            "D. Cannot comment"
        ],
        "answer": "A. Posterior wall hugging",
        "explanation": "The jet is away from the flail segment in contrast to a tethered segment."
    },

    // Question 145
    {
        "question": "Total surface area of mitral leaflets is generally ______% of mitral annular area.",
        "options": [
            "A. 100%",
            "B. 120%",
            "C. 150%",
            "D. 200%"
        ],
        "answer": "C. 150%",
        "explanation": "Normally, there is 50% more leaflet tissue than annular area to cause a 2–3 mm leaflet overlap at the coaptation margin. The absolute leaflet area is increased in myxomatous mitral valve disease and hypertrophic cardiomyopathy. The normal annular area is roughly 7–8 cm² and the leaflet area is 10–12 cm²."
    },

    // Question 146
    {
        "question": "The PML compared to the AML is:",
        "options": [
            "A. Shorter",
            "B. Longer",
            "C. Same length as the anterior leaflet",
            "D. Of variable length"
        ],
        "answer": "A. Shorter",
        "explanation": "The posterior leaflet length is 10–14 mm and the anterior leaflet length is 20–24 mm."
    },

    // Question 147
    {
        "question": "The length of the posterior leaflet attachment to the mitral annulus compared to that of the AML is:",
        "options": [
            "A. Shorter",
            "B. Longer",
            "C. Same",
            "D. Variable"
        ],
        "answer": "B. Longer",
        "explanation": "This results in equal surface area of anterior and posterior leaflets."
    },

    // Question 148
    {
        "question": "In an apical long-axis view the following mitral leaflet segments are seen:",
        "options": [
            "A. A2P2",
            "B. A3P3",
            "C. A1P1",
            "D. A3P1"
        ],
        "answer": "A. A2P2",
        "explanation": "This view cuts through the middle of both leaflets, that is, A2 and P2."
    },

    // Question 149
    {
        "question": "Apical two-chamber view is likely to show the following mitral leaflet segments:",
        "options": [
            "A. P1A2P3",
            "B. A2P2",
            "C. A3P1",
            "D. A1P1"
        ],
        "answer": "A. P1A2P3",
        "explanation": "Two-chamber view goes through the intercommissural plane and cuts through P1 and P3, with A2 seen between them in systole. A medial tilt of the transducer will cut the AML entirely showing A1A2A3, and a lateral tilt will cut the PML entirely revealing P1P2P3."
    },

    // Question 150
    {
        "question": "The major diameter of the mitral annulus is best imaged from:",
        "options": [
            "A. Apical two-chamber view",
            "B. Apical long axis view",
            "C. Apical five-chamber view",
            "D. Parasternal long axis view"
        ],
        "answer": "A. Apical two-chamber view",
        "explanation": "Equivalent to this on a TEE examination is the midesophageal view at 70–80°. Apical long axis view gives the minor dimension of the mitral annulus."
    },

    // Question 151
    {
        "question": "The MR jet is best visualized in parasternal long axis view when the transducer tip is directed more inferomedially. The location of the MR jet in this patient is:",
        "options": [
            "A. Medial commissure",
            "B. Lateral commissure",
            "C. Central"
        ],
        "answer": "A. Medial commissure",
        "explanation": "Tilting the transducer from this location towards the left shoulder will reveal the lateral commissure."
    },

    // Question 152
    {
        "question": "A continuous flow is visualized in the main pulmonary artery. This could be related to:",
        "options": [
            "A. Patent ductus arteriosus (PDA)",
            "B. Coronary A–V fistula",
            "C. Idiopathic dilatation of main pulmonary artery",
            "D. None of the above"
        ],
        "answer": "A. Patent ductus arteriosus (PDA)",
        "explanation": "The PDA drains at the origin of the left pulmonary artery. Anomalous origin of the coronary artery from the pulmonary artery can cause continuous flow because of retrograde flow into the pulmonary artery. Both are examples of left to right shunts. Dilatation of the pulmonary artery can cause swirling of blood in the pulmonary artery in systole, giving a false impression of shunt flow because of reversed flow direction."
    },

    // Question 153
    {
        "question": "Echocardiographic features of anatomic right ventricle in a congenitally corrected transposition of great vessels are all of the following except:",
        "options": [
            "A. Trileaflet atrioventricular valve",
            "B. Apical position of associated atrioventricular valve",
            "C. Presence of moderator band",
            "D. Wall thickness < 7 mm"
        ],
        "answer": "D. Wall thickness < 7 mm",
        "explanation": "Ventricles go with corresponding atrioventricular valves, that is, right ventricle with tricuspid valve which is apically positioned and left ventricle with mitral valve. Wall thickness is not a reliable feature. In right ventricular hypertrophy, the wall thickness may be >7 mm, and the pulmonary left ventricle may have a wall thickness of <7 mm."
    },

    // Question 154
    {
        "question": "The systemic right ventricle in congenitally corrected transposition of great vessels is likely to have the following complications except:",
        "options": [
            "A. Failure of systemic ventricle",
            "B. Tricuspid regurgitation",
            "C. Atrial and ventricular arrhythmias",
            "D. Aortic regurgitation"
        ],
        "answer": "D. Aortic regurgitation",
        "explanation": "The systemic RV has a high likelihood of failure. It may also have myocardial perfusion defects. Tricuspid valve failure (systemic atrioventricular valve) is common secondary to annular dilatation. Atrial and ventricular arrhythmias are common due to dilatation of the left atrium and systemic RV. Presence of atrial arrhythmias may contribute to RV dysfunction."
    },

    // Question 155
    {
        "question": "Features of Tetralogy of Fallot are all of the following except:",
        "options": [
            "A. Overriding aorta",
            "B. Nonrestrictive ventricular septal defect (VSD)",
            "C. Pulmonary stenosis",
            "D. Right ventricular (RV) hypertrophy",
            "E. Atrial septal defect (ASD)"
        ],
        "answer": "E. Atrial septal defect (ASD)",
        "explanation": "ASD is not a feature in classical Tetralogy of Fallot. Presence of ASD in Tetralogy has been referred to as the Pentalogy of Fallot."
    },

    // Question 156
    {
        "question": "Associations of atrial septal aneurysm include all of the following except:",
        "options": [
            "A. Patent foramen ovale",
            "B. Atrial arrythmias",
            "C. Transient ischemic attacks",
            "D. Pulmonary hypertension"
        ],
        "answer": "D. Pulmonary hypertension",
        "explanation": "The left to right shunt through the patent foramen ovale (PFO) is generally very small and hence pulmonary hypertension is not seen with an aneurysmal atrial septum. Risk of transient ischemic attack is highest when PFO and atrial septal aneurysm coexist and the shunt flow is large. Speculated mechanisms for this include paradoxical embolism, in situ thrombus formation, and atrial arrhythmias."
    },

    // Question 157
    {
        "question": "Echocardiographic findings in Ebstein’s anomaly may include:",
        "options": [
            "A. Apical displacement of the septal leaflet of the tricuspid valve > 8 mm compared to position of anterior mitral leaflet attachment",
            "B. Large, septal tricuspid leaflet with tethering to RV wall",
            "C. Tricuspid regurgitation",
            "D. Atrial septal defect",
            "E. Hypoplastic pulmonary arteries"
        ],
        "answer": "E. Hypoplastic pulmonary arteries",
        "explanation": "Hypoplastic pulmonary arteries are not a feature. ASD may coexist and in the presence of tricuspid regurgitation may result in right to left shunt, causing cyanosis."
    },

    // Question 158
    {
        "question": "The most common location of the accessory pathway in Ebstein’s anomaly is:",
        "options": [
            "A. Posteroseptal",
            "B. Anteroseptal",
            "C. Right lateral",
            "D. Left lateral"
        ],
        "answer": "C. Right lateral",
        "explanation": "The most common location of the accessory pathway in Ebstein’s anomaly is the right lateral position."
    },

    // Question 159
    {
        "question": "The following type of ventricular septal defect is likely to be associated with aortic regurgitation:",
        "options": [
            "A. Perimembranous",
            "B. Muscular",
            "C. Supracristal",
            "D. Inlet"
        ],
        "answer": "C. Supracristal",
        "explanation": "In this type of VSD, there is loss of support to the right coronary cusp of the aortic valve, which will result in aortic regurgitation."
    },

    // Question 160
    {
        "question": "In a patient with secundum ASD, the following features are consistent with amenability of percutaneous closure except:",
        "options": [
            "A. Defect size of 22 mm",
            "B. Mitral rim of 8 mm",
            "C. Aortic rim of 2 mm",
            "D. Inferior vena cava rim of 1 mm"
        ],
        "answer": "D. Inferior vena cava rim of 1 mm",
        "explanation": "The maximum stretched diameter of the defect that can be closed is 40 mm with an Amplatzer device provided that the septum is large enough to allow the 8 mm flange all around, making the total disk diameter on the left atrial side 56 mm. Aortic rim is the least important and not essential. Inadequacy of other rims may result not only in the impingement of the disks on related structures but device instability and dislodgement. Proximity of superior vena cava rim to the right upper pulmonary vein is important as well."
    }
]
