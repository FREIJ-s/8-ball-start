$(document).ready(function() {

    const answers = [
        "C'est certain.",
        "Sans aucun doute.",
        "Oui, définitivement.",
        "Vous pouvez compter dessus.", 
        "D'après moi, oui.",
        "Les signes indiquent que oui.",
        "Très probable.",
        "Bonne perspective.", 
        "Oui.",
        "Les signes pointent vers oui.",
        "Réponse floue, essayez à nouveau.", 
        "Demandez plus tard.",
        "Mieux vaut ne pas vous le dire maintenant.", 
        "Je ne peux pas le prédire maintenant.",
        "Concentrez-vous et demandez à nouveau.", 
        "Ne comptez pas dessus.",
        "Ma réponse est non.",
        "Mes sources disent non.", 
        "La perspective n'est pas bonne.",
        "Très douteux."
    ];

    $("#questionButton").click(function() {
        const question = $("#question").val().trim();
        console.log(question)

        if (question === "") {
            alert("Veuillez poser une question.");
        } else {
            const randomIndex = Math.floor(Math.random() * answers.length);
            const randomAnswer = answers[randomIndex];

            $("#answer").text(randomAnswer);
        }
    });
});