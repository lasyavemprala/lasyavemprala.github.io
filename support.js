var initialInterests = 5;
var initialPurpose = 5;
var initialRanking = 5;

const interests = ["<li>Week 1 : PEMDAS. Word problems involving various math operations.</li>", 
"<li>Week 2: D, S, T (Distance, Speed, Time); Word Problems; Prime #s; Divisibility rules.</li>", 
"<li>Week 3: Time, Money & Length (unit conversions).</li>",
"<li>Week 4: Quarterly Testing 🙂</li>",
"<li>Week 5: Fractions; Decimals; Decimals to Fractions conversions(vice versa).</li>",
"<li>Week 6: Percents; Discount & Markup(Taxes).</li>",
"<li>Week 7: Simple interest calculation; Scientific notation; Subsets, supersets. </li>",
"<li>Week 8: Quarterly Testing 🙂</li>",
"<li>Week 9: Algebraic Expressions (Solve for x); Linear Relationship Problems.</li>",
"<li>Week 10: Area; Perimeter; Types of triangles.</li>",
"<li>Week 11: Squaring (perfect basics); Data Interpretation.</li>",
"<li>Week 12: Final Assessment 🤞</li>"
];

const purpose = ["<li>The purpose is to teach 3-5 graders math", "The sessions are held at Adi Parashakti Temple</li>", 
"<li>Each course lasts 12 weeks", "Each week will consist of a quiz and a review of the quiz from the previous week</li>", 
"<li>Each week will cover a different topic</li>", 
"<li>The course will cover Order of Operations, Distance, fractions, negative numbers, solving for x, variable, conversions, decimals, money, time, percants, tax calculation, area, perimeter, circumference, and volume</li>",
"<li>There will be 1 class per week.", "There will be a unit test at the end of the course to evaluate how much the child has learnt over the past 12 weeks</li>", 
"<li>The rankings of the students will be posted and updated every week</li>", 
"<li>The rankings will be based on the results of their quizzes, and overall performance over the 12 weeks</li>"
];

const ranking = ["<li>This is a friendly competition for the students.</li>", 
            "<li>This is just for the students to see how far they have progressed over the span of the course</li>",
            "<li>The rankings of the batch will first be posted a few days after the students have taken their knowledge test.</li>",
            "<li>The students are encouraged to have a friendly competition about their rankings</li>",
            "<li>The final rankings will be posted a few days after the unit test at the end of the course.</li>",
            "<li>The rankings will be posted updated every week.</li>",
            "<li>The rankings will be based on the results of their quizzes, and overall performance over the 12 weeks</li>", 
            "<li>If you do not want the rankings of your child to be posted, they will not he posted upon your request.</li>",
            "<li>To check the ranking click the link below.</li>"
        ];

const loadInterests = () => {
    document.getElementById("loadInterests").innerHTML = interests.slice(0,5).join("<br>");
};
loadInterests();

const loadPurpose = () => {
    document.getElementById("loadPurpose").innerHTML = purpose.slice(0,5).join("<br>");
};
loadPurpose();

const loadRanking = () => {
    document.getElementById("loadRanking").innerHTML = ranking.slice(0,5).join("<br>");
};
loadRanking();

const loadMoreInterests = () => {
    initialInterests += 5;
    initialInterests = initialInterests < interests.length ? initialInterests : interests.length;
    document.getElementById("loadInterests").innerHTML = interests.slice(0,initialInterests).join("<br>");
};

const loadMorePurpose = () => {
    initialPurpose += 5;
    initialPurpose = initialPurpose < purpose.length ? initialPurpose : purpose.length;
    document.getElementById("loadPurpose").innerHTML = purpose.slice(0,initialPurpose).join("<br>");
    console.log(initialPurpose, " & ", purpose.length);
    if (parseInt(initialPurpose) >= parseInt(purpose.length)) {
        console.log(document.getElementById("purpose").value);
        //document.getElementById("purpose").value = "Done";
        //document.getElementById("purpose").innerHTML = "Done";
    } 
};
const loadMoreRanking = () => {
    initialRanking += 5;
    initialRanking = initialRanking < ranking.length ? initialRanking : ranking.length;
    document.getElementById("loadRanking").innerHTML = ranking.slice(0,initialRanking).join("<br>");
};
