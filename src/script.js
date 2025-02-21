// Effet de brouillard au clic
document.body.addEventListener('click', function (event) {
    const fogClick = document.createElement('div');
    fogClick.classList.add('fog-click');
    fogClick.style.left = `${event.pageX - 50}px`;
    fogClick.style.top = `${event.pageY - 50}px`;

    document.body.appendChild(fogClick);

    setTimeout(() => {
        fogClick.remove();
    }, 3000);
});

// Fonction pour imprimer uniquement la charte
function printCharte() {
    console.log("printing")
    var printContent = document.getElementById("charte-risques").cloneNode(true)
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    printContent.querySelectorAll('button').forEach(btn => btn.remove())
    printContent.querySelectorAll('a').forEach(a => a.remove())
    //printContent.getElementById('date').innerHTML.remove //problematic but needs to be solved
    printContent.querySelectorAll('input').forEach(input => input.classList.add("no-border"))
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

// Fonction pour télécharger la charte en PDF
function downloadpdf() {
    console.log("donwloading")
    var fileToDownload;

    /*const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });

    // Ajout du contenu
    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0);
    pdf.text("ACCEPTATION DES RISQUES ET DES RESPONSABILITÉS", 40, 50);
    pdf.setFontSize(12);
    pdf.text("PAR UNE PERSONNE DE 14 ANS ET PLUS", 40, 70);
    pdf.text("*** LIRE AVANT DE SIGNER ***", 40, 90);
    pdf.setFontSize(10);

    const text = `Je désire participer au programme d'Action Paintball et à ses événements et activités connexes.
J'AI PRIS CONNAISSANCE DES DÉCLARATIONS SUIVANTES ET JE LES ACCEPTE:

1. Les activités pratiquées dans le cadre du programme contiennent des risques. Ma participation entraîne des risques de blessures graves ou de décès comme tous sports.
2. J’estime que j’ai la capacité physique, émotionnelle et mentale requise pour participer au maximum au programme.
3. Je connais toutes les règles applicables à la participation au programme, et je les respecterai.
4. Mon matériel est en bon état mécanique et convient à l’utilisation que j’en ferai pendant le programme.
5. Il est entendu qu’il m’appartient à moi uniquement d’assurer ma sécurité pendant toute ma participation au programme.
6. Si, au cours de ma participation au programme, j’apprends ou je constate un changement de mon état de santé, je remarquerai un élément de danger de quelque nature que ce soit dans le cadre du programme, J'ARRÊTERAI IMMÉDIATEMENT MA PARTICIPATION ET J'EN INFORMERAI L'OFFICIEL LE PLUS PRÈS.
7. Je suis prêt à accepter tous les risques de blessures ou de décès que je cours pendant ma participation au programme.
8. J’AI LU LA PRÉSENTE DÉCLARATION DES RISQUES ET DES RESPONSABILITÉS, JE LA COMPRENDS, JE L’ACCEPTE ET JE CHOISIS DE LA SIGNER.`;
    pdf.text(text, 40, 110, { maxWidth: 515 });

    // Ajout des champs pour signature
    pdf.text("PRÉNOM ET NOM COMPLET DU JOUEUR EN LETTRES MAJUSCULES:", 40, 500);
    pdf.text("__________________________________________", 40, 520);
    pdf.text("SIGNATURE:", 40, 550);
    pdf.text("__________________________________________", 40, 570);
    pdf.text("DATE:", 40, 600);
    pdf.text("__________________________________________", 40, 620);

    // Téléchargement du PDF
    pdf.save('Charte_des_Risques.pdf');*/

}